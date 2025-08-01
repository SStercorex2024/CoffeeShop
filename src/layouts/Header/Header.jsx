import "./Header.scss"
import classNames from "classnames"
import Button from "@/components/Button"
import BurgerButton from "@/components/BurgerButton"
import Logo from "@/components/Logo"

const Header = (props) => {
  const { isHeaderSticky = true } = props

  const menuItems = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Menu",
    },
    {
      name: "RESERVATION",
    },
    {
      name: "Shop",
    },
    {
      name: "Contact",
    },
    {
      name: "Book Now",
    },
  ]

  return (
    <header
      className={classNames("header", {
        "header--sticky": isHeaderSticky,
      })}
    >
      <div className="header__content container" data-js-overlay-menu="">
        <Logo className="header__logo" />
        <div className="header__dialog" data-js-overlay-menu-dialog="">
          <nav className="header__navigation">
            <ul className="header__list">
              {menuItems.map(({ name }, index) => (
                <li className="header__list-item" key={index}>
                  {name !== "Book Now" ? (
                    <a
                      className="header__list-link"
                      href={
                        name === "Home" ? "/" : `#${name.toLocaleLowerCase()}`
                      }
                      key={index}
                    >
                      {name}
                    </a>
                  ) : (
                    <Button
                      className="header__list-link"
                      mode="accent"
                      label={name}
                      key={index}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <BurgerButton
          className="header__burger-button"
          extraAttrs={{ "data-js-overlay-menu-burger-button": "" }}
        />
      </div>
    </header>
  )
}

export default Header
