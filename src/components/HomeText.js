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
          <Typography variant="h6">Дорогие друзья Сулико,</Typography>
          <br />
          {!readMoreText2 && (
            <div>
              <Typography id="text2Litle" variant="body1">
                Несмотря на неординарное время, мы остаёмся с Вами и хотим
                баловать наш прекрасный город блюдами грузинской кухни. Мы будем
                рады видеть Вас в нашем ресторане! Вы также можете заказать
                любимые блюда на дом, для этого мы подготовили...
              </Typography>
              <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                ...читать дальше
              </p>
            </div>
          )}

          {readMoreText2 && (
            <div
              onBlur={() => {
                console.log("outer blur")
              }}
            >
              <Typography id="text2Big" variant="body1">
                Несмотря на неординарное время, мы остаёмся с Вами и хотим
                баловать наш прекрасный город блюдами грузинской кухни. Мы будем
                рады видеть Вас в нашем ресторане! Вы также можете заказать
                любимые блюда на дом, для этого мы подготовили для Вас
                специальное меню.
                <br />
                <br />
                <a
                  href={"/Speisekarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Меню для заказа на дом
                  </Button>
                </a>
                <br />
                <br />
                В этом меню Вы найдёте разнообразные традиционные блюда
                грузинской кухни на любой вкус.
                <br />
                Специальное предложение для тех, кто хочет познакомиться со
                вкусом грузинской кухни - грузинская супра (стол от 2х человек).
                <br />
                <br />
                Кстати о вине, обратите внимание на нашу винную карту. Здесь Вы
                найдете самые известные грузинские вина, в том числе,
                приготовленные по старинным грузинским рецептам, нефильтрованные
                амфорные вина, которыми так славится Грузия.
                <br />
                <br />
                <a
                  href={"/Weinkarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Винная карта
                  </Button>
                </a>
                <br />
                <br />
                Доставка:
                <br />
                Пн-вс с 12.00 до 18.00 и по договорённости.
                <br />
                Вы найдёте нас на Lieferando (служба доставки).
                <br />
                <br />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.lieferando.de/suliko"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(133,26,29) ",
                      color: "rgba(249, 234, 207)",
                    }}
                  >
                    Заказать сейчас
                  </Button>
                </Link>
                <br />
                <br />
                Мы с нетерпением ждем встречи с вами!
                <br />
                <br />
                Ваш ресторан Сулико
              </Typography>
              {/* <p onClick={showTex2LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "DEU" && (
        <div>
          <Typography variant="h6">Liebe Suliko-Freunde,</Typography>
          <br />
          {!readMoreText2 && (
            <div>
              <Typography id="text2Litle" variant="body1">
                wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da
                und möchten unsere wunderschöne Stadt mit authentisch
                georgischer Küche verwöhnen. Essen Sie zu unseren regulären
                Öffnungszeiten im Restaurant Suliko oder bestellen Sie Ihre
                Lieblingsgerichte und lassen Sie es sich außer Haus schmecken.
                Für diesen Zweck bieten wir Ihnen eine speziell angefertigte...
              </Typography>
              <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                ...lesen weiter
              </p>
            </div>
          )}

          {readMoreText2 && (
            <div
              onBlur={() => {
                console.log("outer blur")
              }}
            >
              <Typography id="text2Big" variant="body1">
                wir sind in dieser außergewöhnlichen Zeit weiterhin für Sie da
                und möchten unsere wunderschöne Stadt mit authentisch
                georgischer Küche verwöhnen. Essen Sie zu unseren regulären
                Öffnungszeiten im Restaurant Suliko oder bestellen Sie Ihre
                Lieblingsgerichte und lassen Sie es sich außer Haus schmecken.
                Für diesen Zweck bieten wir Ihnen eine speziell angefertigte
                Bestellmenükarte an.
                <br />
                <br />
                <a
                  href={"/Speisekarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Bestellmenükarte
                  </Button>
                </a>
                <br />
                <br />
                In dieser finden Sie die traditionelle Vielfalt der georgischen
                Küche, die zu allen Lebensstilen und Geschmäckern passt.
                <br />
                Für alle, die in die georgische Welt zunächst reinschnuppern
                wollen, bieten wir als besonders preiswerte Alternative die
                georgische Supra/Tafel ab 2 Personen an.
                <br />
                <br />
                Apropos Wein, schauen Sie in unsere Weinkarte. Dort finden Sie
                die bekanntesten georgischen Weine, unter anderem die nach alter
                Tradition hergestellten und ungefilterten Amphorenweine, für die
                Georgien so bekannt ist.
                <br />
                <br />
                <a
                  href={"/Weinkarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Weinkarte
                  </Button>
                </a>
                <br />
                <br />
                Lieferungen & Abholungen:
                <br />
                Mo. bis So. von 12.00 bis 18.00 Uhr und nach Vereinbarung.
                <br />
                Unter den Lieferdiensten finden Sie uns auf Lieferando
                <br />
                <br />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.lieferando.de/suliko"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(133,26,29) ",
                      color: "rgba(249, 234, 207)",
                    }}
                  >
                    Bestellen jetzt
                  </Button>
                </Link>
                <br />
                <br />
                Wir freuen uns auf Sie!
                <br />
                <br />
                Ihr Restaurant Suliko
              </Typography>
              {/* <p onClick={showTex2LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "GEO" && (
        <div>
          <Typography variant="h6">ძვირფასო სულიკო მეგობრებო,</Typography>
          <br />
          {!readMoreText2 && (
            <div>
              <Typography id="text2Litle" variant="body1">
                არაჩვეულებრივი პერიოდის მიუხედავად, ჩვენ შენთან ერთად ვრჩებით და
                გვინდა, რომ ჩვენი ლამაზი ქალაქი შეაფასოს ქართული სამზარეულოთი.
                მოხარული ვიქნებით ჩვენს რესტორანში. თქვენ ასევე შეგიძლიათ
                შეუკვეთოთ თქვენი საყვარელი კვება სახლში, ამისათვის ჩვენ
                მოვამზადეთ ...
              </Typography>
              <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                ...წაიკითხე მეტი
              </p>
            </div>
          )}

          {readMoreText2 && (
            <div
              onBlur={() => {
                console.log("outer blur")
              }}
            >
              <Typography id="text2Big" variant="body1">
                არაჩვეულებრივი პერიოდის მიუხედავად, ჩვენ თქვენს გვერდით ვრჩებით
                და გვინდა, რომ ჩვენი ლამაზი ქალაქი შეაფასოს ქართული
                სამზარეულოთი. მოხარული ვიქნებით ჩვენს რესტორანში. ასევე
                შეგიძლიათ შეუკვეთოთ თქვენი საყვარელი კვება სახლში, ამისათვის
                ჩვენ მოვამზადეთ სპეციალური მენიუ თქვენთვის.
                <br />
                <br />
                <a
                  href={"/Speisekarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    მენიუ საშინაო შეკვეთებისთვის
                  </Button>
                </a>
                <br />
                <br />
                ამ მენიუში ნახავთ მრავალფეროვან ტრადიციულ ქართულ კერძებს ყველა
                გემოვნებით.
                <br />
                სპეციალური შეთავაზება მათთვის, ვისაც სურს გაეცნოს ქართული
                სამზარეულოს გემოვნებას - ქართული სუფრა (მაგიდა 2 ადამიანისგან).
                <br />
                <br />
                ღვინოზე საუბრისას გადახედეთ ჩვენს ღვინის ჩამონათვალს. აქ ნახავთ
                ყველაზე ცნობილ ქართულ ღვინოს, მათ შორის, ძველი ქართული
                რეცეპტების მიხედვით მომზადებულ, ამინფილტრალურ ღვინოებს, რომელთა
                წყალობითაც საქართველო ძალიან ცნობილია.
                <br />
                <br />
                <a
                  href={"/Weinkarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Ღვინის სია
                  </Button>
                </a>
                <br />
                <br />
                ადგილზე მიტანა:
                <br />
                ორშაბათს 12.00-დან 18.00 საათამდე და დანიშვნის გზით.
                <br />
                თქვენ ნახავთ Lieferando (ადგილზე მიტანის სერვისს).
                <br />
                <br />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.lieferando.de/suliko"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(133,26,29) ",
                      color: "rgba(249, 234, 207)",
                    }}
                  >
                    შეუკვეთე ახლა
                  </Button>
                </Link>
                <br />
                <br />
                გელოდებით!
                <br />
                <br />
                შენი სულიკო რესტორანი
              </Typography>
              {/* <p onClick={showTex2LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "ENG" && (
        <div>
          <Typography variant="h6">Dear Suliko friends,</Typography>
          <br />
          {!readMoreText2 && (
            <div>
              <Typography id="text2Litle" variant="body1">
                Despite the extraordinary time, we stay with you and want to
                pamper our beautiful city with Georgian cuisine. We will be glad
                to see you in our restaurant! You can also order your favorite
                dishes for delivery to any doorstep, for this we have prepared
                ..
              </Typography>
              <p onClick={showTex2MoreHandler} style={{ cursor: "pointer" }}>
                ...read more
              </p>
            </div>
          )}

          {readMoreText2 && (
            <div
              onBlur={() => {
                console.log("outer blur")
              }}
            >
              <Typography id="text2Big" variant="body1">
                Despite the extraordinary time, we stay with you and want pamper
                our beautiful city with Georgian cuisine. We will be glad to see
                you in our restaurant! You can also order your favorite dishes
                for delivery to any doorstep, for this we have prepared a
                special menu for you.
                <br />
                <br />
                <a
                  href={"/Speisekarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Order menu card
                  </Button>
                </a>
                <br />
                <br />
                In this menu you will find a variety of traditional Georgian
                dishes for every taste.
                <br />
                A special offer for those who want to get acquainted with the
                taste of Georgian cuisine - Georgian supra (table from 2
                people).
                <br />
                <br />
                Speaking of wine, take a look at our wine list. Here you will
                find the most famous Georgian wines, including those prepared
                according to old Georgian recipes, unfiltered amphora wines for
                which Georgia is so famous.
                <br />
                <br />
                <a
                  href={"/Weinkarte.pdf"}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Wine list
                  </Button>
                </a>
                <br />
                <br />
                Deliveries & pick-ups:
                <br />
                Mon-Sun from 12.00 to 18.00 and by appointment.
                <br />
                You will find us at Lieferando (delivery service).
                <br />
                <br />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.lieferando.de/suliko"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(133,26,29) ",
                      color: "rgba(249, 234, 207)",
                    }}
                  >
                    Order now
                  </Button>
                </Link>
                <br />
                <br />
                We look forward to you!
                <br />
                <br />
                Your Suliko restaurant
              </Typography>
              {/* <p onClick={showTex2LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
    </>
  )
}
