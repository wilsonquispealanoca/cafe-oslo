import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { lightText } from "../utils/color"

const ImgWrap = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 2rem;
`
const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 3.4rem;
  margin-top: 28%;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 20%;
  }
`

const SubTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 1.6rem;
`

const Row = styled.div`
  height: 0.2rem;
  width: 36%;
  background-color: white;
  margin: 1.8rem 0 2rem;
`

const Button = styled.div`
  background-color: transparent;
  border: 0.2rem solid ${lightText};
  color: ${lightText};
  margin-top: 4rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.6rem;
  padding: 2rem 2rem;
  margin-bottom: 8rem;
  cursor: pointer;
`

const BreakfastImage = () => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "Fondo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImgWrap
      style={{ height: "100%" }}
      fluid={data.indexImage.childImageSharp.fluid}
      fadeIn
    >
      <ContentWrap>
        <Title>Ven a desayunar</Title>
        <Row />
        <SubTitle>
          Chocolate cupcake ipsum dolor Sit amet marshmallow topping cheesecake
          muffin Halvah croissant candy canes bonbon candy Apple pie jelly beans
          topping carrot Apple pie jelly cake danish.
        </SubTitle>
        <Button>Descubre nuestros productos</Button>
      </ContentWrap>
    </ImgWrap>
  )
}

export default BreakfastImage
