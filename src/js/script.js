import SliderReviews from './modules/sliderReviews';
import SliderStuff from './modules/sliderStuff';
import StuffSort from './modules/stuffSort';

window.addEventListener('DOMContentLoaded', () => {

  const ReviewSlider = new SliderReviews({
    container: '.reviews__carousel',
    slides: '.reviews__carousel__item',
    activeSlideClass: 'reviews__carousel__item_active',
    mainSlideClass: 'reviews__carousel__item_main',
    dots: '.reviews__carousel__dots',
    dotClass: 'reviews__carousel__dot',
    dotsActiveClass: 'reviews__carousel__dot_active',
    prevBtn: '.arrow-prev__wrapper',
    nextBtn: '.arrow-next__wrapper',
    animationClasses: ['animate__animated', 'animate__fadeIn'],
    autoplay: true
  });
  ReviewSlider.init();

  const StuffSection = new SliderStuff({
    container: '.stuff__item',
    slides: '.stuff__photo',
    activeSlideClass: 'stuff__photo_active',
    nextBtn: '.stuff__arrow_right',
    prevBtn: '.stuff__arrow_left',
    animationClasses: ['animate__animated', 'animate__fadeIn'],
    dots: '.stuff__dots',
    dotClass: 'stuff__dot',
    dotsActiveClass: 'stuff__dot_active'
  });
  StuffSection.init();

  const Stuff = new StuffSort({
    menuItems:'.assortment__menu__item',
    stuffItems: '.stuff__item',
    menuContainer: '.assortment__menu',
    stuffContainer: '.stuff',
    stuffClasses: ['.turtlenecks', '.sundresses', '.pants', '.bags', '.shirts', '.cardigans', '.skirts', '.suits', '.socks', '.sweaters', '.tshirts', '.jeans', '.pajamas', '.boots'] 
  });
  Stuff.init();

  const assortmentMenu = document.querySelector('.assortment__menu'),
        menuItems = assortmentMenu.querySelectorAll('.assortment__menu__item'),
        circles = assortmentMenu.querySelectorAll('.assortment__menu__circle'),
        cerclesWrapper = assortmentMenu.querySelectorAll('.assortment__menu__wrapper__circle');


  menuItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      circles.forEach(circle => {
        circle.classList.remove('assortment__menu__circle_active');
      });
      cerclesWrapper.forEach(item => {
        item.classList.remove('assortment__menu__wrapper__circle_active');
      });
      if (e.currentTarget === item) {
        circles[i].classList.add('assortment__menu__circle_active');
        cerclesWrapper[i].classList.add('assortment__menu__wrapper__circle_active');
      }
    });
    item.addEventListener('mouseover', (e) => {
        if (!item.classList.contains('assortment__menu__wrapper__circle_active')) {
          cerclesWrapper[i].classList.add('assortment__menu__wrapper__circle_active');
        }
    });
    item.addEventListener('mouseout', (e) => {
      if (!circles[i].classList.contains('assortment__menu__circle_active')) {
        cerclesWrapper[i].classList.remove('assortment__menu__wrapper__circle_active');
      }
    });
  });

  // const staffItem = document.querySelectorAll('.staff__item');

  // staffItem.forEach(item => {
  //   const photo = item.querySelectorAll('.staff__photo'),
  //         nextBtn = item.querySelector('.staff__arrow_right'),
  //         prevBtn = item.querySelector('.staff__arrow_left');
  //   let indexImg = 0;

  //   nextBtn.addEventListener('click', () => {
  //     indexImg++;
  //     photo.forEach((item, i, arr) => {
  //       item.classList.add('animate__animated');
  //       item.classList.remove('animate__fadeIn');
  //       item.classList.remove('staff__photo_active');
  //       if (indexImg === i && indexImg < photo.length) {
  //         item.classList.add('staff__photo_active');
  //         item.classList.add('animate__fadeIn');
  //       } else if (indexImg === photo.length) {
  //         indexImg = 0;
  //         arr[0].classList.add('staff__photo_active');
  //         arr[0].classList.add('animate__fadeIn');
  //       }
  //     });
  //   });

  //   prevBtn.addEventListener('click', () => {
  //     console.log(indexImg);
  //     console.log(photo.length);
  //     if (indexImg > 0) {
  //       indexImg--;
  //     } else {
  //       indexImg = photo.length-1;
  //     }
  //     photo.forEach((item, i, arr) => {
  //       item.classList.add('animate__animated');
  //       item.classList.remove('animate__fadeIn');
  //       item.classList.remove('staff__photo_active');
  //       if (indexImg === i && indexImg < photo.length) {
  //         item.classList.add('staff__photo_active');
  //         item.classList.add('animate__fadeIn');
  //       }
  //     });
  //   });
  // });

        

  let backgroundIMGClass = ['header_bg-img1', 'header_bg-img2', 'header_bg-img3', 'header_bg-img4', 'header_bg-img5'];
  const headerBG = document.querySelector('header');
  let indexBGIMG = 0;
  let changeIndexBGIMG = () => { 
    if (indexBGIMG < backgroundIMGClass.length-1) {++indexBGIMG;} 
    else {indexBGIMG = 0;}
  };
  setInterval(() => {
    changeIndexBGIMG();
      backgroundIMGClass.forEach(IMGClass => {
        headerBG.classList.remove(IMGClass);
      });
      headerBG.classList.add(backgroundIMGClass[indexBGIMG]);
  }, 3000);
});



