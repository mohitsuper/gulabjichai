import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SwiperImages({arr,sty}) {
  
  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
          arr.map((val,index)=>{
            return(
              <SwiperSlide key={index}>
                <img style={{
                  objectFi:"cover",
                  height:"100%",
                  width:"100%",
                  objectPosition:"center",

                }} src={val.img} className={`object-cover object-center  h-full w-full ${sty}`} alt=""/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
