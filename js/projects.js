function open_close(className) {
	var $panel = $("."+className); 
	if ($panel.width() == 320) {
		$panel.css("overflow-y","scroll");
		$panel.animate({"width":($panel.width()*2)+"px"}, 1000);
		$('.'+className+' .content .excerpt1').css("display", "none"); 
		$('.'+className+' .content .text').css("display", "unset"); 
	} else {
		$panel.css("overflow-y","hidden");
		$panel.animate({"width":($panel.width()/2)+"px"}, 1000); 
		$('.'+className+' .content .excerpt1').css("display", "unset"); 
		$('.'+className+' .content .text').css("display", "none"); 
	}
}
$('.eceweekhacked2016').click(function() {
	open_close('eceweekhacked2016');
})
$('.reactlessons').click(function() {
	open_close('reactlessons');
})
$('.makeover').click(function() {
	open_close('makeover');
})
$('.testingproj').click(function() {
	open_close('testingproj');
})
$('.dbnormalizerapp').click(function() {
	open_close('dbnormalizerapp');
})
$('.howtocompe').click(function() {
	open_close('howtocompe');
})
$('.dbhospitalapp').click(function() {
	open_close('dbhospitalapp');
})
$('.cloudycar').click(function() {
	open_close('cloudycar');
})
$('.d3tutorial').click(function() {
	open_close('d3tutorial');
})
$('.C301as1').click(function() {
	open_close('C301as1');
})
$('.ECEW17').click(function() {
	open_close('ECEW17');
})
$('.CEClub').click(function() {
	open_close('CEClub');
})
$('.pkb').click(function() {
	open_close('pkb');
})
$('.shoutbox2').click(function() {
	open_close('shoutbox2');
})
$('.dra').click(function() {
	open_close('dra');
})
$('.fire').click(function() {
	open_close('fire');
})
$('.eceweekhacked2015').click(function() {
	open_close('eceweekhacked2015');
})
$('.ciao').click(function() {
	open_close('ciao');
})
$('.rdf').click(function() {
	open_close('rdf');
})
$('.reviews').click(function() {
	open_close('reviews');
})
$('.senti').click(function() {
	open_close('senti');
})
$('.conn4').click(function() {
	open_close('conn4');
})
$('.shoutbox').click(function() {
	open_close('shoutbox');
})
$('.tetris').click(function() {
	open_close('tetris');
})
$('.resnet').click(function() {
	open_close('resnet');
})
$('.runner').click(function() {
	open_close('runner');
})