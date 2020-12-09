/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
class Slider {
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

/***/ }),

/***/ "./src/js/modules/sliderReviews.js":
/*!*****************************************!*\
  !*** ./src/js/modules/sliderReviews.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderReviews; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");
;

class SliderReviews extends _slider__WEBPACK_IMPORTED_MODULE_0__.default {
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

/***/ }),

/***/ "./src/js/modules/sliderStuff.js":
/*!***************************************!*\
  !*** ./src/js/modules/sliderStuff.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SliderStuff; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");
;

class SliderStuff extends _slider__WEBPACK_IMPORTED_MODULE_0__.default {
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

/***/ }),

/***/ "./src/js/modules/stuffSort.js":
/*!*************************************!*\
  !*** ./src/js/modules/stuffSort.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StuffSort; }
/* harmony export */ });
class StuffSort {
  constructor({
    menuItems = null, 
    stuffItems = null,
    stuffContainer = null,
    menuContainer = null,
    stuffClasses = [],
  }) {
    this.menuItems = document.querySelectorAll(menuItems);
    this.stuffItems = document.querySelectorAll(stuffItems);
    this.stuffContainer = document.querySelector(stuffContainer),
    this.menuContainer = document.querySelector(menuContainer),
    this.stuffClasses = stuffClasses
  }
  
  bindTriggers() {
    this.stuffClasses.forEach(stuffClass => {
      this.menuContainer.querySelector(stuffClass).addEventListener('click', () => {
        this.stuffItems.forEach(item => {
          item.style.display = 'none';
          item.classList.remove('animate__animated', 'animate__fadeIn');
        });
        this.stuffContainer.querySelectorAll(stuffClass).forEach(item => {
          item.style.display = 'flex';
          item.classList.add('animate__animated', 'animate__fadeIn');
        });
      });
    });
  }

  init() {
    this.bindTriggers();
  };

}

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderReviews */ "./src/js/modules/sliderReviews.js");
/* harmony import */ var _modules_sliderStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderStuff */ "./src/js/modules/sliderStuff.js");
/* harmony import */ var _modules_stuffSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/stuffSort */ "./src/js/modules/stuffSort.js");
;



window.addEventListener('DOMContentLoaded', () => {

  const ReviewSlider = new _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_0__.default({
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

  const StuffSection = new _modules_sliderStuff__WEBPACK_IMPORTED_MODULE_1__.default({
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

  const Stuff = new _modules_stuffSort__WEBPACK_IMPORTED_MODULE_2__.default({
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





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map