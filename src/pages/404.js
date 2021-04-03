import React from "react"
import { Row, Col } from "react-bootstrap"
import Layout from "../layout/Layout"
import HeroContainer from "../components/layout/HeroContainer"

const ErrorPage = () => {
  return (
    <Layout>
      <HeroContainer>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <div className="text-center hero-title">Gotcha!!!</div>
            <div className="text-center text-uppercase hero-excerpt">
              Miss Me eh...
            </div>
          </Col>
        </Row>
      </HeroContainer>
    </Layout>
  )
}

export default ErrorPage
