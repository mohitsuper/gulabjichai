import React, { useState } from 'react'
import Container from './container'
import {Link, useNavigate} from 'react-router-dom'
import '../style/Navbar.scss'
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
 

 let navLinks =  [
   {
    name:"Home",
    link:'/'
   },
   {
    name:"Menu",
    link:'/menu'
   },
   {
    name:"shop",
    link:'/shop'
   },
   {
    name:"about gulabji chai",
    link:'/about'
   },
   {
    name:"location",
    link:'/location'
   },
   {
    name:"contact",
    link:'/contact'
   },
 ]
  

 let [Navactive, setNavactive] = useState(0)

 let [Activemenu,setActivemenu] = useState(true)
  return (
    <div className='nav-main xl:mx-[14rem] mx-[2rem] py-2 flex justify-between items-center'>
       <div className="animation logo xl:w-[160px] w-[100px]">
         <img src="./asstes/images/Logo-Main-2@4x-300x199.png" alt="" />
       </div>

       <Container sty={'xl:flex gap-5 px-[2rem] py-[.3rem] duration-[.3s] '} >

          <a  href="#" className={`menu  flex justify-center xl:hidden items-center text-[4rem] duration-[.3s]`} onClick={()=>setActivemenu(!Activemenu)}> 
            {
              (!Activemenu)?<GiHamburgerMenu/>:<MdClose/>
            }
          </a>
            {
            navLinks.map((item,index)=>{
              return(

                <a  className={`${(Navactive == index)?  "text-[#6C1D0F]":""} duration-[.2s]  xl:block  items-center ${(Activemenu)?"flex":"hidden"}`} key={index} onClick={()=>setNavactive(index)}>
                <Link to={item.link}>{item.name}</Link></a>
                
              )
            })
          }
       </Container>
    </div>
  )
}
