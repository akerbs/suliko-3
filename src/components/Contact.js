import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import ScheduleIcon from "@material-ui/icons/Schedule"

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

export default function Contact(props) {
  const classes = useStyles()

  const { actLanguage } = useContext(LanguageContext)
  return (
    <>
      {actLanguage === "RUS" && (
        <Typography variant="body1" align="center" style={{ lineHeight: 1.8 }}>
          <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4904049201953"
            className={classes.phoneEmailLink}
          >
            <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@restaurant-suliko.de"
            className={classes.phoneEmailLink}
          >
            <EmailIcon style={{ fontSize: 20 }} />
            info[at]restaurant-suliko.de
          </a>
          <br /> <br />
          <ScheduleIcon style={{ fontSize: 20 }} />
          <b> Часы работы</b> <br />
          Пн-Чт 12:00 - 15:00, 17:00 - 22:00 <br />
          Пт 12:00 - 15:00, 17:00 - 24:00 <br />
          Сб 15:00 - 24:00 <br />
          Вс 15:00 - 22:00 <br />
          <br />
        </Typography>
      )}
      {actLanguage === "DEU" && (
        <Typography variant="body1" align="center" style={{ lineHeight: 1.8 }}>
          <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4904049201953"
            className={classes.phoneEmailLink}
          >
            <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@restaurant-suliko.de"
            className={classes.phoneEmailLink}
          >
            <EmailIcon style={{ fontSize: 20 }} />
            info[at]restaurant-suliko.de
          </a>
          <br /> <br />
          <ScheduleIcon style={{ fontSize: 20 }} /> <b>Öffnungszeiten </b>
          <br />
          Mo- Do 12:00 - 15:00, 17:00 - 22:00 <br />
          Fr 12:00 - 15:00, 17:00 - 24:00 <br />
          Sa 17:00 - 24:00 <br />
          Son 15:00 - 22:00 <br />
          <br />
        </Typography>
      )}

      {actLanguage === "GEO" && (
        <Typography variant="body1" align="center" style={{ lineHeight: 1.8 }}>
          <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4904049201953"
            className={classes.phoneEmailLink}
          >
            <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@restaurant-suliko.de"
            className={classes.phoneEmailLink}
          >
            <EmailIcon style={{ fontSize: 20 }} />
            info[at]restaurant-suliko.de
          </a>
          <br /> <br />
          <ScheduleIcon style={{ fontSize: 20 }} /> <b>გახსნის საათები</b>{" "}
          <br />
          ორშაბათი-ხუთშაბათი 12:00 - 15:00, 17:00 - 22:00 <br />
          პარ 12:00 - 15:00, 17:00 - 24:00 <br />
          შაბათი 17:00 - 24:00 <br />
          მზე 15:00 - 22:00 <br />
          <br />
        </Typography>
      )}

      {actLanguage === "ENG" && (
        <Typography variant="body1" align="center" style={{ lineHeight: 1.8 }}>
          <HomeIcon style={{ fontSize: 20 }} /> Mittelweg 24, 20148 Hamburg
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+4904049201953"
            className={classes.phoneEmailLink}
          >
            <PhoneIcon style={{ fontSize: 20 }} /> +49(0)40 49201953
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@restaurant-suliko.de"
            className={classes.phoneEmailLink}
          >
            <EmailIcon style={{ fontSize: 20 }} />
            info[at]restaurant-suliko.de
          </a>
          <br /> <br />
          <ScheduleIcon style={{ fontSize: 20 }} />
          <b>Opening hours </b> <br />
          Mon-Thu 12:00 pm - 3:00 pm, 5:00 pm - 10:00 pm <br />
          Fri 12:00 - 15:00, 17:00 - 24:00 <br />
          Sa 17:00 - 24:00 <br />
          Sun 15:00 - 22:00 <br />
          <br />
        </Typography>
      )}
    </>
  )
}
