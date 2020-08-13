import React from "react"
import Header from "./header-geo"
import Footer from "./footer"
import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
