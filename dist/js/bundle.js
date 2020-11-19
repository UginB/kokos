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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
;

window.addEventListener('DOMContentLoaded', () => {

  const MainSlider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__.default({
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