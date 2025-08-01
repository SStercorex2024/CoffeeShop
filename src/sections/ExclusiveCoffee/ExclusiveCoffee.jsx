import "./ExclusiveCoffee.scss"
import { Picture } from "minista"

const ExclusiveCoffee = () => {
  const listItems = [
    {
      imgUrl: "/src/assets/images/exclusive-coffee/1.png",
      title: "Americano",
      description: "Bold and classic black coffee.",
      price: "JUST $19.00",
    },
    {
      imgUrl: "/src/assets/images/exclusive-coffee/2.png",
      title: "Vanilla Latte",
      description: "Smooth coffee with a hint of vanilla.",
      price: "JUST $23.00",
    },
    {
      imgUrl: "/src/assets/images/exclusive-coffee/3.png",
      title: "Hazelnut Mocha",
      description: "Chocolate coffee with nutty flavor.",
      price: "JUST $27.00",
    },
  ]

  return (
    <section
      className="exclusive-coffee"
      aria-labelledby="exclusive-coffee-title"
    >
      <div className="container">
        <h1 className="visually-hidden" id="exclusive-coffee-title">
          Premium Brews, Just for You
        </h1>
        <div className="exclusive-coffee__content">
          <div className="exclusive-coffee__header">
            <h2 className="exclusive-coffee__title-header h2 h2--width-lines">
              EXCLUSIVE Coffee
            </h2>
          </div>
          <ul className="exclusive-coffee__list">
            {listItems.map(({ imgUrl, title, description, price, index }) => (
              <li className="exclusive-coffee__item" key={index}>
                <Picture
                  className="exclusive-coffee__image"
                  src={imgUrl}
                  sizes="(max-width: 289px) 100vw, 50vw"
                  formats={["webp", "avif"]}
                />
                <div className="exclusive-coffee__text">
                  <h2 className="exclusive-coffee__subtitle">{title}</h2>
                  <div className="exclusive-coffee__description">
                    <p>{description}</p>
                  </div>
                  <span className="exclusive-coffee__price price">{price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExclusiveCoffee
