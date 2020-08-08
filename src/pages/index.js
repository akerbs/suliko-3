import { useEffect } from "react"
import { navigate } from "gatsby"

export default () => {
  useEffect(() => {
    navigate("/deu")
  }, [])
  return null
}
