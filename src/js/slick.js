$('.reviews__list').slick({
  autoplay: true,
  autoplaySpeed: 2000,

  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,

  centerMode: true,
  centerPadding: '0px',

  asNavFor: '.reviews__comment',
  variableWidth: true,

  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
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
  infinite: false,
});
