import React, { useContext } from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core/styles"
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
import { LanguageContext } from "../components/layout"

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
  listItem: {
    paddingTop: 5,
    paddingBottom: 5,
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

    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingTop: 10,
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
      paddingTop: 0,
      height: 90,
      width: "100%",
      maxWidth: 90,
      objectFit: "cover",
      overflow: "hidden",
    },
  },
}))

export default function DrawerTop(props) {
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()

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
          paperAnchorDockedTop: classes.drawerPaper,
          docked: classes.drawer,
          // paper: classes.drawerPaper,
          // drawer: classes.drawer,
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={500} direction="up">
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
            </div>
          </Slide>
        </div>

        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={700} direction="up">
            <div>
              <ListItem className={classes.listItem}>
                <img src={menu} alt="img" className={classes.menuImg} />
              </ListItem>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={900} direction="up">
            <div>
              <Link
                to="#home"
                className={classes.drawerItem}
                activeClassName={classes.active}
                onClick={props.onClose}
              >
                <ListItem button key={"HOME"} className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography align="center" variant="h6">
                        {actLanguage === "DEU"
                          ? "HOME"
                          : actLanguage === "RUS"
                          ? "ГЛАВНОЕ"
                          : actLanguage === "ENG"
                          ? "HOME"
                          : actLanguage === "GEO"
                          ? " მთავარი"
                          : null}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={1000} direction="up">
            <div>
              <Link
                to="#about-us"
                className={classes.drawerItem}
                activeClassName={classes.active}
                onClick={props.onClose}
              >
                <ListItem button key={"ÜBER UNS"} className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography align="center" variant="h6">
                        {actLanguage === "DEU"
                          ? "HERZLICH WILLKOMMEN"
                          : actLanguage === "RUS"
                          ? " ДОБРО ПОЖАЛОВАТЬ"
                          : actLanguage === "ENG"
                          ? "WELCOME"
                          : actLanguage === "GEO"
                          ? "კეთილი იყოს თქვენი მობრძანება"
                          : null}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={1100} direction="up">
            <div>
              <Link
                to="#menu"
                className={classes.drawerItem}
                activeClassName={classes.active}
                onClick={props.onClose}
              >
                <ListItem button key={"MENÜ"} className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography align="center" variant="h6">
                        {actLanguage === "DEU"
                          ? "MENÜ"
                          : actLanguage === "RUS"
                          ? "МЕНЮ"
                          : actLanguage === "ENG"
                          ? "MENU"
                          : actLanguage === "GEO"
                          ? "მენიუ"
                          : null}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={1200} direction="up">
            <div>
              <Link
                to="#contact"
                className={classes.drawerItem}
                activeClassName={classes.active}
                onClick={props.onClose}
              >
                <ListItem button key={"KONTAKT"} className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography align="center" variant="h6">
                        {actLanguage === "DEU"
                          ? "KONTAKT"
                          : actLanguage === "RUS"
                          ? "КОНТАКТЫ"
                          : actLanguage === "ENG"
                          ? "CONTACT US"
                          : actLanguage === "GEO"
                          ? "კონტაქტი"
                          : null}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={700} direction="up">
            <div>
              <ListItem className={classes.listItem}>
                <img src={menu} alt="img" className={classes.menuImg} />
              </ListItem>
            </div>
          </Slide>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Slide in={props.open} timeout={700} direction="up">
            <div>
              <div className={classes.imgWrapper}>
                <img src={Logo2} alt="logo" className={classes.img} />
              </div>
            </div>
          </Slide>
        </div>
      </Drawer>
    </>
  )
}
