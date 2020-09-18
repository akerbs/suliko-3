import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"
import { Speisekarte, Weinkarte, Mittagsmenu } from "./menu-rus"

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

      <Speisekarte open={openSpeisekarte} onClose={handleCloseSpeisekarte} />
      <Weinkarte open={openWeinkarte} onClose={handleCloseWeinkarte} />
      <Mittagsmenu open={openMittagsmenu} onClose={handleCloseMittagsmenu} />
    </>
  )
}
