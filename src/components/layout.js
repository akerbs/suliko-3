import React, { useState, createContext, useEffect } from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { navigate } from "gatsby"

export const LanguageContext = createContext()

export default function Layout({ children }) {
  // debugger
  const [actLanguage, setActLanguage] = useState(lang)

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  function init() {
    window.onload = function () {
      lang()
    }
  }
  init()

  function lang() {
    if (window.navigator.language.slice(0, 2) === "ru") {
      return "RUS"
    } else if (window.navigator.language.slice(0, 2) === "de") {
      return "DEU"
    } else if (window.navigator.language.slice(0, 2) === "en") {
      return "ENG"
    } else if (window.navigator.language.slice(0, 2) === "ge") {
      return "GEO"
    } else {
      return "ENG"
    }
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
