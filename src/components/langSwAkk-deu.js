import "./langSwAkk.css"
import React from "react"
import { Link } from "gatsby"

const LangSwAkk = () => {
  return (
    <div className="accordion">
      <div className="accordionItem">
        Deu
        <div className="accordionItemContent">
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

          <div className="langItem">
            <Link to="/eng" className="link">
              Eng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LangSwAkk
