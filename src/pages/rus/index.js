import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout-rus"
// import SEO from "../../components/seo"
import sloganImg from "../../images/slogan_rus.png"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Zoom, Navigation, EffectFade } from "swiper"
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

const window = require("global/window")

SwiperCore.use([Autoplay, Zoom, Navigation, EffectFade])

const IndexPage = props => {
  const [open, setOpen] = useState(false)
  const [readMoreText1, setReadMoreText1] = useState(false)
  const [readMoreText2, setReadMoreText2] = useState(false)
  const [readMoreText3, setReadMoreText3] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    document.body.style.position = "fixed"
    // document.body.style.top = `-${window.scrollY}px`
  }
  const handleClose = () => {
    setOpen(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
    // document.body.style.top = ""
    // window.scrollTo(0, parseInt(scrollY || "0") * -1)
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
  const showTex3MoreHandler = () => {
    setReadMoreText3(true)
  }
  const showTex3LessHandler = () => {
    setReadMoreText3(false)
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
        {/* <SEO title="Home" /> */}
        <Container
          id="slider-first"
          style={{ width: "100vw", maxWidth: "100vw", margin: 0, padding: 0 }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay
            loop
            effect="fade"
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <Img
                fluid={
                  window.innerWidth <= 599
                    ? props.data.bgV1.childImageSharp.fluid
                    : props.data.bgH1.childImageSharp.fluid
                }
                alt="Suliko 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Img
                fluid={
                  window.innerWidth <= 599
                    ? props.data.bgV2.childImageSharp.fluid
                    : props.data.bgH2.childImageSharp.fluid
                }
                alt="Suliko 2"
              />
            </SwiperSlide>
          </Swiper>
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
                  Despite the extraordinary time, we stay with you and want to
                  pamper our beautiful city with Georgian cuisine. We will be
                  glad to see you in our restaurant! You can also order your
                  favorite meals at home, for this we have prepared a special
                  menu for you.
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
                    to="https://www.suliko-hamburg.de/"
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
              zoom
              loop
              // effect="fade"
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
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
            <Img
              fluid={props.data.slogan_rus.childImageSharp.fluid}
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
          <Img
            fluid={props.data.nemu.childImageSharp.fluid}
            id="menu"
            alt="img"
            className="slogan"
            style={{
              display: "block",
              margin: "0px auto",
              paddingTop: "150px",
            }}
          />
          <br /> <br />
          <br />
          <Container className="menuWrapper">
            {!readMoreText3 && (
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={showTex3MoreHandler}
                  style={{
                    backgroundColor: "rgba(249, 234, 207)",
                    color: "rgba(133,26,29)",
                  }}
                >
                  Открыть меню
                </Button>
              </div>
            )}
            {readMoreText3 && (
              <div>
                <Typography id="text1Big" variant="body1">
                  <Typography align="center" variant="h5">
                    Suppen / Супы{" "}
                  </Typography>
                  <br />
                  1. Hartcho - pikante Kalbfleischsuppe mit Reis, Tomaten,
                  Gewürzen 5,50 € <br />
                  Суп Харчо -грузинский суп из телятины с рисом помидорами и
                  зеленью
                  <br /> <br />
                  2. Tschichirtma - Hühnerfleisch, Eier und frische Kräuter €
                  5,90 <br />
                  Чихиртма - грузинский густой куриный суп <br /> <br />
                  <Typography align="center" variant="h5">
                    {" "}
                    Salate / Салаты{" "}
                  </Typography>
                  <br />
                  3. Kaukasische Gemüseplatte mit Feta - große Gemüseplatte,
                  frische Kräuter, Lauchzwiebel, Feta 7,90 € <br />
                  Овощное ассорти по-кавказски - овощи, свежая зелень, зеленый
                  лук, брынза <br /> <br />
                  4. Gemischter Salat - frische Tomaten, Gurken, Zwiebeln,
                  Kräuter mit Feta (veg.) 5,40 € <br />
                  Салат из свежих овощей с брынзой (вег) <br /> <br />
                  5. Gemischter Salat nach „georgischer Art“ - Frische Tomaten,
                  Gurken, Walnüsse, Essig (veg.) 7,60 € <br />
                  Грузинский салат - cалат из свежих овощей по-грузински с
                  грецкими орехами (вег) <br /> <br />
                  6. Hähnchensalat - pikanter Hähnchenfleischsalat mit
                  Mayonnaise, Erbsen und Gewürzen 8,50 € <br />
                  Куриный салат по-грузински с майонезом и приправами <br />{" "}
                  <br />
                  <Typography align="center" variant="h5">
                    Kalte Vorspeisen / Холодные закуски
                  </Typography>
                  <br />
                  8. Spinat-Pchali - Blattspinatbällchen mit Walnusspaste,
                  Koriander und Gewürzen (veg.) 7,50 € <br />
                  Шпинат-Пхали - шпинат с грецкими орехами и специями (вег){" "}
                  <br />
                  <br />
                  9. Rote-Bete-Pchali - Bällchen aus Rote-Bete-Püree mit
                  Walnusspaste und Koriander (veg) 7,50 € <br />
                  Пхали из свёклы по-грузински c грецкими орехами и специями
                  (вег)
                  <br /> <br />
                  10. Karotten-Pchali - Karotten-Bällchen mit Walnusspaste,
                  Koriander, Gewürzen (veg.) 7,50 € <br />
                  Пхали из моркови по-грузински c грецкими орехами и специями
                  (вег)
                  <br /> <br />
                  11. Badridschani – gebratene Aubergine gefüllt mit
                  Walnusspaste und Gewürzen (veg.) 8,90 € <br />
                  Баклажаны с орехами - баклажаны, фаршированные грецкими
                  орехами со специями <br /> <br />
                  12. Pchali-Mix – Spinat-, Rote Bete und Karotten-Pchali (veg.)
                  11,90 €
                  <br />
                  Пхали-Ассорти - три вида пхали (вег) <br /> <br />
                  13. Mjawe Mix – eingelegtes Gemüse nach georgischer Art (veg.)
                  6,50 €
                  <br />
                  Мжаве ассорти - aссорти из грузинскиx солений (вег) <br />{" "}
                  <br />
                  Zu Suppen, Salaten und Vorspeisen wird hausgemachtes Brot
                  gereicht.
                  <br /> <br />
                  <Typography align="center" variant="h5">
                    {" "}
                    Vorspeisen /Горячие закуски{" "}
                  </Typography>
                  <br />
                  15. Grillgemüse - saftig gegrilltes Gemüse 7,90 € <br />
                  Овощи-гриль - овощи, приготовленные на гриле <br /> <br />
                  16. Lobio - Bohneneintopf mit georgischen Gewürzen 7,90 €
                  Лобио - тушёная красная фасоль со специями <br /> <br />
                  17. Dolma - Weintraubenblätter gefüllt mit Rinderhack,
                  Zwiebeln und Kräutern 6,50 € <br />
                  Долма по-кавказски с говядиной в виноградных листьях <br />{" "}
                  <br />
                  18."Soko kezse" - Champignons aus dem Ofen mit Käse gefüllt
                  und überbacken 5,60 € <br />
                  Грибы на кеци - Шампиньоны с зеленью, запечёные с сыром <br />{" "}
                  <br />
                  19. Chvischtari - Maismehl-Käse-Puffer 4,90 € <br />
                  Чвиштари - кукурузная лепёшка с сыром сулугуни <br /> <br />
                  20. Adschapsandali - Geschmorte Auberginen, Tomaten, Paprika,
                  Zwiebeln, Kräuter, Gewürze 8,50 € <br />
                  Аджапсандали - баклажаны тушёные с помидорами, паприкой, луком
                  и зеленью (вег) <br /> <br />
                  <Typography align="center" variant="h5">
                    Teiggerichte / Блюда из теста{" "}
                  </Typography>
                  <br />
                  21. Chatschapuri „Imeruli“ - Teigfladen gefüllt mit Käse
                  (veg.) 9,60 €
                  <br />
                  Хачапури „имерули“ - лепешка с сыром по-имеретински <br />{" "}
                  <br />
                  22. Chatschapuri „Megruli“ - Teigfladen gefüllt und überbacken
                  mit Käse aus dem Ofen (veg.) 10,90 € <br />
                  Хачапури "мегрули" - лепешка с сыром по-мегрельски <br />{" "}
                  <br />
                  23. Chatschapuri "Atscharuli" - Bootförmige Teigtasche mit
                  Käse und Ei aus dem Ofen (veg.) 12,90 € <br />
                  Хачапури "аджарули" - лепёшка в форме лодки с сыром и яйцом
                  по-аджарски <br /> <br />
                  25. Lobiani - Teigfladen mit Bohnen gefüllt 10,90 € <br />
                  Лобиани - лепёшка начинённая фасолью <br /> <br />
                  26. Chinkali– Teigtaschen mit Hackfleisch gefüllt, gewürzt
                  nach georgischer Art (ab 4 Stk.) 1,90 € <br />
                  Хинкали с мясом - варёные, из теста, начиненные сочным фаршем
                  (от 4 шт.) <br /> <br />
                  Zu allen Vorspeisen wird hausgemachtes Brot gereicht. <br />{" "}
                  <br />
                  <Typography align="center" variant="h5">
                    Fleischgerichte / Мясные блюда{" "}
                  </Typography>
                  <br />
                  29. Schweineschaschlik - Schweinefleisch auf Spieß gegrillt
                  mit Zwiebeln, Kräutern und Satsebela 15,40 € <br />
                  Шашлык из свинины приготовленный на шампуре <br /> <br />
                  30. Hähnchenschaschlik – mariniertes Hähnchenfleisch auf Spieß
                  gegrillt mit Satsebela 15,60 € <br />
                  Шашлык из курицы приготовленный на шампуре <br /> <br />
                  31. Lammschaschlik - Lammfleisch auf Spieß gegrillt mit
                  Zwiebeln, Kräutern und Satsebela 17,90 € <br />
                  Шашлык из баранины приготовленный на шампуре <br /> <br />
                  34. Zarte Lammkrone - Edle Lammkrone mit Zwiebeln, Kräuter und
                  Satsebela 26,90 € <br />
                  Каре ягнёнка <br /> <br />
                  35. Chkmeruli - Hähnchen in Knoblauch-Creme-Fraiche-Soße aus
                  dem Ofen 15,90 € <br />
                  Чкмерули - курица, запеченная в молочно-чесночном соусе <br />{" "}
                  <br />
                  36. Chanachi im Tontopf - Rindfleischeintopf mit Kartoffeln,
                  Gemüse und Gewürzen 16,90 € <br />
                  Чанахи - говядина, запеченная с овощами в горшочке <br />{" "}
                  <br />
                  38. Sazivi - Putenfleisch in Walnusssauce 16,90 € <br />
                  Сациви – индейка в соусе из грецких орехов <br /> <br />
                  39. Chakapuli - Kalbfleisch in Tontopf mit Estragon und
                  Weisswein geschmort 17,90 € <br />
                  Чакапули - телятина, тушеная с эстрагоном и белым вином в
                  горшочке
                  <br /> <br />
                  40. Lammkeule aus dem Ofen mariniert in Adjika, Gewürzen und
                  Knoblauch 140,- € <br />
                  Запечённая баранья ножка в маринаде из аджики, приправ и
                  чеснока
                  <br />
                  (Nur auf Vorbestellung. Reicht für ca. 6 Personen /по
                  предварительному заказу, количество на 6 человек) <br />{" "}
                  <br />
                  <Typography align="center" variant="h5">
                    Fischspezialitäten / Блюда из рыбы
                  </Typography>
                  <br />
                  41. Lachsfilet in Knoblauch-Creme-Fraiche-Soße mit Beilage
                  Ihrer Wahl 17,90 € <br />
                  Лосось с молочно-чесночным соусом и гарниром по выбору <br />{" "}
                  <br />
                  42. Riesengarnelen mit Tandoori-Sauce in einer Pfanne serviert
                  20,90 €
                  <br />
                  Королевские креветки с соусом тандури <br /> <br />
                  43. Königsstör ganz, überbacken mit Gemüse 140,- € <br />
                  Королевский осётр запеченный целиком <br />
                  (Nur auf Vorbestellung. Reicht für ca. 6 Personen /по
                  предварительному заказу, количество на 6 человек) <br />{" "}
                  <br />
                  Zu allen Fleischgerichten vom Grill wird die Beilage Ihrer
                  Wahl und hausgemachtes Brot serviert. <br /> <br />
                  <Typography align="center" variant="h5">
                    Beilagen und Soßen / Гарниры и соусы
                  </Typography>
                  <br />
                  46. Bratkartoffelhälften 3,70 € <br />
                  Жареная картошка по-деревенски <br /> <br />
                  47. Reis 3,90 € <br />
                  Pис <br /> <br />
                  48. Hausgemachtes Brot 1,50 € <br />
                  Cвежевыпеченный хлеб <br /> <br />
                  49. Satsebela -traditionelle georgische Tomatensoße 3,10 €{" "}
                  <br />
                  Сацебела - соус из томатов <br /> <br />
                  50. Adjika – georgische scharfe Tomatensoße 3,10 € <br />
                  Аджика острый соус из томатов <br /> <br />
                  51. Tkemali - georgische pikante grüne oder rote
                  Mirabellensoße 4,20 €
                  <br />
                  Ткемали - соус из алычи, перца, чеснока и специй <br /> <br />
                  52. Baje - georgische Walnusspastete 4,40 € <br />
                  Грузинский ореховый соус <br /> <br />
                  <Typography align="center" variant="h5">
                    Dessert / Десерт{" "}
                  </Typography>{" "}
                  <br />
                  53. Hausgemachter Kuchen „Napoleon“ 4,10 € <br />
                  Tорт "Наполеон" <br /> <br />
                  54. "Pelamuschi" - georgisches Soufflé aus Weintraubensaft
                  3,20 €
                  <br />
                  Пеламуши - старинный грузинский десерт из виноградного сока и
                  кукурузной муки <br /> <br />
                  <Typography align="center" variant="h5">
                    Heiße Getränke / Горячие напитки
                  </Typography>
                  <br />
                  60. Kaffee 2,70 € <br />
                  <br />
                  61. Latte Macchiato 3,90 € <br />
                  <br />
                  62. Espresso 2,50 € <br />
                  <br />
                  63. Cappuccino 3,10 € <br />
                  <br />
                  64. Tee (diverse Sorten) 2,60 € <br /> <br />
                  <Typography align="center" variant="h5">
                    Mineralwasser und Limonaden / Безалкогольные напитки
                  </Typography>
                  <br />
                  0,2 l / 0,4 l / Flasche <br /> <br />
                  70. Coca- Cola, Coca-Cola light 2,50 € / 4,50 € / 8,50 €{" "}
                  <br />
                  <br />
                  71. Fanta , Sprite 2,50 € / 4,50 € / 8,50 € <br /> <br />
                  72. St. Michaelis Naturell / Classic 2,20 € / 3,90 € / 6,50 €{" "}
                  <br />
                  <br />
                  73. Borjomi - Georgisches Heilwasser 0,5 l Fl. 5,80 € <br />{" "}
                  <br />
                  74. Georgische Birnenlimonade 0,5 l Fl. 5,80 € <br />
                  <br />
                  75. Georgische Estragonlimonade "Tarkhun" 0,5 l Fl. 5,80 €{" "}
                  <br />
                  <br />
                  76. Georgische Traubenlimonade "Saperavi" 0,5 l Fl. 5,80 €{" "}
                  <br />
                  <br />
                  77. Georgische Feijoalimonade "Feijoa" 0,5 l Fl. 5,80 € <br />{" "}
                  <br />
                  78. Red Bull 4,60 € <br /> <br />
                  <Typography align="center" variant="h5">
                    Säfte und Nektare / Соки и нектары
                  </Typography>
                  <br />
                  0,2 l / 0,4 l / Flasche <br /> <br />
                  80. Orangensaft 2,80 € / 4,90 € / 10,40 € <br />
                  <br />
                  81. Apfelsaft 2,80 € / 4,90 € / 10,40 € <br />
                  <br />
                  82. Kirschsaft 2,80 € / 4,90 € / 10,40 € <br />
                  <br />
                  83. Rhabarbernektar 2,80 € / 4,90 € / 10,40 € <br />
                  <br />
                  84. Saftschorle 2,60 € / 4,70 € <br />
                  <br />
                  85. KiBa 2,80 € / 4,90 € <br /> <br />
                  <Typography align="center" variant="h5">
                    Fass- und Flaschenbier / Пиво бочковое и бутылочное
                  </Typography>
                  <br />
                  0,3 / 0,4 l / Flasche <br /> <br />
                  90. Einbecker Brauherren Pils (Fassbier) 3,80 € / 4,90 €{" "}
                  <br />
                  <br />
                  91. Alsterwasser 3,60 € / 4,70 € <br />
                  <br />
                  92. Herrnbräu Weizen (Flasche) 4,90 € <br />
                  <br />
                  93. Herrnbräu Weizen Dunkel (Flasche) 4,90 € <br />
                  <br />
                  94. Einbecker Brauherren Alkoholfrei (Flasche) 3,80 € <br />
                  <br />
                  95. Herrnbräu Hefe Weißbier Alkoholfrei (Flasche) 4,90 €{" "}
                  <br /> <br />
                  <Typography align="center" variant="h5">
                    Spirituosen und Liköre /Крепкие спиртные напитки и ликёры
                  </Typography>
                  <br />
                  2cl / 0,1 l / Flasche <br /> <br />
                  96. Martini - / 6,60 € / 39,00 € <br />
                  <br />
                  97. Bacardi 2,90 € / 10,- € / 60,- € <br />
                  <br />
                  98. Baileys 2,90 € / 10,00 € / 60,00 € <br /> <br />
                  99. Wodka "Absolut", "Russian Standard" 2,90 € / 10,00 € /
                  60,00 €
                  <br />
                  <br />
                  100. Wodka "Beluga", "Grey Goose" 5,60 € / 19,00 € / 120,00 €{" "}
                  <br />
                  <br />
                  101. Georgische Chacha 2,90 € / 45,00 € / 10,00 € <br />{" "}
                  <br />
                  102. Georgischer Brandy Sarajishvili David 2,90 € / 10,- € /
                  49,00 €
                  <br />
                  <br />
                  103. inGeorgischer Brandy Sarajishvili V.S.O.P. 89,00 € (0,5 l
                  Flasche)
                  <br />
                  <br />
                  104. Chivas Regal, Jack Daniel's, Tullamore 3,90 € /17,50 € /
                  95,00 €
                  <br />
                  <br />
                  105. Remy Martin 4,90 € / 21,- € / 120,- € <br />
                  <br />
                  106. Hennessy 4,90 € / 21,- € / 120,- € <br /> <br />
                  <Typography align="center" variant="h5">
                    {" "}
                    Longdrinks / Kоктейлu{" "}
                  </Typography>{" "}
                  <br />
                  107. Wodka-Red Bull 7,50 € <br />
                  <br />
                  108. Whisky-Cola 7,20 € <br />
                  <br />
                  109. Bacardi-Cola 7,20 € <br />
                  <br />
                  110. Cuba Libre 7,50 € <br /> <br />
                  <Typography align="center" variant="h5">
                    Sekt und Champagner / Игристое вино и шампанское
                  </Typography>
                  <br />
                  111. Sekt "Freixenet" Piccolo 0,2 l Flasche 7,50 € <br />
                  <br />
                  112. Marani Sekt (halbtrocken) 0,75 l Flasche 29,00 € <br />
                  <br />
                  113. Marani Sekt Rosé Brut 0,75 l Flasche 35,00 € <br />
                  <br />
                  114. Bagrationi 1882 Finest Brut (2015) 0,75 l Flasche 49,90 €{" "}
                  <br />
                  <br />
                  115. Champagner "Moët & Chandon", "Veuve Clicquot" 0,75 l
                  Flasche 95,00 € <br /> <br />
                  <Typography align="center" variant="h5">
                    {" "}
                    Weine, Weiss / Белые вина{" "}
                  </Typography>
                  <br />
                  0,2 l / 0,75 l Flasche <br /> <br />
                  120. Marani Rkatsiteli, trocken 6,10 € / 20,90 € <br />
                  <br />
                  121. Marani Telavuri, halbtrocken 7,20 € / 25,90 € <br />
                  <br />
                  122. Marani Tsinandali, trocken 7,50 € / 26,90 € <br />
                  <br />
                  123. Mtsvane, trocken 7,50 € / 26,90 € <br />
                  <br />
                  124. Vinoterra Rkatsiteli Schuchmann, trocken (2009) - / 31,90
                  € <br />
                  <br />
                  125. Weinschorle 4,90 € / - <br /> <br />
                  <Typography align="center" variant="h5">
                    Weine, rosé / Розовые вина{" "}
                  </Typography>
                  <br />
                  0,2 l / 0,75 l Flasche <br /> <br />
                  126. Marani Saperavi Rosé, trocken (2014) 7,20 € / 25,90 €{" "}
                  <br />
                  <br />
                  127. Marani Alazani Valley Rosé, lieblich 7,20 € / 25,90 €{" "}
                  <br />
                  <br />
                  128. Marani Pirosmani Rosé, halbtrocken 7,20 € / 25,90 €{" "}
                  <br /> <br />
                  <Typography align="center" variant="h5">
                    {" "}
                    Weine, rot / Красные вина{" "}
                  </Typography>
                  <br />
                  0,2 l / 0,75 l Flasche <br /> <br />
                  129. Gvirabi Saperavi, trocken 6,10 € / 20,90 € <br />
                  <br />
                  130. Marani Telavuri, halbtrocken 7,20 € / 25,90 € <br />
                  <br />
                  131. Mukuzani, trocken 7,20 € / 25,90 € <br />
                  <br />
                  132. Saperavi Classic, trocken 7,90 € / 27,90 € <br />
                  <br />
                  133. Marani Kindzmarauli, lieblich 8,60 € / 31,00 € <br />
                  <br />
                  134. Vinoterra Saperavi Schuchmann, trocken (2008) - / 34,90 €{" "}
                  <br />
                  <br />
                  135. Khvanchkara, lieblich (2010) 10,90 € / 39,90 € <br />
                </Typography>

                {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
              </div>
            )}
          </Container>
          <br /> <br />
          <Img
            fluid={props.data.nemu.childImageSharp.fluid}
            id="menu"
            alt="img"
            className="slogan"
            style={{
              display: "block",
              margin: "0px auto",
              paddingTop: "150px",
            }}
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
                <EmailIcon style={{ fontSize: 20 }} /> info@restaurant-suliko.de
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
      </Container>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    bgH1: file(relativePath: { eq: "bgH1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgH2: file(relativePath: { eq: "bgH2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgV1: file(relativePath: { eq: "bgV1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgV2: file(relativePath: { eq: "bgV2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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

    slogan_rus: file(relativePath: { eq: "slogan_rus.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: file(relativePath: { eq: "menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
