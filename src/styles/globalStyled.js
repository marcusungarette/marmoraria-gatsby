import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
  }

  h2 {
    color:#706c61;
  }
`

export default GlobalStyle