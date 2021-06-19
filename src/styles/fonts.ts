import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    /* SF Pro Display 400 */
    @font-face {
        font-family: "SF Pro Text";
        src: url('/fonts/sfpro-text/sfpro-text-r.woff2') format('woff2'), 
                url('/fonts/sfpro-text/sfpro-text-r.woff') format('woff'),
                url('/fonts/sfpro-text/sfpro-text-r.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    /* SF Pro Display 700 */
    @font-face {
        font-family: "SF Pro Text";
        src: url('/fonts/sfpro-text/sfpro-text-b.woff2') format('woff2'), 
                url('/fonts/sfpro-text/sfpro-text-b.woff') format('woff'),
                url('/fonts/sfpro-text/sfpro-text-b.ttf') format('truetype');
        font-style: bold;
        font-weight: 700;
        font-display: swap;
    }

    /* SF Pro Display 400 */
    @font-face {
        font-family: "SF Pro Display";
        src: url('/fonts/sf-pro-display/sfpro-r.woff2') format('woff2'), 
                url('/fonts/sf-pro-display/sfpro-r.woff') format('woff'),
                url('/fonts/sf-pro-display/sfpro-r.ttf') format('truetype');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }
    
    /* SF Pro Display 900 */
    @font-face {
        font-family: "SF Pro Display";
        src: url('/fonts/sf-pro-display/sfpro-b.woff2') format('woff2'), 
                url('/fonts/sf-pro-display/sfpro-b.woff') format('woff'),
                url('/fonts/sf-pro-display/sfpro-b.ttf') format('truetype');
        font-style: bold;
        font-weight: 700;
        font-display: swap;
    }

    /* Roboto 900 */
    /* imported on in app head */

`

export default GlobalStyles
