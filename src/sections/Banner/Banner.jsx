import './Banner.scss'
import classNames from "classnames";
import Button from "@/components/Button";
import SliderPagination from "@/components/SliderPagination";

const Banner = (props) => {
  const {
    className
  } = props

  const itemsSlider = [
    {
      title: 'Rosted coffee for you',
      description: 'The coffee is brewed by first roasting the green coffee coals in a brazier. given an opportunity to sample.',
    },
    {
      title: 'Fine aroma in every sip',
      description: 'Carefully selected beans are slow-roasted to perfection, bringing out their natural sweetness and bold flavor.',
    },
    {
      title: 'Freshly ground every morning',
      description: 'From roast to grind, each step is crafted with care to deliver a smooth and satisfying coffee experience.'
    },
  ]

  return (
    <section
      className={classNames(className, 'banner')}
      aria-labelledby="banner-title"
    >
      <div className="container">
        <div
          className="swiper banner__slider slider"
          data-js-slider=""
        >
          <div
            className="swiper-wrapper"
          >
            {itemsSlider.map(({title, description}, index) => (
              <div className="swiper-slide banner__slide" key={index}>
                <div className="banner__content">
                  <h1
                    className="banner__title"
                    id="banner-title"
                  >
                    {title}
                  </h1>
                  <div className="banner__description">
                    <p>{description}</p>
                  </div>
                  <div className="banner__buttons">
                    <Button
                      className="banner__button"
                      mode="accent"
                      label="TESTY COFFEE"
                      href="#popular-manu"
                    />
                    <Button
                      className="banner__button"
                      mode="secondary"
                      label="READ MORE"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SliderPagination className="banner__slider-pagination"/>
        </div>
      </div>
    </section>
  )
}

export default Banner