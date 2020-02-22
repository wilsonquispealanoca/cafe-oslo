import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import BreakfastImage from "../components/breakfastImage"
import SEO from "../components/seo"
import Invitations from "../components/SectionOne/invitations"
import Services from "../components/SectionTwo/Services"
import Contacts from "../components/SectionThree/contacts"

const ImageWrap = styled.div`
  display: absolute;
`
const IndexPage = () => (
  <Layout>
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
    <SEO title="Inicio" />
    <ImageWrap>
      <Image />
    </ImageWrap>
    <Invitations />
    <ImageWrap>
      <BreakfastImage />
    </ImageWrap>
    <Services />
    <Contacts />
  </Layout>
)

export default IndexPage
