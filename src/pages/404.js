import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import { grey, lightText, beige } from "../utils/color"
import { GlobalStyle } from "../utils/globalStyles"
import Meme from "../images/sorry.jpg"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  background-color: ${grey};
  color: ${lightText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ImageWrap = styled.div`
  max-width: 100%;
  margin-top: 2rem;
`

const ImageMeme = styled.img`
  width: 26rem;

  @media screen and (min-width: 768px) {
    width: 46rem;
  }
`

const Text = styled.div`
  font-size: 2rem;
  text-align: center;
`

const NavItem = styled(Link)`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-align: center;
  color: ${beige};
  letter-spacing: 0.8rem;
  margin-top: 2rem;

  &:hover,
  &:focus {
    color: ${lightText};
  }

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

const NotFoundPage = () => (
  <Wrapper>
    <Helmet>
      <meta name="theme-color" content="#241d1b"></meta>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css"
      ></link>
    </Helmet>
    <GlobalStyle />
    <Text>Oh no! something bad happened...</Text>
    <SEO title="404: Página no encontrada" />
    <ImageWrap role="img" aria-label="face_with_head_bandage">
      <ImageMeme src={Meme} alt="Meme" />
    </ImageWrap>
    <NavItem to="/">Volver a la página de inicio</NavItem>
  </Wrapper>
)

export default NotFoundPage
