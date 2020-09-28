import React from "react"

const HeroContainer = props => {
  return (
    <section class="d-flex vh-100 align-items-center">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-10 offset-sm-1">
            <div class="row">
              <div class="col-xl-6">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContainer
