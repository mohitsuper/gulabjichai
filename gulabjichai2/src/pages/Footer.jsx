import React, { useState } from 'react'
import '../style/Footer.scss'
import Container from '../compontes/container'
import { Link } from 'react-router-dom'
export default function Footer() {
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

  let icon = [
    {
      icon:<svg
      className="e-font-icon-svg e-fab-facebook"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>,    
    },
    {
      icon:
      <svg
  className="e-font-icon-svg e-fab-instagram"
  viewBox="0 0 448 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
</svg>,
    }
  ]
  return (
    <div className='footer-main bg-[url("./asstes/images/Pattern-1.jpg")]  bg-[center center] h-full w-full h-[30rem] '>
       <div className="xl:grid-cols-3  gird-cols-1 grid relative z- xl:px-[15rem] px-[2rem] gap-[5rem]">
           <Container sty={"flex f-logo w-full justify-center items-center p-5"} rou={-2} >
              <img src="https://gulabjichaiwale-com.translate.goog/wp-content/uploads/2022/12/Logo-Main-2@4x-2048x1357.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt=""  className='hover:scale-[1.1]
              duration-[.2s] xl:w-full w-[70%]'/> 
           </Container>
           <Container sty="explore " rou={2} color='#6C1D0F' overlaySty={'bg-orange-500'}>
            <h1 className=''>explore</h1>
            {
            navLinks.map((item,index)=>{
              return(
                <a href='#' className={`${(Navactive == index)?"text-[#6C1D0F]":""} block duration-[.2s]`} key={index} onClick={()=>setNavactive(index)}><Link to={item.link}>
                {item.name}
                </Link></a>
              )
            })
          }
           </Container>
           <Container sty="Follow" rou={-2}>
            <h1>Follow Us </h1>
            <div>
              {
              icon.map((item,index)=>{
                return(
                  <span key={index}>{item.icon}</span>
                )
              })
              }
            </div>
           </Container>
       </div>
       <div className="grid grid-cols-2 px-[2rem] xl:px-[15rem] py-[5rem] gap-10">
        <Container sty={'px-10 py-4 f-1 h-full'}>
          <p>©2024 - 2025 All Rights Reserved. Gulab Ji Chai Wale</p>
        </Container>
        <Container sty={'px-10 py-2 f-1 flex jusfity-between items-center gap-5 xl:flex-row  flex-col'}>
          <p>
          Developed by Algorithms of IT Solutions
          </p>
          <img src="./asstes/images/logo-4-1024x385-1 (1).png" alt="logo-4-1024x385-1 (1).jpg"  className='w-[100px]'/>
        </Container>
       </div>
    </div>
  )
}
