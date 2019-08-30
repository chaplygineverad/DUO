// $(".reviews-content").on("afterChange", function(event, slick, currentSlide) {
//   $(this)
//     .find(".slick-slide.content-plus")
//     .not(".slick-active")
//     .removeClass("content-plus");
// });
// $(".reviews-content-box__cbtn").on("click", function() {
//   this.parentElement.parentElement.classList.toggle("content-plus");
// });
$(".feed__content").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	arrows: true,
	adaptiveHeight: true,
	prevArrow: $('.arrows__left'),
	nextArrow: $('.arrows__right'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

