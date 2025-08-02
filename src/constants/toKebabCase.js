const toKebabCase = (string) => {
  return string.trim().toLowerCase().replace(/\s+/g, "-")
}

export default toKebabCase
