import Swiper from "swiper"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const rootSelector = "[data-js-slider]"

class Slider {
  selectors = {
    root: rootSelector,
    pagination: "[data-js-slider-pagination]",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.paginationElement = this.rootElement.querySelector(
      this.selectors.pagination,
    )
    this.init()
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [Pagination],
      direction: "vertical",
      loop: true,
      pagination: {
        el: this.paginationElement,
        clickable: true,
        bulletClass: "slider-bullet",
        bulletActiveClass: "slider-bullet-active",
      },
    })
  }
}

class SliderCollection {
  constructor() {
    this.init()
  }

  init() {
    if (document.readyState === "complete") {
      this.initializeSliders()
    } else {
      window.addEventListener("load", () => this.initializeSliders())
    }
  }

  initializeSliders() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection
