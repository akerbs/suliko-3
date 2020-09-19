import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  reservierenButton: {
    bottom: 20,
    right: 20,
    zIndex: 999,
  },
}))

export default function ReserveButton(props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)

  // console.log("RRRRR", window.location.pathname)

  return (
    <>
      <Button
        className={classes.reservierenButton}
        onClick={props.onOpen}
        variant="contained"
        style={{
          backgroundColor: "rgba(133,26,29) ",
          color: "rgba(249, 234, 207)",
          position: "fixed",
        }}
      >
        {actLanguage === "DEU"
          ? "Tisch reservieren"
          : actLanguage === "RUS"
          ? "Забронировать столик"
          : actLanguage === "ENG"
          ? "Reserve a table"
          : actLanguage === "GEO"
          ? " შეინახეთ მაგიდა"
          : null}
        {/* Забронировать столик */}
      </Button>
    </>
  )
}
