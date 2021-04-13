$(function() {
	$( ".name").click(function() {
		$(".about").toggleClass("hide");
		$(".contacts").toggleClass("hide");
	});
});

$(function() {
	$( ".enter" ).hover(function() {
		$(".closed").toggleClass("hide");
		$(".open").toggleClass("reveal");
	});
});
$(function() {
	$( ".exit" ).hover(function() {
		$(".closed").toggleClass("hide");
		$(".open").toggleClass("reveal");
	});
});

$(function() {
	$( ".next").click(function() {
		$(".indium").toggleClass("hide");
		$(".previous").toggleClass("hide");
	});
});