import "./langSwAkk.css"
import React from "react"
import { Link } from "gatsby"

const LangSwAkk = () => {
  return (
    <div className="accordion">
      <div className="accordionItem">
        Eng
        <div className="accordionItemContent">
          <div className="langItem">
            <Link to="/deu" className="link">
              Deu
            </Link>
          </div>

          <div className="langItem">
            <Link to="/rus" className="link">
              Rus
            </Link>
          </div>

          <div className="langItem">
            <Link to="/geo" className="link">
              Geo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LangSwAkk
