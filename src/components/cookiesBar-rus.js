import React from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"

export default function CookiesBar() {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText="Принять все cookies"
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText="Только необходимые"
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
    >
      <Typography variant="body1" id="cookiesTitle">
        НАСТРОЙКИ КОНФИДЕНЦИАЛЬНОСТИ
      </Typography>
      <Typography variant="caption">
        На нашем веб-сайте мы используем файлы cookie. Некоторые из них
        необходимы, а другие помогают нам улучшить этот веб-сайт и улучшить ваш
        опыт.
      </Typography>
    </CookieConsent>
  )
}
