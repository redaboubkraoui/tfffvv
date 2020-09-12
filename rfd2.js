var DomOutline = function (options) {
    options = options || {};

    var pub = {};
    var self = {
        opts: {
            namespace: options.namespace || 'DomOutline',
            borderWidth: options.borderWidth || 2,
            onClick: options.onClick || false
        },
        keyCodes: {
            BACKSPACE: 8,
            ESC: 27,
            DELETE: 46
        },
        active: false,
        initialized: false,
        elements: {}
    };

    function writeStylesheet(css) {
        var element = document.createElement('style');
        element.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(element);

        if (element.styleSheet) {
            element.styleSheet.cssText = css; // IE
        } else {
            element.innerHTML = css; // Non-IE
        }
    }

    function initStylesheet() {
        if (self.initialized !== true) {
            var css = '' +
                '.' + self.opts.namespace + ' {' +
                '    background: #09c;' +
                '    position: absolute;' +
                '    z-index: 1000000;' +
                '}' +
                '.' + self.opts.namespace + '_label {' +
                '    background: #09c;' +
                '    border-radius: 2px;' +
                '    color: #fff;' +
                '    font: bold 12px/12px Helvetica, sans-serif;' +
                '    padding: 4px 6px;' +
                '    position: absolute;' +
                '    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);' +
                '    z-index: 1000001;' +
                '}';
            writeStylesheet(css);
            self.initialized = true;
        }
    }

    function createOutlineElements() { 
        self.elements.label = jQuery('<div></div>').addClass(self.opts.namespace + '_label').appendTo('body');
        self.elements.top = jQuery('<div></div>').addClass(self.opts.namespace).appendTo('body');
        self.elements.bottom = jQuery('<div id="trust-seals-content-div" class="trust-seals-previews" style="text-align: center; width: 100%;"><div style="display: inline-block;"><div><div style="width: 100px; display: inline-block; margin: 0px 7px; vertical-align: top;"><img src="https://hektorcommerce.com/apps/trustseals/svg_images/?image=005-100-verified&amp;color-1=f41717" alt="100% Verified" style="width: 100px; height: 100px;"></div><div style="width: 100px; display: inline-block; margin: 0px 7px; vertical-align: top;"><img src="https://hektorcommerce.com/apps/trustseals/svg_images/?image=011-lowest-price&amp;color-1=f41717" alt="Lowest Price" style="width: 100px; height: 100px;"></div><div style="width: 100px; display: inline-block; margin: 0px 7px; vertical-align: top;"><img src="https://hektorcommerce.com/apps/trustseals/svg_images/?image=019-15-Day-Guarantee&amp;color-1=f41717" alt="15 Day Guarantee" style="width: 100px; height: 100px;"></div></div></div></div>').insertAfter("html body.settings_page_seed_wpnb_customizer div form#settings_form div.container-fluid.badge-bar div.col-right div.scroll-div div.well");
        self.elements.left = jQuery('<div></div>').addClass(self.opts.namespace).appendTo('body');
        self.elements.right = jQuery('<div></div>').addClass(self.opts.namespace).appendTo('body');
    }

    function removeOutlineElements() {
        jQuery.each(self.elements, function(name, element) {
            element.remove();
        });
    }

    function compileLabelText(element, width, height) {
        var label = element.tagName.toLowerCase();
        if (element.id) {
            label += '#' + element.id;
        }
        if (element.className) {
            label += ('.' + jQuery.trim(element.className).replace(/ /g, '.')).replace(/\.\.+/g, '.');
        }
        return label + ' (' + Math.round(width) + 'x' + Math.round(height) + ')';
    }

    function getScrollTop() {
        if (!self.elements.window) {
            self.elements.window = jQuery(window);
        }
        return self.elements.window.scrollTop();
    }

    function updateOutlinePosition(e) {
        if (e.target.className.indexOf(self.opts.namespace) !== -1) {
            return;
        }
        pub.element = e.target;
        console.log
        var b = self.opts.borderWidth;
        var scroll_top = getScrollTop();
        var pos = pub.element.getBoundingClientRect();
        var top = pos.top + scroll_top;

        var label_text = compileLabelText(pub.element, pos.width, pos.height);
        //console.log(label_text)
        var label_top = Math.max(0, top - 20 - b, scroll_top);
        var label_left = Math.max(0, pos.left - b);

        self.elements.label.css({ top: label_top, left: label_left }).text(label_text);
        self.elements.top.css({ top: Math.max(0, top - b), left: pos.left - b, width: pos.width + b, height: b });
        self.elements.bottom.css({ top: top + pos.height, left: pos.left - b, width: pos.width + b, height: b });
        self.elements.left.css({ top: top - b, left: Math.max(0, pos.left - b), width: b, height: pos.height + b });
        self.elements.right.css({ top: top - b, left: pos.left + pos.width, width: b, height: pos.height + (b * 2) });
     }

    function stopOnEscape(e) {
        if (e.keyCode === self.keyCodes.ESC || e.keyCode === self.keyCodes.BACKSPACE || e.keyCode === self.keyCodes.DELETE) {
            pub.stop();
        }
        return false;
    }
    function clickHandler(e) {
        pub.stop();
        self.opts.onClick(pub.element);
        createOutlineElements();
        $('#pos-editor-instruction-container').css("display" ,"none");
        $('#pos-editor-actions').css("display" ,"block");
        $('#trust-seals-content-div').css("opacity","unset");
        return false;
    }

    pub.start = function () {
        initStylesheet();
        if (self.active !== true) {
            self.active = true;
            createOutlineElements();
            jQuery('body').bind('mousemove.' + self.opts.namespace, updateOutlinePosition);
            jQuery('body').bind('keyup.' + self.opts.namespace, stopOnEscape);
            if (self.opts.onClick) {
                setTimeout(function () {
                    jQuery('body').bind('click.' + self.opts.namespace, clickHandler);
                }, 50);
            }
        }
    };
    pub.stop = function () {
        self.active = false;
        removeOutlineElements();
        jQuery('body').unbind('mousemove.' + self.opts.namespace)
            .unbind('keyup.' + self.opts.namespace)
            .unbind('click.' + self.opts.namespace);
    };
    return pub;
};



