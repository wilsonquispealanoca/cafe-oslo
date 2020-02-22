import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { beige, lightText } from "../../utils/color"

const NavItem = styled(Link)`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${beige};
  letter-spacing: 0.8rem;

  &:hover,
  &:focus {
    color: ${lightText};
  }

  @media screen and (min-width: 992px) {
    margin-right: 2rem;
    font-size: 1.4rem;
    font-weight: 800;
    color: ${lightText};
    letter-spacing: normal;

    &:last-child {
      margin-right: 0;
    }
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">El espacio</NavItem>
      <NavItem to="/404">Productos</NavItem>
      <NavItem to="/404">Ofertas</NavItem>
      <NavItem to="/404">Reservas</NavItem>
      <NavItem to="/404">Contactos</NavItem>
    </>
  )
}

export default NavbarLinks
