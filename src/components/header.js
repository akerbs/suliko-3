import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { ThemeProvider } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Logo1Plus2 from "../images/Logo1Plus2.gif"
import Logo1 from "../images/Logo1.gif"
import Logo2 from "../images/Logo2.png"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import LangSwAkk from "./langSwAkk"
import DrawerTop from "./drawer"

const window = require("global/window")

const drawerWidth = "auto"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },

  toolbar: {
    zIndex: "99",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 0,
    margin: 0,
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      margin: 0,
    },
  },

  logo2Img: {
    paddingTop: 6,
    paddingBottom: 0,
    marginBottom: -2,
    marginTop: 0,
    maxWidth: 120,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 110,
    },
  },

  logoImg: {
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: -5,
    maxWidth: 490,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      maxWidth: 440,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
      paddingTop: 15,
      marginLeft: 10,
      marginBottom: -6,
    },
  },

  openDrawerBtn: {
    padding: 1,
    margin: "10px 10px 0px 0px",
    color: "rgba(43,42,41)",
    backgroundColor: "#f9eacf",
    "&:hover": {
      backgroundColor: "#f9eacf",
    },
  },
  hide: {
    display: "none",
  },
}))

function Header(props) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [color, setColor] = useState("transparent")

  const handleDrawerOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
  }

  const handleDrawerClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  const listenScrollEvent = event => {
    if (window.innerWidth <= 300) {
      if (window.scrollY < window.innerWidth * 1.17) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 330) {
      if (window.scrollY < window.innerWidth * 1.2) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 350) {
      if (window.scrollY < window.innerWidth * 1.23) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 375) {
      if (window.scrollY < window.innerWidth * 1.25) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 500) {
      if (window.scrollY < window.innerWidth * 1.2845) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 599) {
      if (window.scrollY < window.innerWidth * 1.33) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 700) {
      if (window.scrollY < window.innerWidth * 0.477) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 800) {
      if (window.scrollY < window.innerWidth * 0.502) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 900) {
      if (window.scrollY < window.innerWidth * 0.52) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 1050) {
      if (window.scrollY < window.innerWidth * 0.54) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 1150) {
      if (window.scrollY < window.innerWidth * 0.55) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 1250) {
      if (window.scrollY < window.innerWidth * 0.557) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 1300) {
      if (window.scrollY < window.innerWidth * 0.565) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 1400) {
      if (window.scrollY < window.innerWidth * 0.57) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.scrollY < window.innerWidth * 0.575) {
      setColor("transparent")
    } else {
      setColor("secondary")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          color={color}
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <Hidden xsDown>
              <Link to="/">
                <img src={Logo2} alt="logo" className={classes.logo2Img} />
              </Link>
            </Hidden>

            <Link to="/">
              <Hidden smUp>
                <img src={Logo1} alt="logo" className={classes.logoImg} />
              </Hidden>
              <Hidden xsDown>
                <img src={Logo1Plus2} alt="logo" className={classes.logoImg} />
              </Hidden>
            </Link>

            <div style={{ display: "flex", justifyContent: "column" }}>
              <LangSwAkk />

              <IconButton
                size="small"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={(clsx(open && classes.hide), classes.openDrawerBtn)}
              >
                <MenuIcon style={{ fontSize: 30, margin: 6 }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <DrawerTop open={open} onClose={handleDrawerClose} />
      </ThemeProvider>
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
