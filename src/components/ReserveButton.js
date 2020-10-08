import React, { useContext } from "react"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  reservierenButton: {
    bottom: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: "fixed",
    "&:hover": {
      // fontWeight: "bold",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.contrastText,
    },
  },
}))

export default function ReserveButton(props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)
  return (
    <>
      <Button
        className={classes.reservierenButton}
        onClick={props.onOpen}
        variant="contained"
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
      </Button>
    </>
  )
}