$(document).ready(function() {
    $('#trust-seals-content-div').css("opacity","0.5");
    var myExampleClickHandler = function (element) { 
        console.log('Clicked element:', element.className);
        function getCSSPath(el) {
    let rendered_path_parts = [];

    $( el ).parents().addBack().each((i, el) => {
        const $el = $( el );
        let current_el_path = $el.prop('tagName').toLowerCase();

        if ($el.attr('id')) {
            current_el_path += '#' + $el.attr('id');
        }

        if ($el.attr('class')) {
            current_el_path += '.' + $el.attr('class').split(' ').join('.');
        }

        rendered_path_parts.push( current_el_path );
    })

    return rendered_path_parts.join(' ');
}

$.fn.extend({
    getPath: function() {
        return getCSSPath(this.length === 1 ? this : this.eq(0));
    }
});
        let x = getCSSPath("."+element.className);
        console.log("all path Select " + x)

    }
    var myDomOutline = new DomOutline({ onClick: myExampleClickHandler });
    
    // Start outline:
     myDomOutline.start();
    
    // Stop outline (also stopped on escape/backspace/delete keys):
    //myDomOutline.stop();

    $('#start').click(function(){
      myDomOutline.start();
    })

    $('.deferent').click(function() {
         var re= document.getElementsByClassName("trust-seals-previews")
        if(re && re.length>0){
            console.log(re )
            for (var i =re.length-1; i >-1; i--) {
                re[i].remove()
            }
//console.log(re)
   }
         myDomOutline.start();
        $('#pos-editor-instruction-container').css("display" ,"block");
        $('#pos-editor-actions').css("display" ,"none");
        $('#trust-seals-content-div').css("opacity","0.5");
});
    // $('#stop').click(function(){
    //   myDomOutline.stop();
    //   return false;
    // })
});
