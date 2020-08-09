import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import imgGif from "../../images/bgImgs.gif"
import imgGifV from "../../images/bgImgsV.gif"
import imgWebp from "../../images/imgs1ov.webp"
import imgWebpV from "../../images/imgs1ovV.webp"
import sloganImg2 from "../../images/slogan_eng2.png"
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
import ModalWindow from "../../components/modalWindow"
import "./index.css"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import zeit from "../../images/zeit.png"
import abendblatt from "../../images/abendblatt.png"
import Grid from "@material-ui/core/Grid"

const IndexPage = props => {
  const [open, setOpen] = React.useState(false)
  const [readMoreText1, setReadMoreText1] = useState(false)
  const [readMoreText2, setReadMoreText2] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
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
        <Container
          id="center"
          style={{
            margin: "0 auto",
          }}
        >
          <Button
            // size="small"
            className="reservierenButton"
            // color="primary"
            onClick={handleOpen}
            variant="contained"
            style={{
              backgroundColor: "rgba(249, 234, 207)",
              color: "rgba(133,26,29)",
              zIndex: "999",
              position: "fixed",
            }}
          >
            Tisch Reservieren
          </Button>
          <ModalWindow onClose={handleClose} open={open} />
          <br /> <br />
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

            {!readMoreText1 && (
              <div>
                <Typography
                  id="text1Litle"
                  variant="body1"
                  data-sal="zoom-in"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                >
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
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    MenüKarte
                  </Button>
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
              variant="h6"
              data-sal="zoom-in"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Liebe Suliko-Freunde,
            </Typography>
            <br />
            {!readMoreText2 && (
              <div>
                <Typography
                  id="text2Litle"
                  variant="body1"
                  data-sal="zoom-in"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                >
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
              <div>
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
                  <Link
                    to={"/Speisekarte.pdf"}
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
                  </Link>
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
                  <Link
                    to={"/Weinkarte.pdf"}
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
                  </Link>
                  <br />
                  <br />
                  Lieferungen & Abholungen:
                  <br />
                  Mo. bis So. von 12.00 bis 18.00 Uhr und nach Vereinbarung.
                  <br />
                  Unter den Lieferdiensten finden Sie uns auf Lieferando
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
          <br />
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
              style={{ lineHeight: 1.8 }}
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
          </Container>
        </Container>
        <Container id="map" className="mapWrapper" maxWidth="lg">
          <iframe
            className="map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1UQMf_-g-DjVCWRAkAVCDWjVNGXkvW4xc"
          ></iframe>
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
