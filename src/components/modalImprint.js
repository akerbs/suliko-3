import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Modal from "@material-ui/core/Modal"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
// import CancelIcon from "@material-ui/icons/Cancel"
// import CloseIcon from "@material-ui/icons/Close"

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
    // backgroundImage: `url(${bgPatternImg}) `,
    backgroundColor: "rgba(249,234,207)",
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1, 0),
    zIndex: 9999,
    position: "fixed",
    outline: 0,
  },

}))



const ModalWindow = props => {
  const classes = useStyles()
    const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  function stop() {
    navigate("/")
  }

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={handleClose} open={open}
      // onClose={props.onClose}
      // open={props.open}
    >
      <div className={classes.paper}>
        <IconButton
            style={{ margin: 0, padding: 0, right: "10%" }}
            onClick={stop}
          >
            <HighlightOffIcon />
          </IconButton>


    </Modal>
  )
}
export default ModalWindow
