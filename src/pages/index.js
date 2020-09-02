import { useEffect } from "react"
import { navigate } from "gatsby"
const window = require("global/window")

// console.log(window.navigator.language)

const langUrl =
  window.navigator.language.slice(0, 2) === "ru"
    ? "/rus"
    : window.navigator.language.slice(0, 2) === "ge"
    ? "/geo"
    : window.navigator.language.slice(0, 2) === "de"
    ? "/deu"
    : window.navigator.language.slice(0, 2) === "en"
    ? "/eng"
    : "/eng"

export default () => {
  useEffect(() => {
    navigate(langUrl)
  }, [])
  return null
}
