import type { AppProps } from 'next/app'
import Head from "next/head";
import { Fragment } from "react";
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <title>
        Next App
      </title>
    </Head>
    <Component {...pageProps} />
  </Fragment>
}