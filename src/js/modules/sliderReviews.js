import Slider from './slider';

export default class SliderReviews extends Slider {
    constructor(container, slides, activeSlideClass, mainSlideClass, dots, dotClass, dotsActiveClass, nextBtn, prevBtn, animationClasses, autoplay) {
        super(container, slides, activeSlideClass, mainSlideClass, dots, dotClass, dotsActiveClass, nextBtn, prevBtn, animationClasses, autoplay);
        this.slideIndex = 1;
    }

    switchSlides() {
        document.querySelectorAll(this.slides).forEach((slide, i) => {
            slide.classList.remove(this.activeSlideClass, this.mainSlideClass, ...this.animationClasses);
            if (i == this.slideIndex) {
                slide.classList.add(this.activeSlideClass, this.mainSlideClass, ...this.animationClasses);
                if (this.slideIndex > 0) {
                    slide.previousElementSibling.classList.add(this.activeSlideClass, ...this.animationClasses);
                }
            } else if (i == this.slideIndex + 1) {
                slide.classList.add(this.activeSlideClass, ...this.animationClasses);
            }
        });

        this.refreshDots(document, this.slideIndex);
    }

    

    bindTriggers() {
        this.container[0].querySelector(this.nextBtn).addEventListener('click', () => {
            ++this.slideIndex;
            if (this.slideIndex > document.querySelectorAll(this.slides).length - 1) {
                this.slideIndex = 0;
            }
            this.switchSlides();
        });
        this.container[0].querySelector(this.prevBtn).addEventListener('click', () => {
            --this.slideIndex;
            if (this.slideIndex < 0) {
                this.slideIndex = document.querySelectorAll(this.slides).length - 1;
            }
            this.switchSlides();
        });

        this.bindDotsTrigger(this.container[0]);
    }

    autoplayCarousel() {
        if (this.autoplay) {
            let autoplayCarousel = setInterval(() => {
                ++this.slideIndex;
                if (this.slideIndex > document.querySelectorAll(this.slides).length - 1) {
                    this.slideIndex = 0;
                }
                this.switchSlides();
            }, 4000);
            this.container[0].addEventListener('click', () => {
                clearInterval(autoplayCarousel);
            });
        }
    } 

    init() {
        this.createDots();
        this.switchSlides();
        this.bindTriggers();
        this.autoplayCarousel();
    }
}