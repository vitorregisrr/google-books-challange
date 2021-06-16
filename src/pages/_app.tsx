import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import FontFaces from 'styles/fonts'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Google Books • Foton Challange</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F2F2F2" />
        <meta
          name="description"
          content="A app challange with Google Maps for Foton hiring proccess test 
          as Front-end Developer"
        />
      </Head>
      <FontFaces />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
