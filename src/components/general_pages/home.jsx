import React from 'react'
import Crypto_price from './crypto_price'
import Explore from './explore'
import Footer from './footer'
import Get_started from './get_started'
import Header from './header'
import Intro from './intro'
import Join from './join'

export default function Home() {
  return (
    <>
        <Header />
        <Intro />
        <Join />
        <Explore />
        <Get_started />
        <Footer />
    </>
  )
}
