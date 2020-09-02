import React from "react"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
// import CookiesBar from "./cookiesBar"

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
      {/* <CookiesBar /> */}
    </div>
  )
}

export default Layout
