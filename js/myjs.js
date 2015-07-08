// Nav bar colour on load
$(window).ready(function (event) {
	poop = $(window).scrollTop();
	if (poop == 0) {
		// $("nav").css( 'backgroundColor', 'transparent ' );
		$("nav").animate({ 'backgroundColor': 'transparent' }, 500);

		// other one
		// $("nav").animate({ 'backgroundColor': '#007E60'});
	}

	// adjust footer height
	var height = $(window).height() - $("nav").height();
	$("footer").css({'height':height+'px'}); 

	// adjust front banner height
	$("#index-banner").css({'height':$(window).height()+'px'}); 

	// adjust banner text position
	height = ($(window).height() - $(".text_h").innerHeight())/2;
	$(".banner-text-pos").css({'margin':height+'px auto'}); 
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