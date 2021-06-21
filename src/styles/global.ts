import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
      --background: #fefaf6;
      --highlight: #FF6978;
      --highlight--darken: #e55765;
      --beige: #FFF6E5;
      --white: #eeeeee;
      --dark--1: #54565A;
      --dark--2: #000000;
      --dark--3: #3F4043;
      --dark--4: #2A2B26;
      --dark--5: #74776D;
      --navy: #00173D;
      --blue: #4ABDF1;
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
    height: -webkit-fill-available;
  }

  body{
    width: 100vw;
    height: 100%;
    background: var(--background);
    color: var(--dark);
    overflow: hidden;
  }

  @keyframes fadeIn{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }

  #nprogress .bar {
    background-color: var(--highlight) !important;
    height: 5px;
    z-index: 1800;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px var(--highlight--darken), 0 0 5px var(--highlight--darken);
  }

  .modal-video{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
    z-index: 1900;

    .modal-video-movie-wrap{
      padding: 0 !important;
    }

    iframe{
      width: 100%;
      height: 70vh;
      margin: 0 auto;
    }
  }

`

export default GlobalStyles
