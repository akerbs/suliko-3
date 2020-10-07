import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9d474a",
      main: "#851a1d",
      dark: "#5d1214",
      contrastText: "rgba(249,234,207)",
    },
    secondary: {
      main: "rgba(0,0,0)",
      contrastText: "#fff",
    },
    third: {
      backgroundColor: "rgba(249,234,207)",
      color: "rgba(133,26,29)",
    },
  },
  third: {
    backgroundColor: "rgba(249,234,207)",
    color: "rgba(133,26,29)",
  },

  typography: {
    fontFamily: ["Raleway", "Pacifico", "sans-serif"].join(","),
    // "fontSize": 14,
    // "fontWeightLight": 300,
    // "fontWeightRegular": 400,
    // "fontWeightMedium": 500
  },
})

export default theme
