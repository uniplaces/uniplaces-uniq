class LazyLoad {
  constructor() {
    this.images = document.querySelectorAll('[class="lazy-load"]');
    this._addEventListeners();
    this.timmer = null;

    // trigger a "lazyload tick" to show images already in the viewport
    this._testLazyLoad();
  }

  _addEventListeners() {
    window.addEventListener('scroll', () => {
      if (this.timmer) {
        clearTimeout(this.timmer);
      }
      this.timmer = setTimeout(() => {
        requestAnimationFrame(() => {
          this._testLazyLoad();
        });
      }, 100);
    });
  }

  _testLazyLoad() {
    const wHeight = window.innerHeight;

    for (let i = this.images.length - 1; i >= 0; i--) {
      if (this.images[i].getBoundingClientRect().top < wHeight) {
        this.images[i].src = this.images[i].dataset.src;
      }
    }
  }
}

window.addEventListener('load', () => new LazyLoad());
//# sourceMappingURL=lazyload.js.map
