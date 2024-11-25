import React from 'react'
import Navbar from '../commnts/Navbar'

export default function () {
  return (
    <div style={{
        backgroundSize:"auto",
        backgroundPosition:"ceneter center",
        backgroundRepeat:"no-repeat",
    }} className='reletive h-[100vh] w-full z-[-1] bg-[url("./asstes/images/bg1.png")] '>
            
        <div style={{
            position:"absolute",
        }} className="overlay bg-[#FCF6EF] z-[2] opacity-[0.9] w-full h-[100vh]">
        </div>
        <Navbar/>
    </div>
  )
}
