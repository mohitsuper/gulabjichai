import React from 'react'
import Container from '../compontes/container'
import '../style/Chaiman.scss'
import SwiperImages from '../compontes/SwiperImages'

export default function Chaiman() {
  let images1 = [
    {
      img:"./asstes/images/IMG-20221229-WA0001.jpg",
    },
    {
      img:"./asstes/images/subhayan-das-GPoJezGXMp4-unsplash-scaled.jpg"
    },
    {
      img:"./asstes/images/20221217195819_DEEP1622-scaled.jpg",
    },
    {
      img:"./asstes/images/1.jpeg"
    }
  ]

  let images2 = [
    {
      img:"./asstes/images/12.jpg",
    },
    {
      img:"./asstes/images/3.jpg"
    },
    {
      img:"./asstes/images/9.jpg",
    },
    {
      img:"./asstes/images/6.jpg"
    }
  ]

  let images3 = [
    {
      img:"./asstes/images/16.jpg",
    },
    {
      img:"./asstes/images/312412212321.jpg"
    },
    {
      img:"./asstes/images/20221217193629_DEEP1574-scaled.jpg",
    },
    {
      img:"./asstes/images/20221217192502_DEEP1555-scaled.jpg"
    }
  ]


  return (
    <div className='xl:h-screen h-[60rem]  bg-[url("./asstes/images/Pattern-2.jpg")] bg-cover bg-[center center] bg-no-repeat pb-[5rem]'>
       <div style={{
        position:"relative",
        // height:"300px"
       }} className="relative part-2-swiper grid xl:top-[60%] top-[5%] xl:grid-cols-3 grid-cols-1 gap-[3rem] xl:px-[15rem] px-[2rem] reletive bottom-0 xl:h-[300px] h-[100px] pb-[2rem]">
         <Container rou={2}  sty={"chai-con px-[0rem] py-[0rem]  h-[300px]"}>
           <SwiperImages  arr={images1}/>
         </Container>
         <Container height={300} rou={-2} sty={"chai-con px-[0rem] py-[0rem] "} overlaySty={'bg-orange-500'} color='#8B421B'>
           <SwiperImages arr={images2}/>
         </Container>
         <Container  height={300} rou={2} sty={"chai-con px-[0rem] py-[0rem]"}>
           <SwiperImages arr={images3}/>
         </Container>
       </div>
    </div>
  )
}
