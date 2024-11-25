import React, { useState } from 'react'
import '../style/Mistiler.css'
export default function Container({children,sty,rou,height,width=100 ,bottom = -10,left=-10 ,bg="red" , hoverrot=0,overlaySty,color="#F5D202"}) {
  let [Conhover,setConhover] = useState(false)

  return (

    <div style={{
      position:"relative",
    }} className=''>

    <div style={{
      rotate:`${rou}deg`,
      // height:`${height}px`,
      position:"relative",
      zIndex:"1",
      border: `5px solid ${color}`,
    }} onMouseEnter={()=>setConhover(!Conhover)} className={`con bg-[#F8F8F8] text-[#000]  rounded-[.5rem]  hover:rotate-0 ${sty}`}>
      {children}
    </div>

    <div style={{
      // background:`${}`,
      position:"absolute",
      bottom:`${bottom}px`,
      // left:`${left}px`,
      // width:`${width}%`,
      height:"100%",
      // borderRadius:".3rem",
      rotate:`${(!Conhover)?`${rou}deg`:`-${rou}deg`}`,
      transition:"ease all 0.5s"
      // zIndex:-1,
    }} className={`overlay-div bg-red-500 rounded-[.3rem] left-[-10px] right-[-10px] w-full ${overlaySty}`}></div>
  </div>

  )
}
