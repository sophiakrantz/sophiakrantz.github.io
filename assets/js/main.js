$(function() {
	$(".philosophy").click(function(){
		$(".p, .ourstory, .s, .st").removeClass("reveal");
		$(".ph").toggleClass("reveal");
	})	
})
$(function() {
	$(".societal").click(function(){
		$(".p, .ph, .ourstory, .st").removeClass("reveal");
		$(".s").toggleClass("reveal");
	})
})
$(function () {
	$(".stereotypes").click(function(){
		$(".p, .ph, .s, .ourstory").removeClass("reveal");
		$(".st").toggleClass("reveal");
	})
})
$(function() {
	$(".politics").click(function(){
		$(".ourstory, .ph, .s, .st").removeClass("reveal");
		$(".p").toggleClass("reveal");
	})
})
$(function() {
	$(".bio").click(function(){
		$(".p, .ph, .s, .st").removeClass("reveal");
		$(".ourstory").toggleClass("reveal");
	})
})