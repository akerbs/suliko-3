import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import sulikoIcon from "../images/suliko-icon.png"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const window = require("global/window")

const modalWindowWidth = window.innerWidth <= 599 ? 320 : "50vw"

const mainTitelLeftMargin = window.innerWidth <= 599 ? "4%" : "16%"

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
    width: modalWindowWidth,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    outline: 1,
    padding: 10,
    fontSize: 10,
  },

  logo2: {
    width: "4rem",
    marginBottom: 20,
  },
}))

export default function Datenschutz(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <img
              src={sulikoIcon}
              alt="logo"
              className={classes.logo2}
              onClick={props.onClose}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{
                marginLeft: mainTitelLeftMargin,
                marginTop: "7%",
              }}
            >
              DATENSCHUTZ
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" style={{ lineHeight: 1.2 }}>
          Die Nutzung unserer Seite ist ohne eine Angabe von personenbezogenen
          Daten möglich. Für die Nutzung einzelner Services unserer Seite können
          sich hierfür abweichende Regelungen ergeben, die in diesem Falle
          nachstehend gesondert erläutert werden. Ihre personenbezogenen Daten
          (z.B. Name, Anschrift, E-Mail, Telefonnummer, u.ä.) werden von uns nur
          gemäß den Bestimmungen des deutschen Datenschutzrechts verarbeitet.
          Daten sind dann personenbezogen, wenn sie eindeutig einer bestimmten
          natürlichen Person zugeordnet werden können. Die rechtlichen
          Grundlagen des Datenschutzes finden Sie im Bundesdatenschutzgesetz
          (BDSG) und dem Telemediengesetz (TMG). Nachstehende Regelungen
          informieren Sie insoweit über die Art, den Umfang und Zweck der
          Erhebung, die Nutzung und die Verarbeitung von personenbezogenen Daten
          durch den Anbieter
          <br />
          <br />
          <br />
          Cheper & Busjar GbR <br />
          Mittelweg 24 <br />
          20148 Hamburg <br /> <br /> <br />
          Wir weisen darauf hin, dass die internetbasierte Datenübertragung
          Sicherheitslücken aufweist, ein lückenloser Schutz vor Zugriffen durch
          Dritte somit unmöglich ist.
          <br /> <br /> <br />
          <b>COOKIES</b>
          <br /> <br /> Wir verwenden auf unserer Seite sog. Cookies zum
          Wiedererkennen mehrfacher Nutzung unseres Angebots, durch denselben
          Nutzer/Internetanschlussinhaber. Cookies sind kleine Textdateien, die
          Ihr Internet-Browser auf Ihrem Rechner ablegt und speichert. Sie
          dienen dazu, unseren Internetauftritt und unsere Angebote zu
          optimieren. Es handelt sich dabei zumeist um sog. „Session-Cookies“,
          die nach dem Ende Ihres Besuches wieder gelöscht werden. Teilweise
          geben diese Cookies jedoch Informationen ab, um Sie automatisch wieder
          zu erkennen. Diese Wiedererkennung erfolgt aufgrund der in den Cookies
          gespeicherten IP-Adresse. Die so erlangten Informationen dienen dazu,
          unsere Angebote zu optimieren und Ihnen einen leichteren Zugang auf
          unsere Seite zu ermöglichen. Sie können die Installation der Cookies
          durch eine entsprechende Einstellung Ihres Browsers verhindern; wir
          weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
          nicht sämtliche Funktionen unserer Website vollumfänglich nutzen
          können.
          <br /> <br /> <br />
          <b>
            EINSATZ VON GOOGLE-ANALYTICS MIT ANONYMISIERUNGSFUNKTION
          </b> <br /> <br />
          Wir setzen auf unserer Seite Google-Analytics, einen Webanalysedienst
          der Firma Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA
          94043 USA, nachfolgend „Google“ ein. Google-Analytics verwendet sog.
          „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und
          hierdurch eine Analyse der Benutzung der Website durch Sie
          ermöglichen. Die durch diese Cookies erzeugten Informationen,
          beispielsweise Zeit, Ort und Häufigkeit Ihres Webseiten-Besuchs
          einschließlich Ihrer IP-Adresse, werden an Google in den USA
          übertragen und dort gespeichert. Wir verwenden auf unserer Website
          Google-Analytics mit dem Zusatz „_gat._anonymizeIp“. Ihre IP-Adresse
          wird in diesem Fall von Google schon innerhalb von Mitgliedstaaten der
          Europäischen Union oder in anderen Vertragsstaaten des Abkommens über
          den Europäischen Wirtschaftsraum gekürzt und dadurch anonymisiert.
          Google wird diese Informationen benutzen, um Ihre Nutzung unserer
          Seite auszuwerten, um Reports über die Websiteaktivitäten für uns
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
          Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
          dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
          Auftrag von Google verarbeiten. Google wird, nach eigenen Angaben, in
          keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung
          bringen. Sie können die Installation der Cookies durch eine
          entsprechende Einstellung Ihrer Browser-Software verhindern; wir
          weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
          nicht sämtliche Funktionen unserer Website vollumfänglich nutzen
          können. Des Weiteren bietet Google für die gängigsten Browser ein
          Deaktivierungs-Add-on an, welches Ihnen mehr Kontrolle darüber gibt,
          welche Daten von Google zu der von Ihnen aufgerufenen Websites erfasst
          werden. Das Add-on teilt dem JavaScript (ga.js) von Google Analytics
          mit, dass keine Informationen zum Website-Besuch an Google Analytics
          übermittelt werden sollen. Das Deaktivierungs-Add-on für Browser von
          Google Analytics verhindert aber nicht, dass Informationen an uns oder
          an andere von uns gegebenenfalls eingesetzte Webanalyse-Services
          übermittelt werden. Weitere Informationen zur Installation des Browser
          Add-on erhalten Sie über nachfolgenden Link:
          https://tools.google.com/dlpage/gaoptout?hl=de
          <br /> <br /> <br />
          <b>AUSKUNFT/WIDERRUF/LÖSCHUNG</b>
          <br /> <br /> Sie können sich aufgrund des Bundesdatenschutzgesetzes
          bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
          personenbezogenen Daten und deren Berichtigung, Sperrung, Löschung
          oder einem Widerruf einer erteilten Einwilligung unentgeltlich an uns
          wenden. Wir weisen darauf hin, dass Ihnen ein Recht auf Berichtigung
          falscher Daten oder Löschung personenbezogener Daten zusteht, sollte
          diesem Anspruch keine gesetzliche Aufbewahrungspflicht entgegenstehen.
        </Typography>
      </div>
    </Modal>
  )
}
