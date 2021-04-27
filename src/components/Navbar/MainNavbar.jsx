import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

import "./mainNavbar.scss"

const MainNavbar = ({ auth }) => {
  const authLink = auth ? (
    <>
      <Link to="/login" className="nav-link">
        {" "}
        Logout{" "}
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="nav-link">
        {" "}
        Login{" "}
      </Link>
    </>
  )
  return (
    <Navbar bg="light" expand="lg" className="main-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo-concert">Concert</span>
          <span className="logo-party">Party</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/concerts" className="nav-link">
              {" "}
              Featured concerts{" "}
            </Link>
            {authLink}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
