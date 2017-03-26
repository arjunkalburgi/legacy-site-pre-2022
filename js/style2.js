var didScroll = false;
var offset = $(window).height()*0.25; // size of window from top to when you want the first switch to be
var blocksize = $(window).height()*0.9;  // this is programmed in 
var ventures = ["eceweekhacked2017", "AUcourses", "howtocompe", "eceweekhacked2015"]

$(window).scroll(function() {
	var scroll = $(window).scrollTop(); 
	var $background = $("#background");
	var classToAdd = ""; 

	var currprojectnum = Math.floor((scroll-offset)/blocksize); 
	// console.log("scroll: "+ scroll + ", currprojectnum: " + currprojectnum); 
	classToAdd = ventures[currprojectnum]; 

	//Removing all classes 
	$("#background").removeClass();

	//Add new class 
	console.log(classToAdd); 
	$("#background").addClass(classToAdd);
});
