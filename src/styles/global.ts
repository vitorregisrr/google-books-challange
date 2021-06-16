import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
      --background: #F2F2F2;
      --highlight: #FF6978;
      --beige: ##FFF6E5;
      --white: #eeeeee;
      --navy: #00173D;
      --green: #EEF5DB;
      --purple: #451475;
      --container: 94rem;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 400;
  }

  .page-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyles
