import React, { useState, createContext, useEffect } from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { navigate } from "gatsby"
const window = require("global/window")

export const LanguageContext = createContext()

export default function Layout({ children }) {
  const myLang =
    // window.navigator.language.slice(0, 2) ||
    window.navigator.languages[0].slice(0, 2) ||
    window.navigator.browserLanguage.slice(0, 2) ||
    window.navigator.userLanguage.slice(0, 2)

  const [actLanguage, setActLanguage] = useState(lang)

  function init() {
    window.onload = function () {
      lang()
    }
  }
  init()

  function lang() {
    if (myLang === "ru") {
      return "RUS"
    } else if (myLang === "de") {
      return "DEU"
    } else if (myLang === "en") {
      return "ENG"
    } else if (myLang === "ge") {
      return "GEO"
    } else {
      return "ENG"
    }
  }

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  // useEffect(() => {
  //   if (actLanguage === "RUS") {
  //     navigate("/rus")
  //   } else if (actLanguage === "DEU") {
  //     navigate("/deu")
  //   } else if (actLanguage === "ENG") {
  //     navigate("/eng")
  //   } else if (actLanguage === "GEO") {
  //     navigate("/geo")
  //   }
  // }, [])

  return (
    <>
      <LanguageContext.Provider
        value={{
          actLanguage,
          handleLanguageChange,
        }}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <div style={{ backgroundColor: "#f9eacf" }}>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        {/* <CookiesBar /> */}
      </LanguageContext.Provider>
    </>
  )
}
