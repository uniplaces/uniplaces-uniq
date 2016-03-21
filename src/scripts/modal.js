'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal() {
    var targets = arguments.length <= 0 || arguments[0] === undefined ? document.querySelectorAll('.show-modal') : arguments[0];
    var modal = arguments.length <= 1 || arguments[1] === undefined ? document.querySelectorAll('.modal') : arguments[1];

    _classCallCheck(this, Modal);

    this.targets = targets;
    this.modal = modal;
    this.targets = Array.prototype.slice.call(this.targets);

    this._addEventListeners = this._addEventListeners.bind(this);
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this._addEventListeners();
  }

  /**
  * _addEventListeners - initial event listener's binding
  *
  * @private
  * @function
  */


  _createClass(Modal, [{
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this = this;

      var targets = this.targets;
      var i = targets.length - 1;

      var modal = this.modal;
      var j = modal.length - 1;

      for (; i >= 0; i--) {
        targets[i].addEventListener('click', function (event) {
          _this._showModal(event);
        }, false);
      }

      for (; j >= 0; j--) {
        modal[j].addEventListener('click', function (event) {
          _this._hideModal(event);
        }, false);
      }
    }
  }, {
    key: '_showModal',
    value: function _showModal(event) {
      document.getElementById(event.currentTarget.dataset.target).className = 'modal';
    }
  }, {
    key: '_hideModal',
    value: function _hideModal(event) {
      event.currentTarget.className = 'modal hidden';
    }
  }]);

  return Modal;
}();

window.addEventListener('load', function () {
  return new Modal();
});
//# sourceMappingURL=modal.js.map
