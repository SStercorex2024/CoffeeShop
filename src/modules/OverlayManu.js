class OverlayMenu {
  selectors = {
    root: "[data-js-overlay-menu]",
    dialog: "[data-js-overlay-menu-dialog]",
    burgerButton: "[data-js-overlay-menu-burger-button]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton,
    )
    this.bindElement()
    this.onChangeWindow()
  }

  onChangeWindow = () => {
    const isMobile = window.innerWidth < 767

    this.dialogElement.classList.remove(this.stateClasses.isActive)
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)

    if (!isMobile) {
      this.dialogElement.classList.add(this.stateClasses.isActive)
    }
  }

  // onScroll = () => {
  //   if (this.dialogElement.open) {
  //     this.dialogElement.open = false
  //     this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
  //   }
  // }

  onBurgerClickButton = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.classList.toggle(this.stateClasses.isActive)
  }

  bindElement = () => {
    this.burgerButtonElement.addEventListener("click", this.onBurgerClickButton)
    window.addEventListener("resize", this.onChangeWindow)
    // window.addEventListener('scroll', this.onScroll)
  }
}

export default OverlayMenu
