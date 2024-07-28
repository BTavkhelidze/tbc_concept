let swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  // spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
