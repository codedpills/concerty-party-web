import React from "react"

import MainNavbar from "./Navbar/MainNavbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
