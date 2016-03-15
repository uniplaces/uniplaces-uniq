// timeoutDuration
const timeoutDuration = 100;

class LazyLoad {
  constructor() {
    this.images = document.getElementsByClassName('lazy-load');
    this.images = Array.prototype.slice.call(this.images);

    this._addEventListeners = this._addEventListeners.bind(this);
    this._testLazyLoad = this._testLazyLoad.bind(this);

    this._addEventListeners();
    this.timmer = null;

    // trigger a "lazyload tick" to show images already in the viewport
    this._testLazyLoad();
  }

  /**
  * _addEventListeners - inital event listener's binding
  *
  * @private
  * @function
  */
  _addEventListeners() {
    window.addEventListener('scroll', () => {
      if (this.timmer) {
        clearTimeout(this.timmer);
      }
      this.timmer = setTimeout(() => {
        requestAnimationFrame(() => {
          this._testLazyLoad();
        });
      }, timeoutDuration);
    });
  }

  /**
  * _testLazyLoad - cicle through all images and check if they're inside the
  * viewport or not (in order to show them)
  *
  * @private
  * @function
  */
  _testLazyLoad() {
    const wHeight = window.innerHeight;
    let images = this.images;
    let i = images.length - 1;

    for (; i >= 0; i--) {
      if (images[i].getBoundingClientRect().top < wHeight) {
        images[i].src = images[i].dataset.src; // this is where the magic happens
        this.images.splice(i, 1); //make the list tiny as we chug along
      }
    }
  }
}

window.addEventListener('load', () => new LazyLoad());
//# sourceMappingURL=lazyload.js.map
