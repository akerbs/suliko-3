import React, { useState, createContext, useEffect, useMemo } from "react"
import "./layout.css"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { navigate } from "gatsby"
const window = require("global/window")

export const LanguageContext = createContext()

// function init() {
//   window.onload = function () {
//     console.log("TESTTT")
//     //  detectLanguage()
//     console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))
//   }
// }
// init()

export const lang =
  window.navigator.language.slice(0, 2) === "ru"
    ? "RUS"
    : window.navigator.language.slice(0, 2) === "de"
    ? "DEU"
    : window.navigator.language.slice(0, 2) === "en"
    ? "ENG"
    : window.navigator.language.slice(0, 2) === "ge"
    ? "GEO"
    : "ENG"

// function detectLanguage() {
//   if (window.navigator.language.slice(0, 2) === "ru") {
//     setActLanguage("RUS")
//   } else if (window.navigator.language.slice(0, 2) === "de") {
//     setActLanguage("DEU")
//   } else if (window.navigator.language.slice(0, 2) === "en") {
//     setActLanguage("ENG")
//   } else if (window.navigator.language.slice(0, 2) === "ge") {
//     setActLanguage("GEO")
//   } else {
//     setActLanguage("ENG")
//   }
// }

function Layout({ children }) {
  const [actLanguage, setActLanguage] = useState(lang)

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // function init() {
  //   window.onload = async function () {
  //     console.log("TESTTT")
  //     await alert("LOL")
  //     // detectLanguage()
  //     console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))
  //   }
  // }
  // init()
  // useEffect(() => {
  //   window.addEventListener("load", detectLanguage)

  //   return () => {
  //     window.removeEventListener("load", detectLanguage)
  //   }
  // }, [detectLanguage])

  // window.onload = init

  useEffect(() => {
    console.log("language changed", actLanguage)
  }, [actLanguage])

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <LanguageContext.Provider
        value={{
          actLanguage,
          handleLanguageChange,
        }}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        {/* <CookiesBar /> */}
      </LanguageContext.Provider>
    </div>
  )
}
export default Layout
