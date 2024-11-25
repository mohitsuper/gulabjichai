import React from 'react'
import Container from '../compontes/container'
import "../style/VideoSection.scss"
export default function VideoSection() {
  let arr = [
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },
    {
        src:"https://www.youtube.com/embed/MwVcVgIyrHk?si=JU3gm9sp7ihDB1ED",
    },

  ]
  return (
    <div className='bg-[url("./asstes/images/Pattern-1.jpg")] bg-cover bg-[center center] h-full w-full bg-no-repeat '>
      <div className="bg-[#eee79fe1] w-full h-full ">
        <div className="main">
            <div className="video-heading">
                <h1>our featured video</h1>
            </div>
            <div className="video-container grid xl:grid-cols-3  grid-cols-1 xl:gap-[2.5rem] xl:px-[15rem] gap-[3rem] px-[2rem] pb-[10rem]">
                {
                    arr.map((val,index)=>{
                        return(
                            <Container sty={"px-[0rem] py-[0rem]"} height={250}>
                                <div key={index}className="video-box">
                                <iframe className='h-[240px] w-full object-cover' 
                                height="400px"
                                width="100%"
                                src={val.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </Container>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}
