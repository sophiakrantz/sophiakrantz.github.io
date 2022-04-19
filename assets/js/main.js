// $(function() {
// 	$( ".hover" ).hover(function() {
// 		$(".media").removeClass("hide");
// 	});
// });

$(function() {
	$(".print").click(function() {
		$(".directory").addClass("hide");
		$(".print_directory").removeClass("hide");
		$(".digital_directory").addClass("hide");
		$(".aboutme").addClass("hide");
		$(".arrow").removeClass("hide");
	})
})
$(function() {
	$(".digital").click(function() {
		$(".directory").addClass("hide");
		$(".print_directory").addClass("hide");
		$(".digital_directory").removeClass("hide");
		$(".aboutme").addClass("hide");
		$(".arrow").removeClass("hide");
	})
})
$(function() {
	$(".about").click(function() {
		$(".directory").addClass("hide");
		$(".print_directory").addClass("hide");
		$(".digital_directory").addClass("hide");
		$(".aboutme").removeClass("hide");
		$(".arrow").removeClass("hide");
	})
})
$(function() {
	$(".arrow").click(function() {
		$(".directory").removeClass("hide");
		$(".print_directory").addClass("hide");
		$(".digital_directory").addClass("hide");
		$(".aboutme").addClass("hide");
		$(".arrow").addClass("hide");
	})
})