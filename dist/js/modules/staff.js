export default class Staff {
    constructor({
        item = null,
        photo = null,
        nextBtn = null,
        prevBtn = null
    }) {
        this.item = document.querySelectorAll(item);
        this.photo = photo;
        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
        this.index = 0;
    }

    bindTriggers() {
        this.item.forEach(stuffItem => {
            const photo = stuffItem.querySelectorAll(this.photo),
                  nextBttn = stuffItem.querySelector(this.nextBtn),
                  prevBttn = stuffItem.querySelector(this.prevBtn);
        
            nextBttn.addEventListener('click', () => {
                this.index++;
                photo.forEach((item, i, arr) => {
                    item.classList.add('animate__animated');
                    item.classList.remove('animate__fadeIn');
                    item.classList.remove('staff__photo_active');
                    if (this.index === i && this.index < photo.length) {
                        item.classList.add('staff__photo_active');
                        item.classList.add('animate__fadeIn');
                    } else if (this.index === photo.length) {
                        this.index = 0;
                        arr[0].classList.add('staff__photo_active');
                        arr[0].classList.add('animate__fadeIn');
                    }
                });
            });
        
            prevBttn.addEventListener('click', () => {
                if (this.index > 0) {
                    this.index--;
                } else {
                    this.index = photo.length-1;
                }
                photo.forEach((item, i) => {
                        item.classList.add('animate__animated');
                        item.classList.remove('animate__fadeIn');
                        item.classList.remove('staff__photo_active');
                    if (this.index === i && this.index < photo.length) {
                        item.classList.add('staff__photo_active');
                        item.classList.add('animate__fadeIn');
                    }
                });
            });
        }); 
    }

    

    init() {
        this.bindTriggers();
    }
}