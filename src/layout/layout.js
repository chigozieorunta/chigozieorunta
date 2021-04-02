import React from "react"
import Header from "../layout/Header"
import Footer from "../layout/Footer"

import "../styles/global.css"

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
