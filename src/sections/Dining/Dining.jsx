import "./Dining.scss"
import classNames from "classnames"
import { Image } from "minista"
import Button from "@/components/Button"

const Dining = (props) => {
  const { className } = props

  return (
    <section
      className={classNames(className, "dining")}
      aria-labelledby="section-dining-title"
    >
      <div className="container">
        <div className="dining__content">
          <Image
            className="dining__image"
            src="/src/assets/images/dining/1.png"
          />
          <h1 className="dining__title" id="section-dining-title">
            Now enjoy a wonderful cafe dining experience and healthy food
          </h1>
          <div className="dining__extra">
            <div className="dining__description">
              <p>
                Discover the perfect blend of cozy atmosphere and nutritious
                meals.
              </p>
            </div>
            <Button className="dining__link" href="#about" label="ABOUT US" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dining
