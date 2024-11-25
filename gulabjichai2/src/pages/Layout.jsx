import React, { Children } from 'react'
import Navbar from '../compontes/Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className="">
        <Navbar/>
        <div className="content">
           {children}
        </div>
        <Footer/>
    </div>
  )
}
