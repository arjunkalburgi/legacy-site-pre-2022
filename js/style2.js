
$(window).scroll(function() {
	var offset = $(window).height()*0.25; // size of window from top to when you want the first switch to be
	var blocksize = $(window).height()*0.9;  // this is programmed in 
	var projs = $(".block").map(function() { return this.id; }).toArray();
	var scroll = $(window).scrollTop(); 
	var $background = $("#background");
	var classToAdd = ""; 

	var currprojectnum = Math.floor((scroll-offset)/blocksize); 
	classToAdd = projs[currprojectnum]; 
	if (currprojectnum >= projs.length) {
		console.log("hey"); 
		classToAdd = projs[currprojectnum-1]; 
	}
	console.log("scroll: "+ scroll + ", currprojectnum: " + currprojectnum); 

	$("#background").removeClass();
	$("#background").addClass(classToAdd);
});
