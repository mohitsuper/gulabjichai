import React from 'react'
import '../style/Home.scss'

import Navbar from '../compontes/Navbar'
import Hero from '../compontes/hero'
import Footer from '../pages/Footer'
import Page2 from '../pages/Page2'
import Menulist from '../pages/Menulist'
import Chaiman from '../pages/Chaiman'

export default function Home() {
  return (
    
    <div className='main xl:h-screen  h-[65rem] bg-[url("./asstes/images/Asset-12.png")] bg-[center center] bg-auto mb-[5rem]'>
        <div className="bg-overlay bg-[#FCF6EF] xl:h-screen h-full opacity-[.9]">
        </div>
        <div className="container">
           <Hero/>
        </div>
    </div>


  )
}
