let datainject="";
let POS=""
function FetchData(tkn){
  $.ajax({
        async:false,
        type: "GET",
        url:"http://4579c81c46ff.ngrok.io/FetchData",
        data:{tkn}
        ,
        success: function(data) {
            if (data) {
                        console.log(data);

           datainject=data

            }
        },
        error: function(error) {
            console.log("Error:" + error);
        }
    })

}


 var reda=0;
 var elementpicked="";
var elementEmpty="";
    var url_string = window.location.href
var url = new URL(url_string);
var tkn = url.searchParams.get("tk");
console.log(tkn)
     FetchData(tkn)

console.log(datainject)

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
    
      //  console.log( self.elements.label)
    }

    function removeOutlineElements() {
        jQuery.each(self.elements, function(name, element) {
            element.remove();
        });
    }

    function compileLabelText(element, width, height) {
        var label = element.tagName.toLowerCase();

        console.log(element)
        if (element.id) {
            label += '#' + element.id;
        }
        if (element.className) {
            label += ('.' + jQuery.trim(element.className).replace(/ /g, '.')).replace(/\.\.+/g, '.');
        }
        return element;
    }
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    function getScrollTop() {
        if (!self.elements.window) {
            self.elements.window = jQuery(window);
        }
        return self.elements.window.scrollTop();
    }

    function getElementXPath(element) {
        if (element && element.id)
            return '//*[@id="' + element.id + '"]';
        else
            return getElementTreeXPath(element);
    }
 function clickHandler(e) {
        createOutlineElements();
        $('#pos-editor-instruction-container').css("display" ,"none");
        $('#pos-editor-actions').css("display" ,"block");
        $('#trust-seals-content-div').css("opacity","unset");
          pub.stop();

        return false;
    }

    function getElementTreeXPath(element) {
        var paths = [];
        for (; element && element.nodeType == Node.ELEMENT_NODE;
               element = element.parentNode)
        {
            var index = 0;
            var hasFollowingSiblings = false;
            for (var sibling = element.previousSibling; sibling;
                 sibling = sibling.previousSibling)
            {
                if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE)
                    continue;

                if (sibling.nodeName == element.nodeName)
                    ++index;
            }

            for (var sibling = element.nextSibling;
                 sibling && !hasFollowingSiblings;
                 sibling = sibling.nextSibling)
            {
                if (sibling.nodeName == element.nodeName)
                    hasFollowingSiblings = true;
            }

            var tagName = (element.prefix ? element.prefix + ":" : "")
                + element.localName;
            var pathIndex = (index || hasFollowingSiblings ? "["
                + (index + 1) + "]" : "");
            paths.splice(0, 0, tagName + pathIndex);
        }

        return paths.length ? "/" + paths.join("/") : null;
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


 if (label_text!=reda) {

 POS=label_text;
 reda = label_text;
 var er=  getElementTreeXPath(reda)
elementEmpty=reda;
console.log("thi  "+reda.className)
         
   if(reda.className=="")  {


    if (reda.className!="trust-seals-preview" && elementpicked !=er ) {
   var re= document.getElementsByClassName("trust-seals-preview")
   if(re && re.length>0){
    console.log(re )
    for (var i =re.length-1; i >-1; i--) {
          re[i].remove()

    }
   }

 var cp=document.createElement("p")
    cp.className="ingore"
    cp.innerHTML=datainject
    elementEmpty.appendChild(cp)
    console.log(cp)
// jQuery('<p class="ingore"><p id="re222"  class="text-center12333" ><a href="#" class="btn btn-primary">Buy Now</a></p> </p>').appendTo(""+reda);
//console.log("afte"+elementpicked)
elementpicked= er;
jQuery('body').bind('click.' + self.opts.namespace, clickHandler);
      $('.deferent').click(function() {
         var re= document.getElementsByClassName("trust-seals-preview")
   if(re && re.length>0){
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

//console.log("before"+elementpicked)
} } else{
   if (reda.className!="trust-seals-preview" && elementpicked !=er ) {
   var re= document.getElementsByClassName("trust-seals-preview")
   if(re && re.length>0){
    for (var i =re.length-1; i >-1; i--) {
          re[i].remove()
    }
   }

 var cp=document.createElement("p")
    cp.className="ingore"
    cp.innerHTML=datainject;
    reda.appendChild(cp)
// jQuery('<p class="ingore"><p id="re222"  class="text-center12333" ><a href="#" class="btn btn-primary">Buy Now</a></p> </p>').appendTo(""+reda);
elementpicked= er;
elementEmpty=reda.className;
jQuery('body').bind('click.' + self.opts.namespace, clickHandler);

   }
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


jQuery('#sendplaceToServer').on('click' ,function(){

var pos = POS;
console.log(pos)
sendplaceToServer(pos)



});


function sendplaceToServer(pos){

  console.log(pos.className);
  var data =JSON.stringify({ 'pos': pos });
   $.ajax({
 async:false,
       type: "POST",
        url:"http://4579c81c46ff.ngrok.io/UpdatePosition",
       data:"data",
        success: function(data) {
        if (data) {
         console.log(data);


    }
   },
 error: function(error) {
       console.log("Error:" + error);
  }
  })
  
  
  
  
 // $.ajax({
      //  async:false,
      //  type: "GET",
      //  url:"http://ee9a817664ad.ngrok.io/UpdatePosition",
     //   data:{}
     //   ,
     //   success: function(data) {
          //  if (data) {
              //          console.log(data);

         //  datainject=data

           // }
     //   },
    //    error: function(error) {
    //        console.log("Error:" + error);
    //    }
///    })

}
    pub.stop = function () {
        self.active = false;
        removeOutlineElements();
        jQuery('body').off('mouseover.' + self.opts.namespace)
            .off('keyup.' + self.opts.namespace)
            .off('click.' + self.opts.namespace);
    };

    return pub;
};
