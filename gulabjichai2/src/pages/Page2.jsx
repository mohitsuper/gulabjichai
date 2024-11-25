import React from 'react'
import '../style/Page2.scss'
import AboutCard from '../compontes/aboutCard'
import AboutHero from '../compontes/AboutHero'

export default function Page2() {
  return (
    <div className='xl:h-screen h-full bg-[url(./asstes/images/pexels-fwstudio-168447-scaled.jpg)] '>
      <div className="overlay-page2 h-full w-full ">
        <img src="./asstes/images/Asset-1-1.png" alt="" />
        <AboutCard/>
        <AboutHero/>
      </div>
    </div>
  )
}
