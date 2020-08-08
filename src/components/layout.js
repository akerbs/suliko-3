import React from "react"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"

// const useStyles = makeStyles(theme => ({
//   yo: {
//     color: theme.btn.col1,
//     backgroundColor: theme.btn.colBG,
//   },
// }))

// function ComponentWithBtn() {
//   const classes = useStyles()

//   return (
//     <>
//       <Button variant="raised" className={classes.yo}>
//         BTN
//       </Button>
//     </>
//   )
// }

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f9eacf" }}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        {/* <ComponentWithBtn /> */}
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
