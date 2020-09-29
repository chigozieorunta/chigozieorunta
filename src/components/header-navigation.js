import React from "react"
import Link from "gatsby-link"

const HeaderNavigation = () => {
  return (
    <ul className="header-navigation">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/tools">Tools</Link>
      </li>
    </ul>
  )
}

export default HeaderNavigation
