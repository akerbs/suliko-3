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
  // window.innerWidth <= 320
  //   ? "3%"
  //   :
  window.innerWidth <= 400
    ? "5%"
    : window.innerWidth <= 500
    ? "10%"
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
    : "18%"

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
    // padding: 10,
    padding: "50px 10px",
    fontSize: 10,
  },

  logo2: {
    width: "4rem",
    marginBottom: 20,
  },
  nowrap: {
    whiteSpace: "nowrap",
  },
}))

export function SpeisekarteDeu(props) {
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
            <img
              src={sulikoIcon}
              alt="logo"
              className={classes.logo2}
              onClick={props.onClose}
            />
          </Grid>
          <Grid item xs={7} sm={8}>
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
          <Grid item xs={2} sm={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
                // marginRight: "8%",
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
          <b> 1. </b>Hartcho - pikante Kalbfleischsuppe mit Reis, Tomaten,
          Gewürzen <br />
          Суп Харчо -грузинский суп из телятины с рисом помидорами и зеленью{" "}
          <b className={classes.nowrap}>6,90 €</b>
          <br />
          <br />
          <b> 2. </b>Tschichirtma - Hühnerfleisch, Eier und frische Kräuter{" "}
          <br />
          Чихиртма - грузинский густой куриный суп{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup>{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b> 3.</b> Soljanka - kräftiger würziger Eintopf mit viel Fleisch
          <br />
          Солянка-густой мясной суп <b className={classes.nowrap}>6,90 €</b>
          <br />
          <br />
          <b> 4. </b>Matsoni-Suppe - Joghurtsuppe mit Kräutern <br /> Суп
          'Mацони' из йогурта с зеленью{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F, I</sup>{" "}
          <b className={classes.nowrap}>5,60 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>Salate/Салаты</b>
          </Typography>
          <br />
          <br />
          <b> 5. </b>Gemischter Salat - frische Tomaten, Gurken, Zwiebeln,
          Kräuter mit Feta (veg.) <br />
          Салат из свежих овощей с брынзой (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup>{" "}
          <b className={classes.nowrap}>6,40 €</b>
          <br />
          <br />
          <b>6. </b>Gemischter Salat nach „georgischer Art“ - Frische Tomaten,
          Gurken, Walnüsse, Essig (veg.) <br />
          Грузинский салат - cалат из свежих овощей по-грузински с грецкими
          орехами (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b> 7. </b>Hähnchensalat - pikanter Hähnchenfleischsalat mit
          Mayonnaise, Erbsen und Gewürzen <br />
          Куриный салат по-грузински с майонезом и приправами
          <sup style={{ color: "rgba(133, 26, 29)" }}>I, K, F</sup>{" "}
          <b className={classes.nowrap}>9,20 €</b>
          <br />
          <br />
          <b> 8. </b>Schafskäse mit Olivenöl, Sumak und Petersillie (veg.)
          <br />
          Брынза - белый сыр с зеленью <b className={classes.nowrap}>7,20 €</b>
          <br />
          <br />
          <b>9. </b>Zungensalat - Kalbszungensalat mit Brat-Champignons,
          frischem Gemüse und Mayonnaise <br />
          Cалат из говяжьего языка с жаренными шампиньонами, овощами и майонезом
          <b className={classes.nowrap}> 9,20 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Kalte Vorspeisen / Холодные закуски</b>
          </Typography>
          <br />
          <br />
          <b>10.</b> Spinat-Pchali - Blattspinatbällchen mit Walnusspaste,
          Koriander und Gewürzen (veg.) <br />
          Шпинат-Пхали - шпинат с грецкими орехами и специями (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>
          <b className={classes.nowrap}> 8,60 €</b>
          <br />
          <br />
          <b>11. </b>Rote-Bete-Pchali - Bällchen aus Rote-Bete-Püree mit
          Walnusspaste und Koriander (veg) <br />
          Пхали из свёклы по-грузински c грецкими орехами и специями (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>12.</b> Karotten-Pchali - Karotten-Bällchen mit Walnusspaste,
          Koriander, Gewürzen (veg.) <br />
          Пхали из моркови по-грузински c грецкими орехами и специями (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>13.</b> Pchali-Mix – Spinat-, Rote Bete und Karotten-Pchali (veg.){" "}
          <br />
          Пхали-Ассорти - три вида пхали (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>13,60 €</b>
          <br />
          <br />
          <b>14. </b>Badridschani – gebratene Aubergine gefüllt mit Walnusspaste
          und Gewürzen (veg.) <br />
          Баклажаны с орехами - баклажаны, фаршированные грецкими орехами со
          специями
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>9,90 €</b>
          <br />
          <br />
          <b>15. </b>Mjawe Mix – eingelegtes Gemüse nach georgischer Art (veg.){" "}
          <br />
          Мжаве ассорти - aссорти из грузинскиx солений (вег)
          <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>16. </b>Gebjalia - hauchdünne Käserollen gefüllt mit hausgemachtem
          Kräuterpesto mit Joghurt-Minze Dip <br /> Гебжалия - сырный рулет из
          молодого сыра с мятой и грузинскими приправами
          <b className={classes.nowrap}> 9,90 €</b>
          <br />
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
          <b>17. </b>Grillgemüse - saftig gegrilltes Gemüse <br />
          Овощи-гриль - овощи, приготовленные на гриле
          <b className={classes.nowrap}> 9,90 €</b>
          <br /> <br />
          <b>18.</b> Lobio – Bohneneintopf mit georgischen Gewürzen <br />
          Лобио – тушёная красная фасоль со специями
          <b className={classes.nowrap}> 8,90 €</b>
          <br /> <br />
          <b>19. </b>Dolma - Weintraubenblätter gefüllt mit Hackfleisch,
          Zwiebeln und Kräutern <br />
          Долма по-кавказски с фаршем, в виноградных листьях
          <b className={classes.nowrap}> 8,50 €</b>
          <br /> <br />
          <b>20. </b>"Soko kezse" - Champignons aus dem Ofen mit Käse gefüllt
          und überbacken <br />
          Грибы на кеци - Шампиньоны с зеленью, запечёные с сыром{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>F, I</sup>
          <b className={classes.nowrap}> 7,60 €</b>
          <br /> <br />
          <b> 21. </b>Chvischtari - Maismehl-Käse-Puffer <br />
          Чвиштари - кукурузная лепёшка с сыром сулугуни
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F</sup>{" "}
          <b className={classes.nowrap}>4,90 €</b>
          <br /> <br />
          <b>22. </b>Adschapsandali - Geschmorte Auberginen, Tomaten, Paprika,
          Zwiebeln, Kräuter, Gewürze <br />
          Аджапсандали - баклажаны тушёные с помидорами, паприкой, луком и
          зеленью (вег)<b className={classes.nowrap}> 9,90 €</b>
          <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Teiggerichte / Блюда из теста</b>
          </Typography>
          <br />
          <br />
          <b>23.</b> Chatschapuri „Imeruli“ - Teigfladen gefüllt mit Käse (veg.){" "}
          <br />
          Хачапури „имерули“ - лепешка с сыром по-имеретински
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>10,90 €</b>
          <br /> <br />
          <b>24. </b>Chatschapuri „Megruli“ - Teigfladen gefüllt und überbacken
          mit Käse aus dem Ofen (veg.) <br />
          Хачапури "мегрули" - лепешка с сыром по-мегрельски
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>12,90 €</b>
          <br /> <br />
          <b>25. </b>Chatschapuri "Atscharuli" - Bootförmige Teigtasche mit Käse
          und Ei aus dem Ofen (veg.) <br />
          Хачапури "аджарули" - лепёшка в форме лодки с сыром и яйцом
          по-аджарски
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F,I</sup>{" "}
          <b className={classes.nowrap}>14,90 €</b>
          <br /> <br />
          <b>26.</b> Lobiani - Teigfladen mit Bohnen gefüllt <br />
          Лобиани - лепёшка начинённая фасолью
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>12,90 €</b>
          <br />
          <br />
          <b> 27. </b>Chinkali - Teigtaschen mit Hackfleisch gefüllt, gewürzt
          nach georgischer Art (ab 4 Stk.) <br />
          Хинкали с мясом - варёные, из теста, начиненные сочным фаршем (от 4
          шт.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>2,20 €/Stück</b>
          <br /> <br />
          <b> 28. </b>Chinkali - Teigtaschen mit Rinderhackfleisch gefüllt,
          gewürzt nach georgischer Art (ab 4 Stk.) <br />
          Хинкали с говяжьим мясом - варёные, из теста, начиненные сочным фаршем
          (от 4 шт.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>2,50 €/Stück</b>
          <br /> <br />
          <b>29. </b>Chinkali mit Käse - Teigtaschen mit Käse gefüllt nach
          georgischer Art (ab 4 Stk.) veg. <br />
          Хинкали с сыром - варёные, из теста, начиненные сыром (вег) (от 4 шт.)
          <b className={classes.nowrap}> 2,20 €/Stück</b>
          <br /> <br />
          Zu allen Vorspeisen wird hausgemachtes Brot gereicht <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Fleischgerichte / Мясные блюда</b>
          </Typography>
          <br />
          <br />
          <b>30. </b>Schweineschaschlik - Schweinefleisch auf Spieß gegrillt mit
          Zwiebeln, Kräutern und Satsebela <br />
          Шашлык из свинины приготовленный на шампуре
          <b className={classes.nowrap}> 16,90 €</b>
          <br />
          <br />
          <b>31.</b> Hähnchenschaschlik – mariniertes Hähnchenfleisch auf Spieß
          gegrillt mit Satsebela <br />
          Шашлык из курицы приготовленный на шампуре
          <b className={classes.nowrap}> 16,90 €</b>
          <br />
          <br />
          <b>32. </b>Lammschaschlik - Lammfleisch auf Spieß gegrillt mit
          Zwiebeln, Kräutern und Satsebela
          <br />
          Шашлык из баранины приготовленный на шампуре{" "}
          <b className={classes.nowrap}>18,90 €</b>
          <br />
          <br />
          <b> 33.</b> Zarte Lammkrone. Edle Lammkrone mit Zwiebeln, Kräuter und
          Satsebela
          <br /> Каре ягнёнка <b className={classes.nowrap}>28,90 €</b>
          <br />
          <br />
          <b>34. </b>Chkmeruli - Hähnchen in Knoblauch-Creme-Fraiche-Soße aus
          dem Ofen (mit Knochen)
          <br />
          Чкмерули - курица, запеченная в молочно-чесночном соусе соусе(с
          косточками) <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup>
          <b className={classes.nowrap}>17,90 €</b>
          <br />
          <br />
          <b>35. </b>Chanachi im Tontopf - Rindfleischeintopf mit Kartoffeln,
          Gemüse und Gewürzen <br />
          Чанахи - говядина, запеченная с овощами в горшочке
          <b className={classes.nowrap}> 18,40 €</b>
          <br />
          <br />
          <b> 36. </b>Sazivi - Putenfleisch in Walnusssauce <br /> Сациви –
          индейка в соусе из грецких орехов H{" "}
          <b className={classes.nowrap}> 18,90 €</b>
          <br />
          <br />
          <b>37. </b>Chakapuli - Kalbfleisch in Tontopf mit Estragon und
          Weisswein geschmort
          <br />
          Чакапули - телятина, тушеная с эстрагоном и белым вином в горшочке
          <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup>{" "}
          <b className={classes.nowrap}>18,90 €</b>
          <br />
          <br />
          <b>38. </b>Lammkeule aus dem Ofen mariniert in Adjika, Gewürzen und
          Knoblauch (Nur auf Vorbestellung. Reicht für ca. 6 Personen) <br />
          Запечённая баранья ножка в маринаде из аджики, приправ и чеснока
          (Только по предварительному заказу, количество: на 6 человек)
          <b className={classes.nowrap}> 140,00 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Fischspezialitäten / Блюда из рыбы</b>
          </Typography>
          <br />
          <br />
          <b>39. </b>Lachsfilet in Knoblauch-Creme-Fraiche-Soße mit Beilage
          Ihrer Wahl <br />
          Лосось с молочно-чесночным соусом и гарниром по выбору
          <sup style={{ color: "rgba(133, 26, 29)" }}>B,F</sup>{" "}
          <b className={classes.nowrap}>18,90 €</b>
          <br />
          <br />
          <b>40. </b>Riesengarnelen mit Tandoori-Sauce in einer Pfanne serviert
          <br />
          Королевские креветки с соусом тандури
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup>{" "}
          <b className={classes.nowrap}>24,90 €</b>
          <br />
          <br />
          <b>41. </b>Königsstör ganz, überbacken mit Gemüse (Nur auf
          Vorbestellung. Reicht für ca. 6 Personen)
          <br />
          Королевский осётр, запеченный целиком (Только по предварительному
          заказу, количество: на 6 человек)
          <sup style={{ color: "rgba(133, 26, 29)" }}>B</sup>{" "}
          <b className={classes.nowrap}>140,00 €</b>
          <br />
          <br />
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
          <b>42.</b> Bratkartoffelhälften <br /> Жареная картошка по-деревенски{" "}
          <b className={classes.nowrap}>3,70 €</b>
          <br />
          <br />
          <b>43.</b> Reis <br /> Pис <b className={classes.nowrap}> 3,90 €</b>
          <br />
          <br />
          <b>44.</b> Hausgemachtes Brot <br /> Cвежевыпеченный хлеб
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>1,50 €</b>
          <br />
          <br />
          <b> 45. </b>Satsebela -traditionelle georgische Tomatensoße
          <br />
          Сацебела - соус из томатов <b className={classes.nowrap}> 3,10 €</b>
          <br />
          <br />
          <b> 46. </b>Adjika – georgische scharfe Tomatensoße <br />
          Аджика - острый соус из томатов{" "}
          <b className={classes.nowrap}> 3,10 €</b>
          <br />
          <br />
          <b>47. </b>Tkemali - georgische pikante grüne oder rote Mirabellensoße
          <br />
          Ткемали - соус из алычи, перца, чеснока и специй
          <b className={classes.nowrap}> 4,20 €</b>
          <br />
          <br />
          <b>48. </b>Baje - georgische Walnusspaste <br /> Грузинский ореховый
          соус
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>4,40 €</b>
          <br />
          <br />
          <b>49. </b>Tzatziki - Joghurtdip mit Knoblauch und Dill <br />
          Цацики - соус из йогурта с чесноком и зеленью{" "}
          <b className={classes.nowrap}>3,10 €</b>
          <br />
          <br />
          <b>50. </b>Schmand <br />
          Сметана <b className={classes.nowrap}> 2,60 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Dessert / Десерт</b>
          </Typography>
          <br />
          <br />
          <b>51.</b> Hausgemachter Kuchen „Napoleon“ <br /> Tорт "Наполеон"
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>4,10 €</b>
          <br /> <br />
          <b>52.</b> "Pelamuschi" - georgisches Soufflé aus Weintraubensaft{" "}
          <br />
          Пеламуши - старинный грузинский десерт из виноградного сока и
          кукурузной муки
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,H</sup>{" "}
          <b className={classes.nowrap}>3,20 €</b>
          <br /> <br />
          <b>53.</b> Hausgemachte Dessertvariationen Stk. <br />
          Домашние пирожные
          <b className={classes.nowrap}> 4,90 €</b>
          <br /> <br />
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
          <b> 60.</b> Kaffee <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>{" "}
          <b className={classes.nowrap}> 2,70 €</b>
          <br />
          <br />
          <b> 61.</b> Latte Macchiato{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup>{" "}
          <b className={classes.nowrap}> 3,90 €</b>
          <br />
          <br />
          <b> 62.</b> Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>{" "}
          <b className={classes.nowrap}> 2,50 €</b>
          <br />
          <br />
          <b> 63.</b> Doppelter Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>{" "}
          <b className={classes.nowrap}> 3,50 €</b>
          <br />
          <br />
          <b> 64.</b> Cappuccino{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup>{" "}
          <b className={classes.nowrap}>3,10 €</b>
          <br />
          <br />
          <b>65. </b>Tee (diverse Sorten){" "}
          <b className={classes.nowrap}>2,60 €</b>
          <br />
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
          <b>70. </b>Coca- Cola, Coca-Cola light{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,2,3</sup>{" "}
          <b className={classes.nowrap}> 2,50 € 4,50 € 8,50 €</b>
          <br />
          <br />
          <b>71. </b>Fanta , Sprite{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>5,4</sup>{" "}
          <b className={classes.nowrap}> 2,50 € 4,50 € 8,50 €</b>
          <br />
          <br />
          <b>72. </b>St. Michaelis Naturell / Classic{" "}
          <b className={classes.nowrap}>2,20 € 3,90 € 6,50 €</b>
          <br />
          <br />
          <b>73. </b>Borjomi - Georgisches Heilwasser 0,5 l Fl.{" "}
          <b className={classes.nowrap}> 6,20 €</b>
          <br />
          <br />
          <b> 74.</b> Georgische Birnenlimonade{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl.{" "}
          <b className={classes.nowrap}> 6,20 €</b>
          <br />
          <br />
          <b> 75.</b> Georgische Estragonlimonade "Tarkhun"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl.{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b> 76.</b> Georgische Traubenlimonade "Saperavi"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl.{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b>77. </b>Georgische Feijoalimonade "Feijoa"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl.{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          (Feijoa - brasilianische Goave) <br />
          <br />
          <b>78. </b>Red Bull <b className={classes.nowrap}>4,60 €</b>
          <br />
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
          <b>80. </b>Orangensaft{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b>
          <br />
          <br />
          <b> 81.</b> Apfelsaft{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b>
          <br />
          <br />
          <b>82. </b>Kirschsaft{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b>
          <br />
          <br />
          <b>83. </b>Rhabarbernektar{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b>
          <br />
          <br />
          <b>84. </b>Saftschorle{" "}
          <b className={classes.nowrap}> 2,60 € 4,70 €</b> <br />
          <br />
          <b> 85.</b> KiBa <b className={classes.nowrap}>2,80 € 4,90 € </b>
          <br />
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
          <b> 90.</b> Einbecker Brauherren Pils (Fassbier){" "}
          <b className={classes.nowrap}>3,80 € 4,90 €</b> <br />
          <br />
          <b> 91.</b> Alsterwasser{" "}
          <b className={classes.nowrap}>3,60 € 4,70 €</b> <br />
          <br />
          <b> 92.</b> Herrnbräu Weizen (0,5l){" "}
          <b className={classes.nowrap}>4,90 €</b>
          <br />
          <br />
          <b> 93.</b> Herrnbräu Weizen Dunkel (0,5l){" "}
          <b className={classes.nowrap}>4,90 €</b>
          <br />
          <br />
          <b> 94.</b> Einbecker Brauherren Alkoholfrei (0,3l){" "}
          <b className={classes.nowrap}>3,80 €</b>
          <br />
          <br />
          <b>95. </b>Herrnbräu Hefe Weißbier Alkoholfrei (0,5l){" "}
          <b className={classes.nowrap}> 4,90 €</b>
          <br />
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
          <b>96. </b>Martini <b className={classes.nowrap}>6,60 € 39,00 €</b>
          <br />
          <br />
          <b> 97.</b> Bacardi <b className={classes.nowrap}>2,90 € 12,00 € </b>
          <br />
          <br />
          <b> 98.</b> Baileys <b className={classes.nowrap}>2,90 € 12,00 € </b>
          <br />
          <br />
          <br />
          <b>99. </b>Wodka "Finlandia"{" "}
          <b className={classes.nowrap}> 2,90 € 12,00 € 65,00 €</b>
          <br />
          <br />
          <b>100.</b> Wodka "Absolut"{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € 65,00 €</b>
          <br />
          <br />
          <b>101.</b> Wodka "Beluga", "Grey Goose"{" "}
          <b className={classes.nowrap}>4,90 € 19,00 € 90,00 € 120,00 €</b>
          <br />
          <br />
          <b> 102</b>. Georgische Chacha{" "}
          <b className={classes.nowrap}>2,80 € 11,00 € 52,00 €</b> <br />
          <br />
          <br />
          <b>103.</b> Georgischer Brandy{" "}
          <b className={classes.nowrap}>
            {" "}
            2,80 € 11,00 € 0,5 l Flasche 52,00 €
          </b>
          <br />
          <br />
          <b> 104</b>. Chivas Regal, Jack Daniel's, Tullamore{" "}
          <b className={classes.nowrap}>3,90 € 17,50 € 95,00 €</b>
          <br />
          <br />
          <b>105.</b> Remy Martin{" "}
          <b className={classes.nowrap}>4,90 € 21,00 € 120,00 €</b>
          <br />
          <br />
          <b>106.</b> Hennessy{" "}
          <b className={classes.nowrap}>4,90 € 21,00 € 120,00 €</b>
          <br />
          <br />
          <b>107.</b> Gin{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € 65,00 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Longdrinks / Kоктейлu</b>
          </Typography>
          <br />
          <b>108.</b> Wodka Red Bull <b className={classes.nowrap}>7,50 €</b>
          <br />
          <br />
          <b>109.</b> Whisky Cola/Wodka Cola{" "}
          <b className={classes.nowrap}>7,20 €</b>
          <br />
          <br />
          <b>110.</b> Bacardi Cola <b className={classes.nowrap}>7,20 €</b>
          <br />
          <br />
          <b>111.</b> Cuba Libre <b className={classes.nowrap}>7,50 €</b>
          <br />
          <br />
          <b>112.</b> Gin Tonic <b className={classes.nowrap}>7,90 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Sekt und Champagner / Игристое вино и шампанское</b>
          </Typography>
          <br />
          <b> 113</b>. Sekt "Freixenet" Piccolo 0,2 l Flasche{" "}
          <b className={classes.nowrap}>7,50 €</b>
          <br />
          <br />
          <b> 114</b>. Badagoni Maestro Brut 0,75 l Flasche{" "}
          <b className={classes.nowrap}>35,00 €</b>
          <br />
          <br />
          <b> 115. </b>Badagoni Maestro halbtrocken 0,75 l Flasche{" "}
          <b className={classes.nowrap}>35,00 €</b>
          <br />
          <br />
          <b> 116</b>. Champagner "Moët & Chandon", "Veuve Clicquot" 0,75 l
          Flasche <b className={classes.nowrap}> 95,00 €</b>
          <br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function WeinkarteDeu(props) {
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
            <img
              src={sulikoIcon}
              alt="logo"
              className={classes.logo2}
              onClick={props.onClose}
            />
          </Grid>
          <Grid item xs={7} sm={8}>
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
          <Grid item xs={2} sm={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
                // marginRight: "5%",
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
          <b>120. Rkatsiteli, trocken 7,90 € 24,90 €</b> <br />
          Rkatsiteli, trockener Weißwein, wird in Kakheti in Ostgeorgien
          hergestellt. Der Wein wird von der Rebsorte hergestellt. Es hat
          leichte Strohfarbe, angenehmen Fruchtgeschmack und Harmonie.
          <br />
          <br />
          <b> 121. Pirosmani, halbtrocken 8,60 € 27,90 €</b>
          <br />
          Der Wein hat ein stark entwickeltes Sortenbukett, eine starke
          Extraktionskapazität und einen harmonisch angenehmen Geschmack. Wein
          ist nach dem georgischen Maler Niko Pirosmanashvili benannt.
          <br />
          <br />
          <b>122. Rkatsiteli Mtsvane, trocken 8,70 € 28,90 €</b>
          <br />
          Ein beliebte und spannende Mischung aus den Rebsorten Rkatsiteli und
          Mtsvane. Fruchtig, mit feiner Säuerlichkeit. Der Wein entsteht nach
          kalter Gärung. <br />
          <br />
          <b>123. Tsinandali, trocken 8,70 € 28,90 €</b> <br />
          Der Wein hat eine leichte Maisgelbe Färbung und lebendigen, weichen
          harmonischen Geschmack. Tsinandali, trockener Weißwein, wird in
          Kakheti in Ostgeorgien hergestellt.
          <br />
          <br />
          <b>124. Mtsvane, trocken 8,70 € 28,90 €</b> <br />
          Mtsvane, trockener Weißwein, wird in Kakheti in Ostgeorgien von der
          Rebsorte Mtsvane hergestellt. Es hat grünlich gelben Farbton und
          lebendigen, weichen harmonischen Geschmack.
          <br />
          <br />
          <b> 125. Weinschorle 5,90 € (0.2l) </b> <br />
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
          <b>126. Mtsvane, trocken 44,90 €</b> <br />
          Trockener Weißwein wird in Qvevri(Tonkrug) aus Mtsvane Traube
          hergestellt. Diese Rebsorte wird in der Region Kakheti in Ostgeorgien
          angebaut. Der Wein hat eine dunkle Stroh-Farbe, zeichnet sich durch
          originelles sortiertes Aroma und harmonischen angenehmen Geschmack
          aus. <br />
          <br />
          <b> 127. Rkatsiteli, ungefilterter trocken 49, 90 €</b>
          <br />
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
          <b>128. Khareba Rose, trocken 8,60 € 27,90 €</b>
          <br />
          Der Wein wird aus der Rebsorte Saperavi hergestellt. Es hat eine
          brillante Rose Farbe und zeichnet sich durch vitale Aromen von
          Wassermelone und Kirschen. <br />
          <br />
          <b>129. Saperavi-Cabernet Sauvignon, trocken 8,60 € 27,90 €</b>
          <br />
          Halbtrockener Roséwein wird nach klassischer Methode aus Saperavi
          Trauben und Europäischen Cabernet-Souvignon hergestellt. Helle
          Lachsfarbe zeichnet sich durch ein starkes Beeren-Bouquet. <br />
          <br />
          <b>130. Ias Rose, halbtrocken 8,90 € 29,90 €</b> <br />
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
          <b>131. Saperavi Gvirabi, trockener Rotwein 7,90 € 24,90 € </b> <br />
          Trockener Rotwein aus Saperavi Rebsorte. <br />
          <br />
          <b>132. Mukuzani, trocken 8,50 € 26,90 €</b> <br />
          Der Wein wird aus der Rebsorte Saperavi hergestellt, die in Kakhetien
          in der Region Mukuzani angebaut wird. Mukuzani hat die Farbe des
          dunklen Rubins, mit feinem Fruchtbouquet. <br />
          <br />
          <b> 133. Pirosmani, halbtrocken 8,60 € 27,90 €</b> <br />
          Halbtrockener Rotwein benannt nach dem berühmten Maler Niko
          Pirosmanashvili. <br />
          <br />
          <b> 134. Saperavi Classic, trocken 9,20 € 29,90 €</b> <br />
          Saperavi, trockener Rotwein, wird von Saperavi Rebsorte hergestellt,
          die in Kakhetien angebaut wird. Der Wein hat einen besonderen
          Geschmack, gut entwickeltes und sortiertes Bouquet. <br />
          <br />
          <b> 135. Kindzmarauli, halbsüß 10,20 € 31,90 €</b>
          <br />
          Der halbtrockener Rotweinein wird aus der Rebsorte Saperavi aus der
          Mikroregion Kindzmarauli. <br />
          <br />
          <b>136. Khvanchkara, lieblich 15,20 € 49,90 € </b>
          <br />
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
          <b> 137. Saperavi Qvevri, ungefilterter trockener Rotwein 49,90 €</b>
          <br />
          Alkohol 13,5 %, Winzer Winery Khareba, Region Kachetien Trockener
          Rotwein aus Qvevri (Tonkrug), aus Saperavi Trauben. <br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function MittagsmenuDeu(props) {
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
            <img
              src={sulikoIcon}
              alt="logo"
              className={classes.logo2}
              onClick={props.onClose}
            />
          </Grid>
          <Grid item xs={7} sm={8}>
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
          <Grid item xs={2} sm={1}>
            <IconButton
              style={{
                margin: 0,
                padding: 0,
                zIndex: 9999,
                position: "fixed",
                // marginRight: "5%",
              }}
              // onClick={stop}
              onClick={props.onClose}
            >
              <HighlightOffIcon />
            </IconButton>
          </Grid>
        </Grid>
        <div style={{ padding: "0 8px" }}>
          <Typography variant="body1" style={{ lineHeight: 1.2 }}>
            <Typography variant="body1" align="center">
              <b> 12 bis 15 Uhr</b>
            </Typography>
            <br /> <br />
            <br />
            <b> 1001.</b>„Soljanka“ Kräftiger würziger Eintopf mit viel Fleisch{" "}
            <b className={classes.nowrap}>5,90 €</b>
            <br />
            <br />
            <b> 1002.</b> „Hartcho“Kalbfleischeintopf mit Reis, Gemüse, Gewürzen{" "}
            <b className={classes.nowrap}>5,90 €</b> <br />
            <br />
            <b> 1003. </b> „Matsoni“georgische Joghurtsuppe mit Kräutern (veg.){" "}
            <b className={classes.nowrap}>4,80 €</b> <br />
            <br />
            <b> 1004.</b> Chatschapuri „Imeruli“Pizzafladen gefüllt mit Käse
            (veg.)
            <b className={classes.nowrap}>8,50 €</b>
            <br />
            <br />
            <b> 1005. </b> Chatschapuri „Spinat“Pizzafladen mit Spinat/Käse
            (veg.) <b className={classes.nowrap}>8,90 €</b>
            <br />
            <br />
            <b> 1006. </b>Auberginen-Kartoffel-Pfanne „Adschapsandali“ (veg.){" "}
            <b className={classes.nowrap}>7,90 €</b> <br />
            <br />
            <b> 1007. </b> Pfannkuchengefüllt mit Hackfleisch{" "}
            <b className={classes.nowrap}>5,60 €</b> <br />
            <br />
            <b> 1008.</b> Kalbgeschnetzeltes „Beef Stroganoff“ mit Reis{" "}
            <b className={classes.nowrap}>9,40 €</b> <br />
            <br />
            <b> 1009. </b>Hähnchenfilet überbacken mit Käse und Tomaten mit
            Bratkartoffeln <b className={classes.nowrap}>8,90 €</b> <br />
            <br />
          </Typography>
        </div>
      </div>
    </Modal>
  )
}
