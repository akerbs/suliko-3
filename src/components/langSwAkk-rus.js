import "./langSwAkk.css"
import React from "react"
import { Link } from "gatsby"

const LangSwAkk = () => {
  return (
    <div className="accordion">
      <div className="accordionItem">
        Rus
        <div className="accordionItemContent">
          <div className="langItem">
            <Link to="/deu" className="link">
              Deu
            </Link>
          </div>

          <div className="langItem">
            <Link to="/geo" className="link">
              Geo
            </Link>
          </div>

          <div className="langItem">
            <Link to="/eng" className="link">
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
