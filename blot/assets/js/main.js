$(function() {
	$(".front").click(function() {
		$(".front").removeClass("reveal");
		$(".front").toggleClass("hide");
		$(".back").removeClass("hide");
		$(".back").toggleClass("reveal");
	})
})
$(function() {
	$(".back").click(function() {
		$(".back").removeClass("reveal");
		$(".back").toggleClass("hide");
		$(".front").removeClass("hide");
		$(".front").toggleClass("reveal");
	})
})
$(function() {
	$(".square").click(function() {
		$(".square").toggleClass("rectangle");
		$(".form").toggleClass("hide");
	})
})


$(function(){
  $(".submit").click(function(){
    $(".name").text($(".name_new").text()+", 2020");
    $(".description").text($(".description_new").text());
    $(".description").toggleClass("hide");
    $(".form").toggleClass("hide");
    $(".rectangle").removeClass("rectangle");
    $(".square").removeClass("square");
    $(".square2").toggleClass("hide");
  })
})
$(function() {
	$(".square2").click(function() {
		$(".square2").toggleClass("hide");
		$(".artist").toggleClass("hide");
	})
})