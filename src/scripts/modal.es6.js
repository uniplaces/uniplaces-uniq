
class Modal {
  constructor (
    targets = document.querySelectorAll('.show-modal'),
    modal = document.querySelectorAll('.modal')
  ) {
    this.targets = targets
    this.modal = modal
    this.targets = Array.prototype.slice.call(this.targets)

    this._addEventListeners = this._addEventListeners.bind(this)
    this._showModal = this._showModal.bind(this)
    this._hideModal = this._hideModal.bind(this)
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

    let modal = this.modal
    let j = modal.length -1

    for (; i >= 0; i--) {
      targets[i].addEventListener('click', (event) => {
        this._showModal(event)
      }, false)
    }

    for (; j >= 0; j--) {
      modal[j].addEventListener('click', (event) => {
        this._hideModal(event)
      }, false)
    }
  }

  _showModal (event) {
    document.getElementById(event.currentTarget.dataset.target).className = 'modal'
  }

  _hideModal (event) {
    event.currentTarget.className = 'modal hidden'
  }

}

window.addEventListener('load', () => new Modal())
