import React from "react"
import { Link } from "gatsby"

const HeaderLogo = props => {
  return (
    <Link to="/" className="header-logo">
      {props.children}
    </Link>
  )
}

export default HeaderLogo
