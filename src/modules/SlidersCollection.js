import Swiper from "swiper"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

class Slider {
  selectors = {
    pagination: "[data-js-slider-pagination]",
  }

  constructor(rootElement, option = {}) {
    this.rootElement = rootElement
    this.paginationElement = this.rootElement.querySelector(
      this.selectors.pagination,
    )

    this.option = option
    this.init()
  }

  init() {
    const defaultOption = {
      modules: [Pagination],
      // direction: "vertical",
      loop: true,
      pagination: this.paginationElement
        ? {
            el: this.paginationElement,
            clickable: true,
            bulletClass: "slider-bullet",
            bulletActiveClass: "slider-bullet-active",
          }
        : false,
    }

    const swiperOption = {
      ...defaultOption,
      ...this.option,
    }

    new Swiper(this.rootElement, swiperOption)
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
    this.initializeVerticalSliders()
    this.initializeHorizontalSliders()
  }

  initializeVerticalSliders() {
    document.querySelectorAll("[data-js-slider]").forEach((element) => {
      new Slider(element, {
        direction: "vertical",
        loop: true,
      })
    })
  }

  initializeHorizontalSliders() {
    document.querySelectorAll("[data-js-slider-2]").forEach((element) => {
      new Slider(element, {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: "auto",
            spaceBetween: 16,
          },
          1023: {
            spaceBetween: 20,
          },
          1400: {
            spaceBetween: 30,
          },
        },
        loopAdditionalSlides: 1,
        loopedSlides: 4,
        watchSlidesProgress: true,
      })
    })
  }
}

export default SliderCollection
