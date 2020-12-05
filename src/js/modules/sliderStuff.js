import Slider from './slider';

export default class SliderStuff extends Slider {
    constructor(container, slides, nextBtn, prevBtn, activeSlideClass, animationClasses, dots, dotClass, dotsActiveClass) {
        super(container, slides, nextBtn, prevBtn, activeSlideClass, animationClasses, dotClass, dotsActiveClass);
        this.index = 0;
    }

    changeImg(item) {
        const photos = item.querySelectorAll(this.slides);
        photos.forEach((photo, i, arr) => {
            photo.classList.remove(...this.animationClasses, this.activeSlideClass);
            if (this.index === i && this.index < photos.length) {
                photo.classList.add(this.activeSlideClass, ...this.animationClasses);
            } else if (this.index === photos.length) {
                this.index = 0;
                arr[0].classList.add(this.activeSlideClass, ...this.animationClasses);
            }
        });

        this.refreshDots(item, this.index);
    }

    bindTriggers() {
        this.container.forEach(stuffItem => {
            const nextBttn = stuffItem.querySelector(this.nextBtn),
                  prevBttn = stuffItem.querySelector(this.prevBtn);
        
            nextBttn.addEventListener('click', () => {
                this.index++;
                this.changeImg(stuffItem);
            });
        
            prevBttn.addEventListener('click', () => {
                if (this.index > 0) {
                    this.index--;
                } else {
                    this.index = stuffItem.querySelectorAll(this.slides).length-1;
                }
                this.changeImg(stuffItem);
            });
            
            this.bindDotsTrigger(stuffItem);
            this.refreshDots(stuffItem, this.index);
        });
    }

    init() {
        this.createDots();
        this.bindTriggers();
    }
}