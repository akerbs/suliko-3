import React from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Link } from "gatsby"
import Logo2 from "../images/Logo2.png"
import CloseIcon from "@material-ui/icons/Close"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import menu from "../images/menu.png"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"

const drawerWidth = "auto"

const useStyles = makeStyles(theme => ({
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
    margin: "0px 0px 0px 10px",
    padding: 0,
  },
  mediaLink: {
    color: "rgba(43,42,41)",
    "&:hover": {
      color: "rgba(133,26,29)",
      fontWeight: "bold",
    },
  },
  drawerItem: {
    textDecoration: "none",
    color: "rgba(43,42,41)",
    width: "100vw",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(133,26,29)",
    },
  },
  menuImg: {
    display: "block",
    margin: "0px auto",
    paddingTop: "10px",

    width: "50%",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "20px",
    },
  },

  active: {
    color: "rgba(133,26,29)",
  },

  imgWrapper: {
    margin: "0 auto",
    paddingLeft: "2vw",
    display: "flex",
    justifyContent: "center",
  },

  img: {
    paddingTop: 6,
    paddingBottom: 0,
    marginBottom: -2,
    marginTop: 0,
    maxWidth: 120,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 110,
    },
  },
}))

export default function DrawerTop(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <CssBaseline />
      <Drawer
        // variant="temporary"
        // onEscapeKeyDown={handleDrawerClose}
        variant="persistent"
        transitionDuration={{ enter: 400, exit: 300 }}
        anchor="top"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
          drawer: classes.drawer,
        }}
      >
        {" "}
        <Slide in={props.open} timeout={1000} direction="up">
          <div>
            <Fade in={props.open} timeout={1600}>
              <div>
                <div className={classes.drawerHeader}>
                  <div className={classes.mediaIcons}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/restaurant.suliko.hamburg"
                      className={classes.mediaLink}
                    >
                      <ListItem
                        button
                        key={"facebook"}
                        className={classes.mediaIcon}
                      >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </ListItem>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/suliko_hamburg_"
                      className={classes.mediaLink}
                    >
                      <ListItem
                        button
                        key={"instagram"}
                        className={classes.mediaIcon}
                      >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </ListItem>
                    </a>
                  </div>

                  <CloseIcon style={{ color: "transparent" }} />

                  <IconButton
                    size="small"
                    aria-label="close drawer"
                    onClick={props.onClose}
                    className={
                      (clsx(props.open && classes.hide), classes.closeDrawerBtn)
                    }
                  >
                    <CloseIcon style={{ fontSize: 30, margin: 6 }} />
                  </IconButton>
                </div>
                <ListItem>
                  <img src={menu} alt="img" className={classes.menuImg} />
                </ListItem>
                <Link
                  to="/geo#home"
                  className={classes.drawerItem}
                  activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  <ListItem button key={"HOME"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          მთავარი
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
                <Link
                  to="/geo#about-us"
                  className={classes.drawerItem}
                  activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  <ListItem button key={"ÜBER UNS"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          კეთილი იყოს თქვენი მობრძანება
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
                <Link
                  to="/geo#menu"
                  className={classes.drawerItem}
                  activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  <ListItem button key={"MENÜ"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          მენიუ
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>

                <Link
                  to="/geo#contact"
                  className={classes.drawerItem}
                  activeClassName={classes.active}
                  onClick={props.onClose}
                >
                  <ListItem button key={"KONTAKT"}>
                    <ListItemText
                      primary={
                        <Typography align="center" variant="h6">
                          კონტაქტი
                        </Typography>
                      }
                    />
                  </ListItem>
                </Link>
                <ListItem>
                  <img src={menu} alt="img" className={classes.menuImg} />
                </ListItem>

                <div className={classes.imgWrapper}>
                  <img src={Logo2} alt="logo" className={classes.img} />
                </div>
              </div>
            </Fade>
          </div>
        </Slide>
      </Drawer>
    </>
  )
}
