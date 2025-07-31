import './PopularMenu.scss'
import {Picture} from "minista";

const PopularMenu = () => {
  const itemsMenu = [
    {
      urlImg: '/src/assets/images/popular-menu/1.png',
      name: 'Americano',
      description: 'Classic black coffee without sugar',
      price: '$10'
    },
    {
      urlImg: '/src/assets/images/popular-menu/2.png',
      name: 'Cappuccino',
      description: 'Coffee with milk foam and a smooth taste',
      price: '$15'
    },
    {
      urlImg: '/src/assets/images/popular-menu/3.png',
      name: 'Latte',
      description: 'Mild coffee with milk and a light foam',
      price: '$18'
    },
    {
      urlImg: '/src/assets/images/popular-menu/4.png',
      name: 'Espresso',
      description: 'Strong and rich coffee in a small cup',
      price: '$12'
    },
    {
      urlImg: '/src/assets/images/popular-menu/5.png',
      name: 'Mocha',
      description: 'Chocolate flavor with hints of coffee and milk',
      price: '$20'
    },
    {
      urlImg: '/src/assets/images/popular-menu/6.png',
      name: 'Flat White',
      description: 'Smooth coffee with thin milk foam',
      price: '$22'
    },
    {
      urlImg: '/src/assets/images/popular-menu/7.png',
      name: 'Macchiato',
      description: 'Espresso with a drop of milk',
      price: '$14'
    },
    {
      urlImg: '/src/assets/images/popular-menu/8.png',
      name: 'Cold Brew',
      description: 'Refreshing coffee brewed cold',
      price: '$25'
    }
  ]

  return (
    <section className="popular-menu" aria-labelledby="popular-menu-title">
      <div className="container">
        <h1 className="visually-hidden" id="popular-menu-title">Top Picks for
          Coffee Lovers
        </h1>
        <div className="popular-menu__content">
          <div className="popular-menu__header">
            <h2 className="popular-menu__title-header h2 h2--width-lines">POPULAR
              MENU
            </h2>
          </div>
          <ul className="popular-menu__list">
            {itemsMenu.map(({urlImg, name, description, price}, index) => (
              <li
                className="popular-menu__item"
                key={index}
              >
                <Picture
                  className="popular-menu__image"
                  src={urlImg}
                  formats={["webp", "avif"]}
                />
                <div className="popular-menu__text">
                  <div className="popular-menu__extra">
                    <h3 className="popular-menu__title">{name}</h3>
                    <div className="popular-menu__description">
                      <p>{description}</p>
                    </div>
                  </div>
                  <span className="popular-menu__price">{price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PopularMenu