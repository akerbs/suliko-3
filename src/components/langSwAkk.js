import "./langSwAkk.css"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
// import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  // accordion: {
  //   zIndex: "999",
  //   padding: "0",
  //   left: "20",
  //   fontSize: "14px",
  //   width: "43.5px",
  //   height: "auto",
  //   marginTop: "100px",
  //   position: "fixed",
  //   fontFamily: "Roboto, sans-serif",
  //   "&:hover $accordionItemContent": {
  //     height: "0",
  //     overflow: "hidden",
  //     transition: "height 0.25s",
  //   },
  //
  //   "&:hover $accordionItem:hover $accordionItemContent": {
  //     height: "7em",
  //   },
  //   "& $accordionItem:default $accordionItemContent": { height: "7em" },
  // },
  // accordionItem: {
  //   textAlign: "center",
  //   padding: "0.7em 0",
  //   color: "rgba(43, 42, 41)",
  //   borderRadius: "30px",
  //   backgroundColor: "#f9eacf",
  //
  // },
  // accordionItemContent: {
  //   height: "0",
  //   overflow: "hidden",
  //   transition: "height 0.25s",
  //   display: "flex",
  //   flexDirection: "column",
  //   marginTop: "4px",
  //   justifyContent: "space-around",
  // },
  // link: {
  //   textDecoration: "none",
  //   color: "rgba(43, 42, 41)",
  //   "&:hover": {
  //     textDecoration: "none",
  //     color: "rgba(43, 42, 41)",
  //     fontWeight: "bold",
  //   },
  // },
}))

const LangSwAkk = () => {
  const classes = useStyles()

  return (
    <div className={classes.accordion} class="accordion">
      <div className={classes.accordionItem} class="accordionItem">
        Deu
        <div
          className={classes.accordionItemContent}
          class="accordionItemContent"
        >
          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Rus
            </Link>
          </div>

          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Geo
            </Link>
          </div>

          <div className={classes.langItem} class="langItem">
            <Link to="/page-2" className={classes.link} class="link">
              Eng
            </Link>
          </div>

          {/* <ul class="list">
            <li class="listItem">rus</li>
            <li class="listItem">geo</li>
            <li class="listItem">eng</li>
          </ul> */}
        </div>
      </div>
    </div>
    // <div class="accordion">
    //   {/* <Typography align="center" variant="body2"> */}
    //   <section class="accordionItem">
    //     deu
    //     <div class="accordionItemContent">
    //       <ul className={classes.list}>
    //         <li className={classes.listItem}>rus</li>
    //         <li className={classes.listItem}>geo</li>
    //         <li className={classes.listItem}>eng</li>
    //       </ul>
    //     </div>
    //   </section>
    //   {/* </Typography> */}
    // </div>
  )
}

export default LangSwAkk
