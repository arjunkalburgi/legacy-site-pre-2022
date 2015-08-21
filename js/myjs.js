// on load
$(window).ready(function (event) {
	poop = $(window).scrollTop();
	if (poop == 0) {
		// $("nav").css( 'backgroundColor', 'transparent ' );
		$("nav").animate({ 'backgroundColor': 'transparent' }, 500);

		// other one
		// $("nav").animate({ 'backgroundColor': '#007E60'});
	} else {
		$("nav").animate({ 'backgroundColor': '#007E60'});
	}

	// adjust footer height
	if (($(window).height() - $("nav").height()) > $("#contact").height()) {
		var height = $(window).height() - $("nav").height();
		$("footer").css({'height':height+'px'}); 
	}

	// adjust front banner height
	$("#index-banner").css({'height':$(window).height()+'px'}); 

	// adjust banner text position
	height = ($(window).height() - $(".text_h").innerHeight())/2;
	$(".banner-text-pos").css({'margin':height+'px auto'}); 

	// intro! 
	// if window height > div height 
	if (($(window).height() - $("nav").height()) > $("#intro").height()) {
		// increase div height and put up margins top and bottom. 
		$("#intro").css({"height":($(window).height() - $("nav").height())+'px'});

		// add margin
		height = ($('#intro').height() - $('.intro').height())/2;
		$(".intro").css({'margin':height+'px auto'}); 
	}

	// projects! 
	// if window height > div height 
	if (($(window).height() - $("nav").height()) > $("#work").height()) {
		// increase div height and put up margins top and bottom. 
		$("#work").css({"height":($(window).height() - $("nav").height())+'px'});

		// add margin
		height = ($('#work').height() - $('.work').height())/2;
		$(".work").css({'margin':height+'px auto'}); 
	}

	// more! 
	// if window height > div height 
	if (($(window).height() - $("nav").height()) > $("#team").height()) {
		// increase div height and put up margins top and bottom. 
		$("#team").css({"height":($(window).height())+'px'});

		// add margin
		height = ($('#team').height() - $('.team').height())/2;
		$(".team").css({'margin':height+'px auto'}); 
	}

	// divider title pos
	height = ($(".parallax").height() - $("h1").height())/2;
	$(".divider-title-pos").css({'padding':height+'px 0'}); 

})

// Nav bar colour on position
$(window).scroll(function (event) {
	poop = $(window).scrollTop();
	// console.log("we here", poop);
	if (poop > 5) {
		$("nav").addClass("green-nav");
	}
	if (poop < 5) {
		console.log("top")
		$("nav").removeClass("green-nav");
	}
});

// Scrolling
$(function(){
	// console.log("working");
    var $window = $(window);
	var scrollTime = 1.2;
	var scrollDistance = 400;

	$window.on("mousewheel DOMMouseScroll", function(event){
		// console.log("working very well"); 

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});