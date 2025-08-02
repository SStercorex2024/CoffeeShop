import "./Contact.scss"
import Icon from "@/components/Icon"
import onlyNumbers from "@/constants/onlyNumbers"

const Contact = () => {
  const listItems = [
    {
      iconName: "phone",
      subtitle: "LET'S TALK",
      phone: "Phone: 420-808-222-202",
      fax: "Fax: 420-808-222-202",
    },
    {
      iconName: "mail",
      subtitle: "TICKETS INFO",
      email: "info@yourdomain.com",
      subemail: "hr@yourdomain.com",
    },
    {
      iconName: "map",
      subtitle: "cotact us",
      address: "401 Broadway, 24th Floor New York, NY 10013",
    },
    {
      iconName: "earth",
      subtitle: "EVENT DETAILS",
      span: "Find another details",
    },
  ]

  return (
    <section
      className="contact"
      aria-labelledby="section-contact-title"
      id="contact"
    >
      <div className="container">
        <h1 className="visually-hidden" id="section-contact-title">
          CONTACT WITH OUR COFFEE SHOP
        </h1>
        <div className="contact__content">
          <ul className="contact__list">
            {listItems.map(
              (
                {
                  iconName,
                  subtitle,
                  phone,
                  fax,
                  email,
                  subemail,
                  address,
                  span,
                },
                index,
              ) => (
                <li className="contact__item" key={index}>
                  <div className="contact__icon-wrapper">
                    <Icon className="contact__icon" hasFill name={iconName} />
                  </div>
                  <div className="contact__text">
                    <h2 className="contact__subtitle">
                      {subtitle.toUpperCase()}
                    </h2>
                    <div className="contact__extra">
                      {phone && fax && (
                        <>
                          <a
                            className="contact__link"
                            href={`tel:${phone && onlyNumbers(phone)}`}
                          >
                            {phone}
                          </a>
                          <a
                            className="contact__link"
                            href={`tel:${phone && onlyNumbers(fax)}`}
                          >
                            {fax}
                          </a>
                        </>
                      )}
                      {email && subemail && (
                        <>
                          <a
                            className="contact__link"
                            href={`mailto:${email && email.toLowerCase()}`}
                          >
                            {email.toLowerCase()}
                          </a>
                          <a
                            className="contact__link"
                            href={`mailto:${subemail && subemail.toLowerCase()}`}
                          >
                            {subemail.toLowerCase()}
                          </a>
                        </>
                      )}
                      {address && (
                        <address className="contact__address">
                          {address}
                        </address>
                      )}
                      {span && (
                        <a href={span} className="contact__span">
                          {span}
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
