import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const ImgWrap = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
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
  padding-top: 40%;
  text-align: center;
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

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "Fondo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImgWrap
      style={{ height: "100vh" }}
      fluid={data.indexImage.childImageSharp.fluid}
      fadeIn
    >
      <ContentWrap>
        <Title>
          Recién hecho<br></br>todos los días
        </Title>
        <Row />
        <SubTitle>
          Chocolate cupcake ipsum dolor Sit amet marshmallow topping cheesecake
          muffin Halvah croissant candy canes bonbon candy Apple pie jelly beans
          topping carrot Apple pie jelly cake danish tart cake cheesecake Muffin
          danish.
        </SubTitle>
      </ContentWrap>
    </ImgWrap>
  )
}

export default Image
