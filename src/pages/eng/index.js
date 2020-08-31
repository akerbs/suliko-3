import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import sloganImg from "../../images/slogan_eng.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper"
import "swiper/swiper-bundle.css"
import Img from "gatsby-image"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import ModalWindow from "../../components/modalWindow-eng"
import "../index.css"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import zeit from "../../images/zeit.png"
import abendblatt from "../../images/abendblatt.png"
import Grid from "@material-ui/core/Grid"
import menu from "../../images/menu.png"
import { Helmet } from "react-helmet"
import Header from "../../components/header-eng"
import Footer from "../../components/footer"
import { Speisekarte, Weinkarte, Mittagsmenu } from "../../components/menu-eng"

const window = require("global/window")

SwiperCore.use([Autoplay, Navigation, EffectFade])

const IndexPage = props => {
  const [open, setOpen] = useState(false)
  const [readMoreText1, setReadMoreText1] = useState(false)
  const [readMoreText2, setReadMoreText2] = useState(false)

  const [openSpeisekarte, setOpenSpeisekarte] = useState(false)
  const [openWeinkarte, setOpenWeinkarte] = useState(false)
  const [openMittagsmenu, setOpenMittagsmenu] = useState(false)

  const handleOpenSpeisekarte = () => {
    setOpenSpeisekarte(true)
  }
  const handleCloseSpeisekarte = () => {
    setOpenSpeisekarte(false)
  }

  const handleOpenWeinkarte = () => {
    setOpenWeinkarte(true)
  }
  const handleCloseWeinkarte = () => {
    setOpenWeinkarte(false)
  }

  const handleOpenMittagsmenu = () => {
    setOpenMittagsmenu(true)
  }
  const handleCloseMittagsmenu = () => {
    setOpenMittagsmenu(false)
  }

  const handleOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
  }
  const handleClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  const showTex1MoreHandler = () => {
    setReadMoreText1(true)
  }
  const showTex1LessHandler = () => {
    setReadMoreText1(false)
  }
  const showTex2MoreHandler = () => {
    setReadMoreText2(true)
  }
  const showTex2LessHandler = () => {
    setReadMoreText2(false)
  }

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>restaurant-suliko.de</title>
        <description>
          Georgian restaurant Suliko in Hamburg, Germany
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
        {/* <SEO title="Home" /> */}
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
          <Button
            className="reservierenButton"
            onClick={handleOpen}
            variant="contained"
            style={{
              backgroundColor: "rgba(133,26,29) ",
              color: "rgba(249, 234, 207)",
              position: "fixed",
            }}
          >
            Reserve a table
          </Button>
          <ModalWindow onClose={handleClose} open={open} />
          <br /> <br />
          <Container id="home-text">
            <Typography variant="h6">Dear Suliko friends,</Typography>
            <br />
            {!readMoreText2 && (
              <div>
                <Typography id="text2Litle" variant="body1">
                  Despite the extraordinary time, we stay with you and want to
                  pamper our beautiful city with Georgian cuisine. We will be
                  glad to see you in our restaurant! You can also order your
                  favorite dishes for delivery to any doorstep, for this we have
                  prepared ..
                </Typography>
                <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                  ...read more
                </p>
              </div>
            )}

            {readMoreText2 && (
              <div
                onBlur={() => {
                  console.log("outer blur")
                }}
              >
                <Typography id="text2Big" variant="body1">
                  Despite the extraordinary time, we stay with you and want
                  pamper our beautiful city with Georgian cuisine. We will be
                  glad to see you in our restaurant! You can also order your
                  favorite dishes for delivery to any doorstep, for this we have
                  prepared a special menu for you.
                  <br />
                  <br />
                  <a
                    href={"/Speisekarte.pdf"}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      Order menu card
                    </Button>
                  </a>
                  <br />
                  <br />
                  In this menu you will find a variety of traditional Georgian
                  dishes for every taste.
                  <br />
                  A special offer for those who want to get acquainted with the
                  taste of Georgian cuisine - Georgian supra (table from 2
                  people).
                  <br />
                  <br />
                  Speaking of wine, take a look at our wine list. Here you will
                  find the most famous Georgian wines, including those prepared
                  according to old Georgian recipes, unfiltered amphora wines
                  for which Georgia is so famous.
                  <br />
                  <br />
                  <a
                    href={"/Weinkarte.pdf"}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      Wine list
                    </Button>
                  </a>
                  <br />
                  <br />
                  Deliveries & pick-ups:
                  <br />
                  Mon-Sun from 12.00 to 18.00 and by appointment.
                  <br />
                  You will find us at Lieferando (delivery service).
                  <br />
                  <br />
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://www.lieferando.de/suliko"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(133,26,29) ",
                        color: "rgba(249, 234, 207)",
                      }}
                    >
                      Order now
                    </Button>
                  </Link>
                  <br />
                  <br />
                  We look forward to you!
                  <br />
                  <br />
                  Your Suliko restaurant
                </Typography>
                {/* <p onClick={showTex2LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
              </div>
            )}
          </Container>
          <br /> <br />
          <Container id="slider">
            <Swiper
              spaceBetween={1}
              slidesPerView={
                window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3
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
            <img
              src={sloganImg}
              alt="slogan"
              className="slogan"
              style={{
                maxHeight: "75px",
                minHeight: "30px",
              }}
            />
            <br />

            {!readMoreText1 && (
              <div>
                <Typography id="text1Litle" variant="body1">
                  Welcome to our restaurant Suliko. Here you can pamper yourself
                  with delicious food, pleasant atmosphere and Georgian
                  hospitality. Take a look at our menu and we will be happy to
                  answer your questions. Here you will find a wide selection of
                  varied dishes, good wine and fresh Georgian bread. We will be
                  happy to help you arrange a holiday, an evening meeting with
                  friends, a family or romantic evening for two. We will prepare
                  for you an individual offer that suits your lifestyle ...
                </Typography>
                <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                  ...read more
                </p>
              </div>
            )}
            {readMoreText1 && (
              <div>
                <Typography id="text1Big" variant="body1">
                  Welcome to our restaurant Suliko. Here you can pamper yourself
                  with delicious food, pleasant atmosphere and Georgian
                  hospitality. Take a look at our menu and we will be happy to
                  answer your questions. Here you will find a wide selection of
                  varied dishes, good wine and fresh Georgian bread. We will be
                  happy to help you arrange a holiday, an evening meeting with
                  friends, a family or romantic evening for two. We will prepare
                  for you an individual offer that suits your lifestyle.
                  <br />
                  <br />
                  <Link to="/eng#menu" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      Menu card
                    </Button>
                  </Link>
                  <br />
                  <br /> Georgian cuisine is one of the oldest in the world. A
                  Georgian feast with a wide variety of dishes and drinks under
                  the leadership of "Tamada" (the chosen host of the table) is a
                  real celebration with friends. With the opening of our
                  restaurant in the heart of Hamburg, we want to convey to you a
                  sense of hospitality and celebration. <br />
                  Feel at home with us and enjoy our extensive food and beverage
                  menu. Here is a small presentation of Georgian dishes:
                  <br />
                  <br /> Cold appetizers: <br />
                  Typical snacks are thin slices of eggplant stuffed with
                  Badrijani walnuts and various Phali - spinach, beetroot or
                  leek, mashed with hazelnuts, spices and coriander.
                  <br />
                  <br />
                  Main dishes:
                  <br />
                  Khinkali - Georgian dumplings, one of the most famous dishes
                  of Georgian cuisine, which is simply impossible not to fall in
                  love with! Khachapuri is another specialty of Georgian
                  cuisine. This is a delicious cheese-filled flatbread that is
                  most often used in Georgia as a snack between meals. Lobio is
                  a traditional Georgian bean dish, often used as a side dish or
                  as a snack. Mchadi corn tortilla, used in Western Georgia as
                  bread, with Sulguni cheese (cheese from the Mingrelia region)
                  and other types of cheese such as Imeruli (cheese from the
                  Imereti region) and Guda (mountain cheese). Cheese is often
                  served with a main course.
                  <br />
                  <br /> Desserts:
                  <br /> Several desserts are served as a dessert, including a
                  popular Georgian sweet called Churchkhela, made from peeled
                  walnuts and hazelnuts strung on a string in grape juice
                  thickened with corn and wheat flour.
                  <br />
                  <br />
                  Wines: <br />
                  Georgia has a winemaking tradition that is over 8000 years old
                  and therefore is considered the country of origin of wine. The
                  unique climatic and geological conditions make it possible to
                  produce excellent red wines such as Saperavi, Khvanchkara, as
                  well as white wines Rkatsiteli, Mtsvane and many others.
                </Typography>
                {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
              </div>
            )}
          </Container>
          <br /> <br />
          <Container id="press">
            <Grid container spacing={3}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card
                  style={{
                    maxWidth: "345px",
                    backgroundColor: "rgba(249,234,207)",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="Zeit online logo"
                    width="100%"
                    height="50%"
                    image={zeit}
                    style={{ padding: "70px 10px 0px 10px" }}
                  />
                  <CardActions>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://www.zeit.de/2018/17/suliko-restaurant-georgische-kueche-hamburg"
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="small" color="secondary">
                        read Article
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card
                  style={{
                    maxWidth: "345px",
                    backgroundColor: "rgba(249,234,207)",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="Hamburger Abendblatt logo"
                    width="100%"
                    height="50%"
                    image={abendblatt}
                    style={{ padding: "70px 10px 0px 10px" }}
                  />
                  <CardActions>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://www.abendblatt.de/hamburg/article226946467/Georgiens-Seele-hat-am-Mittelweg-seine-Heimat-gefunden.html"
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="small" color="secondary">
                        read Article
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
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
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={handleOpenSpeisekarte}
                style={{
                  backgroundColor: "rgba(249, 234, 207)",
                  color: "rgba(133,26,29)",
                  margin: 10,
                }}
              >
                Menu and bar
              </Button>
              <Button
                variant="contained"
                onClick={handleOpenWeinkarte}
                style={{
                  backgroundColor: "rgba(249, 234, 207)",
                  color: "rgba(133,26,29)",
                  margin: 10,
                }}
              >
                Wine list
              </Button>
              <Button
                variant="contained"
                onClick={handleOpenMittagsmenu}
                style={{
                  backgroundColor: "rgba(249, 234, 207)",
                  color: "rgba(133,26,29)",
                  margin: 10,
                }}
              >
                Lunch menu
              </Button>
            </div>

            <Speisekarte
              open={openSpeisekarte}
              onClose={handleCloseSpeisekarte}
            />
            <Weinkarte open={openWeinkarte} onClose={handleCloseWeinkarte} />
            <Mittagsmenu
              open={openMittagsmenu}
              onClose={handleCloseMittagsmenu}
            />
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
            <Typography
              variant="body1"
              align="center"
              style={{ lineHeight: 1.8 }}
            >
              <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+4904049201953"
                className="phoneEmailLink"
              >
                <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:info@restaurant-suliko.de"
                className="phoneEmailLink"
              >
                <EmailIcon style={{ fontSize: 20 }} />
                info[at]restaurant-suliko.de
              </a>
              <br /> <br />
              <ScheduleIcon style={{ fontSize: 20 }} /> Opening hours <br />
              Mon-Thu 12:00 pm - 3:00 pm, 5:00 pm - 10:00 pm <br />
              Fri 12:00 - 15:00, 17:00 - 24:00 <br />
              Sa 17:00 - 24:00 <br />
              Sun 15:00 - 22:00 <br />
              <br />
            </Typography>
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
      </Container>
    </Layout>
  )
}
export default IndexPage

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
