class SwapCards {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector)
    this.cards = Array.from(this.container.children)
    this.activeIndex = 1

    this.init()
  }

  init() {
    this.updateActiveClass()
    this.cards.forEach((card, index) => {
      card.style.cursor = "pointer"
      card.addEventListener("click", () => this.handleClick(index))
    })
  }

  handleClick(clickedIndex) {
    if (clickedIndex === this.activeIndex) {
      return
    }

    this.activeIndex = clickedIndex
    this.updateActiveClass()
  }

  updateActiveClass() {
    this.cards.forEach((card, index) => {
      card.classList.toggle("is-active", index === this.activeIndex)
    })
  }
}

export default SwapCards
