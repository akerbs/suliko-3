import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const window = require("global/window")

const titleMarginButtom = window.innerWidth <= 599 ? "15%" : "5%"

const useStyles = makeStyles(theme => ({
  slogan: {
    fontFamily: "Pacifico",
    lineHeight: 1.2,
    marginBottom: titleMarginButtom,
  },
}))

export default function AboutUs(props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)
  const [readMoreText1, setReadMoreText1] = useState(false)

  const showTex1MoreHandler = () => {
    setReadMoreText1(true)
  }
  const showTex1LessHandler = () => {
    setReadMoreText1(false)
  }
  return (
    <>
      {actLanguage === "RUS" && (
        <div>
          <Typography
            id="slogan"
            variant={window.innerWidth <= 599 ? "h5" : "h4"}
            align="center"
            color="primary"
            className={classes.slogan}
          >
            Пища, которая подходит Вашему образу жизни
          </Typography>

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Добро пожаловать в Сулико - первый грузинский ресторан в
                Гамбурге. <br />
                <br /> С момента открытия нашего ресторана в 2016 году в самом
                сердце города, мы предлагаем вам окунуться в атмосферу
                грузинского гостеприимства и ощущение праздника...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...читать дальше
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Добро пожаловать в Сулико - первый грузинский ресторан в
                Гамбурге. <br />
                <br /> С момента открытия нашего ресторана в 2016 году в самом
                сердце города, мы предлагаем вам окунуться в атмосферу
                грузинского гостеприимства и ощущение праздника. <br /> <br />
                Мы очень рады, что для многих жителей Гамбурга и гостей города
                наш ресторан стал желанным и посещаемым местом встреч, где
                разнообразие грузинской кухни может предложить каждому что-то по
                вкусу. <br /> <br />
                Наша молодая, но опытная команда сотрудников создаст вам
                замечательную обстановку для праздничных мероприятий, вечера с
                друзьями или семьей, или романтического вечера вдвоём. <br />{" "}
                <br />
                Мы будем рады побаловать вас традиционными грузинскими блюдами и
                винами со столетней историей в приятной атмосфере комфорта и
                уюта. <br /> <br />
                На нашей страничке вы найдёте различные варианты банкетного
                меню, в которое при необходимости можно внести индивидуальные
                изменения. <br /> <br />
                Взгляните на наше меню и винную карту и свяжитесь с нами.
              </Typography>
            </div>
          )}
        </div>
      )}
      {actLanguage === "DEU" && (
        <div>
          <Typography
            id="slogan"
            variant={window.innerWidth <= 599 ? "h5" : "h4"}
            align="center"
            color="primary"
            className={classes.slogan}
          >
            Das Essen, das zu Ihrem Lebensstiel passt
          </Typography>

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Herzliche willkommen bei Suliko – dem ersten georgischen
                Restaurant in der Hansestadt. <br /> <br />
                Seit der Eröffnung unseres Restaurants in 2016 im Herzen von
                Hamburg versuchen wir Ihnen das Gefühl der georgischen
                Gastfreundlichkeit und Festlichkeit zu vermitteln...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...lesen weiter
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Herzliche willkommen bei Suliko – dem ersten georgischen
                Restaurant in der Hansestadt.
                <br />
                <br />
                Seit der Eröffnung unseres Restaurants in 2016 im Herzen von
                Hamburg versuchen wir Ihnen das Gefühl der georgischen
                Gastfreundlichkeit und Festlichkeit zu vermitteln. <br />
                <br />
                Es freut uns sehr, dass für viele Hamburger und Gäste der Stadt
                unser Restaurant ein gern gesehener und besuchter Treffpunkt
                geworden ist, wo die Vielfalt der georgischen Küche allen etwas
                anzubieten hat. <br />
                <br />
                Unser junges aber erfahrenes Team ist stets bemüht für alle
                festlichen Anlässe, einfachen Abend mit Freunden und Familie
                oder einem romantischen Abend zur Zweit Ihnen zur Seite zu
                stehen, und dabei je nach Anlass ein individuelles, auf Sie
                angepasstes Menüangebot anzubieten. <br />
                <br />
                Lassen Sie einen Blick auf unser Menü- und Weinkarte werfen und
                sprechen Sie uns an. <br />
                <br />
                Bei uns werden Sie im wahrsten Sinne des Wortes mit traditionell
                authentischen georgischen Gereichten und Weinen mit
                jahrhundertlangen Tradition in angenehmer Atmosphäre verwöhnt.
              </Typography>
              {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "GEO" && (
        <div>
          <Typography
            id="slogan"
            variant={window.innerWidth <= 599 ? "h6" : "h5"}
            align="center"
            color="primary"
            className={classes.slogan}
          >
            <b>საკვები, რომელიც შეესაბამება თქვენს ცხოვრების წესს</b>
          </Typography>

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                კეთილი იყოს თქვენი მობრძანება! <br /> <br />
                2016 წლიდან გვაქვს პატივი ულამაზეს ქალაქ ჰამბურგის მოსახლეობას
                და სტუმრებს უნიკალური ქართული სამზარეულო და სტუმართმოყვარეობა
                გავაცნოთ...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...წაიკითხე მეტი
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                კეთილი იყოს თქვენი მობრძანება! <br />
                <br />
                2016 წლიდან გვაქვს პატივი ულამაზეს ქალაქ ჰამბურგის მოსახლეობას
                და სტუმრებს უნიკალური ქართული სამზარეულო და სტუმართმოყვარეობა
                გავაცნოთ.
                <br />
                <br />
                ქართული სუფრა თავისი მრავალფეროვანი კერძებით და ღვინოს ფართო
                არჩევანით მსოფლიოში აღიარებულია და ჩვენ გულითადათ გვსურდა, რომ
                ჩვენი რესტორანი ქართული კულტურისა და ტრადიციული
                სტუმართმოყვარეობის იდეალური გზამკვლევი გამხდარიყო.
                <br />
                <br />
                ჩვენთვის სასიხარულოა რომ ჩვენმა რესტორანმა მოახერხა ჰამბურგის
                გასტრონომიის სფეროში წარმატებული ეტაბლირება და საპატიო ადგილის
                დაკავება.
                <br />
                <br />
                ჩვენი ახალგაზრდა გამოცდილი გუნდი არის მზად წვეულებებისა და
                სადღესასწაულო სუფრის მენიუს შედგენისას გაითვალისწინოს ჩვენი
                სტუმრების ინდივიდუალური სურვილები და ამით ჩვენთან მათი სტუმრობა
                , ლამაზ და დაუვიწყარ დღესასწაულად აქციონ.
                <br />
                <br />
                ჩვენთან თქვენ მოიწყობთ სასიამოვნო და რომანტიული ვახშამს,
                დაგეგმავთ ბიზნეს ლანჩს ან კორპორატიული წვეულებას, დააგემოვნოთ
                დაუვიწყარი კერძებს ჩვენთან თონეში გამომცხვარი ქართულ პურთან,
                გამაგრილებელ სასმელებთან და საუკეთესო ღვინოებთან ერთად.
                <br />
                <br />
                მოხარული ვიქნებით თქვენი სტუმრობისა !
              </Typography>
              {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "ENG" && (
        <div>
          <Typography
            id="slogan"
            variant={window.innerWidth <= 599 ? "h5" : "h4"}
            align="center"
            color="primary"
            className={classes.slogan}
          >
            The food that suits your lifestyle
          </Typography>

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Welcome to our restaurant Suliko. <br /> <br />
                Since the opening of our restaurant Suliko in 2016 in the heart
                of Hamburg, we have given you a feeling of Georgian hospitality
                and festivity...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...read more
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Welcome to our restaurant Suliko.
                <br />
                <br />
                Since the opening of our restaurant Suliko in 2016 in the heart
                of Hamburg, we have given you a feeling of Georgian hospitality
                and festivity.
                <br />
                <br />
                We are very pleased that for many hamburgers and guests of the
                city our restaurant has become a welcome and visited meeting
                place where the variety of Georgian cuisine has something to
                offer everyone.
                <br />
                <br />
                Our young but experienced team always strives to be at your side
                for all festive occasions or simple evenings with friends and
                family or a romantic evening for two and to offer you an
                individual menu offer, depending on the occasion.
                <br />
                <br />
                Have a look at our menu and contact us.
                <br />
                <br />
                With us you will be pampered in the right sense of the word with
                traditionally authentic Georgian dishes and wines in an
                unpleasant ambience.
              </Typography>
            </div>
          )}
        </div>
      )}
    </>
  )
}
