import "./Services.scss"
import React from "react"
import { Picture } from "minista"
import Icon from "@/components/Icon"
import toTitleCase from "@/constants/toTitleCase"

const Services = () => {
  const sliderItems = [
    {
      iconName: "cup-1",
      subtitle: "Type Of Coffee",
      description:
        "Explore our wide selection of coffee types, from espresso to cold brew, crafted to suit every taste.",
      srcImg: "/src/assets/images/services/1.jpg",
    },
    {
      iconName: "been",
      subtitle: "Bean Varieties",
      description:
        "Discover premium coffee beans sourced from the finest regions around the world.",
      srcImg: "/src/assets/images/services/2.jpg",
    },
    {
      iconName: "croissan",
      subtitle: "Coffee & Pastry",
      description:
        "Enjoy a perfect pairing of freshly brewed coffee with our daily baked pastries.",
      srcImg: "/src/assets/images/services/3.jpg",
    },
    {
      iconName: "cup-2",
      subtitle: "Coffee To Go",
      description:
        "Grab your favorite coffee on the go—fast, fresh, and always satisfying.",
      srcImg: "/src/assets/images/services/4.jpg",
    },
    {
      iconName: "cup-1",
      subtitle: "Type Of Coffee",
      description:
        "Explore our wide selection of coffee types, from espresso to cold brew, crafted to suit every taste.",
      srcImg: "/src/assets/images/services/1.jpg",
    },
    {
      iconName: "been",
      subtitle: "Bean Varieties",
      description:
        "Discover premium coffee beans sourced from the finest regions around the world.",
      srcImg: "/src/assets/images/services/2.jpg",
    },
    {
      iconName: "croissan",
      subtitle: "Coffee & Pastry",
      description:
        "Enjoy a perfect pairing of freshly brewed coffee with our daily baked pastries.",
      srcImg: "/src/assets/images/services/3.jpg",
    },
    {
      iconName: "cup-2",
      subtitle: "Coffee To Go",
      description:
        "Grab your favorite coffee on the go—fast, fresh, and always satisfying.",
      srcImg: "/src/assets/images/services/4.jpg",
    },
    {
      iconName: "cup-1",
      subtitle: "Type Of Coffee",
      description:
        "Explore our wide selection of coffee types, from espresso to cold brew, crafted to suit every taste.",
      srcImg: "/src/assets/images/services/1.jpg",
    },
    {
      iconName: "been",
      subtitle: "Bean Varieties",
      description:
        "Discover premium coffee beans sourced from the finest regions around the world.",
      srcImg: "/src/assets/images/services/2.jpg",
    },
    {
      iconName: "croissan",
      subtitle: "Coffee & Pastry",
      description:
        "Enjoy a perfect pairing of freshly brewed coffee with our daily baked pastries.",
      srcImg: "/src/assets/images/services/3.jpg",
    },
    {
      iconName: "cup-2",
      subtitle: "Coffee To Go",
      description:
        "Grab your favorite coffee on the go—fast, fresh, and always satisfying.",
      srcImg: "/src/assets/images/services/4.jpg",
    },
  ]

  const title = "What We Offer to Coffee Lovers"

  return (
    <section
      className="services"
      aria-labelledby="section-services-title"
      id="shop"
    >
      <h2 className="visually-hidden" id="section-services-title">
        {title}
      </h2>
      <div className="services__content">
        <div className="services__title">
          <h2 className="h2 h2--width-lines">EXQUISITE SERVICES</h2>
        </div>
        <div className="swiper services__slider" data-js-slider-2="">
          <div className="swiper-wrapper">
            {sliderItems.map(
              ({ iconName, subtitle, description, srcImg }, index) => (
                <div className="swiper-slide services__slide" key={index}>
                  <Picture
                    className="services__image"
                    src={srcImg}
                    formats={["webp", "avif"]}
                  />
                  <div className="services__extra">
                    <Icon
                      className="services__icon"
                      hasFill
                      ariaLabel={subtitle}
                      name={iconName}
                    />
                    <div className="services__text">
                      <h3 className="services__subtitle">
                        {toTitleCase(subtitle)}
                      </h3>
                      <div className="services__description">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
