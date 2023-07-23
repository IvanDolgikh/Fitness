import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import './video';
import {initTabs} from './init-tabs';
import {initAccordions} from './init-accordion';
import './swiper-coach';
import './swiper-feedback';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
  initTabs();
  initAccordions();
});
