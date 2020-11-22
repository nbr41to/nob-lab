import 'styles/reset.css'
import 'styles/globals.css'
import Head from "next/head"
import Footer from 'templates/footer'
import { Layout } from 'templates/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Knob's Lab</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
