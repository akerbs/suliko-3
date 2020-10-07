import React, { useContext, useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import zeit from "../images/zeit.png"
import abendblatt from "../images/abendblatt.png"
import morgenpost from "../images/morgenpost.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "345px",
    backgroundColor: theme.palette.third.backgroundColor,
    transition: "0.3s linear",
    "&:hover": {
      // boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
      boxShadow: " -3px 2px 10px -1px rgba(0, 0, 0, 0.3)",
    },
  },
}))

export default function AboutUs(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  function startInView1() {
    setShow1(true)
  }
  function startInView2() {
    setShow2(true)
  }
  function startInView3() {
    setShow3(true)
  }
  useEffect(() => {
    inView(`#press1`).once("enter", startInView1)
    inView(`#press2`).once("enter", startInView2)
    inView(`#press3`).once("enter", startInView3)
    inView.threshold(0.5)
  })

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.zeit.de/2018/17/suliko-restaurant-georgische-kueche-hamburg"
            style={{ textDecoration: "none" }}
          >
            <Card className={classes.card} id="press1">
              <Slide in={show1} timeout={500} direction="up">
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
                      {actLanguage === "DEU"
                        ? "Lesen Artikel"
                        : actLanguage === "RUS"
                        ? "Читать статью"
                        : actLanguage === "ENG"
                        ? "Read article"
                        : actLanguage === "GEO"
                        ? "წაიკითხეთ სტატია"
                        : null}
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Slide>
            </Card>
          </a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.abendblatt.de/hamburg/article226946467/Georgiens-Seele-hat-am-Mittelweg-seine-Heimat-gefunden.html"
            style={{ textDecoration: "none" }}
          >
            <Card className={classes.card} id="press2">
              <Slide in={show2} timeout={700} direction="up">
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
                      {actLanguage === "DEU"
                        ? "Lesen Artikel"
                        : actLanguage === "RUS"
                        ? "Читать статью"
                        : actLanguage === "ENG"
                        ? "Read article"
                        : actLanguage === "GEO"
                        ? "წაიკითხეთ სტატია"
                        : null}
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Slide>
            </Card>
          </a>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pressreader.com/germany/hamburger-morgenpost/20170409/281715499473637"
            style={{ textDecoration: "none" }}
          >
            <Card className={classes.card} id="press3">
              <Slide in={show3} timeout={900} direction="up">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Hamburger Morgenpost logo"
                    width="100%"
                    height="50%"
                    image={morgenpost}
                    style={{ padding: "73px 10px 2px 10px" }}
                  />
                  <CardActions>
                    <Button size="small" color="secondary">
                      {actLanguage === "DEU"
                        ? "Lesen Artikel"
                        : actLanguage === "RUS"
                        ? "Читать статью"
                        : actLanguage === "ENG"
                        ? "Read article"
                        : actLanguage === "GEO"
                        ? "წაიკითხეთ სტატია"
                        : null}
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Slide>
            </Card>
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}
