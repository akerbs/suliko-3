import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { ThemeProvider } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Logo1Plus2 from "../images/Logo1Plus2.gif"
import Logo1 from "../images/Logo1.gif"
// import Logo1x from "../images/logo2.gif"
import Logo2 from "../images/Logo2.png"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"
import CloseIcon from "@material-ui/icons/Close"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import LangSwAkk from "./langSwAkk"
import Button from "@material-ui/core/Button"
import { bgImgPosBb, bgImgPosBbV } from "../pages/index"

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
  closeDrawerBtn: {
    padding: 1,
    margin: "10px 10px 0px 0px",
    color: "#f9eacf",
    backgroundColor: "rgba(43,42,41)",
    "&:hover": {
      backgroundColor: "rgba(43,42,41)",
    },
  },

  hide: {
    display: "none",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "rgba(249,234,207)",
    backgroundRepeat: "repeat",
    overflowY: "scroll",
    overflowX: "hidden",
    width: drawerWidth,
    height: "100vh",
    // zIndex: 9999,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 0,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  mediaIcons: {
    display: "flex",
  },
  mediaIcon: {
    paddingRight: 0,
  },
  // mediaLink: {
  //   color: "rgba(43,42,41)",
  //   "&:hover": {
  //     color: "rgba(43,42,41)",
  //     fontWeight: "bold",
  //   },
  // },
  drawerItem: {
    textDecoration: "none",
    color: "rgba(43,42,41)",
    width: "100vw",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(133,26,29)",
    },
  },

  active: {
    color: "rgba(133,26,29)",
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
    // document.body.style.top = `-${window.scrollY}px`
  }

  const handleDrawerClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
    // document.body.style.top = ""
    // window.scrollTo(0, parseInt(scrollY || "0") * -1)
  }

  const listenScrollEvent = event => {
    if (window.innerWidth <= 300) {
      if (window.scrollY < window.innerWidth * 1.16) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 600) {
      if (window.scrollY < window.innerWidth * 1.2) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 700) {
      if (window.scrollY < window.innerWidth * 0.48) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.innerWidth <= 800) {
      if (window.scrollY < window.innerWidth * 0.5) {
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
    } else if (window.innerWidth <= 1400) {
      if (window.scrollY < window.innerWidth * 0.55) {
        setColor("transparent")
      } else {
        setColor("secondary")
      }
    } else if (window.scrollY < window.innerWidth * 0.57) {
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
                // edge="end"
                onClick={handleDrawerOpen}
                className={(clsx(open && classes.hide), classes.openDrawerBtn)}
              >
                <MenuIcon style={{ fontSize: 30, margin: 6 }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="persistent"
          transitionDuration={{ enter: 500, exit: 500 }}
          anchor="top"
          open={open}
          // className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
            drawer: classes.drawer,
          }}
        >
          <div className={classes.drawerHeader}>
            <div className={classes.mediaIcons}>
              {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/restaurant.suliko.hamburg"
              className={classes.mediaLink}
              //  onClick="this.blur()"
            >
              <ListItem button key={"facebook"} className={classes.mediaIcon}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </ListItem>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/suliko_hamburg_"
              className={classes.mediaLink}
              //  onClick="this.blur()"
            >
              <ListItem button key={"instagram"} className={classes.mediaIcon}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </ListItem>
            </a> */}
            </div>
            <CloseIcon style={{ color: "transparent" }} />

            <IconButton
              size="small"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              className={(clsx(open && classes.hide), classes.closeDrawerBtn)}
            >
              <CloseIcon style={{ fontSize: 30, margin: 6 }} />
            </IconButton>
          </div>
          <Link
            to="/deu"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"HOME"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    HOME
                  </Typography>
                }
              />
            </ListItem>
          </Link>
          <Link
            to="/page-2"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"ÜBER UNS"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    ÜBER UNS
                  </Typography>
                }
              />
            </ListItem>
          </Link>
          <Link
            to="/page-2"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"MENÜ"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    MENÜ
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <Link
            to="#contact"
            className={classes.drawerItem}
            activeClassName={classes.active}
          >
            <ListItem button key={"KONTAKT"}>
              <ListItemText
                primary={
                  <Typography align="center" variant="h6">
                    KONTAKT
                  </Typography>
                }
              />
            </ListItem>
          </Link>

          <div style={{ margin: "10px auto", paddingLeft: "2vw" }}>
            <img src={Logo2} alt="logo" className={classes.logo2Img} />
          </div>
        </Drawer>
      </ThemeProvider>
    </div>
  )
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
}
export default withWidth()(Header)
