import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"
import "./footer.css"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Impressum from "./impressum"
// import Datenschutz from "./datenschutz"

const Footer = props => {
  const [openImpressum, setOpenImpressum] = React.useState(false)
  // const [openDatenschutz, setOpenDatenschutz] = React.useState(false)

  const handleOpenImpressum = () => {
    setOpenImpressum(true)
  }
  const handleCloseImpressum = () => {
    setOpenImpressum(false)
  }

  // const handleOpenDatenschutz = () => {
  //   setOpenDatenschutz(true)
  // }
  // const handleCloseDatenschutz = () => {
  //   setOpenDatenschutz(false)
  // }

  return (
    <Container className="footerWrapper" style={{ paddingBottom: "70px" }}>
      <img src={Logo2} alt="logo" className="logo2Footer" />

      <Typography variant="body2">
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
          variant="caption"
          onClick={handleOpenImpressum}
          style={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.8 )" }}
        >
          Impressum
        </Typography>
        {/* <Breadcrumbs
          aria-label="breadcrumb"
          separator={<Typography variant="caption">|</Typography>}
        >
          <Typography
            variant="caption"
            onClick={handleOpenImpressum}
            style={{ cursor: "pointer" }}
          >
            Impressum
          </Typography>

          <Typography
            variant="caption"
            onClick={handleOpenDatenschutz}
            style={{ cursor: "pointer" }}
          >
            Datenschutz
          </Typography>
        </Breadcrumbs> */}
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
      {/* <Datenschutz open={openDatenschutz} onClose={handleCloseDatenschutz} /> */}
    </Container>
  )
}

export default Footer
