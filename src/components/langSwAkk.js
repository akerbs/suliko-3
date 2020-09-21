import "./langSwAkk.css"
import React, { useContext, useEffect } from "react"
import { LanguageContext } from "./layout"

export default function LangSwAkk() {
  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  function blurSwAcc() {
    document.getElementById("swAcc").blur()
  }

  return (
    <div className="accordion" id="swAcc">
      <div className="accordionItem">
        <span>{actLanguage}</span>
        <div className="accordionItemContent">
          {actLanguage !== "RUS" && (
            <div className="langItem">
              <button
                className="button"
                value={"RUS"}
                onClick={e => {
                  handleLanguageChange(e)
                  blurSwAcc()
                }}
              >
                RUS
              </button>
            </div>
          )}

          {actLanguage !== "DEU" && (
            <div className="langItem">
              <button
                className="button"
                value={"DEU"}
                onClick={e => {
                  handleLanguageChange(e)
                  blurSwAcc()
                }}
              >
                DEU
              </button>
            </div>
          )}

          {actLanguage !== "GEO" && (
            <div className="langItem">
              <button
                className="button"
                value={"GEO"}
                onClick={e => {
                  handleLanguageChange(e)
                  blurSwAcc()
                }}
              >
                GEO
              </button>
            </div>
          )}

          {actLanguage !== "ENG" && (
            <div className="langItem">
              <button
                className="button"
                value={"ENG"}
                onClick={e => {
                  handleLanguageChange(e)
                  blurSwAcc()
                }}
              >
                ENG
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
