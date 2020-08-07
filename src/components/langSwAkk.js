import "./langSwAkk.css"
import React from "react"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const LangSwAkk = () => {
  return (
    <div className="accordion">
      <div className="accordionItem">
        Deu
        <div className="accordionItemContent">
          <div className="langItem">
            <Link to="/page-2" className="link">
              Rus
            </Link>
          </div>

          <div className="langItem">
            <Link to="/page-2" className="link">
              Geo
            </Link>
          </div>

          <div className="langItem">
            <Link to="/page-2" className="link">
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
