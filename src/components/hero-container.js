import React from "react"

const HeroContainer = props => {
  return (
    <section className="d-flex vh-100 align-items-center hero-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="col-xl-6">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContainer
