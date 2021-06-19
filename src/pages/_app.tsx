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
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="A app challange with Google Maps for Foton hiring proccess test 
          as Front-end Developer"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <FontFaces />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
