import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import sulikoIcon from "../images/suliko-icon.png"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const window = require("global/window")

const modalWindowWidth = window.innerWidth <= 599 ? "100vw" : "50vw"

const mainTitelLeftMargin =
  window.innerWidth <= 320
    ? "3%"
    : window.innerWidth <= 400
    ? "6%"
    : window.innerWidth <= 500
    ? "8%"
    : window.innerWidth <= 600
    ? "12%"
    : window.innerWidth <= 800
    ? "3%"
    : window.innerWidth <= 900
    ? "6%"
    : window.innerWidth <= 1000
    ? "10%"
    : window.innerWidth <= 1200
    ? "12%"
    : "17%"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    maxHeight: " 100vh",
    minWidth: 320,
    width: modalWindowWidth,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    outline: 1,
    padding: 10,
    // padding: "30px 10px",
    fontSize: 10,
  },

  logo2: {
    width: "4rem",
    marginBottom: 20,
  },
}))

export function Speisekarte(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <img src={sulikoIcon} alt="logo" className={classes.logo2} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{
                marginLeft: mainTitelLeftMargin,
                marginTop: "8%",
              }}
            >
              SPEISEKARTE
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ lineHeight: 1.2 }}>
          <Typography variant="h6" align="center">
            <br />
            <b> Suppen /Супы</b>
          </Typography>
          <br />
          <br />
          1. Hartcho - pikante Kalbfleischsuppe mit Reis, Tomaten, Gewürzen 6,90
          €<br />
          Суп Харчо -грузинский суп из телятины с рисом помидорами и зеленью
          <br />
          <br />
          2. Tschichirtma - Hühnerfleisch, Eier und frische Kräuter{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup> 6,20 €
          <br />
          Чихиртма - грузинский густой куриный суп <br />
          <br />
          3. Soljanka - kräftiger würziger Eintopf mit viel Fleisch /
          Солянка-густой мясной суп 6,90 €<br />
          <br />
          4. Matsoni-Suppe - Joghurtsuppe mit Kräutern / Суп 'Mацони' из йогурта
          с зеленью <sup style={{ color: "rgba(133, 26, 29)" }}>
            A, F, I
          </sup>{" "}
          5,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>Salate/Салаты</b>
          </Typography>
          <br />
          <br />
          5. Gemischter Salat - frische Tomaten, Gurken, Zwiebeln, Kräuter mit
          Feta (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> 6,40 €
          <br />
          Салат из свежих овощей с брынзой (вег) <br />
          <br />
          6. Gemischter Salat nach „georgischer Art“ - Frische Tomaten, Gurken,
          Walnüsse, Essig (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €<br />
          Грузинский салат - cалат из свежих овощей по-грузински с грецкими
          орехами (вег) <br />
          <br />
          7. Hähnchensalat - pikanter Hähnchenfleischsalat mit Mayonnaise,
          Erbsen und Gewürzen{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>I, K, F</sup> 9,20 €<br />
          Куриный салат по-грузински с майонезом и приправами <br />
          <br />
          8. Schafskäse mit Olivenöl, Sumak und Petersillie (veg.) Брынза -
          белый сыр с зеленью 7,20 €<br />
          <br />
          9.  Zungensalat - Kalbszungensalat mit Brat-Champignons, frischem
          Gemüse und Mayonnaise 9,20 €<br />
          Cалат из говяжьего языка с жаренными шампиньонами, овощами и майонезом
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Kalte Vorspeisen / Холодные закуски</b>
          </Typography>
          <br />
          <br />
          10. Spinat-Pchali - Blattspinatbällchen mit Walnusspaste, Koriander
          und Gewürzen (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €<br />
          Шпинат-Пхали - шпинат с грецкими орехами и специями (вег) <br />
          <br />
          11. Rote-Bete-Pchali - Bällchen aus Rote-Bete-Püree mit Walnusspaste
          und Koriander (veg){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €<br />
          Пхали из свёклы по-грузински c грецкими орехами и специями (вег)
          <br />
          <br />
          12. Karotten-Pchali - Karotten-Bällchen mit Walnusspaste, Koriander,
          Gewürzen (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>
            H
          </sup>{" "}
          8,60 €<br />
          Пхали из моркови по-грузински c грецкими орехами и специями (вег)
          <br />
          <br />
          13. Pchali-Mix – Spinat-, Rote Bete und Karotten-Pchali (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 13,60 €<br />
          Пхали-Ассорти - три вида пхали (вег) <br />
          <br />
          14. Badridschani – gebratene Aubergine gefüllt mit Walnusspaste und
          Gewürzen (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>
            H
          </sup>{" "}
          9,90 €<br />
          Баклажаны с орехами - баклажаны, фаршированные грецкими орехами со
          специями <br />
          <br />
          15. Mjawe Mix – eingelegtes Gemüse nach georgischer Art (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup> 8,60 €<br />
          Мжаве ассорти - aссорти из грузинскиx солений (вег) <br />
          <br />
          16. Gebjalia - hauchdünne Käserollen gefüllt mit hausgemachtem
          Kräuterpesto mit Joghurt-Minze- 9,90 €<br />
          Dip / Гебжалия - сырный рулет из молодого сыра с мятой и грузинскими
          приправами <br />
          <br />
          Zu Suppen, Salaten und Vorspeisen wird hausgemachtes Brot gereicht
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Warme Vorspeisen /Горячие закуски</b>
          </Typography>
          <br />
          <br />
          17. Grillgemüse - saftig gegrilltes Gemüse 9,90 €<br />
          Овощи-гриль - овощи, приготовленные на гриле <br /> <br />
          18. Lobio – Bohneneintopf mit georgischen Gewürzen 8,90 €<br />
          Лобио – тушёная красная фасоль со специями <br /> <br />
          19. Dolma - Weintraubenblätter gefüllt mit Hackfleisch, Zwiebeln und
          Kräutern 8,50 €<br />
          Долма по-кавказски с фаршем, в виноградных листьях <br /> <br />
          20. "Soko kezse" - Champignons aus dem Ofen mit Käse gefüllt und
          überbacken <sup style={{ color: "rgba(133, 26, 29)" }}>F, I</sup> 7,60
          €<br />
          Грибы на кеци - Шампиньоны с зеленью, запечёные с сыром <br /> <br />
          21. Chvischtari - Maismehl-Käse-Puffer{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F</sup> 4,90 €<br />
          Чвиштари - кукурузная лепёшка с сыром сулугуни <br /> <br />
          22. Adschapsandali - Geschmorte Auberginen, Tomaten, Paprika,
          Zwiebeln, Kräuter, Gewürze 9,90 €<br />
          Аджапсандали - баклажаны тушёные с помидорами, паприкой, луком и
          зеленью (вег) <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Teiggerichte / Блюда из теста</b>
          </Typography>
          <br />
          <br />
          23. Chatschapuri „Imeruli“ - Teigfladen gefüllt mit Käse (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 10,90 €<br />
          Хачапури „имерули“ - лепешка с сыром по-имеретински <br /> <br />
          24. Chatschapuri „Megruli“ - Teigfladen gefüllt und überbacken mit
          Käse aus dem Ofen (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 12,90 €<br />
          Хачапури "мегрули" - лепешка с сыром по-мегрельски <br /> <br />
          25. Chatschapuri "Atscharuli" - Bootförmige Teigtasche mit Käse und Ei
          aus dem Ofen (veg.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F,I</sup> 14,90 €<br />
          Хачапури "аджарули" - лепёшка в форме лодки с сыром и яйцом
          по-аджарски <br /> <br />
          26. Lobiani - Teigfladen mit Bohnen gefüllt / Лобиани - лепёшка
          начинённая фасолью{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 12,90 €<br />
          <br />
          27. Chinkali - Teigtaschen mit Hackfleisch gefüllt, gewürzt nach
          georgischer Art (ab 4 Stk.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 2,20 €<br />
          Хинкали с мясом - варёные, из теста, начиненные сочным фаршем (от 4
          шт.) Stück
          <br /> <br />
          28. Chinkali - Teigtaschen mit Rinderhackfleisch gefüllt, gewürzt nach
          georgischer Art (ab 4 Stk.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 2,50 €<br />
          Хинкали с говяжьим мясом - варёные, из теста, начиненные сочным фаршем
          (от 4 шт.) Stück
          <br /> <br />
          29. Chinkali mit Käse - Teigtaschen mit Käse gefüllt nach georgischer
          Art (ab 4 Stk.) veg. 2,20 €<br />
          Хинкали с сыром - варёные, из теста, начиненные сыром (вег) (от 4 шт.)
          Stück
          <br /> <br />
          Zu allen Vorspeisen wird hausgemachtes Brot gereicht <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Fleischgerichte / Мясные блюда</b>
          </Typography>
          <br />
          <br />
          30. Schweineschaschlik - Schweinefleisch auf Spieß gegrillt mit
          Zwiebeln, Kräutern und Satsebela 16,90 €<br />
          Шашлык из свинины приготовленный на шампуре <br />
          <br />
          31. Hähnchenschaschlik – mariniertes Hähnchenfleisch auf Spieß
          gegrillt mit Satsebela 16,90 €<br />
          Шашлык из курицы приготовленный на шампуре <br />
          <br />
          32. Lammschaschlik - Lammfleisch auf Spieß gegrillt mit Zwiebeln,
          Kräutern und Satsebela 18,90 €<br />
          Шашлык из баранины приготовленный на шампуре <br />
          <br />
          33. Zarte Lammkrone / Каре ягнёнка 28,90 €<br />
          Edle Lammkrone mit Zwiebeln, Kräuter und Satsebela <br />
          <br />
          34. Chkmeruli - Hähnchen in Knoblauch-Creme-Fraiche-Soße aus dem Ofen{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> (mit Knochen)
          17,90 €<br />
          Чкмерули - курица, запеченная в молочно-чесночном соусе соусе(с
          косточками) <br />
          <br />
          35. Chanachi im Tontopf - Rindfleischeintopf mit Kartoffeln, Gemüse
          und Gewürzen 18,40 €<br />
          Чанахи - говядина, запеченная с овощами в горшочке <br />
          <br />
          36. Sazivi - Putenfleisch in Walnusssauce / Сациви – индейка в соусе
          из грецких орехов H 18,90 €<br />
          <br />
          37. Chakapuli - Kalbfleisch in Tontopf mit Estragon und Weisswein
          geschmort <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup> 18,90 €
          <br />
          Чакапули - телятина, тушеная с эстрагоном и белым вином в горшочке
          <br />
          <br />
          38. Lammkeule aus dem Ofen mariniert in Adjika, Gewürzen und Knoblauch
          140,00 €<br />
          Запечённая баранья ножка в маринаде из аджики, приправ и чеснока
          <br />
          (Nur auf Vorbestellung. Reicht für ca. 6 Personen /по предварительному
          заказу, количество на 6 человек) <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Fischspezialitäten / Блюда из рыбы</b>
          </Typography>
          <br />
          <br />
          39. Lachsfilet in Knoblauch-Creme-Fraiche-Soße mit Beilage Ihrer Wahl{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>B,F</sup> 18,90 €<br />
          Лосось с молочно-чесночным соусом и гарниром по выбору <br />
          <br />
          40. Riesengarnelen mit Tandoori-Sauce in einer Pfanne serviert{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup> 24,90 €<br />
          Королевские креветки с соусом тандури <br />
          <br />
          41. Königsstör ganz, überbacken mit Gemüse / Королевский осётр
          запеченный целиком <sup style={{ color: "rgba(133, 26, 29)" }}>
            B
          </sup>{" "}
          140,00 €<br />
          (Nur auf Vorbestellung. Reicht für ca. 6 Personen /по предварительному
          заказу, количество на 6 человек) <br />
          <br />
          Zu allen Gerichten wird hausgemachtes Brot serviert <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Beilagen und Soßen / Гарниры и соусы</b>
          </Typography>
          <br />
          <br />
          42. Bratkartoffelhälften / Жареная картошка по-деревенски 3,70 €<br />
          <br />
          43. Reis / Pис 3,90 €<br />
          <br />
          44. Hausgemachtes Brot / Cвежевыпеченный хлеб{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 1,50 €<br />
          <br />
          45. Satsebela -traditionelle georgische Tomatensoße / Сацебела - соус
          из томатов 3,10 €<br />
          <br />
          46. Adjika – georgische scharfe Tomatensoße / Аджика острый соус из
          томатов 3,10 €<br />
          <br />
          47. Tkemali - georgische pikante grüne oder rote Mirabellensoße 4,20 €
          <br />
          Ткемали - соус из алычи, перца, чеснока и специй <br />
          <br />
          48. Baje - georgische Walnusspaste / Грузинский ореховый соус{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 4,40 €
          <br />
          <br />
          49. Tzatziki - Joghurtdip mit Knoblauch und Dill <br />
          Цацики - соус из йогурта с чесноком и зеленью 3,10 €<br />
          <br />
          50. Schmand / Сметана 2,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Dessert / Десерт</b>
          </Typography>
          <br />
          <br />
          51. Hausgemachter Kuchen „Napoleon“ / Tорт "Наполеон"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 4,10 €
          <br /> <br />
          52. "Pelamuschi" - georgisches Soufflé aus Weintraubensaft{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,H</sup> 3,20 €
          <br />
          Пеламуши - старинный грузинский десерт из виноградного сока и
          кукурузной муки <br /> <br />
          53. Hausgemachte Dessertvariationen Stk. 4,90 €<br />
          Домашние пирожные <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>
              In unseren Speisen und Getränken sind folgende Zusatzstoffe
              enthalten:
            </b>
          </Typography>
          <br />
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>A</sup> Getreide
          (Glutenhaltig) <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>B</sup> Fisch <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup> Krebstiere <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup> Schwefeldioxide /
          Sulfite <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup>{" "}
          Sellerie <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup>{" "}
          Milch / Laktose <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> Nüsse <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup> Eier
          <br />
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>1</sup> mit
          Farbstoffen <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>{" "}
          Koffeinhaltig
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>3</sup>{" "}
          Chitinhaltig <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>4</sup> mit
          Konservierungsstoffen
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>5</sup>{" "}
          Antioxidationsmittel
          <br />
          <br /> <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Heiße Getränke / Горячие напитки</b>
          </Typography>
          <br />
          60. Kaffee <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> 2,70 €
          <br />
          <br />
          61. Latte Macchiato{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup> 3,90 €<br />
          <br />
          62. Espresso <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> 2,50
          €<br />
          <br />
          63. Doppelter Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> 3,50 €<br />
          <br />
          64. Cappuccino <sup style={{ color: "rgba(133, 26, 29)" }}>
            2,F
          </sup>{" "}
          3,10 €<br />
          <br />
          65. Tee (diverse Sorten) 2,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Mineralwasser und Limonaden / Безалкогольные напитки</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,4 l Flasche
          </Typography>
          <br /> <br />
          70. Coca- Cola, Coca-Cola light{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,2,3</sup> 2,50 € 4,50 €
          8,50 €<br />
          <br />
          71. Fanta , Sprite{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>5,4</sup> 2,50 € 4,50 €
          8,50 €<br />
          <br />
          72. St. Michaelis Naturell / Classic 2,20 € 3,90 € 6,50 €<br />
          <br />
          73. Borjomi - Georgisches Heilwasser 0,5 l Fl. 6,20 €<br />
          <br />
          74. Georgische Birnenlimonade{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          75. Georgische Estragonlimonade "Tarkhun"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          76. Georgische Traubenlimonade "Saperavi"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          77. Georgische Feijoalimonade "Feijoa"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          (Feijoa - brasilianische Goave) <br />
          <br />
          78. Red Bull 4,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Säfte und Nektare / Соки и нектары</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,4 l Flasche
          </Typography>
          <br /> <br />
          80. Orangensaft 2,80 € 4,90 € 10,40 €<br />
          <br />
          81. Apfelsaft 2,80 € 4,90 € 10,40 €<br />
          <br />
          82. Kirschsaft 2,80 € 4,90 € 10,40 €<br />
          <br />
          83. Rhabarbernektar 2,80 € 4,90 € 10,40 €<br />
          <br />
          84. Saftschorle 2,60 € 4,70 € <br />
          <br />
          85. KiBa 2,80 € 4,90 € <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Fass- und Flaschenbier / Пиво бочковое и бутылочное</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,3 l 0,4 l Flasche
          </Typography>
          <br /> <br />
          90. Einbecker Brauherren Pils (Fassbier) 3,80 € 4,90 € <br />
          <br />
          91. Alsterwasser 3,60 € 4,70 € <br />
          <br />
          92. Herrnbräu Weizen (0,5l) 4,90 €<br />
          <br />
          93. Herrnbräu Weizen Dunkel (0,5l) 4,90 €<br />
          <br />
          94. Einbecker Brauherren Alkoholfrei (0,3l) 3,80 €<br />
          <br />
          95. Herrnbräu Hefe Weißbier Alkoholfrei (0,5l) 4,90 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Spirituosen und Liköre /Крепкие спиртные напитки и ликёры</b>
          </Typography>
          <Typography variant="body1" align="center">
            2 cl 0,1 l 0,5 l Flasche
          </Typography>
          <br /> <br />
          96. Martini 6,60 € 39,00 €<br />
          <br />
          97. Bacardi 2,90 € 12,00 € <br />
          <br />
          98. Baileys 2,90 € 12,00 € <br />
          <br />
          <br />
          99. Wodka "Finlandia" 2,90 € 12,00 € 65,00 €<br />
          <br />
          100. Wodka "Absolut" 2,90 € 12,00 € 65,00 €<br />
          <br />
          101. Wodka "Beluga", "Grey Goose" 4,90 € 19,00 € 90,00 € 120,00 €
          <br />
          <br />
          102. Georgische Chacha 2,80 € 11,00 € 52,00 € <br />
          <br />
          <br />
          103. Georgischer Brandy 2,80 € 11,00 € 0,5 l Flasche 52,00 €<br />
          <br />
          104. Chivas Regal, Jack Daniel's, Tullamore 3,90 € 17,50 € 95,00 €
          <br />
          <br />
          105. Remy Martin 4,90 € 21,00 € 120,00 €<br />
          <br />
          106. Hennessy 4,90 € 21,00 € 120,00 €<br />
          <br />
          107. Gin 2,90 € 12,00 € 65,00 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Longdrinks / Kоктейлu</b>
          </Typography>
          <br />
          108. Wodka Red Bull 7,50 €<br />
          <br />
          109. Whisky Cola/Wodka Cola 7,20 €<br />
          <br />
          110. Bacardi Cola 7,20 €<br />
          <br />
          111. Cuba Libre 7,50 €<br />
          <br />
          112. Gin Tonic 7,90 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Sekt und Champagner / Игристое вино и шампанское</b>
          </Typography>
          <br />
          113. Sekt "Freixenet" Piccolo 0,2 l Flasche 7,50 €<br />
          <br />
          114. Badagoni Maestro Brut 0,75 l Flasche 35,00 €<br />
          <br />
          115. Badagoni Maestro halbtrocken 0,75 l Flasche 35,00 €<br />
          <br />
          116. Champagner "Moët & Chandon", "Veuve Clicquot" 0,75 l Flasche
          95,00 €<br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function Weinkarte(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <img src={sulikoIcon} alt="logo" className={classes.logo2} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{
                marginLeft: mainTitelLeftMargin,
                marginTop: "8%",
              }}
            >
              WEINKARTE
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ lineHeight: 1.2 }}>
          <Typography variant="h6" align="center">
            <br /> <b> Weine, weiß / Белые вина</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l Flasche
          </Typography>
          <br />
          <br />
          <b>120. Rkatsiteli, trocken</b> 7,90 € 24,90 €<br />
          Rkatsiteli, trockener Weißwein, wird in Kakheti in Ostgeorgien
          hergestellt. Der Wein wird von der Rebsorte hergestellt. Es hat
          leichte Strohfarbe, angenehmen Fruchtgeschmack und Harmonie.
          <br />
          <br />
          <b> 121. Pirosmani, halbtrocken</b> 8,60 € 27,90 €<br />
          Der Wein hat ein stark entwickeltes Sortenbukett, eine starke
          Extraktionskapazität und einen harmonisch angenehmen Geschmack. Wein
          ist nach dem georgischen Maler Niko Pirosmanashvili benannt.
          <br />
          <br />
          <b>122. Rkatsiteli Mtsvane, trocken</b> 8,70 € 28,90 €<br />
          Ein beliebte und spannende Mischung aus den Rebsorten Rkatsiteli und
          Mtsvane. Fruchtig, mit feiner Säuerlichkeit. Der Wein entsteht nach
          kalter Gärung. <br />
          <br />
          <b>123. Tsinandali, trocken</b> 8,70 € 28,90 €<br />
          Der Wein hat eine leichte Maisgelbe Färbung und lebendigen, weichen
          harmonischen Geschmack. Tsinandali, trockener Weißwein, wird in
          Kakheti in Ostgeorgien hergestellt.
          <br />
          <br />
          <b>124. Mtsvane, trocken</b> 8,70 € 28,90 €<br />
          Mtsvane, trockener Weißwein, wird in Kakheti in Ostgeorgien von der
          Rebsorte Mtsvane hergestellt. Es hat grünlich gelben Farbton und
          lebendigen, weichen harmonischen Geschmack.
          <br />
          <br />
          <b> 125. Weinschorle</b> 5,90 € (0.2l) <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Qvevri - weiße Amphorweine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,75 l Flasche
          </Typography>
          <br />
          <br />
          <b>126. Mtsvane, trocken</b> 44,90 €<br />
          Trockener Weißwein wird in Qvevri(Tonkrug) aus Mtsvane Traube
          hergestellt. Diese Rebsorte wird in der Region Kakheti in Ostgeorgien
          angebaut. Der Wein hat eine dunkle Stroh-Farbe, zeichnet sich durch
          originelles sortiertes Aroma und harmonischen angenehmen Geschmack
          aus. <br />
          <br />
          <b> 127. Rkatsiteli, ungefilterter trocken</b> 49, 90 €<br />
          Der Wein hat eine dunkle Strohfarbe und zeichnet sich durch intensive
          Töne von Trockenfrüchten, tanninreichen Körper und einen harmonischen
          und milden Nachgeschmack. <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Weine, rosé / Розовые вина</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l Flasche
          </Typography>
          <br />
          <br />
          <b>128. Khareba Rose, trocken</b> 8,60 € 27,90 €<br />
          Der Wein wird aus der Rebsorte Saperavi hergestellt. Es hat eine
          brillante Rose Farbe und zeichnet sich durch vitale Aromen von
          Wassermelone und Kirschen. <br />
          <br />
          <b>129. Saperavi-Cabernet Sauvignon, trocken</b> 8,60 € 27,90 €<br />
          Halbtrockener Roséwein wird nach klassischer Methode aus Saperavi
          Trauben und Europäischen Cabernet-Souvignon hergestellt. Helle
          Lachsfarbe zeichnet sich durch ein starkes Beeren-Bouquet. <br />
          <br />
          <b>130. Ias Rose, halbtrocken</b> 8,90 € 29,90 €<br />
          Das neue Produkt wurde speziell für die Frauen entwickelt. Der Wein
          stellt sich als eine Mischung von Rebsorten Saperavi, Muscat und
          Mtsvane aus der Region Kakhetien. Rote Johannisbeerefarbe wurde durch
          den Einsatz spezieller Technologie erreicht. Der Wein weist fruchtigen
          Geschmack kombiniert mit Aroma von Mai-Rosen. <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Weine, rot / Красные вина</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l Flasche
          </Typography>
          <br />
          <br />
          <b>131. Saperavi Gvirabi, trockener Rotwein </b> 7,90 € 24,90 €<br />
          Trockener Rotwein aus Saperavi Rebsorte. <br />
          <br />
          <b>132. Mukuzani, trocken</b> 8,50 € 26,90 €<br />
          Der Wein wird aus der Rebsorte Saperavi hergestellt, die in Kakhetien
          in der Region Mukuzani angebaut wird. Mukuzani hat die Farbe des
          dunklen Rubins, mit feinem Fruchtbouquet. <br />
          <br />
          <b> 133. Pirosmani, halbtrocken</b> 8,60 € 27,90 €<br />
          Halbtrockener Rotwein benannt nach dem berühmten Maler Niko
          Pirosmanashvili. <br />
          <br />
          <b> 134. Saperavi Classic, trocken </b> 9,20 € 29,90 €<br />
          Saperavi, trockener Rotwein, wird von Saperavi Rebsorte hergestellt,
          die in Kakhetien angebaut wird. Der Wein hat einen besonderen
          Geschmack, gut entwickeltes und sortiertes Bouquet. <br />
          <br />
          <b> 135. Kindzmarauli, halbsüß </b> 10,20 € 31,90 €<br />
          Der halbtrockener Rotweinein wird aus der Rebsorte Saperavi aus der
          Mikroregion Kindzmarauli. <br />
          <br />
          <b>136. Khvanchkara, lieblich </b> 15,20 € 49,90 €<br />
          Halbsüßer Rotwein aus Aleksandrouli und Mujuretuli Rebsorten, aus der
          der Region Racha.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Qvevri - Rote Amphorweine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,75 l Flasche
          </Typography>
          <br />
          <br />
          <b> 137. Saperavi Qvevri, ungefilterter trockener Rotwein </b> 49,90 €
          <br />
          Alkohol 13,5 %, Winzer Winery Khareba, Region Kachetien Trockener
          Rotwein aus Qvevri (Tonkrug), aus Saperavi Trauben. <br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function Mittagsmenu(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <img src={sulikoIcon} alt="logo" className={classes.logo2} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{
                marginLeft: mainTitelLeftMargin,
                marginTop: "8%",
              }}
            >
              MITTAGSMENÜ
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <div style={{ padding: "0 10px" }}>
          <Typography variant="body1" style={{ lineHeight: 1.2 }}>
            <Typography variant="body1" align="center">
              <b> 12 bis 15 Uhr</b>
            </Typography>
            <br /> <br />
            <br />
            1001. „Soljanka“ Kräftiger würziger Eintopf mit viel Fleisch Euro
            5,90
            <br />
            <br />
            1002. „Hartcho“ Kalbfleischeintopf mit Reis, Gemüse, Gewürzen Euro
            5,90
            <br />
            <br />
            1003. „Matsoni“ georgische Joghurtsuppe mit Kräutern (veg.) Euro
            4,80
            <br />
            <br />
            1004. Chatschapuri „Imeruli“ Pizzafladen gefüllt mit Käse (veg.)
            Euro 8,50 <br />
            <br />
            1005. Chatschapuri „Spinat“ Pizzafladen mit Spinat/Käse (veg.) Euro
            8,90
            <br />
            <br />
            1006. Auberginen-Kartoffel-Pfanne „Adschapsandali“ (veg.) Euro 7,90
            <br />
            <br />
            1007. Pfannkuchen gefüllt mit Hackfleisch Euro 5,60
            <br />
            <br />
            1008. Kalbgeschnetzeltes „Beef Stroganoff“ mit Reis Euro 9,40
            <br />
            <br />
            1009. Hähnchenfilet überbacken mit Käse und Tomaten Euro 8,90 mit
            Bratkartoffeln
            <br />
            <br />
          </Typography>
        </div>
      </div>
    </Modal>
  )
}
