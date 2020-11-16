import Slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

  const MainSlider = new Slider({
    container: '.reviews__carousel__container',
    slides: '.reviews__carousel__item',
    activeSlideClass: 'reviews__carousel__item_active',
    mainSlideClass: 'reviews__carousel__item_main',
    dots: '.reviews__carousel__dots',
    dotClass: 'reviews__carousel__dot',
    dotsActiveClass: 'reviews__carousel__dot_active',
    prev: '.arrow-prev__wrapper',
    next: '.arrow-next__wrapper'
  });
  MainSlider.init();
});



