import './CapDecor.scss'
import classNames from "classnames";
import {Picture} from "minista";

const CapDecor = (props) => {
  const {
    className
  } = props


  return (
    <div
      className={classNames(className, 'cap-decor')}
    >
      <div className="cap-decor__content container">
        <Picture
          src="/src/assets/images/decor/4.png"
          formats={["webp", "avif"]}
        />
      </div>
    </div>
  )
}

export default CapDecor