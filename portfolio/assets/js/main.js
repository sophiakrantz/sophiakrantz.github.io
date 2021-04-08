// $(function() {
// 	$( ".name").click(function() {
// 		$(".about").toggleClass("hide");
// 	});
// });

$(function() {
	$( ".enter" ).hover(function() {
		$(".closed").toggleClass("hide");
		$(".open").toggleClass("reveal");
	});
});