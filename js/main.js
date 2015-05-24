function contentHeight() {
	var height = $(window).height() - 135;
	// set height
	$(".content")[0].style.height = String(height) + "px";
	console.log("height of content is " + $(".content")[0].style.height )
}

function projectscrollHeight() {
	var height = $(window).height() * 0.55;
	for (var i=0; i<$(".workhorizontalscroll").length; i++) {
		$(".workhorizontalscroll")[i].style.height = String(height) + "px";	
	}
	console.log("height of projects is " + $(".workhorizontalscroll")[0].style.height )
}

function morescrollHeight() {
	var height = $(window).height() * 0.81;
	$(".morehorizontalscroll")[0].style.height = String(height) + "px";	
	console.log("height of more is " + $(".morehorizontalscroll")[0].style.height )
}