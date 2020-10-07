import React, { useContext, useState } from "react"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import { SpeisekarteRus, WeinkarteRus, MittagsmenuRus } from "./menu-rus"
import { SpeisekarteDeu, WeinkarteDeu, MittagsmenuDeu } from "./menu-deu"
import { SpeisekarteGeo, WeinkarteGeo, MittagsmenuGeo } from "./menu-geo"
import { SpeisekarteEng, WeinkarteEng, MittagsmenuEng } from "./menu-eng"

const useStyles = makeStyles(theme => ({
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
        <a
          href={"/Bankettmenue.pdf"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
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
        </a>
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
