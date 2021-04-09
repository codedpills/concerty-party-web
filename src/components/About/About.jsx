import React from "react"

import "./About.scss"
import FindUs from "./FindUs"
import WhyConcertParty from "./WhyConcertParty"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <WhyConcertParty />
          </div>
          <div className="col-4">
            <FindUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
