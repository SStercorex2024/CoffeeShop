import "./About.scss"
import { Picture } from "minista"
import { Fragment } from "react"

const About = () => {
  const itemsCards = [
    {
      title: "Delicious morning Coffee",
    },
    {
      imgUrl: "/src/assets/images/about/2.png",
    },
    {
      imgUrl: "/src/assets/images/about/3.png",
    },
    {
      title: "Delicious morning Coffee",
    },
  ]

  const titleMessage = "Masterchef message"

  return (
    <section className="about" aria-labelledby="section-about-title">
      <div className="about__content">
        <h1 className="visually-hidden" id="section-about-title">
          Tasty Morning Moments
        </h1>

        <div className="about__big-block">
          <div className="about__quoting">
            <h2 className="about__title">{titleMessage.toUpperCase()}</h2>
            <div className="about__subtitle">
              <p>Unique and delicious brews crafted by world-class baristas</p>
            </div>
            <div className="about__description">
              <p>
                Start your day with a perfect cup — expertly brewed, rich in
                flavor, and made with handpicked beans. Each sip is a warm
                welcome to the morning you deserve.
              </p>
            </div>
          </div>
        </div>

        <div className="about__smalls-blocks">
          {itemsCards.map(({ imgUrl, title }, index) => (
            <div
              className={imgUrl ? "about__image-block" : "about__text-block"}
              key={index}
            >
              {imgUrl ? (
                <Picture
                  className="about__image"
                  src={imgUrl}
                  formats={["webp", "avif"]}
                />
              ) : (
                <h3 className="about__text">
                  {title
                    .replace("morning", "\nmorning\n")
                    .toUpperCase()
                    .split("\n")
                    .map((line, idx) => (
                      <Fragment key={`${line}-${idx}`}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
