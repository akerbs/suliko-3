import React from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"

export default function CookiesBar() {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText="Akzeptiere alle Cookies"
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText="Nur essenzielle"
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
    >
      <Typography variant="body1" id="cookiesTitle">
        DATENSCHUTZEINSTELLUNGEN
      </Typography>
      <Typography variant="caption">
        Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
        essenziell, während andere uns helfen, diese Website und Ihre Erfahrung
        zu verbessern.
      </Typography>
    </CookieConsent>
  )
}
