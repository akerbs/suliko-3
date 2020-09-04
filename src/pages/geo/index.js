import React, { useRef, useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
// import SEO from "../../components/seo"
import sloganImg from "../../images/slogan_geo.png"
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
import ModalWindow from "../../components/modalWindow-geo"
import "../index.css"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import zeit from "../../images/zeit.png"
import abendblatt from "../../images/abendblatt.png"
import Grid from "@material-ui/core/Grid"
import menu from "../../images/menu.png"
import { Helmet } from "react-helmet"
import Header from "../../components/header-geo"
import Footer from "../../components/footer"
import { Speisekarte, Weinkarte, Mittagsmenu } from "../../components/menu-geo"
import CookiesBar from "../../components/cookiesBar-geo"

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
        <html lang="ge" />
        <title>restaurant-suliko.de</title>
        <description>ქართული რესტორანი სულიკო ჰამბურგში, გერმანია</description>
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
            შეინახეთ მაგიდა
          </Button>
          <ModalWindow onClose={handleClose} open={open} />
          <br /> <br />
          <Container id="home-text">
            <Typography variant="h6">ძვირფასო სულიკო მეგობრებო,</Typography>
            <br />
            {!readMoreText2 && (
              <div>
                <Typography id="text2Litle" variant="body1">
                  არაჩვეულებრივი პერიოდის მიუხედავად, ჩვენ შენთან ერთად ვრჩებით
                  და გვინდა, რომ ჩვენი ლამაზი ქალაქი შეაფასოს ქართული
                  სამზარეულოთი. მოხარული ვიქნებით ჩვენს რესტორანში. თქვენ ასევე
                  შეგიძლიათ შეუკვეთოთ თქვენი საყვარელი კვება სახლში, ამისათვის
                  ჩვენ მოვამზადეთ ...
                </Typography>
                <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                  ...წაიკითხე მეტი
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
                  არაჩვეულებრივი პერიოდის მიუხედავად, ჩვენ თქვენს გვერდით
                  ვრჩებით და გვინდა, რომ ჩვენი ლამაზი ქალაქი შეაფასოს ქართული
                  სამზარეულოთი. მოხარული ვიქნებით ჩვენს რესტორანში. ასევე
                  შეგიძლიათ შეუკვეთოთ თქვენი საყვარელი კვება სახლში, ამისათვის
                  ჩვენ მოვამზადეთ სპეციალური მენიუ თქვენთვის.
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
                      მენიუ საშინაო შეკვეთებისთვის
                    </Button>
                  </a>
                  <br />
                  <br />
                  ამ მენიუში ნახავთ მრავალფეროვან ტრადიციულ ქართულ კერძებს ყველა
                  გემოვნებით.
                  <br />
                  სპეციალური შეთავაზება მათთვის, ვისაც სურს გაეცნოს ქართული
                  სამზარეულოს გემოვნებას - ქართული სუფრა (მაგიდა 2
                  ადამიანისგან).
                  <br />
                  <br />
                  ღვინოზე საუბრისას გადახედეთ ჩვენს ღვინის ჩამონათვალს. აქ
                  ნახავთ ყველაზე ცნობილ ქართულ ღვინოს, მათ შორის, ძველი ქართული
                  რეცეპტების მიხედვით მომზადებულ, ამინფილტრალურ ღვინოებს,
                  რომელთა წყალობითაც საქართველო ძალიან ცნობილია.
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
                      Ღვინის სია
                    </Button>
                  </a>
                  <br />
                  <br />
                  ადგილზე მიტანა:
                  <br />
                  ორშაბათს 12.00-დან 18.00 საათამდე და დანიშვნის გზით.
                  <br />
                  თქვენ ნახავთ Lieferando (ადგილზე მიტანის სერვისს).
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
                      შეუკვეთე ახლა
                    </Button>
                  </Link>
                  <br />
                  <br />
                  გელოდებით!
                  <br />
                  <br />
                  შენი სულიკო რესტორანი
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
                  მოგესალმებით ჩვენს რესტორანში Suliko. აქ შეგიძლიათ განაწყოთ
                  უგემრიელესი საკვები, სასიამოვნო ატმოსფერო და ქართული
                  სტუმართმოყვარეობა. გადახედეთ ჩვენს მენიუს და მოხარული ვიქნებით
                  ვუპასუხოთ თქვენს კითხვებს. აქ ნახავთ მრავალფეროვანი კერძების,
                  კარგ ღვინისა და სუფთა ქართული პურის ფართო არჩევანს. მოხარული
                  ვიქნებით, რომ დაგეხმაროთ შვებულების მოწყობაში, საღამოს
                  შეხვედრასთან მეგობრებთან, ოჯახთან ერთად, ორივესთვის რომანტიკულ
                  საღამოს. ჩვენ მოვამზადებთ ინდივიდუალურ შეთავაზებას, რომელიც
                  ჯდება თქვენი ცხოვრების წესის მიხედვით ...
                </Typography>
                <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                  ...წაიკითხე მეტი
                </p>
              </div>
            )}
            {readMoreText1 && (
              <div>
                <Typography id="text1Big" variant="body1">
                  მოგესალმებით ჩვენს რესტორანში Suliko. აქ შეგიძლიათ განაწყოთ
                  უგემრიელესი საკვები, სასიამოვნო ატმოსფერო და ქართული
                  სტუმართმოყვარეობა. გადახედეთ ჩვენს მენიუს და მოხარული ვიქნებით
                  ვუპასუხოთ თქვენს კითხვებს. აქ ნახავთ მრავალფეროვანი კერძების,
                  კარგ ღვინისა და სუფთა ქართული პურის ფართო არჩევანს. მოხარული
                  ვიქნებით, რომ დაგეხმაროთ შვებულების მოწყობაში, საღამოს
                  შეხვედრასთან მეგობრებთან, ოჯახთან ერთად, ორივესთვის რომანტიკულ
                  საღამოს. ჩვენ მოვამზადებთ ინდივიდუალურ შეთავაზებას, რომელიც
                  ჯდება თქვენი ცხოვრების წესის მიხედვით.
                  <br />
                  <br />
                  <Link to="/geo#menu" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgba(249, 234, 207)",
                        color: "rgba(133,26,29)",
                      }}
                    >
                      მენიუ
                    </Button>
                  </Link>
                  <br />
                  <br />
                  ქართული სამზარეულო მსოფლიოში ერთ – ერთი უძველესია.
                  მრავალფეროვანი კერძებისა და სასმელების მრავალფეროვანი ქართული
                  სუფრა "თამადას" (სუფრის არჩეული მასპინძელი) ხელმძღვანელობით
                  ნამდვილი ზეიმია მეგობრებთან ერთად. ჰამბურგის გულში ჩვენი
                  რესტორნის გახსნით, გვსურს გითხრათ სტუმართმოყვარეობისა და
                  დღესასწაულის გრძნობა. <br />
                  იგრძნობთ თავს ჩვენს სახლში და ისიამოვნეთ ჩვენი ფართო კვების და
                  სასმელის მენიუში. აქ მოცემულია ქართული კერძების მცირე
                  პრეზენტაცია:
                  <br />
                  <br /> ცივი მადისმიერი: <br />
                  ტიპიური საჭმელები არის ბადრიჯანის ნიგოზებით სავსე ბადრიჯნის
                  თხელი ნაჭრები და სხვადასხვა ფალი - ისპანახი, ჭარხალი ან ლეკი,
                  დაფქული თხილით, სანელებლებით და ქინძით.
                  <br />
                  <br />
                  Მთავარი კერძები:
                  <br />
                  ხინკალი - ქართული დუმალი, ქართული სამზარეულოს ერთ-ერთი ყველაზე
                  ცნობილი კერძია, რაც უბრალოდ შეუძლებელია არ შეგიყვარდეს!
                  ხაჭაპური ქართული სამზარეულოს კიდევ ერთი სპეციალობაა. ეს
                  უგემრიელესი ყველით სავსე ბრტყელი ბრტყელია, რომელსაც ყველაზე
                  ხშირად საქართველოში იყენებენ, როგორც საჭმელს შორის. ლობიო
                  ტრადიციული ქართული ლობიო კერძია, რომელსაც ხშირად იყენებენ
                  როგორც გვერდით კერძს ან როგორც საჭმელს. მჭადის სიმინდის
                  tortilla, რომელიც დასავლეთ საქართველოში გამოიყენება როგორც
                  პური, სულგუნის ყველით (მენგრელიას რაიონიდან ყველი) და სხვა
                  სახის ყველი, მაგალითად, იმერული (ყველი იმერეთის რეგიონიდან) და
                  გუდა (მთის ყველი). ყველი ხშირად ემსახურება ძირითადი კურსით.
                  <br />
                  დესერტები:
                  <br /> რამდენიმე დესერტს ემსახურება დესერტი, მათ შორის
                  პოპულარული ქართული ტკბილი, სახელწოდებით ჩურჩხელა, დამზადებულია
                  კანიანი კაკლისა და თხილისგან, რომელიც სიმინდისა და ხორბლის
                  ფქვილით არის გაბერილი სიმინდის ყუთზე.
                  <br />
                  <br />
                  ღვინოები: <br />
                  საქართველოს აქვს მეღვინეობის ტრადიცია, რომელიც 8000 წელზე მეტი
                  ხნისაა და შესაბამისად ითვლება ღვინის წარმოშობის ქვეყნად.
                  უნიკალური კლიმატური და გეოლოგიური პირობების საშუალებით
                  შესაძლებელია შესანიშნავი წითელი ღვინოების წარმოება, როგორიცაა
                  საფერავი, ხვანჭკარა, ისევე როგორც თეთრი ღვინოები რქაწითელი,
                  მწვანეს და მრავალი სხვა.
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
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.zeit.de/2018/17/suliko-restaurant-georgische-kueche-hamburg"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      maxWidth: "345px",
                      backgroundColor: "rgba(249,234,207)",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Zeit online logo"
                        width="100%"
                        height="50%"
                        image={zeit}
                        style={{ padding: "70px 10px 0px 10px" }}
                      />
                      <CardActions>
                        <Button size="small" color="secondary">
                          წაიკითხეთ სტატია
                        </Button>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.abendblatt.de/hamburg/article226946467/Georgiens-Seele-hat-am-Mittelweg-seine-Heimat-gefunden.html"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      maxWidth: "345px",
                      backgroundColor: "rgba(249,234,207)",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Hamburger Abendblatt logo"
                        width="100%"
                        height="50%"
                        image={abendblatt}
                        style={{ padding: "70px 10px 0px 10px" }}
                      />
                      <CardActions>
                        <Button size="small" color="secondary">
                          წაიკითხეთ სტატია
                        </Button>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Link>
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
                მენიუ და ბარი
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
                ღვინის რუკა
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
                სადილის მენიუ
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
              <ScheduleIcon style={{ fontSize: 20 }} /> გახსნის საათები <br />
              ორშაბათი-ხუთშაბათი 12:00 - 15:00, 17:00 - 22:00 <br />
              პარ 12:00 - 15:00, 17:00 - 24:00 <br />
              შაბათი 17:00 - 24:00 <br />
              მზე 15:00 - 22:00 <br />
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
