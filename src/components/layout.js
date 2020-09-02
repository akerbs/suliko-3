import React from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import CookiesBarDeu from "./cookiesBar-deu"
import CookiesBarRus from "./cookiesBar-rus"
import CookiesBarGeo from "./cookiesBar-geo"
import CookiesBarEng from "./cookiesBar-eng"

const window = require("global/window")

const CookiesBar =
  window.navigator.language.slice(0, 2) === "ru"
    ? CookiesBarRus
    : window.navigator.language.slice(0, 2) === "ge"
    ? CookiesBarGeo
    : window.navigator.language.slice(0, 2) === "de"
    ? CookiesBarDeu
    : window.navigator.language.slice(0, 2) === "en"
    ? CookiesBarEng
    : CookiesBarEng

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
      <CookiesBar />
    </div>
  )
}

export default Layout
