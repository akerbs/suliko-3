import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { Link } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"

export default function AboutUs(props) {
  const { actLanguage } = useContext(LanguageContext)
  const [readMoreText2, setReadMoreText2] = useState(false)

  const showTex2MoreHandler = () => {
    setReadMoreText2(true)
  }
  const showTex2LessHandler = () => {
    setReadMoreText2(false)
  }

  return (
    <>
      {actLanguage === "RUS" && (
        <div>
          <Typography variant="h6">Дорогие наши друзья Сулико,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Благодарим Вас за посещение нашего сайта. Несмотря на непростой
            период, мы остаемся рядом с Вами и желаем, чтобы жители прекрасного
            города Гамбург и его гости, которые уже пробовали грузинскую кухню и
            стали ее ценителями, и в будущем могли наслаждаться разнообразными
            блюдами и традиционными винами. <br /> <br />
            Множество блюд, а также обновленную{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              винную карту
            </Link>{" "}
            Вы найдете в нашем новом{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              меню
            </Link>
            . <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              Нажмите здесь, чтобы заказать доставку на дом.{" "}
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "DEU" && (
        <div>
          <Typography variant="h6">Unsere lieben Suliko-Freunde,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Vielen Dank für Ihren Besuch auf unserer Website. Trotz der
            schwierigen Zeit bleiben wir an Ihrer Seite und wünschen, dass die
            Bewohner der schönen Stadt Hamburg und ihre Gäste, die georgische
            Küche probiert haben und zu ihren Liebhabern geworden sind, in
            Zukunft eine Vielzahl von Gerichten und traditionellen Weinen
            genießen können. <br /> <br />
            Weitere Gerichte sowie eine aktualisierte{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              Weinkarte
            </Link>{" "}
            finden Sie in unserem neuen{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              Menü.{" "}
            </Link>
            <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              Klicken Sie hier, um die Lieferung nach Hause zu bestellen.
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "GEO" && (
        <div>
          <Typography variant="h6">
            ჩვენო ძვირფასო სულიკოს მეგობრებო,
          </Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            დიდი მადლობა ჩვენი ვებ-გვერდის სტუმრობისთვის.მიუხედავათ რთული
            პერიოდისა, ჩვენ თქვენ გვერდით ვრჩებით და ჩვენი სურვილია,რომ ულამაზეს
            ქალაქ ჰამბურგის მაცხოვრებლებს და მის სტუმრებს, რომლებმაც ქართული
            სამზარეულო დააგემოვნეს და მისი მოყვარულები გახდნენ, შეძლონ
            მომავალშიც დატკბენ მრავალფეროვანი კერძებით და ტრადიციული ღვინოებით.
            <br />
            <br />
            იხილეთ ჩვენ ახალი{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              კერძების მენიუ
            </Link>{" "}
            უფრო მეტი კერძებით და ასევეე განვაახლებული{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              სასმელების მენიუ
            </Link>
            .
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              კერძების შეკვეთისთვის დააწექით აქ.{" "}
            </a>
          </Typography>
        </div>
      )}
      {actLanguage === "ENG" && (
        <div>
          <Typography variant="h6">Our dear Suliko friends,</Typography>
          <br />

          <Typography id="text2Big" variant="body1">
            Thank you for visiting our website. Despite the difficult time, we
            remain by your side and wish that the residents of the beautiful
            city of Hamburg and their guests, who have tried Georgian cuisine
            and have become its lovers, can enjoy a variety of dishes and
            traditional wines in the future.
            <br /> <br />
            You can find more dishes and an updated{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              {" "}
              wine list{" "}
            </Link>{" "}
            in our new{" "}
            <Link
              to="#menu"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              menu
            </Link>
            .
            <br /> <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lieferando.de/suliko"
              style={{ textDecoration: "none", color: "rgba(133,26,29)" }}
            >
              Click here to order home delivery.
            </a>
          </Typography>
        </div>
      )}
    </>
  )
}
