// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

// home 1 feature slider
 $('.features-slider-wrap').slick({

  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<button class="slick-btn next"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button class="slick-btn prev"><i class="fa-solid fa-arrow-right"></i></button>',
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// testimonial style1 
$('.testimonial-s1').slick({

  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// couter
$('.counter-item').counterUp({
  delay: 10,
  time: 2000
});

// project slider
$('.project-slider-container-s1').slick({

  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// testimonial slider 2
$('.testimonial-s2').slick({

  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<button class="slick-btn next"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button class="slick-btn prev"><i class="fa-solid fa-arrow-right"></i></button>',
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// team-slider 2
$('.team-slider-s1').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// feature-slider style 3
$('.feature-s3-inner').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.project-slider-container-s2').slick({

  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// portfolio gallery
$('.portfolio-gallery-container').isotope({
  itemSelector: '.portfolio-item',
  percentPosition: true,
  filter: '*',
  animationOptions: {
    duration: 750,
    easing: 'linear',
    queue: false
  },
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.portfolio-item'
  }
})

 $('.portfolio-filter-buttons button').click(function () {
   $('.filter-btn').removeClass('current');
   $(this).addClass('current');

   var selector = $(this).attr('data-filter');
   $('.portfolio-gallery-container').isotope({
     filter: selector,
     animationOptions: {
       duration: 1000,
       easing: 'linear',
       queue: false
     }
   });
   return false;
 });

//  casual image slider
$('.image-slider-s1').slick({

  dots: true,
  infinite: true,
  autoplay: true,
  prevArrow: '',
  nextArrow: '',
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});