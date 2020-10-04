import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import zeit from "../images/zeit.png"
import abendblatt from "../images/abendblatt.png"
import morgenpost from "../images/morgenpost.png"

import Grid from "@material-ui/core/Grid"

export default function AboutUs(props) {
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <a
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
            </Card>
          </a>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <a
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
            </Card>
          </a>
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.pressreader.com/germany/hamburger-morgenpost/20170409/281715499473637"
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
            </Card>
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}
