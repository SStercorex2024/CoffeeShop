import "./Questbook.scss"
import React from "react"
import classNames from "classnames"

import { Picture } from "minista"
import Icon from "@/components/Icon"

const initialCardsItems = [
  {
    description:
      "Luca is our local weathered traveler who starts every morning with a doppio and a novel by the window.",
    imgUrl: "/src/assets/images/guestbook/1.jpg",
    iconName: "quotes",
    name: "Luca Moretti",
    position: "Regular Visitor",
  },
  {
    description:
      "Amélie crafts each cup like a small ritual — with passion, precision, and a smile that warms the room.",
    imgUrl: "/src/assets/images/guestbook/2.jpg",
    iconName: "quotes",
    name: "Amélie Dubois",
    position: "Barista",
  },
  {
    description:
      "Nikolai swears he studies better with our cold brew in hand and jazz playing softly in the background.",
    imgUrl: "/src/assets/images/guestbook/3.jpg",
    iconName: "quotes",
    name: "Nikolai Petrov",
    position: "Student",
  },
]

const Questbook = () => {
  return (
    <section className="questbook" aria-labelledby="section-questbook-title">
      <div className="container">
        <div className="questbook__content">
          <h1 className="visually-hidden" id="section-questbook-title">
            Our Featured Explorers
          </h1>
          <div className="questbook__title">
            <h2 className="h2 h2--width-lines">OUR GUESTBOOK</h2>
          </div>
          <div className="questbook__cards">
            {initialCardsItems.map(
              ({ description, iconName, imgUrl, name, position }, index) => (
                <div
                  className={classNames("questbook__card", {
                    "is-active": index === 1,
                  })}
                  key={index}
                  style={{ cursor: "pointer" }}
                  data-index={index} // Для логики вне React
                >
                  <div className="questbook__card-text">
                    <Icon
                      className="questbook__card-icon"
                      name={iconName}
                      ariaLabel=""
                      hasFill
                    />
                    <div className="questbook__card-description">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="questbook__card-image-block">
                    <Picture
                      className="questbook__card-image"
                      src={imgUrl}
                      formats={["webp", "avif"]}
                    />
                    <div className="questbook__card-name">
                      <p>{name}</p>
                    </div>
                    <span className="questbook__card-position">{position}</span>
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

export default Questbook
