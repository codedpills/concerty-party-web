import React from "react"
import Carousel from "react-bootstrap/Carousel"

import "./homeHero.scss"

import max from "../../images/hero/max-brinton-HvWWo_dyFJQ-unsplash.jpg"
import yvette from "../../images/hero/yvette-de-wit-8XLapfNMW04-unsplash.jpg"
import anthony from "../../images/hero/anthony-delanoix-hzgs56Ze49s-unsplash.jpg"

const HomeHero = () => {
  return (
    <div className="home-hero">
      <Carousel fade controls={false}>
        <Carousel.Item className="home-carousel-item">
          <img className="d-block w-100" src={max} alt="Max Concert" />
          <Carousel.Caption>
            <h1>Let The Guitars Burn @ The States Arena</h1>
            <p>Get your tickets now. No VIP cos we all rock!</p>
            <br />
            <p>
              <small>Photo by Max Brinton on Unsplash</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="home-carousel-item">
          <img className="d-block w-100" src={yvette} alt="Yvette Concert" />
          <Carousel.Caption>
            <h1>The Biggest Concert by ConcertParty Yet</h1>
            <p>Get your tickets now. No VIP cos we all rock!</p>
            <br />
            <p>
              <small>Photo by Yvette de Wit on Unsplash</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="home-carousel-item">
          <img className="d-block w-100" src={anthony} alt="Yvette Concert" />
          <Carousel.Caption>
            <h1>Oh You Can Feel it. LOVE is in the Air!</h1>
            <p>Get your tickets now. No VIP cos we all rock!</p>
            <br />
            <p>
              <small>Photo by Anthony DELANOIX on Unsplash</small>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeHero
