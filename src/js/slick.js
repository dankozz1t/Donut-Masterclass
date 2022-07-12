$('.reviews__list').slick({
  // normal options...
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  centerMode: true,
  centerPadding: '0px',

  asNavFor: '.reviews__comment',
  variableWidth: true,

  focusOnSelect: true,

  // the magic
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$('.reviews__comment').slick({
  asNavFor: '.reviews__list',
  arrows: false,
  dots: true,
});
