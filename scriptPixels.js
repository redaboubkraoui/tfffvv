"use strict";


    var ids = [],   content = [],  pixels = [];
    var i = 0,
        j = 0,
        k = 0;
  var value  = Shopify.checkout.total_price;
    var item_count = Shopify.checkout.line_items.length;
    var currency = Shopify.checkout.presentment_currency;
    var order_id = Shopify.checkout.order_id;
    var fn = Shopify.checkout.shipping_address.first_name;
    var ln = Shopify.checkout.shipping_address.last_name;
    var ph = Shopify.checkout.shipping_address.phone;
    var em = Shopify.checkout.email;
    var ct = Shopify.checkout.shipping_address.city;
    var zp = Shopify.checkout.shipping_address.zip;
	var  pinterestid = '2612942107035' 
   pixels = ['273944367460006','792958774593796','2880081595607508']
var snapchatid ='8679daef-53ed-4b5d-b552-6e232b23909d'
var twitterid = 'o5bot'
  var tblid ='1259987'

  if (getCookie('orderId') != order_id) {
        runPixels();
      }


    function runPixels() {
      for (var _i = 0; _i < pixels.length; _i++) {
        fbq('init', pixels[_i], {
          ln: ln,
          ph: ph,
          em: em,
          ct: ct,
          zp: zp
        });
      }
if (pixels.length>0) {

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return;

  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };

  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');


fbq('track', 'Purchase', {
        content_type: "product_group",
        content_ids: ids,
        order_id: order_id,
        contents: content,
        value: value,
        num_items: item_count,
        currency: currency
      });
}

loadotherpixels(pinterestid, {
        content_type: "product_group",
        content_ids: ids,
        order_id: order_id,
        contents: content,
        value: value,
        num_items: item_count,
        currency: currency
      },snapchatid,twitterid,tblid)

      document.cookie = 'orderId=' + order_id;
    }

function getCookie(name) {
      var cookieArr = document.cookie.split(";");
      for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
        }
      }

      return "";
    }


document.addEventListener("DOMContentLoaded", function() {
for (i = 0; i < Shopify.checkout.line_items.length; i++) {
      ids.push(Shopify.checkout.line_items[i].product_id);
      content.push({
        "id": Shopify.checkout.line_items[i].product_id,
        "quantity": Shopify.checkout.line_items[i].quantity,
        "item_price": Shopify.checkout.line_items[i].price
      });
    } // Sending and receiving data in JSON format using POST method

});



function loadotherpixels(pinterestid,purchaseData,snapchatid,twitterd,tblid){
if (pinterestid ) {
 loadpint( pinterestid,purchaseData)
}
if (snapchatid) {
loadsnap(snapchatid,purchaseData)
}

if (twitterid) {
loadtw(twitterid,purchaseData)

}
if (tblid) {
loadtbl(tblid,purchaseData)
}

}

function loadpint(pinid,purchaseData){
	      if (pinid) {
        !function (e) {
          if (!window.pintrk) {
            window.pintrk = function () {
              window.pintrk.queue.push(Array.prototype.slice.call(arguments));
            };
            var n = window.pintrk;
            n.queue = [], n.version = "3.0";
            var t = document.createElement("script");
            t.async = !0, t.src = e;
            var r = document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(t, r);
          }
        }("https://s.pinimg.com/ct/core.js");
        pintrk('load', pinterestid, {
          em: 'futureCobra12@gmail.com'
        });
        pintrk('page');
         pintrk('track', 'lead',purchaseData);
      }
}


function loadsnap(snapid,purchaseData)
{
if (snapid) {
(function(e,t,n){if(e.snaptr)return;
	var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];
var s='script';
var r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', snapid, {
'user_email': 'futureCobra12@gmail.com'
});
 snaptr('track', 'PURCHASE', {
          price: purchaseData.value,
          currency: purchaseData.currency,
           content_type: "product_group",
        content_ids: purchaseData.ids,
        order_id: purchaseData.order_id,
        contents: purchaseData.content,
        num_items: purchaseData.item_count,
        });



}
}

function loadtw(twid,purchaseData)
{

if (twid){
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

twq('init',twid);
twq('track','Purchase', purchaseData);

}

}

function loadtbl(tblid,purchaseData)
{

window._tfa = window._tfa || [];_tfa.push({notify: 'event', name: 'make_purchase', id: tblid,
	currency:""+purchaseData.currency,
	orderid :purchaseData.order_id,
	revenue:purchaseData.value 
});!function (t, f, a, x) { if (!document.getElementById(x)) { t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f); }}(document.createElement('script'),document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/unip/'+tblid+'/tfa.js','tb_tfa_script');
var ns = document.createElement('noscript')
	ns.innerHTML="<img src='https://trc.taboola.com/"+tblid+"/log/3/unip?en=make_purchase' width='0' height='0' style='display:none' />"
document.head.appendChild(ns)
}
