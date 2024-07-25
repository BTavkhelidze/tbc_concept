let swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   effect: 'slide', // Corrected property name
  //   on: {
  //     reachEnd: function () {
  //       this.disable();
  //     },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //       //   spaceBetween: 10, // Uncomment if you want space between slides on small screens
  //     },
  //     1200: {
  //       slidesPerView: 2,
  //       //   spaceBetween: 20, // Optional: set the space between slides for this breakpoint
  //     },
  //   },
});
