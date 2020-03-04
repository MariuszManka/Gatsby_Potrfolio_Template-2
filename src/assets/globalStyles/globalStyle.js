import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html{
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  
  p {
    font-size: 1.6rem;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
`

export default GlobalStyle
