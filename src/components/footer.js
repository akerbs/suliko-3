import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"
import "./footer.css"
import Impressum from "./impressum"

const Footer = props => {
  const [openImpressum, setOpenImpressum] = React.useState(false)

  const handleOpenImpressum = () => {
    setOpenImpressum(true)
  }
  const handleCloseImpressum = () => {
    setOpenImpressum(false)
  }

  return (
    <Container className="footerWrapper" style={{ paddingBottom: "70px" }}>
      <img src={Logo2} alt="logo" className="logo2Footer" />
      <Typography variant="body2" style={{ color: "rgba(0, 0, 0, 0.8 )" }}>
        {" © "} {new Date().getFullYear()} Suliko
        <br />{" "}
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          onClick={handleOpenImpressum}
          style={{ cursor: "pointer", color: "rgba(0, 0, 0, 1 )" }}
        >
          Impressum
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Typography
          variant="overline"
          style={{ fontSize: 5, color: "rgba(0, 0, 0, 0.5 )" }}
        >
          Created by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="#"
            // to="https://kerbs.now.sh/"
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.5 )" }}
          >
            Anatol Kerbs
          </Link>
        </Typography>
      </div>
      <Impressum open={openImpressum} onClose={handleCloseImpressum} />
    </Container>
  )
}

export default Footer
