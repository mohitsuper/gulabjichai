import React from 'react'
import Home from './pages/Home'
import './style/main.scss'
import Page2 from './pages/Page2'
import Menulist from './pages/Menulist'
import Chaiman from './pages/Chaiman'
import VideoSection from './pages/videoSection'
import Localtion from './pages/Localtion'
import Footer from './pages/Footer'
// import { BrowserRouter as Router, Link ,Route,Switch } from 'react-router-dom''
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './compontes/Navbar'
import ALLpages from './pages/ALLpages'
import Layout from './pages/Layout'

export default function App() {

  return (
    <div className='bg-[#FCF6EF]'>
        <Router>
          <Routes>
              
              <Route path='/' element={<ALLpages/>}/>
              <Route path='/about' element={<Page2/>}/>
              <Route path='/menu' element={<Menulist/>}/>
              <Route path='/shop' element={<Chaiman/>}/>
              <Route path='/location' element={<Localtion/>}/>
              <Route path='/contact' element={<Footer/>}/>

          </Routes>
        </Router>

    </div>
  )
}
