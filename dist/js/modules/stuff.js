export default class Stuff {
    constructor({
      container = null, 
      slides = null,
      activeSlideClass = '',
      mainSlideClass = null,
      dots = null,
      dotClass = '',
      dotsActiveClass = '',
      nextBtn = null, 
      prevBtn = null,
      animationClasses = [],
      autoplay
    }) {
      this.container = document.querySelectorAll(container);
      this.slides = slides;
      this.prevBtn =  prevBtn;
      this.nextBtn = nextBtn;
      this.dots = dots;
      this.dotClass = dotClass;
      this.dotsActiveClass = dotsActiveClass;
      this.activeSlideClass = activeSlideClass;
      this.mainSlideClass = mainSlideClass;
      this.animationClasses = animationClasses;
      this.autoplay = autoplay;
      
    }
  
  }