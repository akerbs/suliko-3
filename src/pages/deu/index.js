import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import sloganImg from "../../images/slogan_deu.png"
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
import ModalWindow from "../../components/modalWindow"
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
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Speisekarte, Weinkarte, Mittagsmenu } from "../../components/menu"

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
        <html lang="de" />
        <title>restaurant-suliko.de</title>
        <description>
          Georgisches Restaurant Suliko in Hamburg, Deutschand
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
            Tisch Reservieren
          </Button>
          <ModalWindow onClose={handleClose} open={open} />
          <br /> <br />
          <Container id="home-text">
            <Typography variant="h6">Liebe Suliko-Freunde,</Typography>
            <br />
            {!readMoreText2 && (
              <div>
                <Typography id="text2Litle" variant="body1">
                  wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da
                  und möchten unsere wunderschöne Stadt mit authentisch
                  georgischer Küche verwöhnen. Essen Sie zu unseren regulären
                  Öffnungszeiten im Restaurant Suliko oder bestellen Sie Ihre
                  Lieblingsgerichte und lassen Sie es sich außer Haus schmecken.
                  Für diesen Zweck bieten wir Ihnen eine speziell
                  angefertigte...
                </Typography>
                <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                  ...lesen weiter
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
                  wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da
                  und möchten unsere wunderschöne Stadt mit authentisch
                  georgischer Küche verwöhnen. Essen Sie zu unseren regulären
                  Öffnungszeiten im Restaurant Suliko oder bestellen Sie Ihre
                  Lieblingsgerichte und lassen Sie es sich außer Haus schmecken.
                  Für diesen Zweck bieten wir Ihnen eine speziell angefertigte
                  Bestellmenükarte an.
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
                      Bestellmenükarte
                    </Button>
                  </a>
                  <br />
                  <br />
                  In dieser finden Sie die traditionelle Vielfalt der
                  georgischen Küche, die zu allen Lebensstilen und Geschmäckern
                  passt.
                  <br />
                  Für alle, die in die georgische Welt zunächst reinschnuppern
                  wollen, bieten wir als besonders preiswerte Alternative die
                  georgische Supra/Tafel ab 2 Personen an.
                  <br />
                  <br />
                  Apropos Wein, schauen Sie in unsere Weinkarte. Dort finden Sie
                  die bekanntesten georgischen Weine, unter anderem die nach
                  alter Tradition hergestellten und ungefilterten Amphorenweine,
                  für die Georgien so bekannt ist.
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
                      Weinkarte
                    </Button>
                  </a>
                  <br />
                  <br />
                  Lieferungen & Abholungen:
                  <br />
                  Mo. bis So. von 12.00 bis 18.00 Uhr und nach Vereinbarung.
                  <br />
                  Unter den Lieferdiensten finden Sie uns auf Lieferando
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
                      Bestellen jetzt
                    </Button>
                  </Link>
                  <br />
                  <br />
                  Wir freuen uns auf Sie!
                  <br />
                  <br />
                  Ihr Restaurant Suliko
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
              style={{ maxHeight: "75px", minHeight: "30px" }}
            />
            <br />

            {!readMoreText1 && (
              <div>
                <Typography id="text1Litle" variant="body1">
                  Herzlich willkommen in unserem Restaurant Suliko. Bei uns
                  werden Sie im richtigen Sinne des Wortes mit leckerem Essen,
                  angenehmen Ambiente und georgischer Gastfreundlichkeit
                  verwöhnt. Lassen Sie einen Blick auf unser Menü werfen und
                  sprechen Sie uns an. Bei uns können Sie zwischen
                  abwechslungsreichen Gerichten, gutem Wein und gebackenen
                  georgischen Brot wählen. Wir würden Ihnen dabei für alle
                  festlichen Anlässe oder / und einfachen Abend mit Freunden und
                  Familie oder einem romantischen Abend zur Zweit zur Seite
                  stehen und machen für Sie ein individuelles Angebot, das zu
                  Ihrem Lebensstil passt...
                </Typography>
                <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                  ...lesen weiter
                </p>
              </div>
            )}
            {readMoreText1 && (
              <div>
                <Typography id="text1Big" variant="body1">
                  Herzlich willkommen in unserem Restaurant Suliko. Bei uns
                  werden Sie im richtigen Sinne des Wortes mit leckerem Essen,
                  angenehmen Ambiente und georgischer Gastfreundlichkeit
                  verwöhnt. Lassen Sie einen Blick auf unser Menü werfen und
                  sprechen Sie uns an. Bei uns können Sie zwischen
                  abwechslungsreichen Gerichten, gutem Wein und gebackenen
                  georgischen Brot wählen. Wir würden Ihnen dabei für alle
                  festlichen Anlässe oder / und einfachen Abend mit Freunden und
                  Familie oder einem romantischen Abend zur Zweit zur Seite
                  stehen und machen für Sie ein individuelles Angebot, das zu
                  Ihrem Lebensstil passt
                  <br />
                  <br />
                  <Link to="/deu#menu" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      MenüKarte
                    </Button>
                  </Link>
                  <br />
                  <br /> Die georgische Küche ist eine der ältesten und
                  abwechslungsreichsten Küchen der Welt. Die georgische
                  Festtafel ist somit mit sehr schmackhaften und
                  abwechslungsreichen Gerichten und Trinksprüchen unter der
                  Tischführung von “Tamada“ (ausgewählter Tischführer) ein
                  wahres Fest unter der Freunden. Mit der Eröffnung unseres
                  Restaurants im Herzen von Hamburg wollen wir Ihnen ein Gefühl
                  der Gastfreundlichkeit und Festlichkeit vermitteln. <br />
                  Fühlen Sie sich bei uns wie zuhause und genießen Sie die
                  umfangreiche Speise- und Getränkekarte. Hier unsere kleine
                  Vorstellung der georgischen Speisen:
                  <br /> Vorspeisen: <br />
                  Typische Vorspeisen sind gefüllte Auberginen mit
                  Walnusspastete Badridschani und verschiedene Pchali – Spinat,
                  Rote Bete oder Porree püriert mit Waldnüsse, Gewürzen,
                  Koriander
                  <br />
                  <br />
                  Hauptspeisen:
                  <br /> Sehr verbreitet sind Teigtaschen mit Hackfleischfüllung
                  Chinkali, Chatschapuri ist eine weitere Spezialität der
                  georgischen Küche. Es handelt sich um ein überbackenes
                  Käsebrot, das in Georgien meist als Zwischenmahlzeit für den
                  kleinen Hunger gegessen wird. Lobio ist ein traditionelles
                  Bohnengericht der georgischen Küche, das als Beilage oder
                  allein als Vorspeise serviert wird. Des Weiteren wird das für
                  Westgeorgien typische Maisbrot Mschadi, das mit Sulguni (einer
                  Käsesorte aus der Region Mingrelien) zubereitet wird, sowie
                  andere Brotsorten gegessen. Weitere Käsesorten sind der
                  Imeruli (Käse aus der Region Imereti) und der Guda (Käse aus
                  den Bergen); oft wird Käse aber auch zur Hauptspeise gereicht.
                  <br />
                  <br /> Desserts:
                  <br /> Als Nachtisch werden einige Desserts gereicht, darunter
                  eine beliebte georgische Süßigkeit namens Tschurtschchela, bei
                  der man Haselnuss- oder Walnusskerne auf taucht, welche mit
                  Mais- und Weizenmehl angedickt ist, bis sich eine dünne
                  Schicht über die Nüsse gelegt hat eine Leine bindet und diese
                  so lange in Traubensaft <br />
                  <br />
                  Weine: <br />
                  Georgien hat eine über 8000 Jahre alte Weinbrautradition und
                  gilt damit als Ursprungsland des Weines. Einzigartige
                  klimatische und geologische Gegebenheiten bringen
                  ausgezeichnete Rotweine wie „Saperavi“, „Chvanchkara“, aber
                  auch Weißweine „Rkatziteli“, „Mtsvane“ und viele andere
                  hervor.
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
                        Lesen Artikel
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
                        Lesen Artikel
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
              paddingTop: "120px",
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
                Speise- und Barkarte
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
                Weinkarte
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
                Mittagsmenü
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
              <ScheduleIcon style={{ fontSize: 20 }} /> Öffnungszeiten <br />
              Mo- Do 12:00 - 15:00, 17:00 - 22:00 <br />
              Fr 12:00 - 15:00, 17:00 - 24:00 <br />
              Sa 17:00 - 24:00 <br />
              Son 15:00 - 22:00 <br />
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
