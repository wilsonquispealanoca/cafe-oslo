import React from "react"
import styled from "styled-components"
import { grey, lightText } from "../../utils/color"

const Wrapper = styled.div`
  background-color: ${grey};
  padding: 4rem 4rem;
  color: ${lightText};
`

const Message = styled.p`
  font-size: 1.6rem;
`
const Fotter = () => {
  return (
    <Wrapper>
      <Message>
        Septiembre 2015<br></br>Todos los derechos reservados.
      </Message>
    </Wrapper>
  )
}

export default Fotter
