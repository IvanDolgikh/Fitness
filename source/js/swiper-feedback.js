import Swiper from '../js/vendor/swiper';

export const swiperFeedback = new Swiper('.feedback .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__next-button',
    prevEl: '.swiper__back-button',
    disabledClass: '.swiper__button--disabled',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
