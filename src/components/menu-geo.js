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
              მენიუ და ბარი
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
            <b> სუპები /Soups </b>
          </Typography>
          <br />
          <br />
          1. სუპ-ხარჩო - პიკანტური ხბოს ხორცის სუპი ბრინჯით, პომიდვრითა და
          სუნელებით 6,90 €
          <br />
          Hartcho - spicy veal soup with rice, tomatoes, spices
          <br />
          <br />
          2. ჩიხირთმა - ქათმის ხორცი, კვერცხი და ცოცხალი მწვანილი{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup> 6,20 €
          <br />
          Tshikhirtma - chicken, eggs and fresh green <br />
          <br />
          3. სალიანკა - ხორცის ცხარე სუპი / Solyanka - rich spicy hotpot with a
          lot of meat 6,90 €<br />
          <br />
          4. მაწვნის სუპი - სუპი მაწვნისგან მწვანილეულობით / Matsoni - yogurt
          soap with herbs
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F, I</sup> 5,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>სალათები/Salads</b>
          </Typography>
          <br />
          <br />
          5. შერეული სალათა - ახალი პომიდოი, კიტრი, ხახვი, მწვანილი ყველით ფეტა
          (ვეგ.) <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> 6,40 €
          <br />
          Mixed salad - fresh tomatoes, cucumbers, onion, greens with Feta
          (veg.) <br />
          <br />
          6. შერეული სალათა "ქართული" - ახალი პომიდორი, კიტრი, ნიგოზი, ძმარი
          (ვეგ.) <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €
          <br />
          Mixed salad "Georgian style" - fresh tomatoes, cucumbers, walnuts,
          vinegar (veg.) <br />
          <br />
          7. ქათმის სალათა - ქათმის პიკანტური სალათა მაიონეზით, ბარდითა და
          სუნელებით <sup style={{ color: "rgba(133, 26, 29)" }}>
            I, K, F
          </sup>{" "}
          9,20 €<br />
          Chicken Salad - Spicy chicken salad with mayonnaise, peas and spices
          <br />
          <br />
          8. ცხვრის ყველი - ზეითუნის ზეთით, თუთუბოთი და ოხრახუშით (ვეგ.)7,20 €
          <br />
          Sheep cheese - with olive oil, sumac and parsley (veg.)
          <br /> <br />
          9.  ენის სალათა - ხბოს ენა შემწვარი ქამა სოკოთი კიტრით და მაიონეზით
          <br />
          Tongue salad - veal tongue, with fried mushrooms cucumber and
          mayonnaise
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცივი კერძები / Cold starters</b>
          </Typography>
          <br />
          <br />
          10. ისპანახის ფხალი - ბოსტნის ისპანახიt ნიგვზით, ქინძითა და სუნელებით
          (ვეგ.) <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €
          <br />
          Spinach-Pkhali - balls of spinach leaves with walnut paste, coriander
          and spices (veg.) <br />
          <br />
          11. ჭარხლის ფხალი - ჭარხლის ფურცლის ბურთები ნიგვზითა და ქინძით (ვეგ){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €<br />
          Beetroot Pkhali - Beetroot puree balls with walnut paste and coriander
          (veg)
          <br />
          <br />
          12. სტაფილოს ფხალი - ნიგვზით, ქინძითა და სუნელებით (ვეგ.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 8,60 €<br />
          Carrot Pkhali - Carrot balls with walnut paste, coriander, spices
          (veg.)
          <br />
          <br />
          13. ფხალის ასორტი - ისპანახის, ჭარხლისა და სტაფილოს ფხალი (ვეგ){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 13,60 €<br />
          Pkhali Mix - spinach, beetroot and carrot Pkhali (veg) <br />
          <br />
          14. ბადრიჯანი - შემწვარი ბადრიჯანი ნიგვზითა და სუნელებთ (ვეგ.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 9,90 €<br />
          Eggplants - fried eggplants filled with walnut paste and spices (veg.)
          <br />
          <br />
          15. მჟავის ასორტი - ქართული მწნილის ასორტი (ვეგ.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup> 8,60 €<br />
          Assortment of pickles - pickled vegetables in Georgian style (veg.){" "}
          <br />
          <br />
          16. გებჟალია - ვეგეტარიანული ყველის თხელი ბურთულები, მოცარელას ყველით
          და სახლში მომზადებული იოგურტისა და პიტnის სოუსით 9,90 €<br />
          Gebzhalia -vegetarian cheese rolls filled with Mozarella with homemade
          herb pesto in light yoghurt-mint-sauce <br />
          <br />
          სუპებთან,სალათებთან და ცივ კერძებთან გთავაზობთ ჩვენთან გამომცხვარ პურს{" "}
          <br />
          Homemade bread is served with soups, salads and starters
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცხელი კერძები /Warm starters</b>
          </Typography>
          <br />
          <br />
          17. შემწვარი ბოსტნეული - წვნიანი შემწვარი ბოსტნეული 9,90 €<br />
          Grilled vegetables - juicy grilled vegetables
          <br /> <br />
          18. ლობიო - მოხარშული ლობიო ქართული სუნელებით 8,90 €<br />
          Lobio - bean stew with Georgian spices <br /> <br />
          19. ტოლმა - ხორცის ფარში ვაზის ფოთოლში, ხახვითა და მწვანილებით 8,50 €
          <br />
          Dolma - grape leaves filled with minced meat, onions and herbs <br />{" "}
          <br />
          20. "სოკო კეცზე" - შამპინიონები ღუმელიდან ყველით და მობრაწული{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>F, I</sup> 7,60 €<br />
          "Soko ketsze" - Champignon from the oven filled with cheese and
          gratinated <br /> <br />
          21. ჭვიშტარი - მჭადის პურები სულუგუნის შიგთავსით{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F</sup> 4,90 €<br />
          Chvishtari - corn patty with cheese Suluguni <br /> <br />
          22. აჯაფსანდალი - მოთუშული ბადრიჯანი პომიდვრით, პაპრიკით, ხახვით და
          სუნელებით 9,90 €<br />
          Adzhapsandali - Braised eggplants, tomatoes, paprika, onions, herbs
          and spices (veg.) <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცომეული / Pastry</b>
          </Typography>
          <br />
          <br />
          23. ხაჭაპური "იმერული" - ხაჭაპური ყველით (ვეგ.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 10,90 €<br />
          Khatshapuri "Imeruli" - flatbread filled with cheese (veg.) <br />{" "}
          <br />
          24. ხაჭაპური "მეგრული" - ხაჭაპური ყველით და მობრაწული ყველით ღუმელიდან
          (ვეგ.) <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 12,90 €
          <br />
          Khatshapuri "Megruli" - flatbread filled and baked with cheese from
          the oven (veg.) <br /> <br />
          25. ხაჭაპური "აჭარული" - ნავის ფორმის ხაჭაპური ყველითა და კვერცხით
          ღუმელიდან (ვეგ.){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F,I</sup> 14,90 €<br />
          Khatshapuri "Adsharuli" - Boat-shaped dumplings with cheese and egg
          from the oven (veg.) <br /> <br />
          26. ლობიანი - ლობიოთი დატენილი ცომი{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 12,90 €<br />
          Lobiani - flatbread filled with beans
          <br />
          <br />
          27. ხინკალი - ხორცის ფარშით (ძროხის + ღორის ხორცი) 4 ცალიდან{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 2,20 €/Piece
          <br />
          Khinkali - dumplings filled with minced meat (beef + pork), seasoned
          in Georgian style (from 4 pieces)
          <br /> <br />
          28. ხინკალი - ძროხის ხორცის ფარშით, შესუნელებული ქართულად (4 ცალიდან){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 2,50 €/Piece
          <br />
          Khinkali - dumplings filled with minced beef meat, seasoned in
          Georgian style (from 4 pieces)
          <br /> <br />
          29. ხინკალი - ყველით, შესუნელებული ქართულად (4 ცალიდან) 2,20 €/Piece{" "}
          <br />
          Khinkali - dumplings filled with cheese, seasoned in Georgian style
          (from 4 pieces)
          <br /> <br />
          ცივ კერძებთან გთავაზობთ ჩვენთან გამომცხვარ პურს
          <br />
          Homemade bread is served with all starters <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ხორციანი კერძები / Meat dishes</b>
          </Typography>
          <br />
          <br />
          30. ღორის მწვადი - ღორის ხორცი შამფურზე შემწვარი ხახვით, მწვანილითა და
          საწებელით 16,90 €<br />
          Pork Shashlik - Pork grilled on skewers with onions, herbs and
          satsebela <br />
          <br />
          31. ქათმის მწვადი - დამარინებული ქათმის ხორცი შამფურზე შემწვარი
          სააწებელით 16,90 €<br />
          Chicken Shashlik - marinated chicken grilled on skewers with satsebela{" "}
          <br />
          <br />
          32. ცხვრის მწვადი - ცხვრის ხორცი შამფურზე შემწვარი ხახვით, მწანილითა
          და საწებელით 18,90 €<br />
          Lamb shashlik - lamb grilled on skewers with onions, herbs and
          satsebela <br />
          <br />
          33. ბატკნის კარე ხახვით, მწვანილებითა და საწებელით 28,90 €<br />
          Noble lamb crown with onions, herbs and satsebela <br />
          <br />
          34. შქმერული - ქათამი ნივრის, არაჟნის სოუსში ღუმელიდან (ძვლით){" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> (mit Knochen)
          17,90 €<br />
          Shkmeruli - Chicken in garlic-Cream Fraiche -sauce from the Oven (with
          a bone) <br />
          <br />
          35. ჩანახი თიხის ქვაბში - ძროხის ხორცი კარტოფილით, ბოსტნეულითა და
          სუნელებით 18,40 €<br />
          Chanakhi in a clay pot - beef stew with potatoes, vegetables and
          spices <br />
          <br />
          36. საცივი - ინდაური ნიგვზის სოუსში / Satsivi - turkey meat in walnut
          sauce 18,90 €<br />
          <br />
          37. ჩაქაფული - ხბოს ხორცი თიხის ქვაბში ტარხუნითა და მოთუშული თეთრი
          ღვინით <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup> 18,90 €
          <br />
          Chakapuli - veal stewed in a clay pot with tarragon and white wine
          <br />
          <br />
          38. ბატკნის ფეხი ღუმელიდან, დამარინებული აჯიკით, სუნელებითა და ნივრით
          140,00 €<br />
          Leg of lamb from the oven marinated in adjika, spices and garlic
          <br />
          (მხოლოდ წინასწარი შეკვეთით, დაახლოებით 6 კაცზე / Only with advance
          reservation, enough for approx. 6 people) <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> თევზის კერძები / Fish specialties</b>
          </Typography>
          <br />
          <br />
          39. ორაგულის ფილე ნივრისა და არაჟნის წვენში, თქვეთვის სასურველი
          გარნირით <sup style={{ color: "rgba(133, 26, 29)" }}>B,F</sup> 18,90 €
          <br />
          Salmon fillet in garlic-cream fraiche-sauce with side dish of your
          choice <br />
          <br />
          40. სამეფო კრევეტები ტანდურის სოუსით, ტაფაში{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup> 24,90 €<br />
          King prawns with tandoori sauce served in a pan <br />
          <br />
          41. სამეფო ზუთხი მთელი, შემწვარი ბოსტნეულით / Whole king sturgeon
          gratinated with vegetables{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>B</sup> 140,00 €<br />
          (მხოლოდ წინასწარი შეკვეთით, დაახლოებით 6 კაცზე / Only with advance
          reservation, enough for approx. 6 people) <br />
          <br />
          ყველა კერძთან გთავაზობთ ჩვენთან გამომცხვარ პურს
          <br />
          Homemade bread is served with all dishes
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> Side dishes and sauces / გარნირები და სოუსები</b>
          </Typography>
          <br />
          <br />
          42. შემწვარი კარტოფილი / Roasted potatoes 3,70 €<br />
          <br />
          43. ბრინჯი / Rice 3,90 €<br />
          <br />
          44. სახლში გამომცხვარი პური / Homemade bread{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 1,50 €<br />
          <br />
          45. საწებელა - ტრადიციული ქართული პომიდვრის სოუსი / Satsebela -
          Georgian traditional tomato sauce 3,10 €<br />
          <br />
          46. აჯიკა - ქართული ცხარე პომიდვრის სოუსი / Adjika - spicy tomato
          sauce 3,10 €<br />
          <br />
          47. ტყემალი - ქართული მწვანე ან წითელი ტყემლის ცხარე სოუსი 4,20 €
          <br />
          Tkemali - Georgian spicy green or red cherry plum <br />
          <br />
          48. ბაჟე - ტრადიციული ქართული ნიგვზის სოუსი / Bazhe - Georgian walnut
          sauce <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> 4,40 €
          <br />
          <br />
          49. ცაციკი - იოგურტის სოუსი ნივრითა და კამით <br />
          Tzatziki yogurt sauce with garlic and dill 3,10 €<br />
          <br />
          50. არაჟანი / Sour cream 2,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> დესერტი / Desserts</b>
          </Typography>
          <br />
          <br />
          51. სახლში გამომცხავარი ნამცხვარი "ნაპოლეონი" / Cake "Napoleon"
          homemade <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup> 4,10 €
          <br /> <br />
          52. "ფელამუში" - ქართული სუფლე ყურძნის წვენისა და მჭადის ფქვილისგან{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,H</sup> 3,20 €
          <br />
          "Pelamushi" - Georgian traditional dessert of grape juice and corn
          flower <br /> <br />
          53. სახლში გამომცხვარი ნამცხვრების ნაირსახეობები 4,90 €<br />
          Homemade cake variations <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>
              ჩვენი საკვები შეიცავს შემდეგ დანამატებს: / Our food and drinks
              contain the following food additives:
            </b>
          </Typography>
          <br />
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>A</sup> მარცვლეული
          (გლუტენით) / Cereals (with gluten) <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>B</sup> თვზი / Fish <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup> კიბოსნაირები /
          Crustaceans <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup>{" "}
          გოგირდის დიოქსიდები / სულფიტი / Sulphur dioxides / sulphite <br />
          <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup> ნიახური / Cellery{" "}
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> რძე /
          ლაქტოზა / Milk / Lactose <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup> თხილეული / Nuts{" "}
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup> კვერცხი /
          Eggs
          <br />
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>1</sup> ფერის
          ფრეგმენტ / with dyes <br />
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> კოფეინის შემც /
          with caffeine
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>3</sup> ჩიტინის
          შემცვ / with chitin <br />{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>4</sup> კონსერვატორებით /
          with preservatives
          <br /> <sup style={{ color: "rgba(133, 26, 29)" }}>5</sup>{" "}
          ანტიოქს.საშვალება / antioxidant
          <br />
          <br /> <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცხელი სასმელები/ Hot drinks</b>
          </Typography>
          <br />
          60. ყავა / Coffee<sup style={{ color: "rgba(133, 26, 29)" }}>
            2
          </sup>{" "}
          2,70 €
          <br />
          <br />
          61. ლატე მაკიატო / Latte Macchiato{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup> 3,90 €<br />
          <br />
          62. ესპრესსო / Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> 2,50 €<br />
          <br />
          63. ორმაგი ესპრესსო / Double Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup> 3,50 €<br />
          <br />
          64. კაპუჩინო / Cappuccino{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup> 3,10 €<br />
          <br />
          65. ჩაი (სხვადასხვა ტიპის) / Tea (various types) 2,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> მინერალური წყალი და ლიმონათი / Soft drinks</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,4 l bottle
          </Typography>
          <br /> <br />
          70. კოკა-კოლა, კოკა-კოლა ლაითი / Coca- Cola, Coca-Cola light{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,2,3</sup> 2,50 € 4,50 €
          8,50 €<br />
          <br />
          71. ფანტა, სპრაიტი / Fanta , Sprite{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>5,4</sup> 2,50 € 4,50 €
          8,50 €<br />
          <br />
          72. St. Michaelis Naturell კლასიკური / Classic 2,20 € 3,90 € 6,50 €
          <br />
          <br />
          73. ბორჯომი - ქართული სამკურნალო წყალი - Borjomi - Georgian healing
          water 0,5 l Fl. 6,20 €<br />
          <br />
          74. მსხლის ლიმონათი, ქართული / Georgian pear lemonade{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          75. ტარხუნის ქართული ლიმონათი / Georgian estragon lemonade "Tarkhuna"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          76. ყურძნის ქართული ლიმონათი / Georgian grape lemonade "Saperavi"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          77. ფეიხოას ქართული ლიმონათი / Georgian Feijoa lemonade "Feijoa"{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl. 6,20 €
          <br />
          <br />
          (ფეიხოა - ბრაზილიური გოავა - Feijoa - brasilian Goave) <br />
          <br />
          78. რედ ბული / Red Bull 4,60 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> წვენები და ნექტარები / Juices and nectars</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,4 l bottle
          </Typography>
          <br /> <br />
          80. ფორთოხლის წვენი / Orange juice 2,80 € 4,90 € 10,40 €<br />
          <br />
          81. ვაშლის წვენი / Apple juice 2,80 € 4,90 € 10,40 €<br />
          <br />
          82. ალუბლის წვენი Cherry juice 2,80 € 4,90 € 10,40 €<br />
          <br />
          83. რევანდის ნექტარი / Rhababa nectar 2,80 € 4,90 € 10,40 €<br />
          <br />
          84. გაზირებული წვენი / Juice spritzer 2,60 € 4,70 € <br />
          <br />
          85. KiBa 2,80 € 4,90 € <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> კასრისა და ჩამოსასხმელი ლუდი / Draft- and bottle beer</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,3 l 0,4 l bottle
          </Typography>
          <br /> <br />
          90. Einbecker Brauherren Pils (ჩამოსასხმელი ლუდი / Draught beer) 3,80
          € 4,90 € <br />
          <br />
          91. Alsterwasser 3,60 € 4,70 € <br />
          <br />
          92. Herrnbräu ხორბლის / wheat(0,5l) 4,90 €<br />
          <br />
          93. Herrnbräu ხორბლის შავი / wheat dark (0,5l) 4,90 €<br />
          <br />
          94. Einbecker Brauherren უალკოჰოლო / alcohol-free (0,3l)3,80 €<br />
          <br />
          95. Herrnbräu საფუვრიანი უალკოჰოლო ხორბლის ლუდი / yeast wheat beer
          alcohol-free (0,5l) 4,90 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ალკოჰოლური სასმელები და ლიქიორები /Spirits and liquers</b>
          </Typography>
          <Typography variant="body1" align="center">
            2 cl 0,1 l 0,5 l bottle
          </Typography>
          <br /> <br />
          96. მარტინი / Martini 6,60 € 39,00 €<br />
          <br />
          97. ბაკარდი / Bacardi 2,90 € 12,00 € <br />
          <br />
          98. ბეილისი / Baileys 2,90 € 12,00 € <br />
          <br />
          <br />
          99. არაყი / Vodka "Finlandia" 2,90 € 12,00 € 65,00 €<br />
          <br />
          100. არაყი / Vodka "Absolut" 2,90 € 12,00 € 65,00 €<br />
          <br />
          101. არაყი / Vodka "Beluga", "Grey Goose" 4,90 € 19,00 € 90,00 €
          120,00 €
          <br />
          <br />
          102. ქართული ჭაჭა / Georgian Chacha 2,80 € 11,00 € 52,00 € <br />
          <br />
          <br />
          103. ქართული ბრენდი / Georgian Brandy Sarajishvili David 2,80 € 11,00
          € 0,5 l bottle 52,00 €<br />
          <br />
          104. Chivas Regal, Jack Daniel's, Tullamore 3,90 € 17,50 € 95,00 €
          <br />
          <br />
          105. Remy Martin 4,90 € 21,00 € 120,00 €<br />
          <br />
          106. Hennessy 4,90 € 21,00 € 120,00 €<br />
          <br />
          107. ჯინი / Gin 2,90 € 12,00 € 65,00 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> კოქტეილები / Cocktails </b>
          </Typography>
          <br />
          108. არაყი / Vodka Red Bull 7,50 €<br />
          <br />
          109. ვისკი კოლა/ვოდკა კოლა / Whisky Cola/Wodka Cola 7,20 €<br />
          <br />
          110. ბაკარდი კოლა / Bacardi Cola 7,20 €<br />
          <br />
          111. კუბა ლიბრე / Cuba Libre 7,50 €<br />
          <br />
          112. ჯინ ტონიკი / Gin Tonic 7,90 €<br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცქრიალა ღვინო და შამპანური / Sparkling wine and Champagne</b>
          </Typography>
          <br />
          113. ცქრიალა ღვინო / Sparkling wine "Freixenet" Piccolo 0,2 l bottle
          7,50 €<br />
          <br />
          114. ბადაგონის ცქრიალა ღვინო (ნახევრად მშრალი) / Badagoni Sparkling
          wine (semi-dry) 0,75 l bottle 35,00 €<br />
          <br />
          115. ბადაგონის ცქრიალა ღვინო ბრუტი / ბადაგონი Sparkling wine Brut 0,75
          l bottle 35,00 €<br />
          <br />
          116. შამპანური / Champagne "Moët & Chandon", "Veuve Clicquot" 0,75 l
          bottle 95,00 €<br />
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
              ღვინის რუკა
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
            <br /> <b> თეთრი ღვინო / White wine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l bottle
          </Typography>
          <br />
          <br />
          <b>
            120. რქაწითელი , მშრალი თეთრი ღვინო / Rkatsiteli, dry white wine,{" "}
          </b>{" "}
          7,90 € 24,90 €<br />
          Rkatsiteli, Dry white wine, is made from grape variety Rkatsiteli. The
          wine with a light straw color, plesent fruity and harmony.
          <br />
          <br />
          <b>
            {" "}
            121. რქაწითელი მწვანე, მშრალი თეთრი ღვინო / Rkatsiteli Mtsvane, dry
            white wine,
          </b>{" "}
          8,60 € 27,90 €<br />
          Mix of local grape variety Rkatsiteli and Manavian Mtsvane The wine
          with fine acidity and is made aftercol fermentation.
          <br />
          <br />
          <b>
            122. წინანდალი, მშრალი თეთრი ღვინო / Tsinandali, dry white wine,
          </b>{" "}
          8,70 € 28,90 €<br />
          Produced from grape varieties Rkatsiteli und Mtsvane. The wine with
          lively, soft harmonius taste. <br />
          <br />
          <b>123. მწვანე, მშრალი თეთრი ღვინო / Mtsvane, dry white wine,</b> 8,70
          € 28,90 €<br />
          Made of Mtsvane grape variety. With a lively, smooth, harmonious
          taste. The wine has a greenishyellow color with a lively, soft
          harmonious taste.
          <br />
          <br />
          <b>
            124. ფიროსმანი, ნახევრად მშრალი თეთრი ღვინო / Pirosmani, Semi-dry
            white wine
          </b>{" "}
          8,70 € 28,90 €<br />
          Semi-dry white wine named after a famous artist Niko Pirosmanashvili.
          The wine with a strongly developed variety bucket and harmoniously
          pleasant taste.
          <br />
          <br />
          <b> 125. თეთრი ღვინო გაზირებული / Weinschorle</b> 5,90 € (0.2l) <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ქვევრი - თეთრო ქვევრის ღვინო/ Qvevri -white amphora wine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,75 l bottle
          </Typography>
          <br />
          <br />
          <b>
            126. მწვანე, მშრალი თეთრი ღვინო / Mtsvane, dry white wine,{" "}
          </b>{" "}
          44,90 €<br />
          Dry white wine is produced in Qvevri (Clay jug) from Mtsvane grape
          varieties. The wine has a greenish yellow color with a lively, soft
          harmonious taste. <br />
          <br />
          <b>
            {" "}
            127. რქაწითელი, გაუფილტრავი მშრალი თეთრი ღვინო / Rkatsiteli,
            unfiltered dry white wine,{" "}
          </b>{" "}
          49, 90 €<br />
          Dry white wine is produced in Qvevri (Clay jug) from Rkatsiteli grape
          varieties. Body rich with tannins and harmonious and mild aftertaste.{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ღვინო როზე / Wine, rosé</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l bottle
          </Typography>
          <br />
          <br />
          <b>128. მშრალი როზე / Khareba,dry rose wine, </b> 8,60 € 27,90 €<br />
          ღვინო დამზადებულია საფერავის ყურძნის ჯიშისგან. / Wine is made of grape
          varieties Saperavi. The wine is characterizedby the vital aroma of
          watermelon and cherries. <br />
          <br />
          <b>
            129. კაბერნე-საფერავი, ნახევრად მშრალი როზე / Cabarnet-Saperavi,
            semi-dry Rose wine,
          </b>{" "}
          8,60 € 27,90 €<br />
          Semi-dry rosé wine made from Saperavi and European Cabernet Sauvignon
          grapes. The wine is characterizedby the vital aroma of berries. <br />
          <br />
          <b>
            130. იას როზე, ნახევრად მშრალი როზე / Ias Rose, semi-dry Rose wine,
          </b>{" "}
          8,90 € 29,90 €<br />
          Semi-dry rosé wine from Saperavi, Mtsvane and Muscat grapes. <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> წითელი ღვინო/ Red wine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,2 l 0,75 l bottle
          </Typography>
          <br />
          <br />
          <b>
            131. საფერავი გვირაბი, წითელი მშრალი ღვინო/Saperavi Gvirabi, dry red
            wine,{" "}
          </b>{" "}
          7,90 € 24,90 €<br />
          The red dry wine white rich dark pomegranate colour, made from the
          grapes of Saperavi
          <br />
          <br />
          <b>
            132. საფერავი კლასიკი, მშრალი წითელი ღვინო, / Saperavi Clasic, dry
            red wine,
          </b>{" "}
          8,50 € 26,90 €<br />
          Premium dry red wine from grape variety Saperavi.   The red dry wine
          with a darkc pomegranate color, with remembering distinctive boucuet
          and harmonious taste. <br />
          <br />
          <b>
            {" "}
            133. მუკუზანი, მშრალი წითელი ღვინო, / Mukuzani Khareba, dry red
            wine,{" "}
          </b>{" "}
          8,60 € 27,90 €<br />
          Dry red wine is made of grape variety Saperavi from Microregion
          Mukuzani.  Mukuzani is the color of dark ruby, with a fine fruty
          bouquet and full, fresh and harmonious taste. <br />
          <br />
          <b> 134. ფიროსმანი, ნახევრად მშრალი / Pirosmani, semi-dry, </b> 9,20 €
          29,90 €<br />
          Semi-dry red wine named after a famous artist Niko Pirosmanashvili.
          The wine with intense ruby red color with a taste currants and ripe
          blackberries. <br />
          <br />
          <b>
            {" "}
            135. ქინძმარაული, ნახ. მშრალი წითელი ღვინო / Kindzmarauli,
            semi-sweet red wine,{" "}
          </b>{" "}
          10,20 € 31,90 €<br />
          Semi-dry red wine is made of grape variety Saperavi from microregion
          Kindzmarauli.  It has a strong sorted bouquet and aroma together with
          velvety and harmonious taste. <br />
          <br />
          <b>
            136. ხვანჭკარა, ნახევრადტკბილი წითელი ღვინო / Khvanchkara, semi -
            sweet red wine{" "}
          </b>{" "}
          15,20 € 49,90 €<br />
          Semi - sweet red wine is made of Aleksandrouli and Mujuretuli grape
          varieties, from the Region Racha. Khvanchkara is characterized by a
          ruby color, distinctive harmonious, delicious taste, with specific
          fruity tints aroma.
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ქვევრი - წითელი ქვევრის ღვინო / Qvevri - Red amphora wine</b>
          </Typography>
          <Typography variant="body1" align="center">
            0,75 l bottle
          </Typography>
          <br />
          <br />
          <b>
            {" "}
            137.საფერავი ქვევრი, გაუფილტრავი წითელი ღვინო / Saperavi Qvevri,
            unfiltered dry red wine
          </b>{" "}
          49,90 €
          <br />
          Dry red wine from Qvevri (clay jug), from Saperavi grapes. თჰე რედ დრზ
          წინე წიტჰ ა დარკ. The red dry wine with a dark pomegranate color, with
          remembering distinctive boucuet and harmonious taste. <br />
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
              სადილის მენიუ
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
        <div style={{ padding: "0 10px" }}>
          <Typography variant="body1" style={{ lineHeight: 1.2 }}>
            <Typography variant="body1" align="center">
              <b> 12-დან 15 საათამდე</b>
            </Typography>
            <br /> <br />
            <br />
            1001. „Soljanka“ Kräftiger würziger Eintopf mit viel Fleisch 5,90 €
            <br />
            <br />
            1002. „Hartcho“ Kalbfleischeintopf mit Reis, Gemüse, Gewürzen 5,90 €
            <br />
            <br />
            1003. „Matsoni“ georgische Joghurtsuppe mit Kräutern (veg.) 4,80 €
            <br />
            <br />
            1004. Chatschapuri „Imeruli“ Pizzafladen gefüllt mit Käse (veg.)
            8,50 €<br />
            <br />
            1005. Chatschapuri „Spinat“ Pizzafladen mit Spinat/Käse (veg.) 8,90
            €
            <br />
            <br />
            1006. Auberginen-Kartoffel-Pfanne „Adschapsandali“ (veg.) 7,90 €
            <br />
            <br />
            1007. Pfannkuchen gefüllt mit Hackfleisch 5,60 €
            <br />
            <br />
            1008. Kalbgeschnetzeltes „Beef Stroganoff“ mit Reis 9,40 €
            <br />
            <br />
            1009. Hähnchenfilet überbacken mit Käse und Tomaten mit
            Bratkartoffeln 8,90 €
            <br />
            <br />
          </Typography>
        </div>
      </div>
    </Modal>
  )
}
