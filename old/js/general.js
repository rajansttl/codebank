/*---------------------------------------------------------------------*/
;(function($){

	/*================= Global Variable Start =================*/		   
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var IEbellow9 = !$.support.leadingWhitespace;
	var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
	var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
	function isIEver () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}
	//if (isIEver () == 8) {}
			   
	var jsFolder = "js/";
	var cssFolder = "css/";	
	var ww = document.body.clientWidth, wh = document.body.clientHeight;
	var mobilePort = 1023, ipadView = 1024, wideScreen = 1600;
	
	/*================= Global Variable End =================*/	
	
	//css3 style calling 
	document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	
	/*================= On Document Load Start =================*/	
	$(document).ready( function(){
		$('.skipContent').on('click',function (e) {
		e.preventDefault();
	
		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		});
		setTimeout(function(){
				$('#loading').fadeOut();
				$('.vCenter').each(function () {$(this).verticalAlign();});
			}, 800);
	
		$('body').removeClass('noJS').addClass("hasJS");
		$(this).scrollTop(0);
		getWidth();

		// Multiple Ticker 1	
		if( $(".ticker").length){
			$('.ticker').each(function(i){
				$(this).addClass('tickerDiv'+i).attr('id', 'ticker'+i);
				$('#ticker'+i).find('.tickerDivBlock').first().addClass('newsTikker'+i).attr('id', 'newsTikker'+i);
				$('#ticker'+i).find('a.playPause').attr('id', 'stopNews'+i)
				$('#newsTikker'+i).vTicker({ speed: 1E3, pause: 4E3, animation: "fade", mousePause: false, showItems: 3, height: 460, direction: 'up' })
				$("#stopNews"+i).click(function () {
					if($(this).hasClass('stop')){
						$(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
					}else{
						$(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
					}
					return false;
				});
			});
		};
// Responsive Tabing Script
	if( $(".resTab").length) { 
		$('.resTab').responsiveTabs({
			 rotate: false
			,startCollapsed: 'tab' //accordion
			,collapsible: 'accordion' //accordion
			,scrollToAccordion: true
			,scrollToAccordionOnLoad:false
		});
	};				
								
	if( $(".homePhotosSlider") ){
	var homePhotosSlider = new Swiper(".homePhotosSlider", {
	slidesPerView:1,
	navigation: { 	nextEl: ".homePhotosSlider-next", 	prevEl: ".homePhotosSlider-prev", 	  },
	spaceBetween: 0,							
					freeMode: true,							
						breakpoints: {
							0: { slidesPerView: 1},
								640: { slidesPerView: 1	},
								768: { slidesPerView: 1 },
								1199: {slidesPerView: 1 },  },
		  });	 }

				if( $(".homeVideosSlider") ){
	var homeVideosSlider = new Swiper(".homeVideosSlider", {
	slidesPerView:1,
	navigation: { 	nextEl: ".homeVideosSlider-next", 	prevEl: ".homeVideosSlider-prev", 	  },
	spaceBetween: 0,							
					freeMode: true,							
						breakpoints: {
							0: { slidesPerView: 1},
								640: { slidesPerView: 1	},
								768: { slidesPerView: 1 },
								1199: {slidesPerView: 1 },  },
		  });	 }

			if( $(".homeEventsSlider") ){
	var homeEventsSlider = new Swiper(".homeEventsSlider", {
	slidesPerView:1,
	navigation: { 	nextEl: ".homeEventsSlider-next", 	prevEl: ".homeEventsSlider-prev", 	  },
	spaceBetween: 0,							
					freeMode: true,							
						breakpoints: {
							0: { slidesPerView: 1},
								640: { slidesPerView: 1	},
								768: { slidesPerView: 1 },
								1199: {slidesPerView: 1 },  },
		  });	 }
	


// Swiper only mobile
    if ($(".activityMSlider").length == 1) {
        (function() {
            'use strict';
            const breakpoint = window.matchMedia( '(min-width:1200px)' );
            let activitiesSlider;
            const breakpointChecker = function() {
                if ( breakpoint.matches === true ) {
                    if ( activitiesSlider !== undefined ) activitiesSlider.destroy( true, true );
                    return;
                } else if ( breakpoint.matches === false ) {
                    return enableSwiper();
                }
            };
            const enableSwiper = function() {
            activitiesSlider = new Swiper ('.activitiesSectionContainer', {
                loop: true,
                slidesPerView: 4,            
                spaceBetween: 0,
                centeredSlides: false,
                navigation: {
                    nextEl: ".activityMSlider-next",
                    prevEl: ".activityMSlider-prev",
                },
                breakpoints: {
                    320:{

                        slidesPerView: 1,
                    },
                    575:{
                        slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 4,
                    },
                    991: {
                    slidesPerView: 5,
                    }
                }
            });
            };
            breakpoint.addListener(breakpointChecker);
            breakpointChecker();
        })(); / IIFE end /
    }


//Home Slider
	if($(".homeBanner").length){
		var homeSlider = new Swiper('.homeBanner .swiper-container', {
			spaceBetween: 0,
				speed: 2000,
				loop: true,
				keyboard: true,
				// effect: 'fade',		
				//parallax:true,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				pagination: false,
				navigation: {
					nextEl: '.homeBanner .slider__button-next',
					prevEl: '.homeBanner .slider__button-prev',
				},
			});
		$(".swiper-button-pause").toggle(function() {
			$(this).addClass('play');
			homeSlider.autoplay.stop();
		}, function() {
			$(this).removeClass('play');
			homeSlider.autoplay.start();
			return false;
		});
	}
	
	if($(".homeBanner").length){
		$(".homeBannerImgWrap").each(function(){
			var imagePath = $(this).find("img").attr("src");
			$(this).css("background-image","url( "+ imagePath +" )");
		});
	}
	if ($('.quickLeftmenu').length) {
			$('.mobileQuickLinks').on('click', function (e) {
				e.preventDefault();
				$('.rightMenuLink').stop().slideToggle();
			});
		}
	
		  if( $(".marqueeScrolling li").length > 1){
			var $mq = $('.marquee').marquee({
				 speed: 25000
				,gap: 0
				,duplicated: true
				,pauseOnHover: true
				});
			$(".btnMPause").toggle(function(){
				$(this).addClass('play');				
				$mq.marquee('pause');
			},function(){
				$(this).removeClass('play');
				$mq.marquee('resume');
				return false;
			});
		};
		 
		// depart-logo Logos Slider
		if ($(".departlogo").length) {
			var departlogo = new Swiper('.departlogo .swiper-container', {
				loop: true,
				speed: 800,
				slidesPerView: 5,
				spaceBetween: 30,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.dplNext',
					prevEl: '.dplPrev',
				},
				breakpoints: {
					1024: {
						slidesPerView: 4,
						spaceBetween: 0
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 0
					},
					479: {
						slidesPerView: 1,
						spaceBetween: 0
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 0
					}
				},
			});

			$(".swiper-button-pause").toggle(function () {
				$(this).addClass('play');
				departlogo.autoplay.stop();
			}, function () {
				$(this).removeClass('play');
				departlogo.autoplay.start();
				return false;
			});
		}

	
	//serach button new 
		if(  $(".searchBtn").length  ){				
		$(".searchBtn").click( function(){
			event.stopPropagation();
			$(".searchBox").slideToggle();
			$(".searchBtn").toggleClass(active);
		});
		}

	$(document).mouseup(function(e){
	    var container = $(" .searchContainer");

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	    	$(".searchBox").hide();
	    }
	});
		
		//Set Element to vertical center using padding
		$.fn.verticalAlign = function () {return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');};
		setTimeout(function(){
			$('.vCenter').each(function () {$(this).verticalAlign();});
		}, 800);
	// Back to Top function
	if( $("#backtotop").length){
		$(window).scroll(function(){
			if ($(window).scrollTop()>120){
			$('#backtotop').fadeIn('250').css('display','block');}
			else {
			$('#backtotop').fadeOut('250');}
		});
		$('#backtotop').click(function(){
			$('html, body').animate({scrollTop:0}, '200');
			return false;
		});
	};
	
	// Get Focus Inputbox
	if( $(".getFocus").length){
			$(".getFocus").each(function(){
			$(this).on("focus", function(){
			if ($(this).val() == $(this)[0].defaultValue) { $(this).val("");};
		  }).on("blur", function(){
			  if ($(this).val() == "") {$(this).val($(this)[0].defaultValue);};
		  });								  
		});
	};
		/*================= On Document Load and Resize Start =================*/
		$(window).on('resize', function () {
										 
			ww = document.body.clientWidth; 
			wh = document.body.clientHeight;		
			
			$('.vCenter').each(function () {$(this).verticalAlign();});	
			
			if($("body").hasClass("mobilePort")){
				$("body").removeClass("wob");
			}
			
			//$('.container').resize(function(){});
			
		}).trigger('resize');
		/*================= On Document Load and Resize End =================*/
		
		/*Navigation */
		if( $("#nav").length) {
			if($(".toggleMenu").length == 0){
				$("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');	
			}
			$(".toggleMenu").click(function() {
				$(this).toggleClass("active");
				$("#nav").slideToggle();
				return false;
			});
			$("#nav li a").each(function() {
				if ($(this).next().length) {
					$(this).parent().addClass("parent");
				};
			})
			$("#nav li.parent").each(function () {
				if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
			});
			dropdown('nav', 'hover', 1);
			adjustMenu();	
		};
		
		// Message on Cookie Disabled
		$.cookie('cookieWorked', 'yes', { path: '/' });
		if ($.cookie('cookieWorked') == 'yes') {
			}
		else{
			if( $("div.jsRequired").length == 0){
				$("body").prepend(
					'<div class="jsRequired">Cookies are not enabled on your browser. Need to adjust this in your browser security preferences. Please enable cookies for better user experience.</div>'
				);	
			}
		}
		
	});
	/*================= On Document Load End =================*/
	// To open External link Dialogbox for External links
		$('a').not(".litebox, .colorbox-load, .w3cLogos a, .videoPopupLink").filter(function() {
		return this.hostname && this.hostname !== location.hostname;
		}).click(function(e) {  
		e.preventDefault();
	  	var url = $(this).attr("href");		 
		 smoke.confirm("You are about to proceed to an external website. Click YES to proceed.", function(e){
			if (e){ 
				 window.open(url, "_blank");		
			}else{ 
				return false; 
			}
	}, {
		ok: "Yes",
		cancel: "No",
		classname: "custom-class",
		reverseButtons: true
	}); 
  });	


// To open Internal link Dialogbox for target_blank 

	$('a[target="_blank"]').addClass("taggetBlankLink");

	$('ul.rightLinks li a.taggetBlankLink, .ministerHome .whatsNew a.taggetBlankLink').click(function(e) { 
			e.preventDefault();
		if($(this).attr("target","_blank")){
		var url = $(this).attr("href");		 
		 smoke.confirm("NHAI Old Website Link will be opened in new tab of browser. Click OK to proceed.", function(e){
			if (e){ 
				 window.open(url, "_blank");		
			}else{ 
				return false; 
			}
			});
		}
	});
	/*================= On Window Resize Start =================*/	
	$(window).bind('resize orientationchange', function() {
		getWidth();												
		adjustMenu();
		$('.vCenter').each(function () {$(this).verticalAlign();});
	});
	
	/*================= On Window Resize End =================*/	
	
	/*================= On Window Load Start =================*/
	$(window).load(function() {
							
	});
	/*================= On Document Load End =================*/
	
	
function getWidth() {
	ww = document.body.clientWidth;
	if(ww>wideScreen){$('body').removeClass('device').addClass('desktop widerDesktop');}
	if(ww>mobilePort && ww<=wideScreen){	$('body').removeClass('device widerDesktop').addClass('desktop');}
	if(ww<=mobilePort) {$('body').removeClass('desktop widerDesktop').addClass('device');}
	if(ww > 767 && ww < 1025){$('body').addClass('ipad');}
	else {$('body').removeClass('ipad');}	
}

})(jQuery);

function validate() {
    return false;
};
