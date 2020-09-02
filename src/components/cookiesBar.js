import React from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"
const window = require("global/window")

export default function CookiesBar() {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText={btnYes}
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText={btnNo}
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
      // flipButtons
      // acceptOnScroll={true}
      // acceptOnScrollPercentage={50}
      // onAccept={() => {
      //   alert("yay!")
      // }}
      // onAccept={({ acceptedByScrolling }) => {
      //   if (acceptedByScrolling) {
      //     // triggered if user scrolls past threshold
      //     alert("Accept was triggered by user scrolling")
      //   } else {
      //     alert("Accept was triggered by clicking the Accept button")
      //   }
      // }}

      // onDecline={() => {
      //   alert("nay!")
      // }}
      // expires={999}
      //  overlay
    >
      <Typography variant="body1" id="cookiesTitle">
        {cookiesTitle}
      </Typography>
      <Typography variant="caption">{cookiesText}</Typography>
    </CookieConsent>
  )
}

const btnYes =
  window.navigator.language.slice(0, 2) === "ru"
    ? "Принять все cookies"
    : window.navigator.language.slice(0, 2) === "ge"
    ? "მიიღეთ ყველა cookies"
    : window.navigator.language.slice(0, 2) === "de"
    ? "Akzeptiere alle Cookies"
    : window.navigator.language.slice(0, 2) === "en"
    ? "Accept all cookies"
    : "Accept all cookies"

const btnNo =
  window.navigator.language.slice(0, 2) === "ru"
    ? "Только необходимые"
    : window.navigator.language.slice(0, 2) === "ge"
    ? "მხოლოდ საჭიროა"
    : window.navigator.language.slice(0, 2) === "de"
    ? "Nur essenzielle"
    : window.navigator.language.slice(0, 2) === "en"
    ? "Only essentials"
    : "Only essentials"

const cookiesTitle =
  window.navigator.language.slice(0, 2) === "ru"
    ? "НАСТРОЙКИ КОНФИДЕНЦИАЛЬНОСТИ"
    : window.navigator.language.slice(0, 2) === "ge"
    ? "კონფიდენციალურობის პარამეტრები"
    : window.navigator.language.slice(0, 2) === "de"
    ? "DATENSCHUTZEINSTELLUNGEN"
    : window.navigator.language.slice(0, 2) === "en"
    ? "PRIVACY SETTINGS"
    : "PRIVACY SETTINGS"

const cookiesText =
  window.navigator.language.slice(0, 2) === "ru"
    ? `На нашем веб-сайте мы используем файлы cookie. Некоторые из них необходимы, а другие помогают нам улучшить этот веб-сайт и улучшить ваш опыт.`
    : window.navigator.language.slice(0, 2) === "ge"
    ? `ჩვენ ვიყენებთ ქუქი – ფაილებს ჩვენს ვებ – გვერდზე. ზოგიერთი მათგანი აუცილებელია, ზოგი კი დაგვეხმარება ამ ვებ – გვერდის გაუმჯობესებაში და თქვენი გამოცდილების გაუმჯობესებაში.`
    : window.navigator.language.slice(0, 2) === "de"
    ? ` Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
    essenziell, während andere uns helfen, diese Website und Ihre Erfahrung
    zu verbessern.`
    : window.navigator.language.slice(0, 2) === "en"
    ? `We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.`
    : `We use cookies on our website. Some of them are essential, while others help us to improve this website and your experience.`
