import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./navbarlinks"
import { grey, beige, red } from "../../utils/color"
import Logo from "./Logo"

const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (min-width: 992px) {
    height: 8.6rem;
  }
`

const Nav = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavList = styled.ul`
  position: fixed;
  top: ${props => (props.open ? "-100vh" : "0")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1500;
  transition: top 0.5s ease-in-out;

  @media screen and (min-width: 992px) {
    position: initial;
    width: initial;
    height: initial;
    background-color: transparent;
    margin: 0;
    flex-direction: row;
  }
`

const Toggle = styled.div`
  padding: 0.2rem 0.6rem;
  background-color: ${red};
  color: ${beige};
  font-size: 3rem;
  cursor: pointer;
  position: relative;
  z-index: 2000;

  @media screen and (min-width: 992px) {
    display: none;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <Header>
      <Wrapper>
        <Nav>
          <Logo />
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i class="fas fa-bars"></i>
          </Toggle>
          {navbarOpen ? (
            <NavList>
              <NavbarLinks />
            </NavList>
          ) : (
            <NavList open>
              <NavbarLinks />
            </NavList>
          )}
        </Nav>
      </Wrapper>
    </Header>
  )
}

export default Navbar
