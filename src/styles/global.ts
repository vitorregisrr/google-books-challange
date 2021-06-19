import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
      --background: #fefaf6;
      --highlight: #FF6978;
      --beige: #FFF6E5;
      --white: #eeeeee;
      --dark--1: #54565A;
      --dark--2: #000000;
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
    font-family: 'SF Pro Display', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: var(--background);
    color: var(--dark);
  }

  @keyframes fadeIn{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`

export default GlobalStyles
