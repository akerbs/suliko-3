import React, { useState, createContext, useEffect, useMemo } from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const window = require("global/window")

export const LanguageContext = createContext()

function Layout({ children }) {
  const [actLanguage, setActLanguage] = useState("")

  useEffect(() => {
    if (typeof window !== `undefined`) {
      console.log("LANGUAGE: ", window.navigator.language.slice(0, 2))

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
  }, [])

  // useEffect(() => {
  //   console.log("language changed", actLanguage)
  // }, [actLanguage])

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <GoogleReCaptchaProvider
        // reCaptchaKey={process.env.RECAPTCHA_KEY}
        reCaptchaKey="6LfLQ9MZAAAAAPy8tgiC1K2zDaNW5owLyg4-MjuQ"
      >
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
      </GoogleReCaptchaProvider>
    </div>
  )
}
export default Layout
