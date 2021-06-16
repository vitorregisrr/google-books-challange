import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "SF Pro Display";
        src: url('/fonts/sfpro-display/sfpro-r.woff2') format('woff2'), 
                url('/fonts/sfpro-display/sfpro-r.woff') format('woff'),
                url('/fonts/sfpro-display/sfpro-r.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    
    @font-face {
        font-family: "SF Pro Display";
        src: url('/fonts/sfpro-display/sfpro-b.woff2') format('woff2'), 
                url('/fonts/sfpro-display/sfpro-b.woff') format('woff'),
                url('/fonts/sfpro-display/sfpro-b.ttf') format('truetype');
        font-style: bold;
        font-weight: 700;
        font-display: swap;
    }
`

export default GlobalStyles
