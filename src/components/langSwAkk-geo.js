import "./langSwAkk.css"
import React from "react"
import { Link } from "gatsby"

const LangSwAkk = () => {
  return (
    <div className="accordion">
      <div className="accordionItem">
        Geo
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
