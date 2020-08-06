import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
// import "./layout.css"
import { ThemeProvider } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"
import theme from "./theme"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f9eacf",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
