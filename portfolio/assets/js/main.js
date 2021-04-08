$(function() {
	$( ".name").click(function() {
		$(".more").toggleClass("hide");
		$(".exhibition").toggleClass("hide");
		$(".email_address").hide();
		$(".email_address").removeClass("reveal");
		$(".instagram_address").hide();
		$(".instagram_address").removeClass("reveal");
		$(".twitter_address").hide();
		$(".twitter_address").removeClass("reveal");
		$(".youtube_address").hide();
		$(".youtube_address").removeClass("reveal");
	});
});

$(function() {
	$( ".enter" ).hover(function() {
		$(".closed").toggleClass("hide");
		$(".open").toggleClass("reveal");
	});
});

$(function() {
	$( ".email").click(function() {
		$(".email_address").show();
		$(".email_address").removeClass("hide");
		$(".instagram_address").hide();
		$(".instagram_address").removeClass("reveal");
		$(".twitter_address").hide();
		$(".twitter_address").removeClass("reveal");
		$(".youtube_address").hide();
		$(".youtube_address").removeClass("reveal");
	});
});
$(function() {
	$( ".instagram").click(function() {
		$(".email_address").hide();
		$(".email_address").removeClass("reveal");
		$(".instagram_address").show();
		$(".instagram_address").removeClass("hide");
		$(".twitter_address").hide();
		$(".twitter_address").removeClass("reveal");
		$(".youtube_address").hide();
		$(".youtube_address").removeClass("reveal");
	});
});
$(function() {
	$( ".twitter").click(function() {
		$(".email_address").hide();
		$(".email_address").removeClass("reveal");
		$(".instagram_address").hide();
		$(".instagram_address").removeClass("reveal");
		$(".twitter_address").show();
		$(".twitter_address").removeClass("hide");
		$(".youtube_address").hide();
		$(".youtube_address").removeClass("reveal");
	});
});
$(function() {
	$( ".youtube").click(function() {
		$(".email_address").hide();
		$(".email_address").removeClass("reveal");
		$(".instagram_address").hide();
		$(".instagram_address").removeClass("reveal");
		$(".twitter_address").hide();
		$(".twitter_address").removeClass("reveal");
		$(".youtube_address").show();
		$(".youtube_address").removeClass("hide");
	});
});