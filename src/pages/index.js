import React, { useRef, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imgGif from "../images/bgImgs.gif"
import imgGifV from "../images/bgImgsV.gif"
import imgWebp from "../images/imgs1ov.webp"
import imgWebpV from "../images/imgs1ovV.webp"
import sloganImg2 from "../images/slogan_eng2.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Img from "gatsby-image"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import ModalWindow from "../components/modalWindow"
import "./index.css"
import Button from "@material-ui/core/Button"

const IndexPage = props => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
    document.body.style.top = `-${window.scrollY}px`
  }
  const handleClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
    document.body.style.top = ""
    window.scrollTo(0, parseInt(scrollY || "0") * -1)
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,

    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Layout>
      <Container
        id="main"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <SEO title="Home" />
        <Container
          id="bgImgs"
          style={{ width: "100vw", maxWidth: "100vw", margin: 0, padding: 0 }}
        >
          <picture>
            <source
              media="(max-width: 599px)"
              srcset={imgWebpV}
              type="image/webp"
            />
            <source
              media="(max-width: 599px)"
              srcset={imgGifV}
              type="image/gif"
            />
            <source
              media="(min-width: 600px)"
              srcset={imgWebp}
              type="image/webp"
            />
            <source
              media="(min-width: 600px)"
              srcset={imgGif}
              type="image/gif"
            />
            <img src={imgGifV} alt="georgian food" className="bgImg" />
          </picture>

          {/* <img src={bgImgsV} alt="georgian food" className={classes.bgImgs} /> */}
        </Container>
        <Container id="center" style={{ margin: "0 auto" }}>
          <Container id="abount us">
            <img
              data-sal="zoom-in"
              data-sal-delay="300"
              data-sal-easing="ease"
              src={sloganImg2}
              alt="slogan"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            />
            <br />
            <Typography
              variant="body1"
              data-sal="zoom-in"
              data-sal-delay="500"
              data-sal-easing="ease"
            >
              Herzlich willkommen in unserem Restaurant Suliko. Bei uns werden
              Sie im richtigen Sinne des Wortes mit leckerem Essen, angenehmen
              Ambiente und georgischer Gastfreundlichkeit verwöhnt. Lassen Sie
              einen Blick auf unser Menü werfen und sprechen Sie uns an. Bei uns
              können Sie zwischen abwechslungsreichen Gerichten, gutem Wein und
              gebackenen georgischen Brot wählen. Wir würden Ihnen dabei für
              alle festlichen Anlässe oder / und einfachen Abend mit Freunden
              und Familie oder einem romantischen Abend zur Zweit zur Seite
              stehen und machen für Sie ein individuelles Angebot, das zu Ihrem
              Lebensstil passt...
              <Link to="#">lesen weiter</Link>
            </Typography>
          </Container>
          <br /> <br />
          <Container id="carousel">
            <Slider {...settings}>
              <div>
                <Img
                  fluid={props.data.s1.childImageSharp.fluid}
                  alt="Suliko 1"
                  style={{ margin: 1 }}
                />
              </div>
              <div>
                <Img
                  fluid={props.data.s2.childImageSharp.fluid}
                  alt="Suliko 2"
                  style={{ margin: 1 }}
                />
              </div>
              <div>
                <Img
                  fluid={props.data.s3.childImageSharp.fluid}
                  alt="Suliko 3"
                  style={{ margin: 1 }}
                />
              </div>
              <div>
                <Img
                  fluid={props.data.s4.childImageSharp.fluid}
                  alt="Suliko 4"
                  style={{ margin: 1 }}
                />
              </div>
            </Slider>
          </Container>
          <br /> <br />
          <Container id="news">
            <Typography
              variant="body1"
              data-sal="zoom-in"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              <Typography variant="h6">Liebe Suliko-Freunde,</Typography>
              <br />
              wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da und
              möchten unsere wunderschöne Stadt mit authentisch georgischer
              Küche verwöhnen. Essen Sie zu unseren regulären Öffnungszeiten im
              Restaurant Suliko oder bestellen Sie Ihre Lieblingsgerichte und
              lassen Sie es sich außer Haus schmecken. Für diesen Zweck bieten
              wir Ihnen eine speziell angefertigte...
              <Link to="#">lesen weiter</Link>
            </Typography>
          </Container>
          <br /> <br />
          <br />
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              // size="small"
              className="reservierenButton"
              variant="outlined"
              // color="primary"
              onClick={handleOpen}
              style={{
                color: "rgba(133,26,29)",
                marginLeft: "2.2em",
              }}
            >
              Tisch Reservieren
            </Button>
            <ModalWindow onClose={handleClose} open={open} />
          </Container>
          <br /> <br />
          <Container
            id="contact"
            style={{
              padding: "10px 15px ",
              // marginTop: 50,
              borderRadius: 10,
            }}
          >
            <Typography
              variant="body1"
              align="center"
              style={{ lineHeight: 2 }}
            >
              <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+4904049201953"
                className="phoneEmailLink"
                //  onClick="this.blur()"
              >
                <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@restaurant-suliko.de"
                className="phoneEmailLink"
                //  onClick="this.blur()"
              >
                <EmailIcon style={{ fontSize: 20 }} /> info@restaurant-suliko.de
              </a>
              <br /> <br />
              <ScheduleIcon style={{ fontSize: 20 }} /> Öffnungszeiten <br />
              Mo- Do 12:00 - 15:00, 17:00 - 22:00 <br />
              Fr 12:00 - 15:00, 17:00 - 24:00 <br />
              Sa 17:00 - 24:00 <br />
              Son 15:00 - 22:00 <br />
              <br />
            </Typography>
            <Container className="mapWrapper">
              <iframe
                className="map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
              ></iframe>
            </Container>
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    s1: file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s2: file(relativePath: { eq: "s2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s3: file(relativePath: { eq: "s3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s4: file(relativePath: { eq: "s4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
