import 'styles/reset.css'
import 'styles/globals.css'
import Header from 'templates/header'
import Footer from 'templates/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
