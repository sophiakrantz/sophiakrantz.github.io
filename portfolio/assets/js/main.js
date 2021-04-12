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

// $(function() {
// 	$( ".email").click(function() {
// 		$(".email_address").show();
// 		$(".email_address").removeClass("hide");
// 		$(".instagram_address").hide();
// 		$(".instagram_address").removeClass("reveal");
// 		$(".twitter_address").hide();
// 		$(".twitter_address").removeClass("reveal");
// 		$(".youtube_address").hide();
// 		$(".youtube_address").removeClass("reveal");
// 	});
// });