'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toast = function () {
  function Toast() {
    var targets = arguments.length <= 0 || arguments[0] === undefined ? document.querySelectorAll('.show-toast') : arguments[0];
    var toast = arguments.length <= 1 || arguments[1] === undefined ? document.querySelectorAll('.toast') : arguments[1];

    _classCallCheck(this, Toast);

    this.targets = targets;
    this.toast = toast;
    this.targets = Array.prototype.slice.call(this.targets);

    this._addEventListeners = this._addEventListeners.bind(this);
    this._showToast = this._showToast.bind(this);
    this._hideToast = this._hideToast.bind(this);
    this._addEventListeners();
  }

  /**
  * _addEventListeners - initial event listener's binding
  *
  * @private
  * @function
  */


  _createClass(Toast, [{
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this = this;

      var targets = this.targets;
      var i = targets.length - 1;

      var toast = this.toast;
      var j = toast.length - 1;

      for (; i >= 0; i--) {
        targets[i].addEventListener('click', function (event) {
          _this._showToast(event);
        }, false);
      }

      for (; j >= 0; j--) {
        toast[j].addEventListener('click', function (event) {
          _this._hideToast(event);
        }, false);
      }
    }
  }, {
    key: '_showToast',
    value: function _showToast(event) {
      document.getElementById(event.currentTarget.dataset.target).className = 'toast';
    }
  }, {
    key: '_hideToast',
    value: function _hideToast(event) {
      event.currentTarget.className = 'toast hidden';
    }
  }]);

  return Toast;
}();

window.addEventListener('load', function () {
  return new Toast();
});
//# sourceMappingURL=toasts.js.map
