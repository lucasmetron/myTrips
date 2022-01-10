// import App from "next/app";
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        {/* <link rel="shortcut icon" href='' /> */}
        <meta
          name="description"
          content="A simple project starter to work with TypesScript, React, Next and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App