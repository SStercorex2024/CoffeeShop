import "./Footer.scss"
import Logo from "@/components/Logo"
import Button from "@/components/Button"
import toKebabCase from "@/constants/toKebabCase"

const Footer = () => {
  const menuItems = [
    {
      title: "Useful Links",
      listItems: [
        "Privacy Policy",
        "Returns",
        "Tearms and Conditions",
        "Our Sitemap",
        "Latest News",
        "Blog",
      ],
    },
    {
      title: "Lets Help You",
      listItems: [
        "Account",
        "Password Recovery",
        "Contact us",
        "Get Help",
        "Purchase Information",
        "Purchase details",
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text">
            <div className="footer__logo-wrapper">
              <Logo className="footer__logo" />
              <p>
                We create a cozy space for those who appreciate rich coffee and
                a warm atmosphere.
              </p>
            </div>
            <div className="footer__description">
              <p>
                Our shop offers carefully selected beans from around the world,
                brewed with attention to every detail.
              </p>
            </div>
            <ul className="footer__social">
              <li className="footer__social-item">
                <Button
                  className="foote__social-icon"
                  href="#"
                  label="youtube"
                  isLabelHidden
                  iconName="youtube"
                  hasFillIcon
                />
              </li>
              <li className="footer__social-item">
                <Button
                  className="foote__social-icon"
                  href="#"
                  label="instagram"
                  isLabelHidden
                  iconName="instagram"
                  hasFillIcon
                />
              </li>
              <li className="footer__social-item">
                <Button
                  className="foote__social-icon"
                  href="#"
                  label="facebook"
                  isLabelHidden
                  iconName="facebook"
                  hasFillIcon
                />
              </li>
            </ul>
          </div>
          <nav className="footer__navigation">
            <ul className="footer__list">
              {menuItems.map(({ title, listItems }, index) => (
                <li className="footer__list-item" key={index}>
                  <h3 className="footer__list-title">{title}</h3>
                  <ul className="footer__sublist">
                    {listItems.map((item, index) => (
                      <li className="footer__sublist-subitem" key={index}>
                        <a
                          href={`/${toKebabCase(item)}`}
                          className="footer__sublist-sublink"
                          rel="noreferrer"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <form action="" className="footer__subscribe">
            <label
              htmlFor="subscribe-email"
              className="footer__subscribe-label"
            >
              Subscribe
            </label>
            <input
              type="email"
              id="subscribe-email"
              className="footer__subscribe-input"
              required
              placeholder="Enter your E-mail"
            />
            <Button
              className="footer__subscribe-button"
              type="submit"
              mode="secondary"
              label="Subscribe now"
            />
          </form>
          <span className="footer__rigths">
            © 2025 Dribbble. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
