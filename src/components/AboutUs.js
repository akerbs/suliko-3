import React, { useContext, useState } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { LanguageContext } from "../components/layout"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

const window = require("global/window")

const useStyles = makeStyles(theme => ({
  slogan: {
    fontFamily: "Pacifico",
    lineHeight: 1.2,
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
          {window.innerWidth <= 599 && (
            <Typography
              id="slogan"
              variant="h5"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Вкусная еда, соответствующая Вашему образу жизни
            </Typography>
          )}
          {window.innerWidth >= 600 && (
            <Typography
              id="slogan"
              variant="h4"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Вкусная еда, соответствующая Вашему образу жизни
            </Typography>
          )}

          <br />

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Добро пожаловать в наш ресторан Сулико. У нас Вы сможете
                побаловать себя вкусной едой, приятной атмосферой и грузинским
                гостеприимством. Взгляните на наше меню и мы с радостью ответим
                на Ваши вопросы. У нас Вы найдёте широкий выбор разнообразных
                блюд, хорошее вино и свежий грузинский хлеб. Мы с радостью
                поможем Вам устроить праздник, вечер встречи с друзьями,
                семейный или романтический вечер для двоих. Мы подготовим для
                Вас индивидуальное предложение, подходящее Вашему стилю жизни...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...читать дальше
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Добро пожаловать в наш ресторан Сулико. У нас Вы сможете
                побаловать себя вкусной едой, приятной атмосферой и грузинским
                гостеприимством. Взгляните на наше меню и мы с радостью ответим
                на Ваши вопросы. У нас Вы найдёте широкий выбор разнообразных
                блюд, хорошее вино и свежий грузинский хлеб. Мы с радостью
                поможем Вам устроить праздник, вечер встречи с друзьями,
                семейный или романтический вечер для двоих. Мы подготовим для
                Вас индивидуальное предложение, подходящее Вашему стилю жизни.
                <br />
                <br />
                <Link to="/rus#menu" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Меню
                  </Button>
                </Link>
                <br />
                <br /> Грузинская кухня - одна из старейших и в мире. Грузинское
                застолье с широким разнообразием блюд и напитков под
                предводительством "Тамады"(выбранный ведущий стола) - это
                настоящий праздник в кругу друзей. С открытием нашего ресторана
                в самом центре Гамбурга, мы хотим передать вам чувство
                гостеприимства и праздника. <br />
                Почувствуйте себя с нами как дома и наслаждайтесь обширным меню
                блюд и напитков. Вот небольшая презентация грузинских блюд:
                <br />
                <br /> Холодные закуски: <br />
                Типичные закуски - тонкие ломтики баклажана с начинкой из
                грецких орехов Бадриджани и различные Пхали - шпинат, свекла или
                лук-порей, протертые с лесными орехами, специями и кориандром.
                <br />
                <br />
                Основные блюда:
                <br />
                Хинкали — грузинские пельмени, одно из самых известных блюд
                грузинской кухни, в которое просто невозможно не влюбиться!
                Хачапури - еще одно фирменное блюдо грузинской кухни. Это
                вкусная лепёшка с сыром, которую в Грузии чаще всего используют
                в качестве перекуса между приемами пищи. Лобио - традиционное
                фасолевое блюдо грузинской кухни, чаще используемое в качестве
                гарнира или закуски. Кукурузная лепёшка Мчади, употребляемая в
                Западной Грузии в качестве хлеба, с сыром Сулгуни (сыр из
                региона Мингрелия) и другими сортами сыра, такими как Имерули
                (сыр из Имеретинского региона) и Гуда (горный сыр). Сыр часто
                подают к основному блюду.
                <br />
                <br /> Десерты:
                <br /> В качестве десерта подаются несколько десертов, в том
                числе популярная грузинская сладость под названием Чурчхела,
                приготовленная из нанизанных на нитку очищенных грецких орехов и
                фундука в загущённом кукурузной и пшеничной мукой виноградном
                соке.
                <br />
                <br />
                Вина: <br />
                Грузия имеет традиции виноделия, которым более 8000 лет, и
                поэтому считается страной происхождения вина. Уникальные
                климатические и геологические условия позволяют производить
                прекрасные красные вина, такие как «Саперави», «Хванчкара», а
                также белые вина «Ркацители», «Мцване» и многие другие.
              </Typography>
              {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
      {actLanguage === "DEU" && (
        <div>
          {window.innerWidth <= 599 && (
            <Typography
              id="slogan"
              variant="h5"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Leckeres Essen, das zu Ihrem Lebensstiel passt
            </Typography>
          )}
          {window.innerWidth >= 600 && (
            <Typography
              id="slogan"
              variant="h4"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Leckeres Essen, das zu Ihrem Lebensstiel passt
            </Typography>
          )}

          <br />

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Herzlich willkommen in unserem Restaurant Suliko. Bei uns werden
                Sie im richtigen Sinne des Wortes mit leckerem Essen, angenehmen
                Ambiente und georgischer Gastfreundlichkeit verwöhnt. Lassen Sie
                einen Blick auf unser Menü werfen und sprechen Sie uns an. Bei
                uns können Sie zwischen abwechslungsreichen Gerichten, gutem
                Wein und gebackenen georgischen Brot wählen. Wir würden Ihnen
                dabei für alle festlichen Anlässe oder / und einfachen Abend mit
                Freunden und Familie oder einem romantischen Abend zur Zweit zur
                Seite stehen und machen für Sie ein individuelles Angebot, das
                zu Ihrem Lebensstil passt...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...lesen weiter
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Herzlich willkommen in unserem Restaurant Suliko. Bei uns werden
                Sie im richtigen Sinne des Wortes mit leckerem Essen, angenehmen
                Ambiente und georgischer Gastfreundlichkeit verwöhnt. Lassen Sie
                einen Blick auf unser Menü werfen und sprechen Sie uns an. Bei
                uns können Sie zwischen abwechslungsreichen Gerichten, gutem
                Wein und gebackenen georgischen Brot wählen. Wir würden Ihnen
                dabei für alle festlichen Anlässe oder / und einfachen Abend mit
                Freunden und Familie oder einem romantischen Abend zur Zweit zur
                Seite stehen und machen für Sie ein individuelles Angebot, das
                zu Ihrem Lebensstil passt
                <br />
                <br />
                <Link to="/deu#menu" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    MenüKarte
                  </Button>
                </Link>
                <br />
                <br /> Die georgische Küche ist eine der ältesten und
                abwechslungsreichsten Küchen der Welt. Die georgische Festtafel
                ist somit mit sehr schmackhaften und abwechslungsreichen
                Gerichten und Trinksprüchen unter der Tischführung von “Tamada“
                (ausgewählter Tischführer) ein wahres Fest unter der Freunden.
                Mit der Eröffnung unseres Restaurants im Herzen von Hamburg
                wollen wir Ihnen ein Gefühl der Gastfreundlichkeit und
                Festlichkeit vermitteln. <br />
                Fühlen Sie sich bei uns wie zuhause und genießen Sie die
                umfangreiche Speise- und Getränkekarte. Hier unsere kleine
                Vorstellung der georgischen Speisen:
                <br /> Vorspeisen: <br />
                Typische Vorspeisen sind gefüllte Auberginen mit Walnusspastete
                Badridschani und verschiedene Pchali – Spinat, Rote Bete oder
                Porree püriert mit Waldnüsse, Gewürzen, Koriander
                <br />
                <br />
                Hauptspeisen:
                <br /> Sehr verbreitet sind Teigtaschen mit Hackfleischfüllung
                Chinkali, Chatschapuri ist eine weitere Spezialität der
                georgischen Küche. Es handelt sich um ein überbackenes Käsebrot,
                das in Georgien meist als Zwischenmahlzeit für den kleinen
                Hunger gegessen wird. Lobio ist ein traditionelles Bohnengericht
                der georgischen Küche, das als Beilage oder allein als Vorspeise
                serviert wird. Des Weiteren wird das für Westgeorgien typische
                Maisbrot Mschadi, das mit Sulguni (einer Käsesorte aus der
                Region Mingrelien) zubereitet wird, sowie andere Brotsorten
                gegessen. Weitere Käsesorten sind der Imeruli (Käse aus der
                Region Imereti) und der Guda (Käse aus den Bergen); oft wird
                Käse aber auch zur Hauptspeise gereicht.
                <br />
                <br /> Desserts:
                <br /> Als Nachtisch werden einige Desserts gereicht, darunter
                eine beliebte georgische Süßigkeit namens Tschurtschchela, bei
                der man Haselnuss- oder Walnusskerne auf taucht, welche mit
                Mais- und Weizenmehl angedickt ist, bis sich eine dünne Schicht
                über die Nüsse gelegt hat eine Leine bindet und diese so lange
                in Traubensaft <br />
                <br />
                Weine: <br />
                Georgien hat eine über 8000 Jahre alte Weinbrautradition und
                gilt damit als Ursprungsland des Weines. Einzigartige
                klimatische und geologische Gegebenheiten bringen ausgezeichnete
                Rotweine wie „Saperavi“, „Chvanchkara“, aber auch Weißweine
                „Rkatziteli“, „Mtsvane“ und viele andere hervor.
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
          {window.innerWidth <= 599 && (
            <Typography
              id="slogan"
              variant="h5"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              <b>გემრიელი საკვები, რომელიც შეესაბამება თქვენს ცხოვრების წესს</b>
            </Typography>
          )}
          {window.innerWidth >= 600 && (
            <Typography
              id="slogan"
              variant="h4"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              <b>გემრიელი საკვები, რომელიც შეესაბამება თქვენს ცხოვრების წესს</b>
            </Typography>
          )}

          <br />

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                მოგესალმებით ჩვენს რესტორანში Suliko. აქ შეგიძლიათ განაწყოთ
                უგემრიელესი საკვები, სასიამოვნო ატმოსფერო და ქართული
                სტუმართმოყვარეობა. გადახედეთ ჩვენს მენიუს და მოხარული ვიქნებით
                ვუპასუხოთ თქვენს კითხვებს. აქ ნახავთ მრავალფეროვანი კერძების,
                კარგ ღვინისა და სუფთა ქართული პურის ფართო არჩევანს. მოხარული
                ვიქნებით, რომ დაგეხმაროთ შვებულების მოწყობაში, საღამოს
                შეხვედრასთან მეგობრებთან, ოჯახთან ერთად, ორივესთვის რომანტიკულ
                საღამოს. ჩვენ მოვამზადებთ ინდივიდუალურ შეთავაზებას, რომელიც
                ჯდება თქვენი ცხოვრების წესის მიხედვით ...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...წაიკითხე მეტი
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                მოგესალმებით ჩვენს რესტორანში Suliko. აქ შეგიძლიათ განაწყოთ
                უგემრიელესი საკვები, სასიამოვნო ატმოსფერო და ქართული
                სტუმართმოყვარეობა. გადახედეთ ჩვენს მენიუს და მოხარული ვიქნებით
                ვუპასუხოთ თქვენს კითხვებს. აქ ნახავთ მრავალფეროვანი კერძების,
                კარგ ღვინისა და სუფთა ქართული პურის ფართო არჩევანს. მოხარული
                ვიქნებით, რომ დაგეხმაროთ შვებულების მოწყობაში, საღამოს
                შეხვედრასთან მეგობრებთან, ოჯახთან ერთად, ორივესთვის რომანტიკულ
                საღამოს. ჩვენ მოვამზადებთ ინდივიდუალურ შეთავაზებას, რომელიც
                ჯდება თქვენი ცხოვრების წესის მიხედვით.
                <br />
                <br />
                <Link to="/geo#menu" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    მენიუ
                  </Button>
                </Link>
                <br />
                <br />
                ქართული სამზარეულო მსოფლიოში ერთ – ერთი უძველესია.
                მრავალფეროვანი კერძებისა და სასმელების მრავალფეროვანი ქართული
                სუფრა "თამადას" (სუფრის არჩეული მასპინძელი) ხელმძღვანელობით
                ნამდვილი ზეიმია მეგობრებთან ერთად. ჰამბურგის გულში ჩვენი
                რესტორნის გახსნით, გვსურს გითხრათ სტუმართმოყვარეობისა და
                დღესასწაულის გრძნობა. <br />
                იგრძნობთ თავს ჩვენს სახლში და ისიამოვნეთ ჩვენი ფართო კვების და
                სასმელის მენიუში. აქ მოცემულია ქართული კერძების მცირე
                პრეზენტაცია:
                <br />
                <br /> ცივი მადისმიერი: <br />
                ტიპიური საჭმელები არის ბადრიჯანის ნიგოზებით სავსე ბადრიჯნის
                თხელი ნაჭრები და სხვადასხვა ფალი - ისპანახი, ჭარხალი ან ლეკი,
                დაფქული თხილით, სანელებლებით და ქინძით.
                <br />
                <br />
                Მთავარი კერძები:
                <br />
                ხინკალი - ქართული დუმალი, ქართული სამზარეულოს ერთ-ერთი ყველაზე
                ცნობილი კერძია, რაც უბრალოდ შეუძლებელია არ შეგიყვარდეს! ხაჭაპური
                ქართული სამზარეულოს კიდევ ერთი სპეციალობაა. ეს უგემრიელესი
                ყველით სავსე ბრტყელი ბრტყელია, რომელსაც ყველაზე ხშირად
                საქართველოში იყენებენ, როგორც საჭმელს შორის. ლობიო ტრადიციული
                ქართული ლობიო კერძია, რომელსაც ხშირად იყენებენ როგორც გვერდით
                კერძს ან როგორც საჭმელს. მჭადის სიმინდის tortilla, რომელიც
                დასავლეთ საქართველოში გამოიყენება როგორც პური, სულგუნის ყველით
                (მენგრელიას რაიონიდან ყველი) და სხვა სახის ყველი, მაგალითად,
                იმერული (ყველი იმერეთის რეგიონიდან) და გუდა (მთის ყველი). ყველი
                ხშირად ემსახურება ძირითადი კურსით.
                <br />
                დესერტები:
                <br /> რამდენიმე დესერტს ემსახურება დესერტი, მათ შორის
                პოპულარული ქართული ტკბილი, სახელწოდებით ჩურჩხელა, დამზადებულია
                კანიანი კაკლისა და თხილისგან, რომელიც სიმინდისა და ხორბლის
                ფქვილით არის გაბერილი სიმინდის ყუთზე.
                <br />
                <br />
                ღვინოები: <br />
                საქართველოს აქვს მეღვინეობის ტრადიცია, რომელიც 8000 წელზე მეტი
                ხნისაა და შესაბამისად ითვლება ღვინის წარმოშობის ქვეყნად.
                უნიკალური კლიმატური და გეოლოგიური პირობების საშუალებით
                შესაძლებელია შესანიშნავი წითელი ღვინოების წარმოება, როგორიცაა
                საფერავი, ხვანჭკარა, ისევე როგორც თეთრი ღვინოები რქაწითელი,
                მწვანეს და მრავალი სხვა.
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
          {window.innerWidth <= 599 && (
            <Typography
              id="slogan"
              variant="h5"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Delicious Food to fit your lifestyle
            </Typography>
          )}
          {window.innerWidth >= 600 && (
            <Typography
              id="slogan"
              variant="h4"
              align="center"
              color="primary"
              className={classes.slogan}
            >
              Delicious Food to fit your lifestyle
            </Typography>
          )}

          <br />

          {!readMoreText1 && (
            <div>
              <Typography id="text1Litle" variant="body1">
                Welcome to our restaurant Suliko. Here you can pamper yourself
                with delicious food, pleasant atmosphere and Georgian
                hospitality. Take a look at our menu and we will be happy to
                answer your questions. Here you will find a wide selection of
                varied dishes, good wine and fresh Georgian bread. We will be
                happy to help you arrange a holiday, an evening meeting with
                friends, a family or romantic evening for two. We will prepare
                for you an individual offer that suits your lifestyle ...
              </Typography>
              <p onClick={showTex1MoreHandler} style={{ cursor: "pointer" }}>
                ...read more
              </p>
            </div>
          )}
          {readMoreText1 && (
            <div>
              <Typography id="text1Big" variant="body1">
                Welcome to our restaurant Suliko. Here you can pamper yourself
                with delicious food, pleasant atmosphere and Georgian
                hospitality. Take a look at our menu and we will be happy to
                answer your questions. Here you will find a wide selection of
                varied dishes, good wine and fresh Georgian bread. We will be
                happy to help you arrange a holiday, an evening meeting with
                friends, a family or romantic evening for two. We will prepare
                for you an individual offer that suits your lifestyle.
                <br />
                <br />
                <Link to="/eng#menu" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "rgba(249, 234, 207)",
                      color: "rgba(133,26,29)",
                    }}
                  >
                    Menu card
                  </Button>
                </Link>
                <br />
                <br /> Georgian cuisine is one of the oldest in the world. A
                Georgian feast with a wide variety of dishes and drinks under
                the leadership of "Tamada" (the chosen host of the table) is a
                real celebration with friends. With the opening of our
                restaurant in the heart of Hamburg, we want to convey to you a
                sense of hospitality and celebration. <br />
                Feel at home with us and enjoy our extensive food and beverage
                menu. Here is a small presentation of Georgian dishes:
                <br />
                <br /> Cold appetizers: <br />
                Typical snacks are thin slices of eggplant stuffed with
                Badrijani walnuts and various Phali - spinach, beetroot or leek,
                mashed with hazelnuts, spices and coriander.
                <br />
                <br />
                Main dishes:
                <br />
                Khinkali - Georgian dumplings, one of the most famous dishes of
                Georgian cuisine, which is simply impossible not to fall in love
                with! Khachapuri is another specialty of Georgian cuisine. This
                is a delicious cheese-filled flatbread that is most often used
                in Georgia as a snack between meals. Lobio is a traditional
                Georgian bean dish, often used as a side dish or as a snack.
                Mchadi corn tortilla, used in Western Georgia as bread, with
                Sulguni cheese (cheese from the Mingrelia region) and other
                types of cheese such as Imeruli (cheese from the Imereti region)
                and Guda (mountain cheese). Cheese is often served with a main
                course.
                <br />
                <br /> Desserts:
                <br /> Several desserts are served as a dessert, including a
                popular Georgian sweet called Churchkhela, made from peeled
                walnuts and hazelnuts strung on a string in grape juice
                thickened with corn and wheat flour.
                <br />
                <br />
                Wines: <br />
                Georgia has a winemaking tradition that is over 8000 years old
                and therefore is considered the country of origin of wine. The
                unique climatic and geological conditions make it possible to
                produce excellent red wines such as Saperavi, Khvanchkara, as
                well as white wines Rkatsiteli, Mtsvane and many others.
              </Typography>
              {/* <p onClick={showTex1LessHandler} style={{ cursor: "pointer" }}>
                  ...lesen weniger
                </p> */}
            </div>
          )}
        </div>
      )}
    </>
  )
}
