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

export function SpeisekarteEng(props) {
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
              MENU AND BAR
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
          <b>1.</b> სუპ-ხარჩო - პიკანტური ხბოს ხორცის სუპი ბრინჯით, პომიდვრითა
          და სუნელებით <br />
          Hartcho - spicy veal soup with rice, tomatoes, spices{" "}
          <b className={classes.nowrap}>6,90 €</b>
          <br />
          <br />
          <b>2.</b> ჩიხირთმა - ქათმის ხორცი, კვერცხი და ცოცხალი მწვანილი <br />
          Tshikhirtma - chicken, eggs and fresh green
          <sup style={{ color: "rgba(133, 26, 29)" }}>I</sup>{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b>3. </b>სალიანკა - ხორცის ცხარე სუპი <br /> Solyanka - rich spicy
          hotpot with a lot of meat <b className={classes.nowrap}> 6,90 €</b>
          <br />
          <br />
          <b>4. </b>მაწვნის სუპი - სუპი მაწვნისგან მწვანილეულობით <br /> Matsoni
          - yogurt soap with herbs
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F, I</sup>{" "}
          <b className={classes.nowrap}>5,60 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b>სალათები/Salads</b>
          </Typography>
          <br />
          <br />
          <b>5.</b> შერეული სალათა - ახალი პომიდოი, კიტრი, ხახვი, მწვანილი
          ყველით ფეტა (ვეგ.) <br />
          Mixed salad - fresh tomatoes, cucumbers, onion, greens with Feta
          (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup>{" "}
          <b className={classes.nowrap}>6,40 €</b>
          <br />
          <br />
          <b>6.</b> შერეული სალათა "ქართული" - ახალი პომიდორი, კიტრი, ნიგოზი,
          ძმარი (ვეგ.) <br />
          Mixed salad "Georgian style" - fresh tomatoes, cucumbers, walnuts,
          vinegar (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>
            H
          </sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>7. </b>ქათმის სალათა - ქათმის პიკანტური სალათა მაიონეზით, ბარდითა
          და სუნელებით <br />
          Chicken Salad - Spicy chicken salad with mayonnaise, peas and spices
          <sup style={{ color: "rgba(133, 26, 29)" }}>I, K, F</sup>{" "}
          <b className={classes.nowrap}>9,20 €</b>
          <br />
          <br />
          <b>8. </b>ცხვრის ყველი - ზეითუნის ზეთით, თუთუბოთი და ოხრახუშით (ვეგ.)
          <br />
          Sheep cheese - with olive oil, sumac and parsley (veg.)
          <b className={classes.nowrap}> 7,20 €</b>
          <br /> <br />
          <b>9.  </b>ენის სალათა - ხბოს ენა შემწვარი ქამა სოკოთი კიტრით და
          მაიონეზით <br />
          Tongue salad - veal tongue, with fried mushrooms cucumber and
          mayonnaise<b className={classes.nowrap}> 9,20 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცივი კერძები / Cold starters</b>
          </Typography>
          <br />
          <br />
          <b>10. </b>ისპანახის ფხალი - ბოსტნის ისპანახიt ნიგვზით, ქინძითა და
          სუნელებით (ვეგ.) <br />
          Spinach-Pkhali - balls of spinach leaves with walnut paste, coriander
          and spices (veg.)<sup style={{ color: "rgba(133, 26, 29)" }}>
            H
          </sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>11.</b> ჭარხლის ფხალი - ჭარხლის ფურცლის ბურთები ნიგვზითა და ქინძით
          (ვეგ) <br />
          Beetroot Pkhali - Beetroot puree balls with walnut paste and coriander
          (veg)<sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>12.</b> სტაფილოს ფხალი - ნიგვზით, ქინძითა და სუნელებით (ვეგ.){" "}
          <br />
          Carrot Pkhali - Carrot balls with walnut paste, coriander, spices
          (veg.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>13. </b>ფხალის ასორტი - ისპანახის, ჭარხლისა და სტაფილოს ფხალი (ვეგ)
          <br />
          Pkhali Mix - spinach, beetroot and carrot Pkhali (veg)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>13,60 €</b>
          <br />
          <br />
          <b>14. </b>ბადრიჯანი - შემწვარი ბადრიჯანი ნიგვზითა და სუნელებთ (ვეგ.)
          <br />
          Eggplants - fried eggplants filled with walnut paste and spices (veg.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>9,90 €</b>
          <br />
          <br />
          <b>15.</b> მჟავის ასორტი - ქართული მწნილის ასორტი (ვეგ.) <br />
          Assortment of pickles - pickled vegetables in Georgian style (veg.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>E</sup>{" "}
          <b className={classes.nowrap}>8,60 €</b>
          <br />
          <br />
          <b>16. </b>გებჟალია - ვეგეტარიანული ყველის თხელი ბურთულები, მოცარელას
          ყველით და სახლში მომზადებული იოგურტისა და პიტnის სოუსით
          <br />
          Gebzhalia -vegetarian cheese rolls filled with Mozarella with homemade
          herb pesto in light yoghurt-mint-sauce
          <b className={classes.nowrap}> 9,90 €</b>
          <br />
          <br />
          სუპებთან,სალათებთან და ცივ კერძებთან გთავაზობთ ჩვენთან გამომცხვარ პურს
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
          <b>17.</b> შემწვარი ბოსტნეული - წვნიანი შემწვარი ბოსტნეული <br />
          Grilled vegetables - juicy grilled vegetables
          <b className={classes.nowrap}> 9,90 €</b>
          <br /> <br />
          <b>18.</b> ლობიო - მოხარშული ლობიო ქართული სუნელებით
          <br />
          Lobio - bean stew with Georgian spices
          <b className={classes.nowrap}> 8,90 €</b>
          <br /> <br />
          <b>19. </b>ტოლმა - ხორცის ფარში ვაზის ფოთოლში, ხახვითა და მწვანილებით
          <br />
          Dolma - grape leaves filled with minced meat, onions and herbs
          <b className={classes.nowrap}> 8,50 €</b>
          <br />
          <br />
          <b>20. </b>"სოკო კეცზე" - შამპინიონები ღუმელიდან ყველით და მობრაწული
          <br />
          "Soko ketsze" - Champignon from the oven filled with cheese and
          gratinated
          <sup style={{ color: "rgba(133, 26, 29)" }}>F, I</sup>{" "}
          <b className={classes.nowrap}>7,60 €</b>
          <br /> <br />
          <b> 21. </b>ჭვიშტარი - მჭადის პურები სულუგუნის შიგთავსით
          <br />
          Chvishtari - corn patty with cheese Suluguni
          <sup style={{ color: "rgba(133, 26, 29)" }}>A, F</sup>{" "}
          <b className={classes.nowrap}>4,90 €</b>
          <br /> <br />
          <b>22. </b>აჯაფსანდალი - მოთუშული ბადრიჯანი პომიდვრით, პაპრიკით,
          ხახვით და სუნელებით <br />
          Adzhapsandali - Braised eggplants, tomatoes, paprika, onions, herbs
          and spices (veg.) <b className={classes.nowrap}> 9,90 €</b>
          <br /> <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცომეული / Pastry</b>
          </Typography>
          <br />
          <br />
          <b>23.</b> ხაჭაპური "იმერული" - ხაჭაპური ყველით (ვეგ.)
          <br />
          Khatshapuri "Imeruli" - flatbread filled with cheese (veg.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>10,90 €</b>
          <br />
          <br />
          <b>24.</b> ხაჭაპური "მეგრული" - ხაჭაპური ყველით და მობრაწული ყველით
          ღუმელიდან (ვეგ.)
          <br />
          Khatshapuri "Megruli" - flatbread filled and baked with cheese from
          the oven (veg.) <sup style={{ color: "rgba(133, 26, 29)" }}>
            A,F
          </sup>{" "}
          <b className={classes.nowrap}>12,90 €</b>
          <br /> <br />
          <b>25.</b> ხაჭაპური "აჭარული" - ნავის ფორმის ხაჭაპური ყველითა და
          კვერცხით ღუმელიდან (ვეგ.)
          <br />
          Khatshapuri "Adsharuli" - Boat-shaped dumplings with cheese and egg
          from the oven (veg.)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F,I</sup>{" "}
          <b className={classes.nowrap}>14,90 €</b>
          <br /> <br />
          <b>26.</b> ლობიანი - ლობიოთი დატენილი ცომი <br />
          Lobiani - flatbread filled with beans
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>12,90 €</b>
          <br />
          <br />
          <b>27.</b> ხინკალი - ხორცის ფარშით (ძროხის + ღორის ხორცი) 4 ცალიდან
          <br />
          Khinkali - dumplings filled with minced meat (beef + pork), seasoned
          in Georgian style (from 4 pieces)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>2,20 €/Piece</b>
          <br /> <br />
          <b>28.</b> ხინკალი - ძროხის ხორცის ფარშით, შესუნელებული ქართულად (4
          ცალიდან) <br />
          Khinkali - dumplings filled with minced beef meat, seasoned in
          Georgian style (from 4 pieces)
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>2,50 €/Piece</b>
          <br /> <br />
          <b>29. </b>ხინკალი - ყველით, შესუნელებული ქართულად (4 ცალიდან)
          <br />
          Khinkali - dumplings filled with cheese, seasoned in Georgian style
          (from 4 pieces)
          <b className={classes.nowrap}> 2,20 €/Piece</b>
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
          <b> 30. </b>ღორის მწვადი - ღორის ხორცი შამფურზე შემწვარი ხახვით,
          მწვანილითა და საწებელით <br />
          Pork Shashlik - Pork grilled on skewers with onions, herbs and
          satsebela <b className={classes.nowrap}> 16,90 €</b>
          <br />
          <br />
          <b>31. </b>ქათმის მწვადი - დამარინებული ქათმის ხორცი შამფურზე შემწვარი
          სააწებელით <br />
          Chicken Shashlik - marinated chicken grilled on skewers with satsebela
          <b className={classes.nowrap}> 16,90 €</b>
          <br />
          <br />
          <b>32.</b> ცხვრის მწვადი - ცხვრის ხორცი შამფურზე შემწვარი ხახვით,
          მწანილითა და საწებელით <br />
          Lamb shashlik - lamb grilled on skewers with onions, herbs and
          satsebela <b className={classes.nowrap}> 18,90 €</b>
          <br />
          <br />
          <b>33.</b> ბატკნის კარე ხახვით, მწვანილებითა და საწებელით
          <br />
          Noble lamb crown with onions, herbs and satsebela
          <b className={classes.nowrap}> 28,90 €</b>
          <br />
          <br />
          <b>34.</b> შქმერული - ქათამი ნივრის, არაჟნის სოუსში ღუმელიდან (ძვლით)
          <br />
          Shkmeruli - Chicken in garlic-Cream Fraiche -sauce from the Oven (with
          a bone)
          <sup style={{ color: "rgba(133, 26, 29)" }}>F</sup> (mit Knochen)
          <b className={classes.nowrap}> 17,90 €</b>
          <br />
          <br />
          <b>35. </b>ჩანახი თიხის ქვაბში - ძროხის ხორცი კარტოფილით, ბოსტნეულითა
          და სუნელებით <br />
          Chanakhi in a clay pot - beef stew with potatoes, vegetables and
          spices <b className={classes.nowrap}> 18,40 €</b>
          <br />
          <br />
          <b>36.</b> საცივი - ინდაური ნიგვზის სოუსში <br />
          Satsivi - turkey meat in walnut sauce{" "}
          <b className={classes.nowrap}> 18,90 €</b>
          <br />
          <br />
          <b>37. </b>ჩაქაფული - ხბოს ხორცი თიხის ქვაბში ტარხუნითა და მოთუშული
          თეთრი ღვინით <br />
          Chakapuli - veal stewed in a clay pot with tarragon and white wine
          <sup style={{ color: "rgba(133, 26, 29)" }}>D</sup>{" "}
          <b className={classes.nowrap}>18,90 €</b>
          <br />
          <br />
          <b>38. </b>ბატკნის ფეხი ღუმელიდან, დამარინებული აჯიკით, სუნელებითა და
          ნივრით (მხოლოდ წინასწარი შეკვეთით, დაახლოებით 6 კაცზე)
          <br />
          Leg of lamb from the oven marinated in adjika, spices and garlic (Only
          with advance reservation, enough for approx. 6 people)
          <b className={classes.nowrap}> 140,00 €</b>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> თევზის კერძები / Fish specialties</b>
          </Typography>
          <br />
          <br />
          <b> 39. </b>ორაგულის ფილე ნივრისა და არაჟნის წვენში, თქვეთვის
          სასურველი გარნირით <br />
          Salmon fillet in garlic-cream fraiche-sauce with side dish of your
          choice
          <sup style={{ color: "rgba(133, 26, 29)" }}>B,F</sup>{" "}
          <b className={classes.nowrap}>18,90 €</b>
          <br />
          <br />
          <b>40. </b>სამეფო კრევეტები ტანდურის სოუსით, ტაფაში <br />
          King prawns with tandoori sauce served in a pan
          <sup style={{ color: "rgba(133, 26, 29)" }}>C</sup>{" "}
          <b className={classes.nowrap}>24,90 €</b>
          <br />
          <br />
          <b>41. </b>სამეფო ზუთხი მთელი, შემწვარი ბოსტნეულით (მხოლოდ წინასწარი
          შეკვეთით, დაახლოებით 6 კაცზე) <br />
          Whole king sturgeon gratinated with vegetables (Only with advance
          reservation, enough for approx. 6 people)
          <sup style={{ color: "rgba(133, 26, 29)" }}>B</sup>{" "}
          <b className={classes.nowrap}>140,00 €</b>
          <br />
          <br />
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
          <b>42.</b> შემწვარი კარტოფილი <br /> Roasted potatoes{" "}
          <b className={classes.nowrap}>3,70 €</b>
          <br />
          <br />
          <b>43. </b>ბრინჯი <br /> Rice{" "}
          <b className={classes.nowrap}> 3,90 €</b>
          <br />
          <br />
          <b>44. </b>სახლში გამომცხვარი პური <br /> Homemade bread
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>1,50 €</b>
          <br />
          <br />
          <b>45. </b>საწებელა - ტრადიციული ქართული პომიდვრის სოუსი <br />{" "}
          Satsebela - Georgian traditional tomato sauce{" "}
          <b className={classes.nowrap}>3,10 €</b>
          <br />
          <br />
          <b>46. </b>აჯიკა - ქართული ცხარე პომიდვრის სოუსი <br /> Adjika - spicy
          tomato sauce <b className={classes.nowrap}> 3,10 €</b>
          <br />
          <br />
          <b>47. </b>ტყემალი - ქართული მწვანე ან წითელი ტყემლის ცხარე სოუსი{" "}
          <br />
          Tkemali - Georgian spicy green or red cherry plum
          <b className={classes.nowrap}> 4,20 €</b>
          <br />
          <br />
          <b>48. </b>ბაჟე - ტრადიციული ქართული ნიგვზის სოუსი <br /> Bazhe -
          Georgian walnut sauce{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>H</sup>{" "}
          <b className={classes.nowrap}>4,40 €</b>
          <br />
          <br />
          <b>49.</b> ცაციკი - იოგურტის სოუსი ნივრითა და კამით <br />
          Tzatziki yogurt sauce with garlic and dill{" "}
          <b className={classes.nowrap}>3,10 €</b>
          <br />
          <br />
          <b>50. </b>არაჟანი <br /> Sour cream{" "}
          <b className={classes.nowrap}>2,60 €</b>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> დესერტი / Desserts</b>
          </Typography>
          <br />
          <br />
          <b> 51.</b> სახლში გამომცხავარი ნამცხვარი "ნაპოლეონი" <br /> Cake
          "Napoleon" homemade
          <sup style={{ color: "rgba(133, 26, 29)" }}>A,F</sup>{" "}
          <b className={classes.nowrap}>4,10 €</b>
          <br /> <br />
          <b>52.</b> "ფელამუში" - ქართული სუფლე ყურძნის წვენისა და მჭადის
          ფქვილისგან <br />
          "Pelamushi" - Georgian traditional dessert of grape juice and corn
          flower<sup style={{ color: "rgba(133, 26, 29)" }}>A,H</sup>{" "}
          <b className={classes.nowrap}>3,20 €</b>
          <br /> <br />
          <b>53.</b> სახლში გამომცხვარი ნამცხვრების ნაირსახეობები <br />
          Homemade cake variations<b> 4,90 €</b>
          <br /> <br />
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
          <b> 60.</b> ყავა / Coffee
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>{" "}
          <b className={classes.nowrap}> 2,70 €</b>
          <br />
          <br />
          <b>61. </b> ლატე მაკიატო / Latte Macchiato{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup>{" "}
          <b className={classes.nowrap}>3,90 €</b> <br />
          <br />
          <b>62. </b> ესპრესსო / Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>
          <b className={classes.nowrap}>2,50 €</b> <br />
          <br />
          <b>63. </b> ორმაგი ესპრესსო / Double Espresso{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2</sup>
          <b className={classes.nowrap}> 3,50 €</b> <br />
          <br />
          <b> 64.</b> კაპუჩინო / Cappuccino{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>2,F</sup>
          <b className={classes.nowrap}> 3,10 €</b> <br />
          <br />
          <b>65.</b> ჩაი (სხვადასხვა ტიპის) / Tea (various types){" "}
          <b className={classes.nowrap}>2,60 €</b> <br />
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
          <b>70. </b> კოკა-კოლა, კოკა-კოლა ლაითი / Coca- Cola, Coca-Cola light{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,2,3</sup>{" "}
          <b className={classes.nowrap}>2,50 € 4,50 € 8,50 €</b> <br />
          <br />
          <b>71. </b> ფანტა, სპრაიტი / Fanta , Sprite{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>5,4</sup>{" "}
          <b className={classes.nowrap}>2,50 € 4,50 € 8,50 €</b> <br />
          <br />
          <b>72.</b> St. Michaelis Naturell კლასიკური / Classic{" "}
          <b className={classes.nowrap}>2,20 € 3,90 € 6,50 €</b>
          <br />
          <br />
          <b> 73. </b> ბორჯომი - ქართული სამკურნალო წყალი - Borjomi - Georgian
          healing water 0,5 l Fl. <b className={classes.nowrap}>6,20 €</b>{" "}
          <br />
          <br />
          <b>74. </b> მსხლის ლიმონათი, ქართული / Georgian pear lemonade{" "}
          <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l Fl.{" "}
          <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b>75.</b> ტარხუნის ქართული ლიმონათი / Georgian estragon lemonade
          "Tarkhuna" <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l
          Fl. <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b>76. </b> ყურძნის ქართული ლიმონათი / Georgian grape lemonade
          "Saperavi" <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l
          Fl. <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          <b>77. </b> ფეიხოას ქართული ლიმონათი / Georgian Feijoa lemonade
          "Feijoa" <sup style={{ color: "rgba(133, 26, 29)" }}>1,3</sup> 0,5 l
          Fl. <b className={classes.nowrap}>6,20 €</b>
          <br />
          <br />
          (ფეიხოა - ბრაზილიური გოავა - Feijoa - brasilian Goave) <br />
          <br />
          <b>78.</b> რედ ბული / Red Bull{" "}
          <b className={classes.nowrap}>4,60 €</b> <br />
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
          <b>80. </b> ფორთოხლის წვენი / Orange juice{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b> <br />
          <br />
          <b>81. </b> ვაშლის წვენი / Apple juice{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b> <br />
          <br />
          <b>82. </b> ალუბლის წვენი Cherry juice{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b> <br />
          <br />
          <b> 83.</b> რევანდის ნექტარი / Rhababa nectar{" "}
          <b className={classes.nowrap}>2,80 € 4,90 € 10,40 €</b> <br />
          <br />
          <b> 84. </b> გაზირებული წვენი / Juice spritzer{" "}
          <b className={classes.nowrap}>2,60 € 4,70 € </b> <br />
          <br />
          <b> 85.</b> KiBa <b className={classes.nowrap}> 2,80 € 4,90 € </b>{" "}
          <br />
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
          <b> 90. </b> Einbecker Brauherren Pils (ჩამოსასხმელი ლუდი / Draught
          beer) <b className={classes.nowrap}>3,80 € 4,90 €</b> <br />
          <br />
          <b>91.</b> Alsterwasser{" "}
          <b className={classes.nowrap}>3,60 € 4,70 €</b> <br />
          <br />
          <b> 92. </b> Herrnbräu ხორბლის / wheat(0,5l){" "}
          <b className={classes.nowrap}>4,90 €</b> <br />
          <br />
          <b> 93. </b> Herrnbräu ხორბლის შავი / wheat dark (0,5l){" "}
          <b className={classes.nowrap}>4,90 €</b> <br />
          <br />
          <b>94.</b> Einbecker Brauherren უალკოჰოლო / alcohol-free (0,3l){" "}
          <b className={classes.nowrap}>3,80 €</b> <br />
          <br />
          <b>95.</b> Herrnbräu საფუვრიანი უალკოჰოლო ხორბლის ლუდი / yeast wheat
          beer alcohol-free (0,5l) <b className={classes.nowrap}>4,90 €</b>{" "}
          <br />
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
          <b>96.</b> მარტინი / Martini{" "}
          <b className={classes.nowrap}>6,60 € 39,00 €</b> <br />
          <br />
          <b>97. </b> ბაკარდი / Bacardi{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € </b> <br />
          <br />
          <b>98.</b> ბეილისი / Baileys{" "}
          <b className={classes.nowrap}>2,90 € 12,00 €</b> <br />
          <br />
          <br />
          <b> 99.</b> არაყი / Vodka "Finlandia"{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € 65,00 €</b> <br />
          <br />
          <b>100. </b> არაყი / Vodka "Absolut"{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € 65,00 €</b> <br />
          <br />
          <b>101. </b> არაყი / Vodka "Beluga", "Grey Goose"{" "}
          <b className={classes.nowrap}>4,90 € 19,00 € 90,00 € 120,00 €</b>
          <br />
          <br />
          <b>102. </b> ქართული ჭაჭა / Georgian Chacha{" "}
          <b className={classes.nowrap}>2,80 € 11,00 € 52,00 €</b> <br />
          <br />
          <br />
          <b> 103. </b> ქართული ბრენდი / Georgian Brandy Sarajishvili David{" "}
          <b className={classes.nowrap}>2,80 € 11,00 € 0,5 l bottle 52,00 €</b>{" "}
          <br />
          <br />
          <b>104.</b> Chivas Regal, Jack Daniel's, Tullamore{" "}
          <b className={classes.nowrap}>3,90 € 17,50 € 95,00 €</b>
          <br />
          <br />
          <b>105. </b> Remy Martin{" "}
          <b className={classes.nowrap}>4,90 € 21,00 € 120,00 €</b> <br />
          <br />
          <b>106. </b> Hennessy{" "}
          <b className={classes.nowrap}>4,90 € 21,00 € 120,00 €</b> <br />
          <br />
          <b>107. </b> ჯინი / Gin{" "}
          <b className={classes.nowrap}>2,90 € 12,00 € 65,00 €</b> <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> კოქტეილები / Cocktails </b>
          </Typography>
          <br />
          <b>108.</b> არაყი / Vodka Red Bull{" "}
          <b className={classes.nowrap}>7,50 €</b> <br />
          <br />
          <b> 109.</b> ვისკი კოლა/ვოდკა კოლა / Whisky Cola/Wodka Cola{" "}
          <b className={classes.nowrap}>7,20 €</b> <br />
          <br />
          <b> 110. </b> ბაკარდი კოლა / Bacardi Cola{" "}
          <b className={classes.nowrap}>7,20 €</b> <br />
          <br />
          <b>111. </b> კუბა ლიბრე / Cuba Libre{" "}
          <b className={classes.nowrap}>7,50 €</b> <br />
          <br />
          <b> 112. </b> ჯინ ტონიკი / Gin Tonic{" "}
          <b className={classes.nowrap}>7,90 €</b> <br />
          <br />
          <br />
          <br />
          <Typography variant="h6" align="center">
            <b> ცქრიალა ღვინო და შამპანური / Sparkling wine and Champagne</b>
          </Typography>
          <br />
          <b>113. </b> ცქრიალა ღვინო / Sparkling wine "Freixenet" Piccolo 0,2 l
          bottle
          <b className={classes.nowrap}> 7,50 €</b> <br />
          <br />
          <b>114. </b> ბადაგონის ცქრიალა ღვინო (ნახევრად მშრალი) / Badagoni
          Sparkling wine (semi-dry) 0,75 l bottle{" "}
          <b className={classes.nowrap}>35,00 €</b> <br />
          <br />
          <b>115.</b> ბადაგონის ცქრიალა ღვინო ბრუტი / ბადაგონი Sparkling wine
          Brut 0,75 l bottle <b className={classes.nowrap}>35,00 €</b> <br />
          <br />
          <b>116.</b> შამპანური / Champagne "Moët & Chandon", "Veuve Clicquot"
          0,75 l bottle <b className={classes.nowrap}>95,00 €</b> <br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function WeinkarteEng(props) {
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
              WINE LIST
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
            120. რქაწითელი , მშრალი თეთრი ღვინო / Rkatsiteli, dry white wine
            7,90 € 24,90 €{" "}
          </b>
          <br />
          Rkatsiteli, Dry white wine, is made from grape variety Rkatsiteli. The
          wine with a light straw color, plesent fruity and harmony.
          <br />
          <br />
          <b>
            121. რქაწითელი მწვანე, მშრალი თეთრი ღვინო / Rkatsiteli Mtsvane, dry
            white wine 8,60 € 27,90 €{" "}
          </b>
          <br />
          Mix of local grape variety Rkatsiteli and Manavian Mtsvane The wine
          with fine acidity and is made aftercol fermentation.
          <br />
          <br />
          <b>
            122. წინანდალი, მშრალი თეთრი ღვინო / Tsinandali, dry white wine 8,70
            € 28,90 €
          </b>
          <br />
          Produced from grape varieties Rkatsiteli und Mtsvane. The wine with
          lively, soft harmonius taste. <br />
          <br />
          <b>
            123. მწვანე, მშრალი თეთრი ღვინო / Mtsvane, dry white wine 8,70 €
            28,90 €
          </b>
          <br />
          Made of Mtsvane grape variety. With a lively, smooth, harmonious
          taste. The wine has a greenishyellow color with a lively, soft
          harmonious taste.
          <br />
          <br />
          <b>
            124. ფიროსმანი, ნახევრად მშრალი თეთრი ღვინო / Pirosmani, Semi-dry
            white wine 8,70 € 28,90 €{" "}
          </b>
          <br />
          Semi-dry white wine named after a famous artist Niko Pirosmanashvili.
          The wine with a strongly developed variety bucket and harmoniously
          pleasant taste.
          <br />
          <br />
          <b> 125. თეთრი ღვინო გაზირებული / Weinschorle 5,90 € (0.2l) </b>{" "}
          <br />
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
            126. მწვანე, მშრალი თეთრი ღვინო / Mtsvane, dry white wine 44,90 €{" "}
          </b>
          <br />
          Dry white wine is produced in Qvevri (Clay jug) from Mtsvane grape
          varieties. The wine has a greenish yellow color with a lively, soft
          harmonious taste. <br />
          <br />
          <b>
            127. რქაწითელი, გაუფილტრავი მშრალი თეთრი ღვინო / Rkatsiteli,
            unfiltered dry white wine 49, 90 €{" "}
          </b>
          <br />
          Dry white wine is produced in Qvevri (Clay jug) from Rkatsiteli grape
          varieties. Body rich with tannins and harmonious and mild aftertaste.
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
          <b>128. მშრალი როზე / Khareba,dry rose wine 8,60 € 27,90 €</b>
          <br />
          ღვინო დამზადებულია საფერავის ყურძნის ჯიშისგან. / Wine is made of grape
          varieties Saperavi. The wine is characterizedby the vital aroma of
          watermelon and cherries. <br />
          <br />
          <b>
            129. კაბერნე-საფერავი, ნახევრად მშრალი როზე / Cabarnet-Saperavi,
            semi-dry Rose wine 8,60 € 27,90 €{" "}
          </b>
          <br />
          Semi-dry rosé wine made from Saperavi and European Cabernet Sauvignon
          grapes. The wine is characterizedby the vital aroma of berries. <br />
          <br />
          <b>
            130. იას როზე, ნახევრად მშრალი როზე / Ias Rose, semi-dry Rose wine
            8,90 € 29,90 €{" "}
          </b>
          <br />
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
            wine 7,90 € 24,90 €{" "}
          </b>
          <br />
          The red dry wine white rich dark pomegranate colour, made from the
          grapes of Saperavi.
          <br />
          <br />
          <b>
            132. საფერავი კლასიკი, მშრალი წითელი ღვინო, / Saperavi Clasic, dry
            red wine 8,50 € 26,90 €{" "}
          </b>
          <br />
          Premium dry red wine from grape variety Saperavi.   The red dry wine
          with a darkc pomegranate color, with remembering distinctive boucuet
          and harmonious taste. <br />
          <br />
          <b>
            133. მუკუზანი, მშრალი წითელი ღვინო, / Mukuzani Khareba, dry red wine
            8,60 € 27,90 €
          </b>
          <br />
          Dry red wine is made of grape variety Saperavi from Microregion
          Mukuzani.  Mukuzani is the color of dark ruby, with a fine fruty
          bouquet and full, fresh and harmonious taste. <br />
          <br />
          <b>
            {" "}
            134. ფიროსმანი, ნახევრად მშრალი / Pirosmani, semi-dry 9,20 € 29,90 €
          </b>
          <br />
          Semi-dry red wine named after a famous artist Niko Pirosmanashvili.
          The wine with intense ruby red color with a taste currants and ripe
          blackberries. <br />
          <br />
          <b>
            135. ქინძმარაული, ნახ. მშრალი წითელი ღვინო / Kindzmarauli,
            semi-sweet red wine 10,20 € 31,90 €
          </b>
          <br />
          Semi-dry red wine is made of grape variety Saperavi from microregion
          Kindzmarauli.  It has a strong sorted bouquet and aroma together with
          velvety and harmonious taste. <br />
          <br />
          <b>
            136. ხვანჭკარა, ნახევრადტკბილი წითელი ღვინო / Khvanchkara, semi -
            sweet red wine 15,20 € 49,90 €{" "}
          </b>
          <br />
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
            137.საფერავი ქვევრი, გაუფილტრავი წითელი ღვინო / Saperavi Qvevri,
            unfiltered dry red wine 49,90 €{" "}
          </b>
          <br />
          Dry red wine from Qvevri (clay jug), from Saperavi grapes. The red dry
          wine with a dark pomegranate color, with remembering distinctive
          boucuet and harmonious taste. <br />
          <br />
        </Typography>
      </div>
    </Modal>
  )
}

export function MittagsmenuEng(props) {
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
              LUNCH MENU
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
