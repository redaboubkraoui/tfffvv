/**
 * Firebug/Web Inspector Outline Implementation using jQuery
 * Tested to work in Chrome, FF, Safari. Buggy in IE ;(
 * Andrew Childs <ac@glomerate.com>
 *
 * Example Setup:
 * var myClickHandler = function (element) { console.log('Clicked element:', element); }
 * var myDomOutline = DomOutline({ onClick: myClickHandler, filter: '.debug' });
 *
 * Public API:
 * myDomOutline.start();
 * myDomOutline.stop();
 */
 var reda=0;
 var elementpicked="";
var DomOutline = function (options) {
    options = options || {};

    var pub = {};
    var self = {
        opts: {
            namespace: options.namespace || 'DomOutline',
            borderWidth: options.borderWidth || 2,
            onClick: options.onClick || false,
            filter: options.filter || false
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
                '    background: #000;' +
                '    position: absolute;' +
                '    z-index: 1000000;' +
                '}' +
                '.' + self.opts.namespace + '_label {' +
                '    background: #000;' +
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
        self.elements.bottom = jQuery('redaaaaaa12').addClass(self.opts.namespace).appendTo('body');
        self.elements.left = jQuery('<div></div>').addClass(self.opts.namespace).appendTo('body');
        self.elements.right = jQuery('<div></div>').addClass(self.opts.namespace).appendTo('body');
      //  console.log( self.elements.label)
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
        return label;
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
        if (self.opts.filter) {
            if (!jQuery(e.target).is(self.opts.filter)) {
                return;
            }
        }      
        pub.element = e.target;
        var b = self.opts.borderWidth;
        var scroll_top = getScrollTop();
        var pos = pub.element.getBoundingClientRect();
        var top = pos.top + scroll_top;

        var label_text = compileLabelText(pub.element, pos.width, pos.height);
        var label_top = Math.max(0, top - 20 - b, scroll_top);
        var label_left = Math.max(0, pos.left - b);
        if (label_text!=reda) {


reda = label_text;

if (reda!="p#re222.text-center" && elementpicked !=reda ) {
   var re= document.getElementsByClassName("text-center12333")
   if(re && re.length>0){
    console.log(re )
    for (var i =re.length-1; i >-1; i--) {
          re[i].remove()

    }
//console.log(re)
   }
 jQuery('<div id="pos-editor-instruction-container" class="pending-choice"><div id="pos-editor-instruction-box"><div id="pos-editor-loading">Loading editor...</div><div id="pos-editor-instructions">Move your cursor to find where you’d like to place Ultimate Product Icons—then click to place it.</div><div id="pos-editor-actions"><div><button data-pos-editor-button="true">Cancel</button><button data-pos-editor-button="true">Select different position</button></div><div class="pos-editor-save-button"><button data-pos-editor-button="true">Save Ultimate Product Icons position</button></div></div><div id="pos-editor-status">Saving...</div><div id="pos-editor-error"></div></div><style>#pos-editor-instruction-container{position: fixed; bottom: 0; left: 0; right: 0; text-align: center; z-index: 2147483647; /* max 32-bit signed */}#pos-editor-instruction-box{display: inline-block; font-size: 20px; width: auto; max-width: 100%; padding: 12px; background: rgba(250, 250, 250, 0.65); color: #222; border-radius: 4px 4px 0 0; -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); box-shadow: 0 -1px 50px rgba(0, 0, 0, 0.5);}#pos-editor-actions > div{display: inline-block;}#pos-editor-actions .pos-editor-save-button{flex: 1; align-items: center; text-align: right;}#pos-editor-actions button{font: inherit; font-size: 16px; position: relative; display: inline-flex; align-items: center; justify-content: center; min-height: 36px; min-width: 36px; margin: 0 4px; padding: 7px 16px; background: linear-gradient(180deg,#fff,#f9fafb); border: 1px solid #c4cdd5; box-shadow: 0 1px 0 0 rgba(22,29,37,.05); border-radius: 3px; line-height: 1; color: #212b36; text-align: center; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; text-decoration: none; transition-property: background, border, box-shadow; transition-duration: .2s; transition-timing-function: cubic-bezier(.64,0,.35,1); -webkit-tap-highlight-color: transparent;}#pos-editor-actions button:hover{background: linear-gradient(180deg,#f9fafb,#f4f6f8); border-color: #c4cdd5;}#pos-editor-actions .pos-editor-save-button button{background: linear-gradient(180deg,#6371c7,#5563c1); box-shadow: inset 0 1px 0 0 #6774c8,0 1px 0 0 rgba(22,29,37,.05),0 0 0 0 transparent;}#pos-editor-actions .pos-editor-save-button button,#pos-editor-actions .pos-editor-save-button button:hover{border-color: #3f4eae; color: #fff;}#pos-editor-actions .pos-editor-save-button button:hover{background: linear-gradient(180deg,#5c6ac4,#4959bd); text-decoration: none}#pos-editor-actions .pos-editor-save-button button:focus{border-color: #202e78; box-shadow: inset 0 1px 0 0 #6f7bcb,0 1px 0 0 rgba(22,29,37,.05),0 0 0 1px #202e78;}#pos-editor-loading{display: none;}#pos-editor-instructions{display: none;}#pos-editor-actions{display: none;}#pos-editor-status{display: none;}#pos-editor-error{display: none;}#pos-editor-instruction-container.loading #pos-editor-loading{display: block; animation: 0.5s flipInX;}#pos-editor-instruction-container.pending-choice #pos-editor-actions{display: flex; align-items: center; animation: 0.5s flipInX;}#pos-editor-instruction-container.picking #pos-editor-instructions{display: block; animation: 0.5s flipInX;}#pos-editor-instruction-container.status #pos-editor-status{display: block; animation: 0.5s flipInX;}#pos-editor-instruction-container.error #pos-editor-error{display: block; animation: 0.5s flipInX;}@keyframes flipInX{0%{-webkit-transform: perspective(400px) rotateX(90deg); transform: perspective(400px) rotateX(90deg); -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; opacity: 0}40%{-webkit-transform: perspective(400px) rotateX(-20deg); transform: perspective(400px) rotateX(-20deg); -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in}60%{-webkit-transform: perspective(400px) rotateX(10deg); transform: perspective(400px) rotateX(10deg); opacity: 1}80%{-webkit-transform: perspective(400px) rotateX(-5deg); transform: perspective(400px) rotateX(-5deg)}to{-webkit-transform: perspective(400px); transform: perspective(400px)}}</style></div>').appendTo(""+reda);
//console.log("afte"+elementpicked)
elementpicked= reda;
//console.log("before"+elementpicked)




}


  //  jQuery('<div  class="ingore"><div  class="text-center"><a href="#" class="btn btn-primary">Buy Now</a></div></div>').appendTo(""+reda);






        }
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

        return false;
    }

    pub.start = function () {
        initStylesheet();
        if (self.active !== true) {
            self.active = true;
            createOutlineElements();
            jQuery('body').on('mouseover.' + self.opts.namespace, updateOutlinePosition);
            jQuery('body').on('keyup.' + self.opts.namespace, stopOnEscape);
            if (self.opts.onClick) {
                setTimeout(function () {
                    jQuery('body').on('click.' + self.opts.namespace, function(e){
                        if (self.opts.filter) {
                            if (!jQuery(e.target).is(self.opts.filter)) {
                                return false;
                            }
                        }
                        clickHandler.call(this, e);
                    });
                }, 50);
            }
        }
    };

    pub.stop = function () {
        self.active = false;
        removeOutlineElements();
        jQuery('body').off('mouseover.' + self.opts.namespace)
            .off('keyup.' + self.opts.namespace)
            .off('click.' + self.opts.namespace);
    };

    return pub;
};
