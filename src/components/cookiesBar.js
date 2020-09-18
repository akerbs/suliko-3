import React, { useContext } from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"

export default function CookiesBar() {
  const { actLanguage } = useContext(LanguageContext)

  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText={
        actLanguage === "DEU"
          ? "Akzeptiere alle Cookiesn"
          : actLanguage === "RUS"
          ? "Принять все cookies"
          : actLanguage === "ENG"
          ? "Accept all cookies"
          : actLanguage === "GEO"
          ? "მიიღეთ ყველა cookies"
          : null
      }
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText={
        actLanguage === "DEU"
          ? "Nur essenzielle"
          : actLanguage === "RUS"
          ? "Только необходимые"
          : actLanguage === "ENG"
          ? "Only essentials"
          : actLanguage === "GEO"
          ? "მხოლოდ საჭიროა"
          : null
      }
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
    >
      <Typography variant="body1" id="cookiesTitle">
        {actLanguage === "DEU"
          ? "DATENSCHUTZEINSTELLUNGEN"
          : actLanguage === "RUS"
          ? "  НАСТРОЙКИ КОНФИДЕНЦИАЛЬНОСТИ"
          : actLanguage === "ENG"
          ? "PRIVACY SETTINGS"
          : actLanguage === "GEO"
          ? "კონფიდენციალურობის პარამეტრები"
          : null}
      </Typography>
      <Typography variant="caption">
        {actLanguage === "DEU"
          ? `  Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
      essenziell, während andere uns helfen, diese Website und Ihre Erfahrung
      zu verbessern.`
          : actLanguage === "RUS"
          ? `На нашем веб-сайте мы используем файлы cookie. Некоторые из них
      необходимы, а другие помогают нам улучшить этот веб-сайт и улучшить ваш
      опыт.
      `
          : actLanguage === "ENG"
          ? `We use cookies on our website. Some of them are essential, while others
      help us to improve this website and your experience.`
          : actLanguage === "GEO"
          ? `ჩვენ ვიყენებთ ქუქი – ფაილებს ჩვენს ვებ – გვერდზე. ზოგიერთი მათგანი
      აუცილებელია, ზოგი კი დაგვეხმარება ამ ვებ – გვერდის გაუმჯობესებაში და
      თქვენი გამოცდილების გაუმჯობესებაში.`
          : null}
      </Typography>
    </CookieConsent>
  )
}
