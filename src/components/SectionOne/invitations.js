import React from "react"
import styled from "styled-components"
import { red, beige } from "../../utils/color"

const Wrapper = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Column = styled.div`
  background-color: ${props => (props.primary ? `${red}` : `${beige}`)};
  color: ${props => (props.primary ? `${beige}` : `${red}`)};
  padding: 6rem 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 12rem 8rem;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2.8rem;
`

const Message = styled.p`
  font-size: 1.6rem;
`

const Invitations = () => {
  return (
    <Wrapper>
      <Row>
        <Column primary>
          <Title>Ven al brunch de los domingos</Title>
          <Message>
            Sesame snaps apple pie jelly beans topping carrot Apple pie jelly
            cake danish tart cake cheesecake Muffin danish.
          </Message>
        </Column>
        <Column>
          <Title>Celebra tus fiestas con nosotros</Title>
          <Message>
            Bonbon sweet bonbon jelly beans jelly-o i love lollopop. Cookie
            sesame snaps bear caw. Cake dragée danish. Powder I love liquorice
            macaroon.
          </Message>
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Invitations
