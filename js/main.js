function contentHeight() {
	var height = 0;

	// grab body height
	var body = window.document.body.clientHeight;

	// remove header height
	var header = $(".header-container")[0].clientHeight;

	// remove the amount wanted for the footer
	var footer = 476;

	// remove the 60px for the padding 
	var padding = 60;

	// summation 
	height = body - header - footer - padding

	// set height
	var content = $(".content")[0].style.height = String(height) + "px";
}
