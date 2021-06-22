import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'

import GlobalStyles from 'styles/global'
import FontFaces from 'styles/fonts'
import { UserProvider } from 'contexts/user'
import { AnimatePresence } from 'framer-motion'
function App({ Component, pageProps, router }: AppProps) {
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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <FontFaces />
      <GlobalStyles />
      <UserProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </UserProvider>
    </>
  )
}

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default App
