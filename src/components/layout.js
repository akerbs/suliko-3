import React, { useState, createContext, useEffect, useMemo } from "react"
import "./layout.css"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
// import { navigate } from "gatsby"
const window = require("global/window")

export const LanguageContext = createContext()

export default function Layout({ children }) {
  const [actLanguage, setActLanguage] = useState("")

  window.onload = init()

  function init() {
    // window.onload = function () {
    detectLanguage()
    console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))
    // }
  }
  // init()

  function detectLanguage() {
    if (window.navigator.language.slice(0, 2) === "ru") {
      setActLanguage("RUS")
    } else if (window.navigator.language.slice(0, 2) === "de") {
      setActLanguage("DEU")
    } else if (window.navigator.language.slice(0, 2) === "en") {
      setActLanguage("ENG")
    } else if (window.navigator.language.slice(0, 2) === "ge") {
      setActLanguage("GEO")
    } else {
      setActLanguage("ENG")
    }
  }

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <LanguageContext.Provider
        value={{
          actLanguage,
          setActLanguage,
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
