import "./SliderPagination.scss"
import classNames from "classnames"

const SliderPagination = (props) => {
  const { className } = props

  return (
    <div
      className={classNames(className, "slider-pagination")}
      data-js-slider-pagination=""
    ></div>
  )
}

export default SliderPagination
