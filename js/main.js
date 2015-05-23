function contentHeight() {
	var height = $(window).height() - 135;
	// set height
	$(".content")[0].style.height = String(height) + "px";
}

function projectscrollHeight() {
	var height = $(window).height() * 0.58;
	$(".workhorizontalscroll")[0].style.height = String(height) + "px";	
}

function morescrollHeight() {
	var height = $(window).height() * 0.81;
	$(".morehorizontalscroll")[0].style.height = String(height) + "px";	
}