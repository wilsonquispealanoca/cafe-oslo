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

const Contacts = () => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <Title>Contacta con nosotros</Title>
          <Message>
            Si quieres hacer una reserva, tienes alguna sugerencía o simplemente
            quieres saludar, escríbenos a: <strong>cafeoslo@cafeoslo.es</strong>
          </Message>
        </Column>
        <Column primary>
          <Title>¿Sabes dónde estamos?</Title>
          <Message>
            C/ Mayor, 15<br></br>0000 Barcelona<br></br>
            <strong>(Google Maps)</strong>
          </Message>
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Contacts
