import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

import Layout from "../layout/Layout"
import HeroContainer from "../components/layout/HeroContainer"
import SocialIcon from "../components/icons/SocialIcon"

const HomePage = () => {
  return (
    <Layout>
      <HeroContainer>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <div className="text-center hero-title">Chigozie Orunta</div>
            <div className="text-center text-uppercase hero-excerpt">
              Full Stack Developer
            </div>
            <ul className="d-flex hero-icons">
              <li>
                <Link to="https://github.com/chigozieorunta">
                  <SocialIcon name="GitHub" />
                </Link>
              </li>
              <li>
                <Link to="https://api.whatsapp.com/send/?phone=2348035454516&text&app_absent=0">
                  <SocialIcon name="WhatsApp" />
                </Link>
              </li>
              <li>
                <Link to="https://linkedin.com/in/chigozieorunta">
                  <SocialIcon name="LinkedIn" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </HeroContainer>
    </Layout>
  )
}

export default HomePage
