import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"
import "./footer.css"

const Footer = props => {
  return (
    <Container className="footerWrapper" style={{ paddingBottom: "50px" }}>
      <img src={Logo2} alt="logo" className="logo2Footer" />

      <Typography variant="body2">
        {" © "} {new Date().getFullYear()} Suliko. All Rights Reserved
        <br />{" "}
      </Typography>

      <Breadcrumbs className="breadcrumbs">
        <Link href="#" className="breadcrumbsLink">
          Impressum
        </Link>
        <Link href="#" className="breadcrumbsLink">
          Datenschutz
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
