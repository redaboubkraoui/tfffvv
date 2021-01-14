 var showPixel = showImgPixel = '';

  var pageURL = window.location.href;

  var cart_url = '//'+window.location.hostname+'/cart.json';

  var currency = Shopify.currency.active
  var pixels = ['273944367460006','792958774593796','2880081595607508']
    // cart page
  if(pageURL.indexOf(window.location.hostname+'/cart') > -1) {
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
            ajaxCheckout($,cart_url,fbTrackCode,currency);
        });

        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"]', function() {
            ajaxCheckout($,cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }


    // product pages
  else if(pageURL.indexOf('/products/') > -1) {
	    
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
                        }
                    });
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
                      //showAddtoCartPixel += "fbq('track', 'AddToCart', {value: "+price+",currency: '"+currency+"'});";
    				  showAddtoCartPixel += "fbq('track', 'AddToCart', {content_ids: ["+product.id+"],content_type:'product_group',value: "+price+", content_name: '"+product.title+"', currency: '"+currency+"', content_category: ''});";
                    }
                  });
                  if(showAddtoCartPixel != '' ) {
                    $('head').append("<script>"+fbTrackCode+""+showAddtoCartPixel+"</script>");
                  }
           
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
          ajaxCheckout($,cart_url,fbTrackCode,currency);
        });
        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
            ajaxCheckout($,cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }
    // start other pages
  else {
    if(pixels.length) {
     $.each(pixels,function(i,val) { 
        var fbPixel = $(this).text();
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
          ajaxCheckout($,cart_url,fbTrackCode,currency);
        });
        if($('[name="checkout"]').length == 0) {
          $('body').on('click', 'form[action="/checkout"] [type="submit"], [href="/checkout"], .fastcheckout_buy_button', function(){
            ajaxCheckout($,cart_url,fbTrackCode,currency);
          });
        }
        // End On Checkout button click
      }
    }
  }
