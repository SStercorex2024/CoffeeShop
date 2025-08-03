import Swiper from "swiper"
import { Autoplay, Pagination } from "swiper/modules"
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
      modules: [Pagination, Autoplay],
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

    const swiper = new Swiper(this.rootElement, swiperOption)

    setTimeout(() => {
      swiper.slideTo(0, 0)
      swiper.update()
    }, 100)
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
      window.addEventListener("DOMContentLoaded", () =>
        this.initializeSliders(),
      )
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
        direction: "horizontal",
        spaceBetween: 20,
        loop: true,
        speed: 800,
        slideToClickedSlide: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          340: { spaceBetween: 10 },
          768: { spaceBetween: 15 },
          1024: { spaceBetween: 20 },
          1440: { spaceBetween: 30 },
        },
        on: {
          init: function () {
            this.update()
          },
        },
      })
    })
  }
}

export default SliderCollection
