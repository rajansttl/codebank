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
	var mobilePort = 800, ipadView = 1024, wideScreen = 1600;
	
	/*================= Global Variable End =================*/	
	
	//css3 style calling 
	document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	



$(document).ready(function(){
	
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
//Accessibility Toolbar
		// Get the anchor element
		const darkContrastButton = document.getElementById('darkContrastButton');

		// Add a click event listener to the anchor
		darkContrastButton.addEventListener('click', () => {
		  // Toggle the 'wob' class on the body element
		  document.body.classList.toggle('wob');
		});
		//Accessibility Toolbar
		$('.accessibilityBtn').click(function (e) {
			e.preventDefault();
			$('body').addClass('accessibility_toolbar_open');
		});

		$('.accessibility_toolbar_close').click(function (e) {

			e.preventDefault();
			$('body').removeClass('accessibility_toolbar_open');
		});
		
$(".lang-btn").click(function(){
	$(".langs").toggle();
});
	   
$('#show-image').on("click", function(){
  $('.headerRow,.homeBannerWrap  ,.ministersProImg').find('img').toggle('hide');
  $(".imgShowHideText").toggleClass("showImg");
});

$('#invert-images').on("click", function(){
  $('.headerRow , .swiper-slide , .ministersProImg').find('img').toggleClass("invertImages");
});

$('#saturate-body').on("click", function(){
  $(' .swiper-slide , .ministersProImg').toggleClass("saturate");
});

$('.accessibilityItem a.cursor').click(function (event) {
	event.preventDefault();
	$('body').toggleClass('cursorLarger');
  });


  
/*$('.accessibilityItem a').click(function (event) {
  event.preventDefault();
  $('body').toggleClass('cursor');
});*/

jQuery('.user-logged-in #block-dropdownlanguage1 .dropbutton-multiple').on('click', function(event){
  event.preventDefault();
  jQuery(this).toggleClass('open');
});


$(".openbtn").click(function () {
$(this).toggleClass("active");
});
$(window).resize(function () {
//   PositionCheck();
});
$("#highlight-links").click(function () {
$('.footer, .otherLinksBox, .ministersPro , .ministersProBox ,#nav li, .topStrip ul li ').find('a').toggleClass("highlightLinks");
$(".linkShowHideText").toggleClass("showLink");
});


// font resize

var originalFontSize = parseFloat($('#content').css('font-size'));
      var currentSize = originalFontSize;
      var increaseCount = 0;
      var decreaseCount = 0;
      var maxClicks = 2;

      $('#increase').click(function() {
        if (increaseCount < maxClicks) {
          currentSize += 2;
          $('body').css('font-size', currentSize + 'px');
          increaseCount++;
          decreaseCount = Math.max(0, decreaseCount - 1); // reset opposite count
        }
      });

      $('#decrease').click(function() {
        if (decreaseCount < maxClicks) {
          currentSize -= 2;
          $('body').css('font-size', currentSize + 'px');
          decreaseCount++;
          increaseCount = Math.max(0, increaseCount - 1); // reset opposite count
        }
      });

      $('#reset').click(function() {
        currentSize = originalFontSize;
        $('body').css('font-size', currentSize + 'px');
        increaseCount = 0;
        decreaseCount = 0;
      });
		
		
		$("#increase, #decrease").click(function(){
			$(".fontResetBtn").show();
		});
		$("#reset").click(function(){
			$(".fontResetBtn").hide();
		});
// accessibility end



	//second menu



	$(".mainNavigationa .menuMobIcon ").click(function(){
		$(this).siblings("ul").slideToggle();
		$(this).parent().siblings().find("ul").hide();
		$(this).toggleClass("active");
	});
	$(".secondMenuBtn").click(function(){
		$("body").addClass("secondMenuOpen");
	});
	
	$(".closeSecondMenuBtn").click(function(){
		$("body").removeClass("secondMenuOpen");
	});

	 /*navigation*/
	 if ($(".mainNavigation").length) {
		$('#nav li:has(ul)').addClass('hassub');
	}
	$('#nav li.hassub > a').each(function() {
		$(this).append(' <span class="fa fa-chevron-down"></span>');
	  });
	  
	
	//Navigation
	if( $("#nav").length) {
		if($(".toggleMenu").length == 0){
			$("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');	
		}
		$(".toggleMenu").click(function() {
			$(this).toggleClass("active");
			$("body").addClass("activeMobNav");
			return false;
		});
		$("#nav li a, #navMob li a").each(function() {
			if ($(this).next().length) {
				$(this).parent().addClass("parent");
			};
		})
		$("#nav li.parent").each(function () {
			if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon fa fa-angle-down"></i>')
		});
		$("#navMob li.parent").each(function() {
			if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon fa fa-angle-down"></i>')
		});
		dropdown('nav', 'hover', 1);
		adjustMenu();	
	};
	
	
	
	menuMove(); 
	
	  $(".menuIcon ").click(function() {
            $(this).siblings("ul").slideToggle();
            $(this).toggleClass("active");
        });
	  

	 });

/*================= On Document Load and Resize Start =================*/
$(window).on('resize', function() {

		ww = document.body.clientWidth;
		wh = document.body.clientHeight;

		if ($("body").hasClass("mobilePort")) {
			$("body").removeClass("wob");
		}
		
		

	}).trigger('resize');
/*================= On Document Load and Resize End =================*/
	
/*================= On Window Resize Start =================*/
$(window).on('resize orientationchange', function() {
	getWidth();
	adjustMenu();
});
/*================= On Window Resize End =================*/


/*================= On Document Load End =================*/


	function getWidth() {
	ww = document.body.clientWidth;
	if (ww > wideScreen) {
		$('body').removeClass('device').addClass('desktop widerDesktop');
	}
	if (ww > mobilePort && ww <= wideScreen) {
		$('body').removeClass('device widerDesktop').addClass('desktop');
	}
	if (ww <= mobilePort) {
		$('body').removeClass('desktop widerDesktop').addClass('device');
	}
	if (ww > 767 && ww < 1025) {
		$('body').addClass('ipad');
	} else {
		$('body').removeClass('ipad');
	}
	if (ww > 319 && ww < 768) {
		$('body').addClass('mobile');
	} else {
		$('body').removeClass('mobile');
	}}		

			

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
		// Responsive Tabing Script
		if( $(".resTab2").length) {
			$('.resTab2').responsiveTabs({
				 rotate: false
				,startCollapsed: 'tab' //accordion
				,collapsible: 'accordion' //accordion
				,scrollToAccordion: true
				,scrollToAccordionOnLoad:false
			});
		};

		// Responsive Tabing Script
		if( $(".resTab3").length) {
			$('.resTab3').responsiveTabs({
					rotate: false
				,startCollapsed: 'tab' //accordion
				,collapsible: 'accordion' //accordion
				,scrollToAccordion: true
				,scrollToAccordionOnLoad:false
			});
		};


			
		var homeBanner = new Swiper(".homeBanner", {
					pagination: {
					el: ".swiper-pagination",
					clickable: true,
							
					},
		});



var otherLinksSlider = new Swiper(".otherLinksSlider", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
	  640: {
		slidesPerView: 2,
		spaceBetween: 10,
	  },
	  768: {
		slidesPerView: 4,
		spaceBetween: 10,
	  },
	  1024: {
		slidesPerView: 6,
		spaceBetween: 15,
	  },
	},
  });
		
		


})(jQuery);  //function end


 



//mobile menu function
function menuMove() {
    if ($(".mobileNav").length == 0) {
        var navigation = $('#nav').clone();
        $(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if ($(".mobileNav #navMob").length == 0) {
            $(".mobileNav #nav").attr("id", "navMob");
            $(".mobileNav").append("<span class='close homeSprite'></span>");
            $(".mobileNav").append("<span class='navigationText'>Navigation</span>");
            $(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            $(".mobileNav .close").click(function() {
                $("body").removeClass("activeMobNav");
            });
        }
    }
}
//Navigation
function mobileClickNav() {
    if ($("#navMob").length) {
        if ($(".toggleMenu").length == 0) {
            $("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar homeSprite"></span></a></div>');
        }
        $(".toggleMenu").off("click");
        $(".toggleMenu").click(function() {
            $(this).toggleClass("active");
            $("body").addClass("activeMobNav");
            return false;
        });
        $("#navMob li a").each(function() {
            if ($(this).next().length) {
                $(this).parent().addClass("parent");
            };
        });
        $("#navMob li.parent").each(function() {
            if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon homeSprite">&nbsp;</i>')
        });
        adjustMenu();
    };
}


