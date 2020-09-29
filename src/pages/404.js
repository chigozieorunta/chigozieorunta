import React from "react"
import Layout from "../layout/layout"

import HeroTitle from "../components/hero-title"
import HeroExcerpt from "../components/hero-excerpt"
import HeroContainer from "../components/hero-container"

const ErrorPage = () => {
  return (
    <Layout>
      <HeroContainer>
        <HeroTitle>Howdy Stranger!</HeroTitle>
        <HeroExcerpt>
          You've stumbled <em>far, far away</em> my friend...
        </HeroExcerpt>
      </HeroContainer>
    </Layout>
  )
}

export default ErrorPage
