import "./langSwAkk.css"
import React, { useContext, useEffect } from "react"
import { LanguageContext } from "./layout"

export default function LangSwAkk() {
  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  function blurSwAcc() {
    document.getElementById("swAcc").blur()
    document.getElementById("swAccItem").blur()
    document.getElementById("swAccItemCon").blur()
    document.getElementById("swAccLangItem").blur()
    document.getElementById("btn").blur()
  }

  return (
    <div className="accordion" id="swAcc">
      <div className="accordionItem" id="swAccItem">
        <span>{actLanguage}</span>
        <div className="accordionItemContent" id="swAccItemCon">
          {actLanguage !== "RUS" && (
            <div className="langItem" id="swAccLangItem">
              <button
                id="btn"
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
            <div className="langItem" id="swAccLangItem">
              <button
                id="btn"
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
            <div className="langItem" id="swAccLangItem">
              <button
                id="btn"
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
            <div className="langItem" id="swAccLangItem">
              <button
                id="btn"
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
