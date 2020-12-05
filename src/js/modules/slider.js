export default class Slider {
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

  createDots() {
    this.container.forEach(item => {
      const dots = item.querySelector(this.dots);
      while (dots.children.length < item.querySelectorAll(this.slides).length) {
        let dot = document.createElement('div');
        dot.classList.add(this.dotClass);
        if(dots.parentElement.classList.contains("stuff__item")){
          let circle = document.createElement('div');
          circle.classList.add("stuff__dot__circle");
          dot.appendChild(circle);
        }
        dots.appendChild(dot);
      }
    });
  }

  bindDotsTrigger(container) {
    container.querySelectorAll(`.${this.dotClass}`).forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if(this.slideIndex) {
          this.slideIndex = i; //for Reviews
          this.switchSlides();
        } else if(this.slideIndex && dot.classList.contains(this.dotsActiveClass)){
        } else {
          this.index = i; //for Stuff
          this.changeImg(container);
        }
      });
    });
  }

  refreshDots(dotsContainer, index) {
    dotsContainer.querySelectorAll(`.${this.dotClass}`).forEach((dot, i) => {
      dot.classList.remove(this.dotsActiveClass);
      if (i === index) {
        dot.classList.add(this.dotsActiveClass);
      }
    });
  }
}