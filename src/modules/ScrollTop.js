const initScrollProgress = () => {
  const scrollProgress = document.getElementById("progress")
  const progressValue = document.getElementById("progress-value")

  if (!scrollProgress || !progressValue) {
    return
  }

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollValue = Math.round((pos * 100) / calcHeight)

    if (pos > 100) {
      scrollProgress.style.display = "grid"
    } else {
      scrollProgress.style.display = "none"
    }

    scrollProgress.style.background = `conic-gradient(#D3AD7F ${scrollValue}%, #7c7777 ${scrollValue}%)`
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
  })

  window.addEventListener("scroll", calcScrollValue)
  window.addEventListener("load", calcScrollValue)
}

export default initScrollProgress
