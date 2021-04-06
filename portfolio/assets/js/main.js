$(function() {
	$( ".phone").hover(function() {
		$(".closeup").toggleClass("hide");
	});
});
$(function() {
	$( ".laptop" ).hover(function() {
		$(".closeup").toggleClass("hide");
	});
});


$(function() {
	let w = $(window).width();
	let h = $(window).height();
	if(h > w){
		alert("for best experience view site on desktop")
	}
})