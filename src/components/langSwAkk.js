import "./langSwAkk.css"
import React, { useContext, useEffect } from "react"
import { LanguageContext } from "./layout"

export default function LangSwAkk() {
  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  return (
    <div className="accordion">
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
