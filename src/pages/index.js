import React, { useState, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectFade,
  Pagination,
} from "swiper"
import "swiper/swiper-bundle.css"
import Img from "gatsby-image"
import "./index.css"
import "./swiper.css"

import menu from "../images/menu.png"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import CookiesBar from "../components/cookiesBar"
import ReserveWindow from "../components/ReserveWindow"
import ReserveButton from "../components/ReserveButton"
import HomeText from "../components/HomeText"
import AboutUs from "../components/AboutUs"
import Press from "../components/Press"
import Contact from "../components/Contact"
import Menu from "../components/Menu"
import { LanguageContext } from "../components/layout"
import inView from "in-view"
import s1 from "../images/s1.jpg"
import s2 from "../images/s2.jpg"
import s3 from "../images/s3.jpg"
import s4 from "../images/s4.jpg"
import bgV1 from "../images/bgV1.jpg"
import bgV2 from "../images/bgV2.jpg"

const window = require("global/window")

SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination])

export default function (props) {
  const { actLanguage } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)

  const [showAfterLoading, setShowAfterLoading] = useState(false)

  function startShowAfterLoading() {
    setShowAfterLoading(true)
  }

  useEffect(() => {
    inView("#slider-first").once("enter", startShowAfterLoading)
  })

  const handleOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
  }
  const handleClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <>
      {/* <SEO title="Home" /> */}
      <Helmet>
        <html
          lang={
            actLanguage === "DEU"
              ? "del"
              : actLanguage === "RUS"
              ? "ru"
              : actLanguage === "ENG"
              ? "en"
              : actLanguage === "GEO"
              ? "ge"
              : null
          }
        />
        <title>restaurant-suliko.de</title>
        <description>
          {actLanguage ===
          "Georgisches Restaurant Suliko in Hamburg, Deutschland"
            ? "del"
            : actLanguage === "Грузинский ресторан Сулико в Гамбурге, Германия"
            ? "ru"
            : actLanguage === "Georgian restaurant Suliko in Hamburg, Germany"
            ? "en"
            : actLanguage === "ქართული რესტორანი სულიკო ჰამბურგში, გერმანია"
            ? "ge"
            : null}
        </description>
      </Helmet>
      <Container
        id="main"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          padding: 0,
        }}
      >
        <Header />

        <Container
          id="slider-first"
          style={{ width: "100vw", maxWidth: "100vw", margin: 0, padding: 0 }}
        >
          {window.innerWidth <= 599 && (
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              loop
              effect="fade"
              allowTouchMove={false}
              preventInteractionOnTransition={true}
            >
              <SwiperSlide>
                {/* <Img
                  fluid={props.data.bgV1.childImageSharp.fluid}
                  alt="Suliko 1"
                /> */}
                <img src={bgV1} alt="Suliko 1" />
              </SwiperSlide>
              <SwiperSlide>
                {/* <Img
                  fluid={props.data.bgV2.childImageSharp.fluid}
                  alt="Suliko 2"
                /> */}
                <img src={bgV2} alt="Suliko 2" />
              </SwiperSlide>
            </Swiper>
          )}
          {window.innerWidth >= 600 && (
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              autoplay
              loop
              effect="fade"
            >
              <SwiperSlide>
                <Img
                  fluid={props.data.bgH1.childImageSharp.fluid}
                  alt="Suliko 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Img
                  fluid={props.data.bgH2.childImageSharp.fluid}
                  alt="Suliko 2"
                />
              </SwiperSlide>
            </Swiper>
          )}
        </Container>
        {showAfterLoading && (
          <Container id="center">
            <ReserveButton onOpen={handleOpen} />
            <ReserveWindow onClose={handleClose} open={open} />
            <br /> <br />
            <Container id="home-text">
              <HomeText />
            </Container>
            <br /> <br />
            <Container id="slider">
              <Swiper
                pagination={{ clickable: true }}
                style={{ zIndex: 0 }}
                spaceBetween={1}
                slidesPerView={
                  window.innerWidth <= 600
                    ? 1
                    : window.innerWidth <= 900
                    ? 2
                    : 3
                }
                autoplay
                loop
                className="slider"
              >
                <SwiperSlide>
                  <img src={s1} alt="Suliko img1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={s2} alt="Suliko img2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={s3} alt="Suliko img3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={s4} alt="Suliko img4" />
                </SwiperSlide>
              </Swiper>
            </Container>
            <br /> <br />
            <Container id="about-us" className="aboutUsWrapper">
              <AboutUs />
            </Container>
            <br /> <br />
            <Container id="press">
              {" "}
              <Press />{" "}
            </Container>
            <br /> <br />
            <img
              id="menu"
              src={menu}
              alt="img"
              style={{
                display: "block",
                margin: "0px auto",
                paddingTop: "100px",
              }}
            />
            <br /> <br />
            <br />
            <Container className="menuWrapper">
              <Menu />
            </Container>
            <br /> <br />
            <img
              src={menu}
              alt="img"
              style={{ display: "block", margin: "0px auto" }}
            />
            <br /> <br />
            <br />
            <Container id="contact" className="contactWrapper">
              <Contact />
            </Container>
          </Container>
        )}
        {showAfterLoading && (
          <Container id="map" className="mapWrapper" maxWidth="lg">
            <iframe
              className="map"
              title="map"
              src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
            ></iframe>
          </Container>
        )}
        {showAfterLoading && <Footer />}
        <CookiesBar />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    bgH1: file(relativePath: { eq: "bgH1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgH2: file(relativePath: { eq: "bgH2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// bgV1: file(relativePath: { eq: "bgV1.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1500) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// bgV2: file(relativePath: { eq: "bgV2.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1500) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }

// s1: file(relativePath: { eq: "s1.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// s2: file(relativePath: { eq: "s2.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// s3: file(relativePath: { eq: "s3.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// s4: file(relativePath: { eq: "s4.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 1000) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
