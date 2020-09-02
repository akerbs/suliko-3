import { useEffect } from "react"
import { navigate } from "gatsby"
const window = require("global/window")

export default () => {
  useEffect(() => {
    if (window.navigator.language.slice(0, 2) !== "ru") {
      navigate("/rus")
    } else if (window.navigator.language.slice(0, 2) !== "de") {
      navigate("/deu")
    } else if (window.navigator.language.slice(0, 2) !== "ge") {
      navigate("/geo")
    } else {
      navigate("/eng")
    }
  }, [])
  return null
}
