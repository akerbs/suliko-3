import React, { useState, useEffect } from "react"
import "./scrollToTopBtn.css"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"

// const handleClick = () => {
//   window[`scrollTo`]({ top: document.body.scrollHeight, behavior: `smooth` })
// }

// <Scroll showBelow={250} />

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(250 ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > 250) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (250) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton
          size="small"
          onClick={handleClick}
          className="toTop"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}
export default ScrollToTopBtn
