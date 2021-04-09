import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const FindUs = () => {
  return (
    <div className="find-us">
      <h4>Find Us</h4>
      <div className="location">
        <h5>Location</h5>
        <ul>
            <li>One Airport Square</li>
            <li>Accra, Ghana</li>
        </ul>
      </div>
      <div className="phone">
        <h5>Phone</h5>
        <ul>
            <li>+233 409 3443 3414</li>
            <li>+233 409 3443 3412</li>
        </ul>
      </div>
      <div className="socials">
        <h5>Socials</h5>
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
