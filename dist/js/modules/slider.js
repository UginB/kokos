export default class Slider {
    constructor({
      container = null, 
      slides = null,
      activeSlideClass = '',
      mainSlideClass = null,
      dots = null,
      dotClass = '',
      dotsActiveClass = '',
      next = null, 
      prev = null,
      animate,
      autoplay
    }) {
      this.container = document.querySelector(container);
      this.slides = document.querySelectorAll(slides);
      this.dots = document.querySelector(dots);
      this.dotClass = dotClass;
      this.dotsActiveClass = dotsActiveClass;
      this.prev = document.querySelector(prev);
      this.next = document.querySelector(next);
      this.activeSlideClass = activeSlideClass;
      this.mainSlideClass = mainSlideClass;
      this.animate = animate;
      this.autoplay = autoplay;
      this.slideIndex = 1;
    }

    createDots() {
        while (this.dots.children.length < this.slides.length) {
            let dot = document.createElement('div');
            dot.classList.add(this.dotClass);
            this.dots.appendChild(dot);
        }
    }

    switchSlides() {
        this.slides.forEach((slide, i) => {
            slide.classList.remove(this.activeSlideClass, this.mainSlideClass);
            if (i == this.slideIndex) {
                slide.classList.add(this.activeSlideClass, this.mainSlideClass);
                if (this.slideIndex > 0) {
                    slide.previousElementSibling.classList.add(this.activeSlideClass);
                }
            } else if (i == this.slideIndex + 1) {
                slide.classList.add(this.activeSlideClass);
            }
        });
        document.querySelectorAll(`.${this.dotClass}`).forEach(dot => {
            dot.classList.remove(this.dotsActiveClass);
            this.dots.children[this.slideIndex].classList.add(this.dotsActiveClass);
        });
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            ++this.slideIndex;
            if (this.slideIndex > this.slides.length - 1) {
                this.slideIndex = 0;
            }
            this.switchSlides();
        });
        this.prev.addEventListener('click', () => {
            --this.slideIndex;
            if (this.slideIndex < 0) {
                this.slideIndex = this.slides.length - 1;
            }
            this.switchSlides();
        });

        document.querySelectorAll(`.${this.dotClass}`).forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.slideIndex = i;
                this.switchSlides();
            });
        });

    }

    init() {
        this.createDots();
        this.switchSlides();
        this.bindTriggers();
    }
}