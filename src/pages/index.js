import React, { useRef, useEffect, useState, useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper"
import "swiper/swiper-bundle.css"
import Img from "gatsby-image"

import "./index.css"
import Button from "@material-ui/core/Button"
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

const window = require("global/window")

SwiperCore.use([Autoplay, Navigation, EffectFade])

export default function IndexPage(props) {
  const [open, setOpen] = useState(false)

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
      <Layout>
        {/* <SEO title="Home" /> */}
        {/* <Helmet>
          <html lang="ru" />
          <title>restaurant-suliko.de</title>
          <description>
            Грузинский ресторан Сулико в Гамбурге, Германия
          </description>
        </Helmet> */}
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
                  <Img
                    fluid={props.data.bgV1.childImageSharp.fluid}
                    alt="Suliko 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Img
                    fluid={props.data.bgV2.childImageSharp.fluid}
                    alt="Suliko 2"
                  />
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
                  <Img
                    fluid={props.data.s1.childImageSharp.fluid}
                    alt="Suliko img1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Img
                    fluid={props.data.s2.childImageSharp.fluid}
                    alt="Suliko img2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Img
                    fluid={props.data.s3.childImageSharp.fluid}
                    alt="Suliko img3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Img
                    fluid={props.data.s4.childImageSharp.fluid}
                    alt="Suliko img4"
                  />
                </SwiperSlide>
              </Swiper>
            </Container>
            <br /> <br />
            <Container id="about-us" className="aboutUsWrapper">
              <AboutUs />
            </Container>
            <br /> <br />
            <Container id="press">
              <Press />
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
          <Container id="map" className="mapWrapper" maxWidth="lg">
            <iframe
              className="map"
              title="map"
              src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
            ></iframe>
          </Container>
          <Footer />
          <CookiesBar />
        </Container>
      </Layout>
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
    bgV1: file(relativePath: { eq: "bgV1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgV2: file(relativePath: { eq: "bgV2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s1: file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s2: file(relativePath: { eq: "s2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s3: file(relativePath: { eq: "s3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    s4: file(relativePath: { eq: "s4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
