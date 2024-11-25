import React from 'react'
import Container from './container'



export default function AboutCard() {
  let data = [
    {
        value:"5,000 +",
        name:"Tea Cups A Day"
    },
    {
        value:"Est. 1,946",
        name:"Before Independence"
    },
    {
        value:"30 ₹",
        name:"Gulabji Special Chai"
    }
  ]
  return (
    <div className='aboutCard flex xl:flex-row xl:px-[15rem] px-[2rem] flex-col justify-between xl:gap-1 gap-7 py-5'>
     {
        data.map((v,index)=>{
            return(
                <Container sty={`xl:px-[12rem] py-[1.2rem] xl:py-[.7rem] `} color={`${(index == 1)?"#6C1D0F":"#F6D649"}`} overlaySty={`${(index == 1)?"bg-orange-500":"bg-[#E74242]"}`}>
                    <div className="about-card flex flex-col text-center">
                        <span>{v.value}</span>
                        <p>{v.name}</p>
                    </div>
                </Container>
            )
        })
     }
     </div>
  )
}
