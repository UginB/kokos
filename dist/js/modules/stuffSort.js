export default class StuffSort {
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
      this.menuContainer.querySelector(stuffClass).addEventListener('click', (e) => {
        this.stuffItems.forEach(item => {
          item.style.display = 'none';
          item.classList.remove('animate__animated', 'animate__fadeIn');
        });
        this.stuffContainer.querySelectorAll(stuffClass).forEach(item => {
          item.style.display = 'flex';
          item.classList.add('animate__animated', 'animate__fadeIn');
        });
        console.log(e.currentTarget.classList);
      });
    });
  }

  init() {
    this.bindTriggers();
  };

}