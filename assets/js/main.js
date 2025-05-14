

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

 /**
 * Frequently Asked Questions Toggle (Only one open at a time)
 */
document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  faqItem.addEventListener('click', () => {
    // Close all other open FAQ items
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== faqItem.parentNode) {
        item.classList.remove('faq-active');
      }
    });

    // Toggle the clicked FAQ item
    faqItem.parentNode.classList.toggle('faq-active');
  });
});


  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, // Show exactly 3 slides
    spaceBetween: 30, // Space between slides
    autoplay: {
      delay: 3000, // Time between slides in milliseconds (3 seconds)
      disableOnInteraction: false, // Keep autoplay running even if user interacts
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true, // No partial view
    loop: true, // Enable infinite scrolling for seamless autoplay
    breakpoints: {
      320: {
        slidesPerView: 1, // 1 slide for mobile devices
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, // 2 slides for tablets
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, // 3 slides for desktops
        spaceBetween: 30,
      },
    },
  });;

  /**
 * Navmenu Scrollspy
 */
let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  });
}

// Header Scroll Adjustment
function adjustHeaderOnScroll() {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled'); // Add scrolled class when scrolling
  } else {
    header.classList.remove('scrolled'); // Remove scrolled class when at the top
  }
}

// Add event listeners
window.addEventListener('load', function() {
  navmenuScrollspy();  // Call Scrollspy on page load
  adjustHeaderOnScroll();  // Adjust header on page load
});

document.addEventListener('scroll', function() {
  navmenuScrollspy();  // Call Scrollspy on scroll
  adjustHeaderOnScroll();  // Adjust header on scroll
});


})();
// custom
$(document).ready(function(){
	function isMobileOrTablet() {
        return /iPhone|iPad|iPod|Android|Mobile|Tablet|Windows Phone/i.test(navigator.userAgent);
    }
    $('.myScrollButton').on('click', function(event) {
        if (isMobileOrTablet()) {
            event.preventDefault(); 
            $('html, body').animate({
            	scrollTop: $('#enq_form').offset().top - 100
            }, 800);
        } else {
			event.preventDefault();
            $('html, body').animate({
              scrollTop: $('.banner-desktop').offset().top 
            }, 800);
		}
    }
);
$(document).ready(function () {
    function initializeSlider() {
        $('.rec_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            loop: true,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 3000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 600, 
                    settings: "unslick",
                    slidesToShow : 3,
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    initializeSlider();

    $(window).on('resize', function () {
        if ($(window).width() < 600) {
            if ($('.rec_slider').hasClass('slick-initialized')) {
                $('.rec_slider').slick('unslick');
            }
        } else {
            if (!$('.rec_slider').hasClass('slick-initialized')) {
                initializeSlider(); 
            }
        }
    });
});

});

$(document).ready(function(){
    $('.international__mous__slider').slick({
        slidesToShow: 4, 
        slidesToScroll: 1, 
        infinite: true, 
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000, 
        arrows: false, 
        responsive: [
            {
                breakpoint: 600, 
                settings: {       
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, 
                settings: {       
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});


$(document).ready(function () {
    $(".experience-beyond-slider").slick({
        autoplay: true,
        loop: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1500,
        arrows:false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.placements-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});


$(document).ready(function () {
    $(".foreign__deligates__slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        loop: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {       
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            } ,
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow : 3,
                    slidesToScroll: 1,
                }
            }  
        ]
    });
});

$(document).ready(function(){
    $('.coe-slider').slick({
      autoplay: true,
      loop : true,  
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive : [
        {
            breakpoint : 768,
            settings : {
                slidesToScroll :1,
                slidesToShow : 1,
                arrows:false,
            }
        },
        {
            breakpoint : 992,
            settings :{
                slidesToShow: 1,
                slidesToScroll :1,
                arrows : false,
            }
        }
      ]
    });
  });


  $(document).ready(function () {
    function initializeSlider() {
        if ($(window).width() < 768) {
            if (!$('.placement-stats-bottom .row').hasClass('slick-initialized')) {
                $('.placement-stats-bottom .row').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    arrows: false
                });
            }
        } else {
            if ($('.placement-stats-bottom .row').hasClass('slick-initialized')) {
                $('.placement-stats-bottom .row').slick('unslick'); 
            }
        }
    }

    initializeSlider();

    $(window).resize(function () {
        initializeSlider();
    });
});

$(document).ready(function() {
    $('.testimonial__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true, 
        centerPadding: '0',
        autoplaySpeed: 1500,
        dots: true,
        appendDots: $('.testimonial-section-bottom-line'), 
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding:0
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding:0
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.testimonial__slider').on('afterChange', function(event, slick, currentSlide) {
        var currentSlideElement = $('.testimonial__block').eq(currentSlide);
        var newMessage = currentSlideElement.data('message');

        if (newMessage) {
            $('.testimonial-section-bottom-line h2').html(newMessage);
        }
    });
});


$(document).ready(function () {
    $(".vertical__header__slider").slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        loop: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1500,
        arrows: false,
        dots: true,
    });
});

  $(document).ready(function () {
    function initResponsiveSlider() {
      if ($(window).width() < 768) {
        if (!$('.slider-wrapper').hasClass('slick-initialized')) {
          $('.slider-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            dots: true,
          });
        }
      } else {
        if ($('.slider-wrapper').hasClass('slick-initialized')) {
          $('.slider-wrapper').slick('unslick');
        }
      }
    }
  
    initResponsiveSlider();
    $(window).resize(function () {
      initResponsiveSlider();
    });
  });
  
  AOS.init({
    duration: 1000,
    offset: 200, 
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    dots: !1,
    asNavFor: ".slider-nav",
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    swipe: !1,
    responsive:[
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}),


$(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: !0,
    focusOnSelect: !0,
    dots: !1,
    variableWidth: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, variableWidth: !1 } },
        { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1, variableWidth: !1 } },
        { breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1, variableWidth: !1, centerMode: !0 } },
    ],
});

  $(document).ready(function () {
    $("rs-detail-item").slick({
        autoplay: true, 
        autoplaySpeed: 3000,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
});

$("#nrfRanking").not(".slick-initialized").slick({
    dots: 0,
    arrows: !1,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
}),

$("#nrfRanking")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 2 } },
    ],
}),
$("#outlookRanking")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
}),
$("#indiatodayRanking")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
}),
$("#indiatodayRanking2")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
}),
$("#indiatodayRanking3")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
}),
$("#qsRanking")
.not(".slick-initialized")
.slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 2e3,
    slidesToShow: 5,
    slidesToScroll: 2,
    pauseOnHover: !0,
    nextArrow: '<div class="fa fa-angle-right slick-next"></div>',
    prevArrow: '<div class="fa fa-angle-left slick-prev"></div>',
    lazyLoad: "ondemand",
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
})


