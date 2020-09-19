import "./langSwAkk.css"
import React, { useContext, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { LanguageContext } from "./layout"
import MenuItem from "@material-ui/core/MenuItem"

export default function LangSwAkk() {
  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  // debugger
  return (
    <div className="accordion">
      <div className="accordionItem">
        <span>{actLanguage}</span>
        <div className="accordionItemContent">
          {actLanguage !== "RUS" && (
            <div className="langItem">
              {/* <Link to="/rus" className="link"> */}
              <button
                style={{
                  border: 0,
                  backgroundColor: "rgba(249,234,207)",
                  cursor: "pointer",
                }}
                value={"RUS"}
                onClick={e => {
                  handleLanguageChange(e)
                }}
              >
                RUS
              </button>
              {/* </Link> */}
            </div>
          )}

          {actLanguage !== "DEU" && (
            <div className="langItem">
              {/* <Link to="/deu" className="link"> */}
              <button
                style={{
                  border: 0,
                  backgroundColor: "rgba(249,234,207)",
                  cursor: "pointer",
                }}
                value={"DEU"}
                onClick={e => {
                  handleLanguageChange(e)
                }}
              >
                DEU
              </button>
              {/* </Link> */}
            </div>
          )}

          {actLanguage !== "GEO" && (
            <div className="langItem">
              {/* <Link to="/geo" className="link"> */}
              <button
                style={{
                  border: 0,
                  backgroundColor: "rgba(249,234,207)",
                  cursor: "pointer",
                }}
                value={"GEO"}
                onClick={e => {
                  handleLanguageChange(e)
                }}
              >
                GEO
              </button>
              {/* </Link> */}
            </div>
          )}

          {actLanguage !== "ENG" && (
            <div className="langItem">
              {/* <Link to="/eng" className="link"> */}
              <button
                style={{
                  border: 0,
                  backgroundColor: "rgba(249,234,207)",
                  cursor: "pointer",
                }}
                value={"ENG"}
                onClick={e => {
                  handleLanguageChange(e)
                }}
              >
                ENG
              </button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
