export default class Stuff {
  constructor({
    // container = null,
    menuItems = null, 
    staffItems = null,
    // slides = null,
    // activeSlideClass = '',
    // mainSlideClass = null,
    // dots = null,
    // dotClass = '',
    // dotsActiveClass = '',
    // nextBtn = null, 
    // prevBtn = null,
    // animationClasses = [],
    // autoplay
  }) {
    this.menuItems = document.querySelectorAll('.assortment__menu__item');
    this.staffItems = document.querySelectorAll('.stuff__item');
    // this.container = document.querySelectorAll(container);
    // this.slides = slides;
    // this.prevBtn =  prevBtn;
    // this.nextBtn = nextBtn;
    // this.dots = dots;
    // this.dotClass = dotClass;
    // this.dotsActiveClass = dotsActiveClass;
    // this.activeSlideClass = activeSlideClass;
    // this.mainSlideClass = mainSlideClass;
    // this.animationClasses = animationClasses;
    // this.autoplay = autoplay;
  }
  
  bindTriggers() {
    this.menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        console.log(e.getAttribute(data));
      });
    });
  }

  init() {
    this.bindTriggers();
  };

}