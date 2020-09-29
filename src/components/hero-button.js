import React from "react"
import { Link } from "gatsby"

const HeroButton = props => {
  return (
    <Link to="/work" className="hero-button">
      {props.children}
    </Link>
  )
}

export default HeroButton
