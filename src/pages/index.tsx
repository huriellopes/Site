import React from 'react'
import Head from 'next/head'
import ImageTop from '../components/ImageTop'
import Footer from '../components/Footer'
import About from '../components/About'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Huriel Lopes</title>
      </Head>
      <ImageTop />
      <About />
      <Footer />
    </div>
  )
}

export default Home
