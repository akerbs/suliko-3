import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({}))

const Footer = props => {
  const classes = useStyles()
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
      <img
        src={Logo2}
        alt="logo"
        className={classes.logo2Footer}
        style={{ maxWidth: 140, margin: "0 auto" }}
      />
      <Typography variant="body2">
        {" © "} {new Date().getFullYear()} Suliko. All Rights Reserved
        <br />{" "}
      </Typography>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Link color="inherit" href="#" style={{ textDecoration: "none" }}>
          <Typography
            variant="caption"
            style={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "black",
                fontWeight: 700,
              },
            }}
          >
            Impressum
          </Typography>
        </Link>
        <Link color="inherit" href="#" style={{ textDecoration: "none" }}>
          <Typography
            variant="caption"
            style={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "black",
                fontWeight: 700,
              },
            }}
          >
            Datenschutz
          </Typography>
        </Link>
      </Breadcrumbs>
      {/* <Typography variant="caption" className={classes.copyrightLinks}>
        Designed by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://kerbs.now.sh/"
          style={{ textDecoration: "none" }}
        >
          Anatol Kerbs
        </Link>
      </Typography> */}
    </Container>
  )
}

export default Footer
