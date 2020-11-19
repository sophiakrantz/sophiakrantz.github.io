// window.open('https://www.youtube.com/watch?v=yg3x49fiT5A')

// button.onclick = () => {
//   window.open('https://www.youtube.com/watch?v=yg3x49fiT5A');

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
  $("#myCarousel").carousel("prev");
});