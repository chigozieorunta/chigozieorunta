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
          Hi, I'm a <em>full stack developer</em> who works with <em>React</em>{" "}
          and <em>PHP/Laravel</em>...
        </HeroExcerpt>
      </HeroContainer>
    </Layout>
  )
}

export default HomePage
