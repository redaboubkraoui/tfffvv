var productData={}
var pixels = [];
var collectinosData = [{'collections' :'241218158789','fbpixels':['273944367460006','2880081595607508','2468047136583083']},{'collections' :'236329337029','fbpixels':['792958774593796','721848285202228','2880081595607508','601078379966926']},{'collections':'12','fbpixels' :['792958774593796','273944367460006','2880081595607508']}]
var  pinterestid = '2612942107035' 
var snapchatid = '8679daef-53ed-4b5d-b552-6e232b23909d'
var  twid='o5bot' 
 var showPixel = showImgPixel = '';
  var pageURL = window.location.href;
  var cart_url = '//'+window.location.hostname+'/cart.json';
  var currency = Shopify.currency.active
  var tblid ='1259987'
    // cart page
  if(pageURL.indexOf(window.location.hostname+'/cart') > -1) {

  	var prodcollections = document.querySelector('product-collection');
    if (prodcollections != null) {
    	pixels =[]
       prodcollections = prodcollections.innerHTML.trim().slice(0, -1).split(',');
    }  
    loadpint(pinterestid)
    loadsnap(snapchatid)
    loadtw(twid)
SetPixels(collectinosData,prodcollections)

	twq('track','PageView');
   	snaptr('track', 'PAGE_VIEW');
    pintrk('track', 'pagevisit');
    loadtbpageview(tblid)

    if(pixels.length) { 
      $.each(pixels,function(i,val) {
		var fbPixel = val
        showPixel += "fbq('init', '"+fbPixel+"');";
        showImgPixel += "<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id="+fbPixel+"&ev=PageView&noscript=1'/>";
      });
      if(showPixel != '') {
        var fbTrackCode = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";
        $('head').append("<script>"+fbTrackCode+""+showPixel+"fbq('track', 'PageView');</script><noscript>"+showImgPixel+"</noscript>");
            



        // Start On Checkout button click
        $('body').on('click', '[name="checkout"]', function(e) {
            ajaxCheckout(cart_url,fbTrackCode,currency);
        });

        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"]', function() {
            ajaxCheckout(cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }


    // product pages
  else if(pageURL.indexOf('/products/') > -1) {
var prodcollections = document.querySelector('product-collection');
    if (prodcollections != null) {
       prodcollections = prodcollections.innerHTML.trim().slice(0, -1).split(',');
    }  
    loadpint(pinterestid)
    loadsnap(snapchatid)
SetPixels(collectinosData,prodcollections)
   	snaptr('track', 'PAGE_VIEW');
    pintrk('track', 'pagevisit');
    loadtw(twid)
twq('track','PageView');
loadtbpageview(tblid)

  if(pixels.length) {
      var showAddtoCartPixel = '';
      if (pageURL.indexOf('?') > -1) {
        var product_url = pageURL.split('?');
        product_url = product_url[0] + '.json';
      } else {
        var product_url = pageURL + '.json';
      }
      $.each(pixels,function(i,val) {
        //var handle = $(this).text();
        var fbPixel = val;
        showPixel += "fbq('init', '"+fbPixel+"');";
        showImgPixel += "<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id="+fbPixel+"&ev=PageView&noscript=1'/>";
      });

      $.ajax({
        url: product_url,
        dataType: 'jsonp',
        header: {
          'Access-Control-Allow-Origin': '*'
        },
        success: function(responseData) {
          var product = responseData.product;
          console.log(product)
          if(product.title.indexOf("'") > -1) {
			product.title = product.title.replace(/'/g, '');
		  }
          showPixel += "fbq('track', 'ViewContent', {content_ids: ["+product.id+"],content_type:'product_group',value: "+product.variants[0].price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
          if(showPixel != '') {
            var fbTrackCode = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";
            
            var qty = 1;
            if($('form[action="/cart/add"] [name="quantity"]').length) {
                $('form[action="/cart/add"] [name="quantity"]').on('change', function(){
                    qty = $(this).val();
                });
            }
    	
            // On Add to cart click
            if($('form[action="/cart/add"] [type="submit"]').length !== 0 || $('form[action="/cart/add"] [type="button"]').length !== 0) {
                $('form[action="/cart/add"] [type="submit"], form[action="/cart/add"] [type="button"]').click(function(e){
                    var _thisForm = $('form[action="/cart/add"]');
				
                    var variantid = $('[name="id"]', _thisForm).val();
					$.each(product.variants, function(index) {
                        if(product.variants[index].id == variantid){
                          var price = product.variants[index].price;
                          price = price * qty;
                          //showAddtoCartPixel += "fbq('track', 'AddToCart', {value: "+price+",currency: '"+currency+"'});";
                          showAddtoCartPixel += "fbq('track', 'AddToCart', {content_ids: ["+product.id+"],content_type:'product_group',value: "+price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
                     productData = {content_ids: '['+product.id+']',content_type:'product_group',value: price, content_name: product.title, currency: currency, content_category: ''};

                        }
                    });

AddTocart(pinterestid,productData,snapchatid,twid)
                    if(showAddtoCartPixel != '' ) {
                        $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
                    }
                 
                });
            } else {
                $('form[action="/cart/add"]').submit(function(e) {
	                var _thisForm = $(this);
      
                  var variantid = $('[name="id"]', _thisForm).val();
				   $.each(product.variants, function(index) {
                    if(product.variants[index].id == variantid){
                      var price = product.variants[index].price;
                      price = price * qty;
    				  showAddtoCartPixel += "fbq('track', 'AddToCart', {content_ids: ["+product.id+"],content_type:'product_group',value: "+price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
    				   productData = {content_ids: '['+product.id+']',content_type:'product_group',value: price, content_name: product.title, currency: currency, content_category: ''};


                    }
                  });

AddTocart(pinterestid,productData,snapchatid,twid)
                  if(showAddtoCartPixel != '' ) {
                    $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
                  }
           
              


                });
            }

            $('head').append("<script>"+fbTrackCode+""+showPixel+"fbq('track', 'PageView');</script><noscript>"+showImgPixel+"</noscript>");

            // Start On Checkout button click
            $('body').on('click', '[name="checkout"]', function() {
              ajaxCheckout(cart_url,fbTrackCode,currency);
            });
            if($('[name="checkout"]').length == 0) {
              $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
                ajaxCheckout(cart_url,fbTrackCode,currency);
              });
            }
            // End On Checkout button click
          }
        }

      });
    }
  }

  // start collection page
  else if(pageURL.indexOf('/collections') > -1) {
  	var prodcollections = document.querySelector('page-collection-id');
    if (prodcollections != null) {
    	pixels =[]
       prodcollections = prodcollections.innerHTML.trim().slice(0, -1).split(',');
    }  
     loadpint(pinterestid)
    loadsnap(snapchatid)
    loadtw(twid)
	SetPixels(collectinosData,prodcollections)
	twq('track','PageView');
	snaptr('track', 'PAGE_VIEW');
    pintrk('track', 'pagevisit');
    if(pixels.length) {
      var fbTrackCode = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";
      $.each(pixels,function(i,val) {
        var fbPixel = val;
        showPixel += "fbq('init', '"+fbPixel+"');";
        showImgPixel += "<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id="+fbPixel+"&ev=PageView&noscript=1'/>"; 
      });
      if(showPixel != '') {
		// Pixel here 
		$('head').append("<script>"+fbTrackCode+""+showPixel+"fbq('track', 'PageView');</script><noscript>"+showImgPixel+"</noscript>");

        // Start On Checkout button click
        $('body').on('click', '[name="checkout"]', function() {
          ajaxCheckout(cart_url,fbTrackCode,currency);
        });
        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
            ajaxCheckout(cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }
    // start other pages
  else {

    loadpint(pinterestid)
    pintrk('track', 'pagevisit');


//SetPixels(collectinosData,prodcollections)
//console.log(pixels)


if(pixels.length) {
     $.each(pixels,function(i,val) { 
        var fbPixel = val;
        showPixel += "fbq('init', '"+fbPixel+"');";
        showImgPixel += "<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id="+fbPixel+"&ev=PageView&noscript=1'/>";
      });

      if(showPixel != '') {
        var fbTrackCode = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');";

        $('head').append("<script>"+fbTrackCode+""+showPixel+"fbq('track', 'PageView');</script><noscript>"+showImgPixel+"</noscript>")

        
        $('body').on('click', 'form[action="/cart/add"] [type="submit"], form[action="/cart/add"] [type="button"]', function(e){
            var _main = $(this).parents('form[action="/cart/add"]');
            var proID = _main.attr('id').replace(/[^0-9\.]/g,'');
            var priceArr = _main.find('[name="id"] option:selected').text().split('-');
            var price = priceArr[priceArr.length - 1].replace(/[^0-9\.]/g,'');
            var proName = _main.parents('.product-single__meta--wrapper').find('[itemprop="name"]').text();
            if(price == '') {
                var proID = _main.find('[name="id"]').attr('data-section');
                var price = $('div[data-section-id="'+proID+'"] #ProductPrice-'+proID).attr('content');
                var proName = $.trim($('div[data-section-id="'+proID+'"]').find('[itemprop="name"]').text());
            }
            var showAddtoCartPixel = "fbq('track', 'AddToCart', {content_ids: ["+proID+"],content_type:'product_group',value: "+price+", content_name: '"+proName+"', currency: '"+currency+"', content_category: ''});";
            if(showAddtoCartPixel != '' ) {
                $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
            }
        });
        

        // Start On Checkout button click
        $('body').on('click', '[name="checkout"]', function() {
          ajaxCheckout(cart_url,fbTrackCode,currency);
        });
        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
            ajaxCheckout(cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }

  function ajaxCheckout(cart_url,fbTrackCode,currency) {
    $.ajax({
        url: cart_url,
        dataType: 'jsonp',
        header: {
            'Access-Control-Allow-Origin': '*'
        },
        success: function(response) {
            contentIDs = [];
            $.each(response.items, function(index,value){
                contentIDs.push(value.product_id);
            });
            var total_price = Shopify.formatMoney(response.total_price);
            total_price = total_price.replace(/[^0-9\.]/g,'');
            
            var checkoutPixel = "fbq('track', 'InitiateCheckout',{ content_type: 'product_group', content_ids: ["+contentIDs+"], num_items: "+response.item_count+", currency: '"+currency+"',value: "+total_price+"});";
            
            $('head').append("<script>"+fbTrackCode+""+checkoutPixel);
        }
    });
}

function SetPixels(collectinosData,productsCollections) {
console.log(collectinosData)
for (var i = 0;i<collectinosData.length;i++){
    if (productsCollections.includes(collectinosData[i].collections))
for (var j=0;j<collectinosData[i].fbpixels.length;j++)  
{
console.log('pixel :' + collectinosData[i].collections)
if(!pixels.includes(collectinosData[i].fbpixels[j]))
                  pixels.push(collectinosData[i].fbpixels[j]);
}  } }


function loadpint(pinid){
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
      }
}

function loadsnap(snapid)
{

if (snapid) {
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', snapid, {
'user_email': 'futureCobra12@gmail.com'
});

}
}


function loadtw(twid)
{

if (twid){
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
}
twq('init',twid);

}

function loadtbpageview(tblid)
{

if (tblid) {
var tblscripi "window._tfa = window._tfa || [];window._tfa.push({notify: 'event', name: 'page_view', id: "+tblid+"});!function (t, f, a, x) { if (!document.getElementById(x)) { t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f); }}(document.createElement('script'),document.getElementsByTagName('script')[0], '//cdn.taboola.com/libtrc/unip/1259987/tfa.js','tb_tfa_script');"
$('head').append(tblscripi+"<noscript><img src='https://trc.taboola.com/"+tblid+"/log/3/unip?en=page_view'width='0' height='0' style='display:none' /></noscript>");

}

}




function AddTocart(pinterestid,productData,snapid,twid){
 if (pinterestid) {
        pintrk('track', 'addtocart',  productData);
      }
if (snapid) {
      snaptr('track', 'ADD_CART',productData);

}
if (twid)
{

twq('track','AddToCart',productData)
}

}
