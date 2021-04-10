$(function() {
	$( ".circle1" ).click(function() {
		$(".excerpt1").toggleClass("hide");
	});
});
$(function() {
	$( ".excerpt1" ).click(function() {
		$(".excerpt1").toggleClass("hide");
	});
});
$(function() {
	$( ".circle2" ).click(function() {
		$(".excerpt2").toggleClass("hide");
	});
});
$(function() {
	$( ".excerpt2" ).click(function() {
		$(".excerpt2").toggleClass("hide");
	});
});
$(function() {
	$( ".circle3" ).click(function() {
		$(".excerpt3").toggleClass("hide");
	});
});
$(function() {
	$( ".excerpt3" ).click(function() {
		$(".excerpt3").toggleClass("hide");
	});
});
$(function() {
	$( ".circle4" ).click(function() {
		$(".excerpt4").toggleClass("hide");
	});
});
$(function() {
	$( ".excerpt4" ).click(function() {
		$(".excerpt4").toggleClass("hide");
	});
});


$(function() {
	let w = $(window).width();
	let h = $(window).height();
	if(h > w){
		alert("For optimal experience, please view site in landscape mode.")
	}
})