$(function() {
	$( ".enter" ).hover(function() {
		$(".door").toggleClass("open");
	});
});
$(function() {
	$( ".enter" ).click(function() {
		$(".door").toggleClass("inside");
		$(".within").toggleClass("reveal");
		$(".enter").toggleClass("hide");
		$(".outside").toggleClass("hide");
	});
});
$(function() {
	$( ".name" ).click(function() {
		$(".bio").toggleClass("reveal");
		$(".contact").toggleClass("reveal");
	});
});