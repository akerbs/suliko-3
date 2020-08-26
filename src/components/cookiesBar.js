import React from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"

export default function CookiesBar() {
  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-tagmanager"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText="Accept"
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText="Decline"
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
      <Typography variant="caption">
        This website uses cookies to enhance the user experience.
        {/* This website stores cookies on your computer. These cookies are used to
        collect information about how you interact with this website and allow
        us to remember you. We use this information in order to improve and
        customize your browsing experience and for analytics and metrics about
        our visitors on this website. If you decline, your information won’t be
        tracked when you visit this website. A single cookie will be used in
        your browser to remember your preference not to be tracked. */}
      </Typography>{" "}
    </CookieConsent>
  )
}
