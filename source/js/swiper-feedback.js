import Swiper from '../js/vendor/swiper';

export const swiperFeedback = new Swiper('.feedback .swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper__next-button',
    prevEl: '.swiper__back-button',
    disabledClass: '.swiper__button--disabled',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
