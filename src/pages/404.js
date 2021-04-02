import React from "react"
import Layout from "../layout/layout"

import HeroTitle from "../components/hero-title"
import HeroExcerpt from "../components/hero-excerpt"
import HeroContainer from "../components/layout/HeroContainer"

const ErrorPage = () => {
  return (
    <Layout>
      <HeroContainer>
        {/* 
        <HeroTitle>Gotcha!</HeroTitle>
        <HeroExcerpt>
          You've stumbled <em>far, far away</em> my friend...
        </HeroExcerpt> */}
      </HeroContainer>
    </Layout>
  )
}

export default ErrorPage
