'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// timeoutDuration
var timeoutDuration = 100;

var LazyLoad = function () {
  function LazyLoad() {
    var images = arguments.length <= 0 || arguments[0] === undefined ? document.getElementsByClassName('lazy-load') : arguments[0];

    _classCallCheck(this, LazyLoad);

    this.images = images;
    this.images = Array.prototype.slice.call(this.images);

    this._addEventListeners = this._addEventListeners.bind(this);
    this._testLazyLoad = this._testLazyLoad.bind(this);

    this.timmer = null;
    this._addEventListeners();

    // trigger a "lazyload tick" to show images already in the viewport
    this._testLazyLoad();
  }

  /**
  * _addEventListeners - initial event listener's binding
  *
  * @private
  * @function
  */


  _createClass(LazyLoad, [{
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this = this;

      window.addEventListener('scroll', function () {
        if (_this.timmer) {
          clearTimeout(_this.timmer);
        }
        // use a timer so we do not fire _testLazyLoad on each scroll tick
        _this.timmer = setTimeout(function () {
          requestAnimationFrame(function () {
            _this._testLazyLoad();
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

  }, {
    key: '_testLazyLoad',
    value: function _testLazyLoad() {
      var wHeight = window.innerHeight;
      var images = this.images;
      var i = images.length - 1;

      for (; i >= 0; i--) {
        var elem = images[i];
        var y = elem.getBoundingClientRect().top;

        // test if the image is in the viewport (either comming from the top or below)
        if (y < wHeight && y > -elem.height) {
          elem.src = elem.dataset.src; // this is where the magic happens
          this.images.splice(i, 1); //make the list tiny as we chug along
        }
      }
    }
  }]);

  return LazyLoad;
}();

window.addEventListener('load', function () {
  return new LazyLoad();
});
//# sourceMappingURL=lazyload.js.map
