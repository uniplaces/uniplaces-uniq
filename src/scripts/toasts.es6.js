
class Toast {
  constructor (
    targets = document.querySelectorAll('.show-toast'),
    toast = document.querySelectorAll('.toast')
  ) {
    this.targets = targets
    this.toast = toast
    this.targets = Array.prototype.slice.call(this.targets)

    this._addEventListeners = this._addEventListeners.bind(this)
    this._showToast = this._showToast.bind(this)
    this._hideToast = this._hideToast.bind(this)
    this._addEventListeners()
  }

  /**
  * _addEventListeners - initial event listener's binding
  *
  * @private
  * @function
  */
  _addEventListeners () {
    let targets = this.targets
    let i = targets.length - 1

    let toast = this.toast
    let j = toast.length -1

    for (; i >= 0; i--) {
      targets[i].addEventListener('click', (event) => {
        this._showToast(event)
      }, false)
    }

    for (; j >= 0; j--) {
      toast[j].addEventListener('click', (event) => {
        this._hideToast(event)
      }, false)
    }
  }

  _showToast (event) {
    document.getElementById(event.currentTarget.dataset.target).className = 'toast'
  }

  _hideToast (event) {
    event.currentTarget.className = 'toast hidden'
  }

}

window.addEventListener('load', () => new Toast())
