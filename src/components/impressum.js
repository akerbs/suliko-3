import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import sulikoIcon from "../images/suliko-icon.png"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    maxHeight: " 100vh",
    width: 320,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    outline: 1,
    padding: 30,
    paddingTop: 10,
    fontSize: 12,
  },

  logo2: {
    width: 60,
    marginBottom: 10,
  },
}))

export default function Impressum(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <IconButton
          style={{
            margin: 0,
            padding: 0,
            marginLeft: "248px",
          }}
          // onClick={stop}
          onClick={props.onClose}
        >
          <HighlightOffIcon />
        </IconButton>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img src={sulikoIcon} alt="logo" className={classes.logo2} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">IMPRESSUM</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ lineHeight: 1.2 }}>
          Angaben gemäß § 5 TMG: <br /> <br />
          Cheper & Busjar GbR <br />
          Mittelweg 24 <br />
          20148 Hamburg <br /> <br />
          <b>GESCHÄFTSFÜHRER:</b> <br />
          Georg Welia, Elchin Aliev <br />
          <br />
          <b>KONTAKT:</b> <br />
          040 49201953 <br />
          info[at]restaurant-suliko.de <br /> <br />
          Umsatzsteuer-Identifikationsnummer <br />
          gemäß §27 a Umsatzsteuergesetz: DE 42/610/02294
        </Typography>
      </div>
    </Modal>
  )
}
