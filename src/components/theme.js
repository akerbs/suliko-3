import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(133,26,29)",
      contrastText: "rgba(249,234,207)",
    },
    secondary: {
      main: "rgba(0,0,0)",
      contrastText: "#fff",
    },
  },
  third: {
    backgroundColor: "rgba(249,234,207)",
    color: "rgba(133,26,29)",
  },

  // accent: {
  //   backgroundColor: "rgba(249,234,207)",
  //   color: "rgba(133,26,29)",
  //   main: "rgba(133,26,29)",
  // },
})

export default theme

// "rgba(133,26,29)"
// rgba(249,234,207)
// rgba(43,42,41)
