
   var pageURL = window.location.href;
    var cart_url = '//'+window.location.hostname+'/cart.json';
    var currency = $('.shopCurrency').text();
var showPixel =""
   
    if(pageURL.indexOf(window.location.hostname+'/cart') > -1) {



    }
else if(pageURL.indexOf('/products/') > -1) {
	  if (pageURL.indexOf('?') > -1) {
        var product_url = pageURL.split('?');
        product_url = product_url[0] + '.json';
      } else {
        var product_url = pageURL + '.json';
      }

   $.ajax({
        url: product_url,
        dataType: 'jsonp',
        header: {
          'Access-Control-Allow-Origin': '*'
        },
        success: function(responseData) {
          var product = responseData.product;
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
                               console.log(qty)

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
                          showAddtoCartPixel += "fbq('track', 'AddToCart', {content_ids: ["+product.id+"],content_type:'product_group',value: "+price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
                        }
                    });
                    if(showAddtoCartPixel != '' ) {
                        $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
                    }
                            console.log('try')

                });
            } else {
                $('form[action="/cart/add"]').submit(function(e) {
	                var _thisForm = $(this);
                  var variantid = $('[name="id"]', _thisForm).val();
				   $.each(product.variants, function(index) {
                    if(product.variants[index].id == variantid){
                      var price = product.variants[index].price;
                      price = price * qty;
                      //showAddtoCartPixel += "fbq('track', 'AddToCart', {value: "+price+",currency: '"+currency+"'});";
    				  showAddtoCartPixel += "fbq('track', 'AddToCart', {content_ids: ["+product.id+"],content_type:'product_group',value: "+price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
                    }
                  });
                  if(showAddtoCartPixel != '' ) {
                    $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
                             console.log(showAddtoCartPixel)



}
           

           console.log(fbTrackCode)
                });
            }

            $('head').append("<script>"+fbTrackCode+""+showPixel+"fbq('track', 'PageView');</script><noscript>"+showImgPixel+"</noscript>");

            // Start On Checkout button click
            $('body').on('click', '[name="checkout"]', function() {
              ajaxCheckout($,cart_url,fbTrackCode,currency);
            });
            if($('[name="checkout"]').length == 0) {
              $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
                ajaxCheckout($,cart_url,fbTrackCode,currency);
                           console.log('try')

              });
            }
         
          }
        }

      });
  
	  
  
  }  
