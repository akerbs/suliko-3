import { useEffect } from "react"
import { navigate } from "gatsby"
const window = require("global/window")
const global = require("global")

const lang = global.navigator.language || global.navigator.userLanguage

export default () => {
  useEffect(() => {
    if (lang.slice(0, 2) === "ru") {
      navigate("/rus")
    } else if (lang.slice(0, 2) === "de") {
      navigate("/deu")
    } else if (lang.slice(0, 2) === "ge") {
      navigate("/geo")
    } else {
      navigate("/eng")
    }
  }, [])
  return null
}

// import { useEffect } from "react"
// import { navigate } from "gatsby"

// const window = require("global/window")

// // console.log(window.navigator.language)

// const langUrl =
//   window.navigator.language.slice(0, 2) === "ru"
//     ? "/rus"
//     : window.navigator.language.slice(0, 2) === "ge"
//     ? "/geo"
//     : window.navigator.language.slice(0, 2) === "de"
//     ? "/deu"
//     : window.navigator.language.slice(0, 2) === "en"
//     ? "/eng"
//     : "/eng"

// export default () => {
//   useEffect(() => {
//     navigate(langUrl)
//   }, [])
//   return null
// }
