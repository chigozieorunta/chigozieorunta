import React from "react"
import { Container } from "react-bootstrap"

const HeroContainer = props => {
  return (
    <section className="d-flex vh-100 align-items-center hero-section">
      <Container fluid>{props.children}</Container>
    </section>
  )
}

export default HeroContainer
