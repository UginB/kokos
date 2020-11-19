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

  const assortmentMenu = document.querySelector('.assortment__menu'),
        menuItems = document.querySelectorAll('.assortment__menu__item'),
        circles = document.querySelectorAll('.assortment__menu__circle');


  

    
  
  menuItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      menuItems.forEach(btn => {
        btn.classList.remove('assortment__menu__item_active');
      });
      circles.forEach(circle => {
        circle.classList.remove('assortment__menu__circle_active');
      });
      if (e.currentTarget === item) {
        item.classList.add('assortment__menu__item_active');
        circles[i].classList.add('assortment__menu__circle_active');
      }
    });
  });
    

  
});



