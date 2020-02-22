import { createGlobalStyle } from "styled-components"
import { bodyFont } from "./typography"
import { white } from "./color"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-family: ${bodyFont};
    font-size: 10px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    background: ${white};
  }
`
