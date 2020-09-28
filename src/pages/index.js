import React from "react"
import Layout from "../layout/layout"

import HeroTitle from "../components/hero-title"
import HeroExcerpt from "../components/hero-excerpt"
import HeroContainer from "../components/hero-container"

const HomePage = () => {
  return (
    <Layout>
      <HeroContainer>
        <HeroTitle>Chigozie Orunta</HeroTitle>
        <HeroExcerpt>
          Hi, I'm a <em>full stack developer</em> who works with{" "}
          <em>React.js/Gatsby</em> on the front-end and <em>PHP/Laravel</em> on
          the back-end!
        </HeroExcerpt>
      </HeroContainer>
    </Layout>
  )
}

export default HomePage
