import React from "react"

import HeaderLogo from "../components/header-logo"
import HeaderSocial from "../components/header-social"
import HeaderContainer from "../components/header-container"
import HeaderNavigation from "../components/header-navigation"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Chigozie Orunta</HeaderLogo>
      <HeaderNavigation />
      <HeaderSocial />
    </HeaderContainer>
  )
}

export default Header
