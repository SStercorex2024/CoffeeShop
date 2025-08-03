import "./Button.scss"
import classNames from "classnames"
import Icon from "@/components/Icon"

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    /**
     *  'transparent' default | ' accent ' | 'secondary'
     */
    mode = "",
    label,
    isLabelHidden = false,
    iconName,
    hasFillIcon,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const IconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {IconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </Component>
  )
}

export default Button
