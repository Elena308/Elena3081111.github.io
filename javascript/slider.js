(() => {
const swiper = new Swiper('.js-content-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.js-content-pagination',
    clickable: true,
  },

  ally: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  }
});

const slider = new Slider('.js-swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

})();
