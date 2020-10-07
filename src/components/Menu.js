import React, { useContext, useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import { SpeisekarteRus, WeinkarteRus, MittagsmenuRus } from "./menu-rus"
import { SpeisekarteDeu, WeinkarteDeu, MittagsmenuDeu } from "./menu-deu"
import { SpeisekarteGeo, WeinkarteGeo, MittagsmenuGeo } from "./menu-geo"
import { SpeisekarteEng, WeinkarteEng, MittagsmenuEng } from "./menu-eng"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  menuSection: {
    textAlign: "center",
    overflow: "hidden",
  },
  phoneEmailLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      fontWeight: "bold",
    },
  },
}))

export default function Menu(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const [openSpeisekarte, setOpenSpeisekarte] = useState(false)
  const [openWeinkarte, setOpenWeinkarte] = useState(false)
  const [openMittagsmenu, setOpenMittagsmenu] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  function startInView1() {
    setShow1(true)
  }
  function startInView2() {
    setShow2(true)
  }
  function startInView3() {
    setShow3(true)
  }
  function startInView4() {
    setShow4(true)
  }
  useEffect(() => {
    inView(`#menu1`).once("enter", startInView1)
    inView(`#menu2`).once("enter", startInView2)
    inView(`#menu3`).once("enter", startInView3)
    inView(`#menu4`).once("enter", startInView4)
    inView.threshold(1)
  })

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

  return (
    <>
      <div className={classes.menuSection}>
        <div id="menu1" style={{ display: "inline-block" }}>
          <Slide in={show1} timeout={400} direction="up">
            <Button
              variant="contained"
              onClick={handleOpenSpeisekarte}
              style={{
                backgroundColor: "rgba(249, 234, 207)",
                color: "rgba(133,26,29)",
                margin: 10,
              }}
            >
              {actLanguage === "DEU"
                ? "Speise- und Barkarte"
                : actLanguage === "RUS"
                ? " Меню и бар"
                : actLanguage === "ENG"
                ? "Menu and bar"
                : actLanguage === "GEO"
                ? "მენიუ და ბარი"
                : null}
            </Button>
          </Slide>
        </div>
        <div id="menu2" style={{ display: "inline-block" }}>
          <Slide in={show2} timeout={600} direction="up">
            <Button
              variant="contained"
              onClick={handleOpenWeinkarte}
              style={{
                backgroundColor: "rgba(249, 234, 207)",
                color: "rgba(133,26,29)",
                margin: 10,
              }}
            >
              {actLanguage === "DEU"
                ? "Weinkarte"
                : actLanguage === "RUS"
                ? "Винная карта"
                : actLanguage === "ENG"
                ? "Wine list"
                : actLanguage === "GEO"
                ? "ღვინის რუკა"
                : null}
            </Button>
          </Slide>
        </div>

        <div id="menu3" style={{ display: "inline-block" }}>
          <Slide in={show3} timeout={800} direction="up">
            <Button
              variant="contained"
              onClick={handleOpenMittagsmenu}
              style={{
                backgroundColor: "rgba(249, 234, 207)",
                color: "rgba(133,26,29)",
                margin: 10,
              }}
            >
              {actLanguage === "DEU"
                ? "Mittagsmenü"
                : actLanguage === "RUS"
                ? "Обеденное меню"
                : actLanguage === "ENG"
                ? "Lunch menu"
                : actLanguage === "GEO"
                ? "სადილის მენიუ"
                : null}
            </Button>
          </Slide>
        </div>
        <div id="menu4" style={{ display: "inline-block" }}>
          <a
            href={"/Bankettmenue.pdf"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Slide in={show4} timeout={1000} direction="up">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgba(249, 234, 207)",
                  color: "rgba(133,26,29)",
                  margin: 10,
                }}
              >
                {actLanguage === "DEU"
                  ? "Bankettmenü"
                  : actLanguage === "RUS"
                  ? "Банкетное меню"
                  : actLanguage === "ENG"
                  ? "Banquet menu"
                  : actLanguage === "GEO"
                  ? "საბანკეტო მენიუ"
                  : null}
              </Button>
            </Slide>
          </a>
        </div>
      </div>

      {actLanguage === "DEU" && (
        <div>
          <SpeisekarteDeu
            open={openSpeisekarte}
            onClose={handleCloseSpeisekarte}
          />
          <WeinkarteDeu open={openWeinkarte} onClose={handleCloseWeinkarte} />
          <MittagsmenuDeu
            open={openMittagsmenu}
            onClose={handleCloseMittagsmenu}
          />
        </div>
      )}
      {actLanguage === "RUS" && (
        <div>
          <SpeisekarteRus
            open={openSpeisekarte}
            onClose={handleCloseSpeisekarte}
          />
          <WeinkarteRus open={openWeinkarte} onClose={handleCloseWeinkarte} />
          <MittagsmenuRus
            open={openMittagsmenu}
            onClose={handleCloseMittagsmenu}
          />
        </div>
      )}
      {actLanguage === "GEO" && (
        <div>
          <SpeisekarteGeo
            open={openSpeisekarte}
            onClose={handleCloseSpeisekarte}
          />
          <WeinkarteGeo open={openWeinkarte} onClose={handleCloseWeinkarte} />
          <MittagsmenuGeo
            open={openMittagsmenu}
            onClose={handleCloseMittagsmenu}
          />
        </div>
      )}
      {actLanguage === "ENG" && (
        <div>
          <SpeisekarteEng
            open={openSpeisekarte}
            onClose={handleCloseSpeisekarte}
          />
          <WeinkarteEng open={openWeinkarte} onClose={handleCloseWeinkarte} />
          <MittagsmenuEng
            open={openMittagsmenu}
            onClose={handleCloseMittagsmenu}
          />
        </div>
      )}
    </>
  )
}
