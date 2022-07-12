$('.reviews__list').slick({
  // normal options...
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // focusOnSelect: true,
  // centerMode: true,

  // the magic
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        // dots: true,
      },
    },
    {
      breakpoint: 300,
      settings: 'unslick', // destroys slick
    },
  ],
});
// $('.reviews__list').on('beforeChange', (e, slick, currSlide, nextSlide) => {
//   if (currSlide === nextSlide) {
//     return;
//   }
//   // $('[data-reviews]').addClass('img__active');
//   $('[data-reviews]').addClass('img__active');
//   console.log($(`[data-slide]`));
// });
