import React, { useState, createContext, useEffect } from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { navigate } from "gatsby"
const window = require("global/window")

export const LanguageContext = createContext()

let maLang

window.onload = function () {
  if (window.navigator.language.slice(0, 2) === "ru") {
    maLang = "RUS"
  } else if (window.navigator.language.slice(0, 2) === "de") {
    maLang = "DEU"
  } else if (window.navigator.language.slice(0, 2) === "en") {
    maLang = "ENG"
  } else if (window.navigator.language.slice(0, 2) === "ge") {
    maLang = "GEO"
  } else {
    maLang = "ENG"
  }
  return maLang
}

export default function Layout({ children }) {
  const [actLanguage, setActLanguage] = useState(maLang)

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
