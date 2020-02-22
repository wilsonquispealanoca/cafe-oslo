import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Nav/navbar"
import { GlobalStyle } from "../utils/globalStyles"
import Fotter from "./Footer/Index"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Fotter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
