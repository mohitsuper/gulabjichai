import React from 'react'
import Home from './Home'
import Page2 from './Page2'
import Menulist from './Menulist'
import Chaiman from './Chaiman'
import Localtion from './Localtion'
import Footer from './Footer'
import VideoSection from './videoSection'
import Layout from './Layout'

export default function ALLpages() {
  return (
    <Layout>
      <Home/>
      <Page2/>
      <Menulist/>
      <Chaiman/>
      <VideoSection/>
     <Localtion/>
      {/* <Footer/> */}
    </Layout>
  )
}