$(document).ready(function() {
    $("button.navbar-toggler").click(function(event) {
        $(this).toggleClass("active");
    });
    $('#toogle_form').click(function(){
        $(".fixed_enquiry").toggleClass('opne-form');
    });
    $(".applynow").on("click", function() {
        $("body").scrollTop(0);
        $(window).scroll(function() {
        var scrol = $(window).scrollTop();
        if (scrol <= 0) {
            $(".fixed_enquiry").addClass('opne-form');
        }
        });
    });
});


$(window).scroll(function() {
    var scrol = $(window).scrollTop();
    if (scrol < 100) {
    $(".fixed_enquiry").addClass('opne-form');
    } else {
    $(".fixed_enquiry").removeClass('opne-form');
    }
});

(function($) {
    function mediaSize() { 
        if (window.matchMedia('(max-width: 767px)').matches) {
        $(".applynow").on("click", function() {
            $('html, body').animate({
                scrollTop: $("#enq_form").offset().top - 200
            }, 1000)
        });
        } 
    };
    mediaSize();
    window.addEventListener('resize', mediaSize, false);  
    })(jQuery);


    
    $(document).ready(function() {
        $(".gallery-slider-1").slick({
            autoplay: true,
            infinite: true,
            loop: true,
            slidesToScroll: 1,
            slidesToShow : 1,
            arrows: false,
            dots: false,
        });
    });
        
    
    $(document).ready(function () {
        $(".gallery-slider-2").slick({
            autoplay: true,
            infinite: true,
            loop: true,
            slidesToScroll: 1,
            slidesToShow : 2,
            arrows: false,
            dots: true,
        });
    });