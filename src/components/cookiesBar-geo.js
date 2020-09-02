import React from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"

export default function CookiesBar() {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText="მიიღეთ ყველა cookies"
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText="მხოლოდ საჭიროა"
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
    >
      <Typography variant="body1" id="cookiesTitle">
        კონფიდენციალურობის პარამეტრები
      </Typography>
      <Typography variant="caption">
        ჩვენ ვიყენებთ ქუქი – ფაილებს ჩვენს ვებ – გვერდზე. ზოგიერთი მათგანი
        აუცილებელია, ზოგი კი დაგვეხმარება ამ ვებ – გვერდის გაუმჯობესებაში და
        თქვენი გამოცდილების გაუმჯობესებაში.
      </Typography>
    </CookieConsent>
  )
}
