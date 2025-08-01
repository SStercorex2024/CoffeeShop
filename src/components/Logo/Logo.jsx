import "./Logo.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Logo = (props) => {
  const { className } = props

  return (
    <div className={classNames(className, "logo")}>
      <a href="/" className="logo__link">
        <Icon className={classNames(className, "logo__icon")} name="logo" />
      </a>
    </div>
  )
}

export default Logo
