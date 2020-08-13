import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Logo2 from "../images/Logo2.png"
import { Link } from "gatsby"
import "./footer.css"
import Modal from "@material-ui/core/Modal"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const Footer = props => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // function stop() {
  //   navigate("/")
  // }

  return (
    <Container className="footerWrapper" style={{ paddingBottom: "70px" }}>
      <img src={Logo2} alt="logo" className="logo2Footer" />

      <Typography variant="body2">
        {" © "} {new Date().getFullYear()} Suliko. All Rights Reserved
        <br />{" "}
      </Typography>
      <Typography variant="caption" onClick={handleOpen}>
        {" "}
        Impressum{" "}
      </Typography>

      <Modal
        className="modalWrapper"
        onClose={handleClose}
        open={open}
        // onClose={props.onClose}
        // open={props.open}
      >
        <div className="paper">
          <IconButton
            style={{ margin: 0, padding: 0, marginLeft: "220px" }}
            // onClick={stop}
            onClick={handleClose}
          >
            <HighlightOffIcon />
          </IconButton>
          <br />
          <Typography
            variant="caption"
            style={{ lineHeight: 1.2 }}
            color="secondary"
          >
            Cheper & Busjar GbR <br />
            <br />
            Mittelweg 24 <br />
            <br />
            20148 Hamburg <br />
            <br />
            Gesellschafter/Inhaber: Georg Welia <br />
            <br />
            Gesellschafter/Inhaber: Elchin Aliev <br />
            <br />
            Tel.:04049201953 <br />
            <br />
            Fax: 04041356779 <br />
            <br />
            Mail: info@restaurant-suliko.de <br />
            <br />
            Ust:42/610/02294 <br />
            <br />
            Design: A.Kerbs, anker2702[at]gmail.com
            <br />
            <br />
            <br />
            HAFTUNGSAUSSCHLUSS <br />
            <br />
            Haftung für Inhalte <br />
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
            <br />
            <br />
            <br />
            Haftung für Links
            <br />
            <br />
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
            <br />
            <br />
            <br />
            Urheberrecht
            <br />
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
            <br />
            <br />
            <br />
            Datenschutz
            <br />
            <br />
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin,
            dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
            der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der
            Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </Typography>
        </div>
      </Modal>
      {/* <Breadcrumbs className="breadcrumbs">
        <Link href="#" className="breadcrumbsLink">
          Impressum
        </Link>
        <Link href="#" className="breadcrumbsLink">
          Datenschutz
        </Link>
      </Breadcrumbs> */}
      {/* <Typography variant="caption" className={classes.copyrightLinks}>
        Designed by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://kerbs.now.sh/"
          style={{ textDecoration: "none" }}
        >
          Anatol Kerbs
        </Link>
      </Typography> */}
    </Container>
  )
}

export default Footer
