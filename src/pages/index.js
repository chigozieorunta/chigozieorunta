import React from "react"
import Layout from "../layout/layout"

import HeroButton from "../components/hero-button"
import HeroExcerpt from "../components/hero-excerpt"
import HeroContainer from "../components/hero-container"

const ContactPage = () => {
  return (
    <Layout>
      <HeroContainer>
        <HeroExcerpt>
          <p className="mb-0">Hi.</p>
          <p className="mb-0">
            I'm <em>Chigozie Orunta</em>.
          </p>
          <p className="mb-0">
            A <em>full stack developer</em>
          </p>
          <p>
            based in <span>Lagos, Nigeria</span>.
          </p>
        </HeroExcerpt>
        <HeroButton>View Portfolio</HeroButton>
        <div style={{ fontSize: "20px", marginTop: "2em", fontWeight: "200" }}>
          <p>My skillset and interests includes:</p>
          <ul className="hero-skills">
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Laravel</li>
            <li>OAuth</li>
            <li>Stripe</li>
            <li>Docker</li>
            <li>Composer</li>
            <li>Packagist</li>
            <li>WordPress</li>
            <li>Themes</li>
            <li>Plugins</li>
            <li>Design Patterns</li>
            <li>Unit Testing</li>
            <li>Object Oriented Programming</li>
          </ul>
        </div>
      </HeroContainer>
    </Layout>
  )
}

export default ContactPage
