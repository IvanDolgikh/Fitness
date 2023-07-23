import Swiper from '../js/vendor/swiper';

export const swiperCoach = new Swiper('.swiper1', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,

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

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


export const swiperFeedback = new Swiper('swiper2', {

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
