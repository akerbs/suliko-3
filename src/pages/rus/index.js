import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import sloganImg from "../../images/slogan_rus.png"
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
import ModalWindow from "../../components/modalWindow-rus"
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
import Header from "../../components/header-rus"
import Footer from "../../components/footer"
import { Speisekarte, Weinkarte, Mittagsmenu } from "../../components/menu-rus"
import CookiesBar from "../../components/cookiesBar-rus"

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
        <html lang="ru" />
        <title>restaurant-suliko.de</title>
        <description>
          Грузинский ресторан Сулико в Гамбурге, Германия
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
            Забронировать столик
          </Button>
          <ModalWindow onClose={handleClose} open={open} />
          <br /> <br />
          <Container id="home-text">
            <Typography variant="h6">Дорогие друзья Сулико,</Typography>
            <br />
            {!readMoreText2 && (
              <div>
                <Typography id="text2Litle" variant="body1">
                  Несмотря на неординарное время, мы остаёмся с Вами и хотим
                  баловать наш прекрасный город блюдами грузинской кухни. Мы
                  будем рады видеть Вас в нашем ресторане! Вы также можете
                  заказать любимые блюда на дом, для этого мы подготовили...
                </Typography>
                <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                  ...читать дальше
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
                  Несмотря на неординарное время, мы остаёмся с Вами и хотим
                  баловать наш прекрасный город блюдами грузинской кухни. Мы
                  будем рады видеть Вас в нашем ресторане! Вы также можете
                  заказать любимые блюда на дом, для этого мы подготовили для
                  Вас специальное меню.
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
                      Меню для заказа на дом
                    </Button>
                  </a>
                  <br />
                  <br />
                  В этом меню Вы найдёте разнообразные традиционные блюда
                  грузинской кухни на любой вкус.
                  <br />
                  Специальное предложение для тех, кто хочет познакомиться со
                  вкусом грузинской кухни - грузинская супра (стол от 2х
                  человек).
                  <br />
                  <br />
                  Кстати о вине, обратите внимание на нашу винную карту. Здесь
                  Вы найдете самые известные грузинские вина, в том числе,
                  приготовленные по старинным грузинским рецептам,
                  нефильтрованные амфорные вина, которыми так славится Грузия.
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
                      Винная карта
                    </Button>
                  </a>
                  <br />
                  <br />
                  Доставка:
                  <br />
                  Пн-вс с 12.00 до 18.00 и по договорённости.
                  <br />
                  Вы найдёте нас на Lieferando (служба доставки).
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
                      Заказать сейчас
                    </Button>
                  </Link>
                  <br />
                  <br />
                  Мы с нетерпением ждем встречи с вами!
                  <br />
                  <br />
                  Ваш ресторан Сулико
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
                  Добро пожаловать в наш ресторан Сулико. У нас Вы сможете
                  побаловать себя вкусной едой, приятной атмосферой и грузинским
                  гостеприимством. Взгляните на наше меню и мы с радостью
                  ответим на Ваши вопросы. У нас Вы найдёте широкий выбор
                  разнообразных блюд, хорошее вино и свежий грузинский хлеб. Мы
                  с радостью поможем Вам устроить праздник, вечер встречи с
                  друзьями, семейный или романтический вечер для двоих. Мы
                  подготовим для Вас индивидуальное предложение, подходящее
                  Вашему стилю жизни...
                </Typography>
                <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                  ...читать дальше
                </p>
              </div>
            )}
            {readMoreText1 && (
              <div>
                <Typography id="text1Big" variant="body1">
                  Добро пожаловать в наш ресторан Сулико. У нас Вы сможете
                  побаловать себя вкусной едой, приятной атмосферой и грузинским
                  гостеприимством. Взгляните на наше меню и мы с радостью
                  ответим на Ваши вопросы. У нас Вы найдёте широкий выбор
                  разнообразных блюд, хорошее вино и свежий грузинский хлеб. Мы
                  с радостью поможем Вам устроить праздник, вечер встречи с
                  друзьями, семейный или романтический вечер для двоих. Мы
                  подготовим для Вас индивидуальное предложение, подходящее
                  Вашему стилю жизни.
                  <br />
                  <br />
                  <Link to="/rus#menu" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      Меню
                    </Button>
                  </Link>
                  <br />
                  <br /> Грузинская кухня - одна из старейших и в мире.
                  Грузинское застолье с широким разнообразием блюд и напитков
                  под предводительством "Тамады"(выбранный ведущий стола) - это
                  настоящий праздник в кругу друзей. С открытием нашего
                  ресторана в самом центре Гамбурга, мы хотим передать вам
                  чувство гостеприимства и праздника. <br />
                  Почувствуйте себя с нами как дома и наслаждайтесь обширным
                  меню блюд и напитков. Вот небольшая презентация грузинских
                  блюд:
                  <br />
                  <br /> Холодные закуски: <br />
                  Типичные закуски - тонкие ломтики баклажана с начинкой из
                  грецких орехов Бадриджани и различные Пхали - шпинат, свекла
                  или лук-порей, протертые с лесными орехами, специями и
                  кориандром.
                  <br />
                  <br />
                  Основные блюда:
                  <br />
                  Хинкали — грузинские пельмени, одно из самых известных блюд
                  грузинской кухни, в которое просто невозможно не влюбиться!
                  Хачапури - еще одно фирменное блюдо грузинской кухни. Это
                  вкусная лепёшка с сыром, которую в Грузии чаще всего
                  используют в качестве перекуса между приемами пищи. Лобио -
                  традиционное фасолевое блюдо грузинской кухни, чаще
                  используемое в качестве гарнира или закуски. Кукурузная
                  лепёшка Мчади, употребляемая в Западной Грузии в качестве
                  хлеба, с сыром Сулгуни (сыр из региона Мингрелия) и другими
                  сортами сыра, такими как Имерули (сыр из Имеретинского
                  региона) и Гуда (горный сыр). Сыр часто подают к основному
                  блюду.
                  <br />
                  <br /> Десерты:
                  <br /> В качестве десерта подаются несколько десертов, в том
                  числе популярная грузинская сладость под названием Чурчхела,
                  приготовленная из нанизанных на нитку очищенных грецких орехов
                  и фундука в загущённом кукурузной и пшеничной мукой
                  виноградном соке.
                  <br />
                  <br />
                  Вина: <br />
                  Грузия имеет традиции виноделия, которым более 8000 лет, и
                  поэтому считается страной происхождения вина. Уникальные
                  климатические и геологические условия позволяют производить
                  прекрасные красные вина, такие как «Саперави», «Хванчкара», а
                  также белые вина «Ркацители», «Мцване» и многие другие.
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
                        Читать статью
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
                        Читать статью
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
                Меню и бар
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
                Винная карта
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
                Обеденное меню
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
              <ScheduleIcon style={{ fontSize: 20 }} /> Часы работы <br />
              Пн-Чт 12:00 - 15:00, 17:00 - 22:00 <br />
              Пт 12:00 - 15:00, 17:00 - 24:00 <br />
              Сб 17:00 - 24:00 <br />
              Вс 15:00 - 22:00 <br />
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
        <CookiesBar />
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
