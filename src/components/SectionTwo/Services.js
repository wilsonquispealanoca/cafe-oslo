import React from "react"
import styled from "styled-components"
import Icono1 from "../../images/icono1.png"
import Icono2 from "../../images/icono2.png"
import Icono3 from "../../images/icono3.png"
import Icono4 from "../../images/icono4.png"
import { white, grey, darkenText } from "../../utils/color"

const service_data = [
  {
    label: "Pan recién hecho",
    description:
      "Bonbon sweet bonbon jelly beans jelly-o i love lollopop. Cookie sesame snaps bear caw. Cake dragée danish. Powder I love liquorice macaroon.It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
    url: `${Icono1}`,
  },
  {
    label: "Tartas para cada día",
    description:
      "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
    url: `${Icono2}`,
  },
  {
    label: "Prueba nuestros dulces",
    description:
      "Bonbon sweet bonbon jelly beans jelly-o i love lollopop. Cookie sesame snaps bear caw. Cake dragée danish. Powder I love liquorice macaroon.",
    url: `${Icono3}`,
  },
  {
    label: "Ingredientes ecológicos",
    description:
      "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
    url: `${Icono4}`,
  },
]

const Wrapper = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 4rem 2rem;
  }
`

const Column = styled.div`
  background-color: ${white};
  color: ${grey};
  padding: 4rem 1.4rem 0;

  &:last-child {
    padding-bottom: 4rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const ImageWrap = styled.div`
  max-width: 100%;
  margin: 0 2rem 1rem;
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`

const Content = styled.div`
  color: ${darkenText};
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2.8rem;
`

const Message = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Services = () => {
  return (
    <Wrapper>
      <Row>
        {service_data.map(({ url, label, description }) => (
          <Column>
            <ImageWrap>
              <Image src={url}></Image>
            </ImageWrap>
            <Content>
              <Title>{label}</Title>
              <Message>{description}</Message>
            </Content>
          </Column>
        ))}
      </Row>
    </Wrapper>
  )
}

export default Services
