$('header').slick({
    dots: true,
    arrows: false,
    fade: true,
    speed: 400,
    cssEase: 'linear',
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false
  });

  $('.categories-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('.top-rate-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: false,
    appendArrows: $('.arrows'),
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


  $('.movies-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3500,
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: false,
    appendArrows: $('.arrows2'),
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


  $('.series-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3500,
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: false,
    appendArrows: $('.arrows3'),
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });