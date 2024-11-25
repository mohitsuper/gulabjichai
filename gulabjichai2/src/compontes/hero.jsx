import React from 'react'
import Container from './container'
import { FaLocationDot } from "react-icons/fa6";
import SwiperImages from './SwiperImages';
import '../style/Home.scss';
import { gsap } from "gsap";
export default function Hero() {
  // gsap.from(".hero",{
  //   x:"-50%",
  //   y:"50%",
  //   scrollTrigger:{
  //     trigger:".hero",
  //     start:"top 20%",
  //     end:"bottom 80%",
  //     scrub: true,
  //     markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
  //     markers:true,

  //   },
  //   duration:1.5,
  //   ease:"power2.out",
  // })
  let images = [
    {
      img:"./asstes/images/4.jpg",
    },
    {
      img:"./asstes/images/5.jpg"
    },
    {
      img:"./asstes/images/2.jpg",
    },
    {
      img:"./asstes/images/5.jpeg"
    }
  ]


  return (
    <div className='hero-main xl:mx-[15rem] mx-[2rem] pt-[1rem] flex xl:gap-[3rem]  justify-between flex-col xl:flex-row hover:rotate-[0deg]'>
                
            <div style={{
              position:"relative",
              zIndex:"",
            }} className="hero xl:w-1/2 w-full  rounded-[.5rem]  rotate-[-2deg] bg-red-500 hover:rotate-[0deg] duration-[.3s]">
              <h1 className='xl:text-[2rem] font-bold text-[#6C1D0F] text-[1rem]'>The Famous Chai Of Pink City
              </h1>
              <p>There is a ‘rose’ in the garden of Jaipur ‘Pink City’ which bloomed before independence but its fragrance is still intact today.</p>

              <div className="button animation">
                <span className='relative inline-block'>
                <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
               </svg>
                </span>
                <button className=" text-white py-[0]">location</button>
              </div>

              <img className='chai' src="./asstes/images/stock-vector-garma-garam-kadak-chai-indian-tea-glass-with-tea-pot-pouring-vector-illustration-of-popular-1988260520-transformed-removebg-preview (1).png" alt="" />

              <div style={{
                position:"absolute",
                zIndex:"-10",
                top:"-10px",
                background:"#F8F8F8",
                border:"3px solid #f5d202",
              }} className=" w-full h-full bg-red-500  bottom-[-10px] left-[10px] rounded-[.5rem] "></div>

            </div>


           <div className='xl:w-1/2  xl:h-[540px] hero-con border-[3px] border-[#6C1D0F] rounded-[.5rem] relative z-[1] rotate-[2deg] hover:rotate-[0deg] duration-[.3s]'>

          <SwiperImages arr={images} sty={"rounded-[.3rem]"}/>
          <img src="./asstes/images/Asset-2GJ-Chai.svg" alt="" className=''/>
          <div className=" w-full h-full bg-[#E96B28] absolute bottom-[-10px] left-[-10px] rounded-[.5rem]">
            
          </div>
           </div>

           
    </div>
  )
}
