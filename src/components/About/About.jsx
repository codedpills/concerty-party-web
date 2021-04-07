import React from "react"

import "./About.scss"
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
            <h4>Find Us</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptatibus beatae praesentium nostrum odit consequuntur quasi,
            facere, soluta ipsa error dolorem earum. Laboriosam, incidunt quae
            cumque laborum dolorem ex possimus.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
