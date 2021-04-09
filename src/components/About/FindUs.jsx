import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const FindUs = () => {
  return (
    <div className="find-us">
      <h4>Find Us</h4>
      <div className="map"></div>
      <div className="socials">
        <ul>
          <li>
            <a href="">
              <i className="bi-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FindUs
