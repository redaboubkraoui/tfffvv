var couponapp_domain = "https://couponx.premio.io/",
fullpathName = "https://dohamondial.myshopify.com",
pathName = window.location.pathname,
pathName = pathName.substr(1),
shopurl = Shopify.shop,
couponapp_html = "",
couponapp_settings = '',
updatecount = 0,
country_name = "",
currentCountryCount = 0,
couponapp_storeid = 0,
isowner = 'no',
is_updatevisitor = 0,
couponapp,
is_clipboard = 0,
clipboard,
myReferer='',
unique_code='',
is_page_scroll_index = -1;

(function(){
	var loadScript = function(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";

		// If the browser is Internet Explorer.
		if (script.readyState){ 

			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
			// For any other browser.
		} else {
			script.onload = function(){
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	
	var CouponAppJavaScript = function(jQuery){		
		var shopify_coupon_domain = window.location.hostname;
		var customerId = window.ShopifyAnalytics.meta.page.customerId;
		if ( typeof customerId == 'undefined' ) {
			customerId = 0;
		}
		var origin_landing_page   = window.location.href;
		if (document.referrer) {
			myReferer = document.referrer;			
		} 
		
		jQuery('head').append('<link rel="stylesheet" href="'+couponapp_domain+'assets/css/coupon-front.css" type="text/css" media="all">');
		
		jQuery('head').append('<script type="text/javascript" async="" src="'+couponapp_domain+'assets/js/clipboard.min.js"></script>');
		
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
		var isbotuser = 'no';
		var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
		
		var re = new RegExp(botPattern, 'i');
		var userAgent = navigator.userAgent; 
		if ( re.test(userAgent) ) {
			isbotuser = 'yes';
		}
		
		var $style = '';
		var couponappurl = couponapp_domain + '/couponapp_front?fullpathName='+encodeURI(fullpathName);
		
		/* Count App */
		var countcouponapp = readCouponappCookie('countcouponapp');
		if (countcouponapp != 'dismiss'){
			updatecount = 1;
		}
		
		var traffic_source = readCouponappCookie('traffic_source');
		unique_code = readCouponappCookie('couponx_unique');
		
		/* Check is Owner*/
		var couponappisowner = jQuery('#admin-bar-iframe').html();		
		if(couponappisowner !== undefined){
			isowner = 'yes';
			createCouponappCookie('couponappisowner', 'yes', 1000);
		}
		/* Check App Owner Cookie */
		var couponappisownerCookie = readCouponappCookie('couponappisowner');
		if (couponappisownerCookie == 'yes'){
			isowner = 'yes';
		}
		
		if(isbotuser == 'no'){			
			jQuery.get( 'https://'+shopify_coupon_domain+"/cart.json", function( cart_response ) {
				//console.log(couponappurl);
				jQuery.ajax({
					type: "POST",
					url: couponappurl,
					data: {
							'shop_url': shopurl,
							'isMobile' : isMobile,
							'pathName' : pathName,
							'updatecount': updatecount,						
							'isowner': isowner,
							'cart_data': cart_response,
							'customerId': customerId,
							'origin_landing_page': origin_landing_page,
							'HTTP_REFERER': myReferer,
							'traffic_source': traffic_source,
							'is_unique_code': unique_code,
						},
					dataType: "JSON",
					success: function (response) {
						
						if (response.length == 0 &&  response == '') {
							return true;
						}
						if( response.couponapp_widgets.length > 0) {
							couponapp_settings = response;
							var page_scroll_index;
							for( currentCountryCount = 0 ; 
								 currentCountryCount < response.couponapp_widgets.length ; currentCountryCount++ ) {								 
								
								
								if ( couponapp_settings.couponapp_widgets[currentCountryCount].couponcode_type !='' && couponapp_settings.couponapp_widgets[currentCountryCount].couponcode_type == 'unique-coupon'  && unique_code == null ) {
									createCouponappCookie('couponx_unique', couponapp_settings.couponapp_widgets[currentCountryCount].unique_code, 365);
								}
								
								if ( couponapp_settings.couponapp_widgets[currentCountryCount].is_traffic_source !='' && traffic_source == null ) {
									createCouponappCookie('traffic_source', couponapp_settings.couponapp_widgets[currentCountryCount].is_traffic_source, 1);
								}
								
								var couponapp_scroll = sessionStorage.getItem(currentCountryCount + 'couponapp_scroll');
								var couponapp_show = sessionStorage.getItem(currentCountryCount + 'couponapp_show');
								
								//console.log(couponapp_scroll + ' == '+ couponapp_settings.couponapp_widgets[currentCountryCount].page_scroll + "==" + currentCountryCount);
								/*if ( couponapp_settings.couponapp_widgets[currentCountryCount].page_scroll === 'yes' && couponapp_scroll != 'yes' ) {*/
								
								if ( couponapp_settings.couponapp_widgets[currentCountryCount].page_scroll === 'yes' && couponapp_scroll != 'yes' && couponapp_show != 'yes' ) {
									
									page_scroll_functions( jQuery,currentCountryCount );
									
								}
								//console.log(couponapp_show + ' === ' + currentCountryCount);	
								if ( couponapp_settings.couponapp_widgets[currentCountryCount].time_delay === 'yes' && couponapp_show != 'yes') {
									var trigger_sec = couponapp_settings.couponapp_widgets[currentCountryCount].time_delay_sec * 1000;
									
									page_scroll_index = currentCountryCount;									
									var show_widget_after_some_time = function(page_scroll_index, jQuery){
										check_for_widget_data(jQuery,page_scroll_index);
										sessionStorage.setItem( page_scroll_index + 'couponapp_show', 'yes');
									};
									setTimeout(show_widget_after_some_time, trigger_sec, page_scroll_index, jQuery);
								} else {								
									check_for_widget_data(jQuery,currentCountryCount);
								}
							}
						}
					}
				});
			});
		}
	};
	
	var check_for_widget_data = function (jQuery, index) {
        activeIndexID = index;
		
		if( couponapp_settings.couponapp_widgets[index].maxvisitor ){
			jQuery('head').append('<link rel="stylesheet" id="custom-google-fonts-css" href="https://fonts.googleapis.com/css?family=Poppins:400,600,700" type="text/css" media="all">');
			
			jQuery('body').append(couponapp_settings.couponapp_widgets[index].maxvisitormessage);
			couponapp_storeid = couponapp_settings.couponapp_widgets[index].storeid;
		}
		
		if( index < couponapp_settings.couponapp_widgets.length) {
            couponapp = {google_analytics:couponapp_settings.couponapp_widgets[index].google_analytics};
			
            if ( typeof couponapp_settings.couponapp_widgets[index].countries !== 'undefined' && couponapp_settings.couponapp_widgets[index].countries.length > 0) {
                if(country_name == "") {
                    var $ipurl = 'https://www.cloudflare.com/cdn-cgi/trace';
                    jQuery.get($ipurl, function (cloudflaredata) {
                        var currentCountry = cloudflaredata.match("loc=(.*)");
                        if (currentCountry.length > 1) {
                            currentCountry = currentCountry[1];
                            if (currentCountry) {
                                currentCountry = currentCountry.toUpperCase();
                                country_name = currentCountry;
								
                                if (jQuery.inArray(currentCountry, couponapp_settings.couponapp_widgets[index].countries) != -1) {	

									
                                    set_widget_data(jQuery,index);
                                }else{
                                    /*currentCountryCount++;
                                    setTimeout(function(){
                                        check_for_widget_data(currentCountryCount);
                                    },10);*/
									
                                }
                            }
                        }
                    });
                } else {
                    if (jQuery.inArray(country_name, couponapp_settings.couponapp_widgets[index].countries) != -1) {
                        set_widget_data(jQuery,index);
                    }else{
                        /*
						currentCountryCount++;
                        setTimeout(function(){
                            check_for_widget_data(currentCountryCount);
                        },10);
						*/
                    }
                }
            } else {				                
				set_widget_data(jQuery,index);				
            }
		}		
        
    }
	
	var set_widget_data = function (jQuery,activeIndexID) {	
		
		/* Check CTA Hide after First Click/Hover */
		var tab_id = 'tab-box-front-' + activeIndexID;		
		/* Remove Session Storage if always open class*/		
		if ( couponapp_settings.couponapp_widgets[activeIndexID].show_cta === 'always' ) {
			sessionStorage.removeItem(tab_id + 'couponapp_close');
		}
		//console.log( check_for_time(activeIndexID) + " check_for_time(activeIndexID)");
        if (couponapp_settings.couponapp_widgets[activeIndexID].html != '' && check_for_time(activeIndexID)){	
			
			if (couponapp_settings.couponapp_widgets[activeIndexID].widget_save == 1) {
				sessionStorage.removeItem(tab_id + 'couponapp_close_widget');
				sessionStorage.removeItem(tab_id + 'couponapp_close');
				sessionStorage.removeItem(tab_id + 'couponapp_pending_message');
				sessionStorage.removeItem(tab_id + 'couponapp_open');
			}
			
            createCouponappCookie('countsticky', 'dismiss', 1);
			
			var coupon_widget = couponapp_settings.couponapp_widgets[activeIndexID].html;
			
			if ( sessionStorage.getItem(tab_id + 'couponapp_close_widget') == 'yes' ) {				
				coupon_widget = coupon_widget.replace("couonapp-active", "");
			} 
			
			jQuery('body').append(coupon_widget);
			
			/* Hide Tab after conversation */
			if ( sessionStorage.getItem(tab_id + '-couponapp_tab_hide') == 'yes' &&  jQuery( '#' + tab_id ).hasClass( 'couponapp-tab-hide' ) ) {
				jQuery( '#' + tab_id ).hide();
			}
			
			jQuery( '.tab-box.tab-front-box').each(function () {
				var main_width = jQuery(this).find( '.tab-box-email-content .form-wrap').outerWidth();
				var button_width = jQuery(this).find( '.coupon-button.coupon-email-button').outerWidth();
				if ( typeof main_width !== 'undefined' && typeof button_width !== 'undefined') {
					jQuery(this).find('.coupon-code-email-text').width( main_width - button_width - 37 );
				}
				
			})
			
			
			if ( sessionStorage.getItem(tab_id + 'show_coupon_code') == 'yes') {
				jQuery( '#' + tab_id + ' .tab-box-content.tab-box-email-content').remove();
				jQuery( '#' + tab_id ).addClass( 'open-coupon-code');
			}
			
			var coupon_pending_message = sessionStorage.getItem(tab_id + 'couponapp_pending_message');	
			
			if ( coupon_pending_message === 'yes' || jQuery('#' + tab_id ).hasClass( 'couponapp-open-state-open' ) ) {
				jQuery('#' + tab_id + ' .coupon-pending-message').remove();
			}
			if ( jQuery('#' + tab_id ).hasClass( 'couponapp-open-state-open' ) )  {			
				jQuery('#' + tab_id + ' .tab-text').hide();
			}
			
			if (jQuery('#' + tab_id ).hasClass( 'couponapp-open-state-open' ) &&  sessionStorage.getItem(tab_id + 'couponapp_close_widget') == 'yes' && jQuery( '#' + tab_id ).hasClass( "couponapp-open-always" ) ) {
				jQuery('#' + tab_id + ' .tab-text').show();
			} 
			var couponapp_open = sessionStorage.getItem(tab_id + 'couponapp_open');					
			if ( couponapp_open === 'yes' || jQuery('#' + tab_id ).hasClass( 'couponapp-open-state-open' ) ) {
				jQuery('#' + tab_id).removeClass (function (index, className) {				
					return (className.match (/(^|\s)couponapp-\S+-animation/g) || []).join(' ');
				});
			}
			
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
			
			if ( isMobile === true ) {
				jQuery( '#' + tab_id ).removeClass( "couponapp-open-state-hover" );
				jQuery( '#' + tab_id ).removeClass( "couponapp-open-state-open" );
				jQuery( '#' + tab_id ).addClass( "couponapp-open-state-click" );
			}
			
			var IsUpdatevisitor = localStorage.getItem( 'is_updatevisitor');
			//console.log(updatecount + '== '+ isowner +" == "+ IsUpdatevisitor);
			/* Update Visitor */
			if( updatecount == 1 && isowner == 'no' && is_updatevisitor == 0 &&  IsUpdatevisitor != 'yes' ){
                updatecouponvisitor(jQuery,activeIndexID);
				is_updatevisitor = 1;
				localStorage.setItem( 'is_updatevisitor', 'yes');
            }
			
			/* Update Open Widget */
			var widget_id = jQuery('#' + tab_id + ' .tab-icon').data('widget-id');
			var shop_id = jQuery('#' + tab_id + ' .tab-icon').data('shop-id');
			
			var coupon_open = widget_id +'-'+shop_id;
			var is_updatecouponopen = localStorage.getItem( 'is_updatecouponopen' + coupon_open);
			if ( jQuery( '#' + tab_id ).hasClass( "couonapp-active" ) && is_updatecouponopen != 'yes' ) {
				updatecouponopen( jQuery,widget_id, shop_id);
				localStorage.setItem( 'is_updatecouponopen' + coupon_open, 'yes');
				
			}
			
			if ( jQuery( '#' + tab_id ).hasClass( "couonapp-active" ) ){
				console.log("is_active get");
				setCountDownTimer(jQuery);
			}
			
			var session_tab = sessionStorage.getItem(tab_id + 'couponapp_close');		
			if ( session_tab === 'close' ) {			
				jQuery('#' + tab_id + ' .tab-text').hide();
			}
			
            if (couponapp_settings.couponapp_widgets[activeIndexID].font_family){
                jQuery('head').append('<link rel="stylesheet" id="custom-google-fonts-css" href="https://fonts.googleapis.com/css?family='+encodeURI(couponapp_settings.couponapp_widgets[activeIndexID].font_family)+'" type="text/css" media="all">');
            }
			
			/* */			
			//setCountDownTimer(jQuery);
			/* */
        }
    }
	
	var setCountDownTimer = function ( jQuery ) {
		jQuery('.count-down-timer-box').each(function(){
		
			console.log("coundown timer get");
			var divId = jQuery(this);
			var timer_coundown_form = jQuery(this).data("countdown");
			if(timer_coundown_form != 'popup'){
				var timezone = jQuery(this).data("zone");
				var expiredDateTime  = new Date(jQuery(this).data("id"));
			}
			else{
				var expiredDateTime = new Date();
				var counter_minute = jQuery(this).data("min");
				var counter_second = jQuery(this).data("second");
				var widget_id = jQuery(this).data("widgetid");
				var expire_time = readCouponappCookie('couponx-countdowntime-'+ widget_id);
				
				if( expire_time != null ) {					
					expiredDateTime = new Date(expire_time);
				} else {
					createCouponappCookie('couponx-countdowntime-'+ widget_id, expiredDateTime, 1);
				}
				
				console.log(expire_time + "== " + expiredDateTime);
				
				
				var current_minute = expiredDateTime.getMinutes();
				var current_second = expiredDateTime.getSeconds();
				//var counter_houre = jQuery(this).data("houre");
				
				current_minute = current_minute + parseInt(counter_minute);
				current_second =  current_second + parseInt(counter_second);
				//expiredDateTime.setHours(counter_houre);
				expiredDateTime.setMinutes(current_minute);
				expiredDateTime.setSeconds(current_second);
				console.log("expiredDateTime here->"+expiredDateTime);
				
				
			}
			console.log("timer_coundown_form"+timer_coundown_form);
			var x = setInterval(function(){
					if(timer_coundown_form != 'popup'){
						var nowDate = new Date();
						nowDate =  new Date(nowDate.toLocaleString('en-US', {timeZone: timezone}));
						
						var hourss = Math.abs(expiredDateTime.getTime() - nowDate.getTime()) / 3600000;
						var diffrenceDate = expiredDateTime - nowDate;
						var days = Math.floor(diffrenceDate / (1000*60*60*24));
						var hours = Math.floor((diffrenceDate % (1000*60*60*24))/ (1000*60*60));
						var minute = Math.floor((diffrenceDate %(1000*60*60)) / (1000*60));
						var seconds = Math.floor((diffrenceDate %(1000*60)) / 1000);
						
						if ( Math.floor(hourss) == 24 ) {
							hours= Math.floor(hourss);
							days = 0;
						}
						if(days <= 0){
							if(hours <= 0 ){
								if(minute <= 0){
									if(seconds <= 0 ){
										//jQuery(divId).html('time is over!!');
									}
									else{
										jQuery(divId).html( "<div class='counter-timer'><span>" + seconds + "</span><label>Seconds</label></div>");
									}
								}
								else{
									jQuery(divId).html( "<div class='counter-timer'><span>" + minute + "</span><label>Minutes</label></div> : <div class='counter-timer'><span>" + seconds + "</span><label>Seconds</label></div>");
								}
							}
							else{
								jQuery(divId).html( "<div class='counter-timer'><span>" + hours + "</span><label>Hours</label></div> : <div class='counter-timer'><span>" + minute + "</span><label>Minutes</label></div> : <div class='counter-timer'><span>" + seconds + "</span><label>Seconds</label></div>");
							}
						}
						else{
							jQuery(divId).html( "<div class='counter-timer'><span>" +days + "</span><label>Days</label></div> : <div class='counter-timer'><span>" + hours + "</span><label>Hours</label></div> : <div class='counter-timer'><span>" + minute + "</span><label>Minutes</label></div> : <div class='counter-timer'><span>" + seconds + "</span><label>Seconds</label></div>");
						}
					}else{
						var nowDate = new Date();
						console.log("nowDate="+nowDate);
						var diffrenceDate = expiredDateTime - nowDate;
						console.log("diffrenceDate="+diffrenceDate);
						var minute = Math.floor((diffrenceDate %(1000*60*60)) / (1000*60));
						var seconds = Math.floor((diffrenceDate %(1000*60)) / 1000);
						
						if(minute>=0){
							jQuery(divId).html( "<div class='counter-timer'><span>" + minute + "</span><label>Minutes</label></div> : <div class='counter-timer'><span>" + seconds + "</span><label>Seconds</label></div>" );	
						}
						else{
							jQuery(divId).html( "" );
						}
						
					}
			},1000);
		
		}); 
	}
	
	/* Update Coupon App Visitor */
	var updatecouponvisitor = function ( jQuery,IndexID) {
		
		var widget_id = couponapp_settings.couponapp_widgets[IndexID].widget_id;
		var shop_id = couponapp_settings.couponapp_widgets[IndexID].shop_id;
		
        url = couponapp_domain + '/couponapp_front/updateVistor';
        jQuery.ajax({
            type: "POST",
            url: url,
            data: {'shop_url': shopurl,'widget_id':widget_id,"shop_id":shop_id},
            //dataType: "JSON",
            success: function (response) {

            }
        });
    }
	/* Update Coupon Tab Open */
	var updatecouponopen = function (jQuery, widget_id, shop_id) {	
		
		url = couponapp_domain + '/couponapp_front/updatecouponopen';
        jQuery.ajax({
            type: "POST",
            url: url,
            data: {'shop_url': shopurl,'widget_id':widget_id,"shop_id":shop_id},
            //dataType: "JSON",
            success: function (response) {

            }
        });		
	}
	
	/* Update Coupon Code Get*/
	var updatecouponcodeget = function (jQuery, widget_id, shop_id) {
		
		url = couponapp_domain + '/couponapp_front/updatecouponcodeget';
        jQuery.ajax({
            type: "POST",
            url: url,
            data: {'shop_url': shopurl,'widget_id':widget_id,"shop_id":shop_id},
            //dataType: "JSON",
            success: function (response) {

            }
        });
		return true;
	}
	
	
	var page_scroll_functions = function (jQuery,activeIndexID) {
		jQuery(window).scroll(function () {			
			if ( couponapp_settings.couponapp_widgets[activeIndexID].page_scroll === 'yes') {
				var scrollHeight = jQuery(document).height() - jQuery(window).height();
				var scrollPos = jQuery(window).scrollTop();
				if (scrollPos != 0) {
					var scrollPer = ((scrollPos / scrollHeight) * 100);
					var widgetScroll = parseInt(couponapp_settings.couponapp_widgets[activeIndexID].page_scroll_sec);					
					
					
					var couponapp_show = sessionStorage.getItem(activeIndexID + 'couponapp_show');
					
					if (scrollPer >= widgetScroll && jQuery('#tab-box-front-' + activeIndexID).length === 0 && is_page_scroll_index !=  activeIndexID && couponapp_show != 'yes' ) {
						//console.log(scrollPer + '== '+widgetScroll);
						is_page_scroll_index = activeIndexID;
						check_for_widget_data(activeIndexID);
						sessionStorage.setItem( activeIndexID + 'couponapp_scroll', 'yes');
						sessionStorage.setItem( activeIndexID + 'couponapp_show', 'yes');
					}
				}
			}
		});
	}
	
	var check_for_time = function (activeIndexID) {
        var displayStatus = 0;
		
        if (parseInt(couponapp_settings.couponapp_widgets[activeIndexID].display_conditions) == 1) {
            var displayRules = couponapp_settings.couponapp_widgets[activeIndexID].display_rules;
		
            if (displayRules.length > 0) {
                var localDate = new Date();
				var days_gmt = couponapp_settings.couponapp_widgets[activeIndexID].gmt.replace("+", "");
				days_gmt = days_gmt.replace("-", "");
				
				var num = /^[-+]?[0-9]+\.[0-9]+$/;
				
				if( num.test(days_gmt) == true ) {
					var localTime = localDate.getTime();
					var localOffset = localDate.getTimezoneOffset() * 60000;
					var utc = localTime + localOffset;
					var offset = couponapp_settings.couponapp_widgets[activeIndexID].gmt;  
					var utc_offset = utc + (3600 * offset);
					localDate = new Date(utc_offset); 
					
					//localDate.setHours( parseInt(localhours) + parseFloat(couponapp_settings.couponapp_widgets[activeIndexID].gmt));
					
				} else {
					var localDate = new Date().toLocaleString('en-US', { timeZone: couponapp_settings.couponapp_widgets[activeIndexID].gmt });
					localDate = new Date(localDate);
				}
				//console.log("After : " + localDate  );
				var utcHours = localDate.getHours();
				var utcMin = localDate.getMinutes();
				var utcDay = localDate.getDay();
				
				//console.log( "sdfsdfds: " +couponapp_settings.couponapp_widgets[activeIndexID].gmt);
				//console.log(utcHours + ' == ' +utcMin + ' == ' +utcDay )
				
                for (var rule = 0; rule < displayRules.length; rule++) {
                    var hourStatus = 0;
                    var minStatus = 0;
                    var checkForTime = 0;
                    var nextday = 0;					
					
					if ( displayRules[rule].start_hours == 0 && displayRules[rule].end_hours == 0 && displayRules[rule].start_time == '' && displayRules[rule].end_time == '' ) {
						displayStatus = 1;
					}
					
                    if (displayRules[rule].days == -1) {
                        checkForTime = 1;
                    } else if (displayRules[rule].days >= 0 && displayRules[rule].days <= 6) {
                        if (displayRules[rule].days == utcDay) {
                            checkForTime = 1;
                        }
                    } else if (displayRules[rule].days == 7) {
                        if (utcDay >= 0 && utcDay <= 4) {
                            checkForTime = 1;
                        }
                    } else if (displayRules[rule].days == 8) {
                        if (utcDay >= 1 && utcDay <= 5) {
                            checkForTime = 1;
                        }
                    } else if (displayRules[rule].days == 9) {
                        if (utcDay == 5 || utcDay == 6) {
                            checkForTime = 1;
                        }
                    }
					
					
                    if ( displayRules[rule].start_hours > displayRules[rule].end_hours) {
                        if(checkForTime == 0){
                            displayRules[rule].days = displayRules[rule].days+1;
                        }
                        if (displayRules[rule].days == 0) {
                            checkForTime = 1;
                        }else if (displayRules[rule].days >= 1 && displayRules[rule].days <= 7) {
                            checkForTime = 1;
                        }else if (displayRules[rule].days == 8) {
                            if (utcDay >= 1 && utcDay <= 5) {
                                checkForTime = 1;
                            }
                        }else if (displayRules[rule].days == 9) {
                            if (utcDay >= 2 && utcDay <= 6) {
                                checkForTime = 1;
                            }
                        } else if (displayRules[rule].days == 10) {
                            if (utcDay == 6 || utcDay == 0) {
                                checkForTime = 1;
                            }
                        }
                        if(0 <= displayRules[rule].end_hours && utcHours>= displayRules[rule].end_hours){
                            nextday = 1;
                        }
                    }
                    if (checkForTime == 1) {
						
                        if (utcHours > displayRules[rule].start_hours && utcHours < displayRules[rule].end_hours) {
                            hourStatus = 1;
                        } else if (utcHours == displayRules[rule].start_hours && utcHours < displayRules[rule].end_hours) {
                            if (utcMin >= displayRules[rule].start_min) {
                                hourStatus = 1;
                            }
                        } else if (utcHours > displayRules[rule].start_hours && utcHours == displayRules[rule].end_hours) {
                            if (utcMin <= displayRules[rule].end_min) {
                                hourStatus = 1;
                            }
                        } else if (utcHours == displayRules[rule].start_hours && utcHours == displayRules[rule].end_hours) {
                            if (utcMin >= displayRules[rule].start_min && utcMin <= displayRules[rule].end_min) {
                                hourStatus = 1;
                            }
                        } else if (displayRules[rule].start_hours > displayRules[rule].end_hours) {
                            if(utcHours >= displayRules[rule].start_hours){
                                if (utcMin >= displayRules[rule].start_min && utcMin <= displayRules[rule].end_min) {
                                    hourStatus = 1;
                                }
                            }

                            if(nextday == 1 && utcHours <= displayRules[rule].end_hours){
                                if (utcMin >= displayRules[rule].start_min && utcMin <= displayRules[rule].end_min) {
                                    hourStatus = 1;
                                }
                            }
                        }

                        if (hourStatus == 1) {
                            if (utcMin >= displayRules[rule].start_min && utcMin <= displayRules[rule].end_min) {
                                minStatus = 1;
                            }
                        }
                    }
                    if (hourStatus == 1 && checkForTime == 1) {
                        displayStatus = 1;
                    }
                    if (displayStatus == 1) {
                        rule = displayRules.length + 1;
                    }
                }
            } else {
                displayStatus = 1;
            }
        } else {
            displayStatus = 1;
        }
        return displayStatus;
    }
	
	var createCouponappCookie = function(name, value, days){
		if (days) {
			var expiry = new Date();
			expiry.setTime(expiry.getTime()+(days*24*60*60*1000));
			var expires = "; expires=" + expiry.toGMTString();
		} else {
			var expires = "";
		}
		document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
	}
	
	var readCouponappCookie = function(name){
		var nameEQ = escape(name) + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0)
			return unescape(c.substring(nameEQ.length, c.length));
		}
		return null;
	}
	
	function coupon_ownerevent(jQuery, event) {
        jQuery.ajax({
            type: "POST",
            url: couponapp_domain + '/couponapp_front/addmaxvisitors',
            data: {'storeid': couponapp_storeid, 'event': event},
            //dataType: "JSON",
            success: function (response) {

            }
        });
    }
	
	CouponAppReadyJavaScript = function(jQuery){
		jQuery(document).ready(function(){		
		
			/*Remove Animation on Click */
			jQuery(document).on("click touch", ".couponapp-open-state-click .tab-icon" , function(){
				var id = jQuery(this).parent().parent().attr( 'id' );				
				if ( jQuery( '#' + id ).hasClass( "couonapp-active" ) ) {
					jQuery( '#' + id ).removeClass( 'couonapp-active');
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					sessionStorage.setItem( id + 'couponapp_close_widget', 'yes');
					if ( jQuery( '#' + id ).hasClass( "couponapp-open-always" ) ) {
						jQuery('#' + id + ' .tab-text').show();
					}
					return;
				}
				
				var widget_id = jQuery(this).data('widget-id');
				var shop_id = jQuery(this).data('shop-id');
				var coupon_open = widget_id +'-'+shop_id;
				var is_updatecouponopen = localStorage.getItem( 'is_updatecouponopen' + coupon_open);
				if ( !jQuery( '#' + id ).hasClass( "couonapp-active" ) && is_updatecouponopen != 'yes' ) {
					updatecouponopen( jQuery, widget_id, shop_id);				
					localStorage.setItem( 'is_updatecouponopen' + coupon_open, 'yes');
				}
				
				jQuery( '#' + id ).addClass( 'couonapp-active');
				setCountDownTimer(jQuery);
				/*
				if ( jQuery( '#' + id ).hasClass( "couponapp-style-2" ) ) {
					jQuery('#' + id + ' .tab-box-content.tab-box-email-content').css({
					"opacity":"0",    
					}).fadeIn("fast").animate({opacity:1});
					
						
					jQuery('#' + id + ' .tab-box-content.tab-box-couponcode-content').hide();
					//jQuery('#' + id + ' .tab-box-content.tab-box-email-content').fadeIn("slow").animate({opacity:'1'});
				} else {
					jQuery('#' + id + ' .tab-box-content').css({
					"opacity":"0",
					}).fadeIn("fast").animate({opacity:1});
				}
				*/
				jQuery( '#' + id ).removeClass (function (index, className) {				
					return (className.match (/(^|\s)couponapp-\S+-animation/g) || []).join(' ');
				});
				
				/* Save Close in Session Storage */
				var session_tab = sessionStorage.getItem(id + 'couponapp_close');		
				if ( session_tab === 'close' ) {			
					jQuery('#' + id + ' .tab-text').hide();
				}
				if ( jQuery( '#' + id ).hasClass( "couponapp-open-first" ) ) {
					sessionStorage.setItem( id + 'couponapp_close', 'close');
					jQuery('#' + id + ' .tab-text').hide();
				}
				sessionStorage.setItem( id + 'couponapp_open', 'yes');
				
				if ( jQuery( '#' + id ).hasClass( "coupon-pending-message" )) {
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					jQuery('#' + id + ' .coupon-pending-message').remove();
				}
			});
			
			/* Remove Animation on Hover */
			jQuery(document).on("click touch", ".couponapp-open-state-hover-open .tab-icon" , function(){
				var id = jQuery(this).parent().parent().attr( 'id' );
				
				if ( jQuery( '#' + id ).hasClass( "couonapp-active" ) ) {
					jQuery( '#' + id ).removeClass( 'couonapp-active');
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					jQuery('#' + id).removeClass( 'couponapp-open-state-hover-open');
					jQuery('#' + id).addClass( 'couponapp-open-state-click');
					setTimeout(function(){
						jQuery('#' + id).addClass( 'couponapp-open-state-hover');
					}, 100 );
					
					return;
				}
			});
			//mouseover
			jQuery(document).on("mouseenter touch", ".couponapp-open-state-hover .tab-icon" , function(){
				var id = jQuery(this).parent().parent().attr( 'id' );
				
				var widget_id = jQuery(this).data('widget-id');
				var shop_id = jQuery(this).data('shop-id');
				
				if ( jQuery( '#' + id ).hasClass( "couonapp-active" ) ) {				
					return;
				}
				var coupon_open = widget_id +'-'+shop_id;
				var is_updatecouponopen = localStorage.getItem( 'is_updatecouponopen' + coupon_open);
				if ( !jQuery( '#' + id ).hasClass( "couonapp-active" ) && is_updatecouponopen != 'yes' ) {
					updatecouponopen( jQuery, widget_id, shop_id);
					localStorage.setItem( 'is_updatecouponopen' + coupon_open, 'yes');
				}
				
				jQuery('#' + id).removeClass (function (index, className) {				
					return (className.match (/(^|\s)couponapp-\S+-animation/g) || []).join(' ');
				});
				jQuery('#' + id ).addClass( 'couonapp-active');	
				setCountDownTimer(jQuery);
				
				/*
				if ( jQuery( '#' + id ).hasClass( "couponapp-style-2" ) ) {
					jQuery('#' + id + ' .tab-box-content.tab-box-email-content').css({
					"opacity":"0",
					}).fadeIn('fast').animate({opacity:1});
						
					jQuery('#' + id + ' .tab-box-content.tab-box-couponcode-content').hide();
				} else {
					jQuery('#' + id + ' .tab-box-content').css({
					"opacity":"0",
					}).fadeIn("fast").animate({opacity:1});
					
				}
				*/
				jQuery('#' + id).addClass( 'couponapp-open-state-click');
				//jQuery('#' + id).removeClass( 'couponapp-open-state-hover');
				
				/* Save Close in Session Storage */
				var session_tab = sessionStorage.getItem(id + 'couponapp_close');		
				if ( session_tab === 'close' ) {			
					jQuery('#' + id + ' .tab-text').hide();
				}
				if ( jQuery( '#' + id ).hasClass( "couponapp-open-first" ) ) {
					sessionStorage.setItem( id + 'couponapp_close', 'close');
					jQuery('#' + id + ' .tab-text').hide();
				}
				
				sessionStorage.setItem( id + 'couponapp_open', 'yes');
				
				if ( jQuery( '#' + id ).hasClass( "coupon-pending-message" )) {
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					jQuery('#' + id + ' .coupon-pending-message').remove();
				}
			});
			
			/*  Coupon tab close event */
			jQuery(document).on( "click touch", ".coupon-tab-close" , function(){
				
				var id = jQuery(this).parent().parent().attr( 'id' );				
				if ( typeof id == 'undefined' ) {
					var id = jQuery(this).parent().parent().parent().attr( 'id' );				
					if ( typeof id == 'undefined' ) {
						var id = jQuery(this).parent().parent().parent().parent().attr( 'id' );
					}
				}				
				
				jQuery( '#' + id).removeClass( 'couonapp-active');
				jQuery(this).parent().attr("style",'');
				
				//if ( jQuery( '#' + id ).hasClass('couponapp-open-state-open') ) 
				{
					sessionStorage.setItem( id + 'couponapp_close_widget', 'yes');
				}
				
				if ( jQuery( '#' + id ).hasClass( "couponapp-open-state-hover-open" ) ) {
					jQuery('#' + id).addClass( 'couponapp-open-state-hover');
					jQuery('#' + id).removeClass( 'couponapp-open-state-hover-open');
				}
				
				jQuery('#' + id).removeClass (function (index, className) {				
					return (className.match (/(^|\s)couponapp-\S+-animation/g) || []).join(' ');
				});
				
				sessionStorage.setItem( id + 'couponapp_open', 'yes');
				
				if ( jQuery( '#' + id ).hasClass( "coupon-pending-message" )) {
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					jQuery('#' + id + ' .coupon-pending-message').remove();
				}
				
				if ( jQuery( '#' + id ).hasClass( "couponapp-open-always" ) ) {
					jQuery('#' + id + ' .tab-text').show();
				}
			});
			
			/*  Coupon popup overlay close event */
			jQuery(document).on( "click touch", ".couponx-popup-overlay" , function(e){				
				var id = jQuery(this).parent().parent().attr( 'id' );
				if ( typeof id == 'undefined' ) {
					var id = jQuery(this).parent().parent().parent().parent().attr( 'id' );
					if ( typeof id == 'undefined' ) {
						var id = jQuery(this).parent().parent().parent().attr( 'id' );
					}
				}
				jQuery( '#' + id).removeClass( 'couonapp-active');
				jQuery(this).parent().attr("style",'');
				//if ( jQuery( '#' + id ).hasClass('couponapp-open-state-open') ) 
				{
					sessionStorage.setItem( id + 'couponapp_close_widget', 'yes');
				}
				
				if ( jQuery( '#' + id ).hasClass( "couponapp-open-state-hover-open" ) ) {
					jQuery('#' + id).addClass( 'couponapp-open-state-hover');
					jQuery('#' + id).removeClass( 'couponapp-open-state-hover-open');
				}
				
				jQuery('#' + id).removeClass (function (index, className) {				
					return (className.match (/(^|\s)couponapp-\S+-animation/g) || []).join(' ');
				});
				
				sessionStorage.setItem( id + 'couponapp_open', 'yes');
				
				if ( jQuery( '#' + id ).hasClass( "coupon-pending-message" )) {
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					jQuery('#' + id + ' .coupon-pending-message').remove();
				}
			});
			
			/* Copy Coupon Code on click event */
			jQuery(document).on( "click touch", ".copy-to-clipboard" , function(e){			
				e.preventDefault();
				var widget_id = jQuery(this).data('widget-id');
				var shop_id = jQuery(this).data('shop-id');
				var widget_count = jQuery(this).data('widget-count');
				
				/* */
				var copyText = document.getElementById("copy-coupon-inputcode-" + widget_count);

				/* Select the text field */			  
				copyText.select();
				copyText.setSelectionRange(0, 99999); /*For mobile devices*/

				/* Copy the text inside the text field */
				document.execCommand("copy");

				jQuery( '#tab-box-front-' +widget_count +' .coupon-code-text .label-tooltip' ).addClass('tooltip-show');
				setTimeout(function() {
					jQuery('#tab-box-front-' +widget_count +' .coupon-code-text .label-tooltip').removeClass('tooltip-show');
				}, 1000);				  
				
				/* */
				var couponget = widget_id +'-'+shop_id;
				var is_updatecouponcodeget = localStorage.getItem( 'is_updatecouponcodeget' + couponget);
				if ( !jQuery( this ).hasClass( "couoncode-copied" ) && is_updatecouponcodeget != 'yes' ) {
					updatecouponcodeget( jQuery, widget_id, shop_id);				
					localStorage.setItem( 'is_updatecouponcodeget' + couponget, 'yes');
				}
				
				jQuery( this ).addClass( "couoncode-copied" );
				
				if ( typeof jQuery( '#tab-box-front-' +widget_count ).data('close-widget') != 'undefined') {
					var close_widget_seconds = jQuery( '#tab-box-front-' +widget_count ).data('close-widget') * 1000;
					
					var close_widget_after_seconds = function(widget_count, jQuery){
						jQuery('#tab-box-front-' +widget_count ).removeClass('couonapp-active');
						sessionStorage.setItem( 'tab-box-front-' + widget_count + 'couponapp_close_widget', 'yes');
					};
					setTimeout(close_widget_after_seconds, close_widget_seconds, widget_count, jQuery);
				}
				
				if ( jQuery( '#tab-box-front-' + widget_count ).hasClass('couponapp-open-state-open') ) {
					sessionStorage.setItem( 'tab-box-front-' + widget_count + 'couponapp_close_widget', 'yes');
					
				}
				
				/* Hide Tab after Conversation */
				if ( jQuery( '#tab-box-front-' + widget_count ).hasClass( 'couponapp-tab-hide' ) ) {
					sessionStorage.setItem( 'tab-box-front-' + widget_count + '-couponapp_tab_hide', 'yes');
				}
				
				
			});
			
			/* Click event for Coupon Code link */
			jQuery(document).on( "click touch", ".coupon-code-link" , function(e){		
				
				var widget_id = jQuery(this).data('widget-id');
				var shop_id = jQuery(this).data('shop-id');
				var couponget = widget_id +'-'+shop_id;
				var widget_count = jQuery(this).data('widget-count');
				var is_updatecouponcodeget = localStorage.getItem( 'is_updatecouponcodeget' + couponget);
				if ( !jQuery( this ).hasClass( "couoncode-copied" ) && is_updatecouponcodeget != 'yes' ) {
					updatecouponcodeget(jQuery, widget_id, shop_id);
					localStorage.setItem( 'is_updatecouponcodeget'+couponget, 'yes');
				}
				
				if ( typeof jQuery( '#tab-box-front-' +widget_count ).data('close-widget') != 'undefined') {
					var close_widget_seconds = jQuery( '#tab-box-front-' +widget_count ).data('close-widget') * 1000;
					
					var close_widget_after_seconds = function(widget_count, jQuery){
						jQuery('#tab-box-front-' +widget_count ).removeClass('couonapp-active');
						sessionStorage.setItem( 'tab-box-front-' + widget_count + 'couponapp_close_widget', 'yes');
					};
					setTimeout(close_widget_after_seconds, close_widget_seconds, widget_count, jQuery);
				}				
				if ( jQuery( '#tab-box-front-' + widget_count ).hasClass('couponapp-open-state-open') ) {
					sessionStorage.setItem( 'tab-box-front-' + widget_count + 'couponapp_close_widget', 'yes');
					jQuery('#tab-box-front-' +widget_count ).removeClass('couonapp-active');
				}
				
				/* Hide Tab after Conversation */
				if ( jQuery( '#tab-box-front-' + widget_count ).hasClass( 'couponapp-tab-hide' ) ) {
					sessionStorage.setItem( 'tab-box-front-' + widget_count + '-couponapp_tab_hide', 'yes');
				}
				
				return true;
			});
			
			jQuery(document).on( "click", ".coupon-email-button" , function(e){			
				
				var coupon_widget_id = jQuery(this).data( 'widget-id' );
				var widget_id		= jQuery( '#' + coupon_widget_id + ' .tab-box-email-content input[name="couponapp-email"]').data( 'widget-id' );
				var shop_id		= jQuery( '#' + coupon_widget_id + ' .tab-box-email-content input[name="couponapp-email"]').data( 'shop-id' );
				var email		= jQuery( '#' + coupon_widget_id + ' .tab-box-email-content input[name="couponapp-email"]').val();
				
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!regex.test(email)) {
					email = '';				
				}
				
				var consent_id		= jQuery( this).data( 'consent-id' );
				var consent		= jQuery( this).data( 'consent' );
				if ( consent == 1 && jQuery('#' + consent_id).prop("checked") == false &&  jQuery('#' + consent_id).attr('required') == 'required') {
					
					return true;
					
				} else if ( coupon_widget_id != '' && widget_id != '' && shop_id != '' && email != '' ) {
					e.preventDefault();
					
					//if ( jQuery( '#' + coupon_widget_id ).hasClass('couponapp-open-state-open') ) 
					{
						sessionStorage.setItem( coupon_widget_id + 'couponapp_close_widget', 'yes');
					}
					
					var couponappurl = couponapp_domain + '/couponapp_front/sendemail?fullpathName='+encodeURI(fullpathName);
					jQuery.ajax({
						type: "POST",
						url: couponappurl,
						data: {
								'email': email,
								'widget_id' : widget_id,
								'shop_id' : shop_id,
								'shop_url': shopurl,
								'is_consent': (jQuery('#' + consent_id).length != 0 && jQuery('#' + consent_id).prop("checked") == true ) ? 1 : 0,
							},
						dataType: "JSON",
						success: function (response) {
							
							if ( response.error == true && response.errors != '' ) {
								jQuery( '#' + coupon_widget_id + ' .tab-box-email-content .form-wrap').after('<p class="coupon-email-error" style="color: #ff0000; font-size: 12px;">'+ response.errors +'</p>');
								
								setTimeout(function () {
									jQuery('#' + coupon_widget_id + ' .tab-box-email-content p.coupon-email-error').slideUp("slow");
									
								}, 5000);
							}
							if ( response.show_coupon === true ) {
								//jQuery( '#' + coupon_widget_id + ' .tab-box-email-content').attr('style','');							
								jQuery( '#' + coupon_widget_id + ' .tab-box-email-content').fadeOut(200);
								
								var show_widget_coupon_code = function(coupon_widget_id){
									jQuery( '#' + coupon_widget_id + ' .tab-box-couponcode-content').fadeIn('slow');
								};
								setTimeout(show_widget_coupon_code, 200, coupon_widget_id);
								
								jQuery( '#' + coupon_widget_id ).addClass('couponapp-email-coupon-code-show');
								sessionStorage.setItem( coupon_widget_id + 'show_coupon_code', 'yes');
							}
						}
					});
					
					return false;
				} else {				
					if ( consent == 1 && jQuery('#' + consent_id).prop("checked") == false &&  jQuery('#' + consent_id).attr('required') == 'required') {
						return true;
					}
					
					if ( email == '' ) {
						return true;
					}
				}
				
				return false;
			});
					
			
			jQuery(document).on( "click touch", ".couponapp-open-state-open .tab-icon" , function(e){
				var id = jQuery(this).parent().parent().attr( 'id' );					
				if ( jQuery( '#' + id ).hasClass( "couonapp-active" ) ) {
					jQuery( '#' + id ).removeClass( "couonapp-active" )
					sessionStorage.setItem( id + 'couponapp_pending_message', 'yes');
					sessionStorage.setItem( id + 'couponapp_close_widget', 'yes');
					jQuery('#' + id + ' .coupon-pending-message').remove();
					if ( jQuery( '#' + id ).hasClass( "couponapp-open-always" ) ) {
						jQuery('#' + id + ' .tab-text').show();
					}
				} else {
					jQuery( '#' + id ).addClass( "couonapp-active" )
				}
			});
			
			jQuery(document).on( "click touch", "#coupon_ownerpopup .coupon_ownerpopupclose" , function(e){
				if (jQuery(this).hasClass('coupon_riskabovefourdays') && !jQuery(this).hasClass('coupon_eventsopen')) {
					//first click_on_x
					jQuery(this).addClass('coupon_eventsopen');
					jQuery("body .formappownerpopup .coupon_content, body .formappownerpopup .coupon_footer").hide();
					jQuery("body .formappownerpopup .coupon_content.coupon_reskmoreevents").show();
				} else if (jQuery(this).hasClass('coupon_eventsopen')) {
					coupon_ownerevent(jQuery,'dont_remind_me');
					jQuery("body #coupon_ownerpopup").hide();
				} else {
					//second time click_on_x
					jQuery("body #coupon_ownerpopup").hide();
					coupon_ownerevent(jQuery,'click_on_x');
				}
			})
			
			jQuery(document).on( "click touch", ".coupon_ownerremind .coupon_remind" , function(e){		
				coupon_ownerevent(jQuery,'clicked_on_remind_me');
				jQuery("body #coupon_ownerpopup").hide();
			}),
			
			jQuery(document).on( "click touch", ".coupon_ownerremind .coupon_dontremind" , function(e){
				coupon_ownerevent(jQuery,'dont_remind_me');
				jQuery("body #coupon_ownerpopup").hide();
			}),
			
			jQuery(document).on( "click touch", ".coupon_upgradenow" , function(e){		
				coupon_ownerevent(jQuery,'click_on_upgrade');
				jQuery("body #coupon_ownerpopup").hide();
			})
			
			
		});
		
		
		
		
	}
	
	
	/* Load jQuery Script */	
	if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {

		loadScript('//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function(){
			COUPONAPPS = jQuery.noConflict(true);
			COUPONAPPS(document).ready(function() {
				CouponAppJavaScript(COUPONAPPS);
				CouponAppReadyJavaScript(COUPONAPPS);
			});
		});
	} else {
		CouponAppJavaScript(jQuery);
		CouponAppReadyJavaScript(jQuery);
	}
})();

function close_couponx() {
	var loadScript_widget = function(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";

		// If the browser is Internet Explorer.
		if (script.readyState){ 

			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
			// For any other browser.
		} else {
			script.onload = function(){
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	loadScript_widget('//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function(){
		COUPONAPPS = jQuery.noConflict(true);
		COUPONAPPS('.tab-box.tab-front-box').removeClass('couonapp-active');
		COUPONAPPS('.tab-box.tab-front-box').each(function(){
			
			COUPONAPPS(this).removeClass('couonapp-active');		
			
		});		
	});
}
function launch_coupon_x( widget_no = '1'){
	var count = 1;	
	
	var loadScript_widget = function(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";

		// If the browser is Internet Explorer.
		if (script.readyState){ 

			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
			// For any other browser.
		} else {
			script.onload = function(){
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
	loadScript_widget('//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function(){
		COUPONAPPS = jQuery.noConflict(true);
		COUPONAPPS('.tab-box.tab-front-box').removeClass('couonapp-active');
		COUPONAPPS('.tab-box.tab-front-box').each(function(){
			
			if ( widget_no == count) {
				COUPONAPPS(this).addClass('couonapp-active');
				var widgetid = COUPONAPPS(this).attr( 'id' );
				var widget_id = COUPONAPPS('#' + widgetid + ' .tab-box-wrap .tab-icon').data('widget-id');
				var shop_id = COUPONAPPS('#' + widgetid + ' .tab-box-wrap .tab-icon').data('shop-id');
				
				var coupon_open = widget_id +'-'+shop_id;
				var is_updatecouponopen = localStorage.getItem( 'is_updatecouponopen' + coupon_open);				
				if ( is_updatecouponopen != 'yes' ) {					
					url = couponapp_domain + '/couponapp_front/updatecouponopen';
					COUPONAPPS.ajax({
						type: "POST",
						url: url,
						data: {'shop_url': shopurl,'widget_id':widget_id,"shop_id":shop_id},
						//dataType: "JSON",
						success: function (response) {

						}
					});
					
					localStorage.setItem( 'is_updatecouponopen' + coupon_open, 'yes');
				}
				//setCountDownTimer(COUPONAPPS);
				return false;
			}
			count++;
		});		
	});
}
