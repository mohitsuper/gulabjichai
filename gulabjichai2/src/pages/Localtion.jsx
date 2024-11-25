import React from 'react'
import '../style/Localtion.scss'
import Container from '../compontes/container'
import { FaPhoneAlt } from "react-icons/fa";


export default function Localtion() {
  let data = [
    {
      icon:
      <svg
      aria-hidden="true"
      className="e-font-icon-svg e-far-building"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z" />
    </svg>,
      name:"shop address",
      text:"Shop NO.17, Ganpati Plaza MI Road Jaipur Rajasthan INDIA",
    },
    {
      icon:
      <svg
      aria-hidden="true"
      className="e-font-icon-svg e-fas-phone-alt"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
    ,
      name:"phone",
      text:<div>+91 73002 42220
        <br/>+91  96101 49121</div>,
    },
    {
      icon:<svg
      aria-hidden="true"
      className="e-font-icon-svg e-fas-envelope"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
    ,
      name:"email",
      text:"gulabjichaiwalejaipur@gmail.com"
    },
  ]

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
    <div style={{
        opacity:0.9,
    }} className='localtion-main bg-[url("./asstes/images/indian-tea-glass.jpg")]  bg-[center center] h-full w-full '>
        <div>
          <Container sty={" flex xl:flex-row flex-col-reverse "} >
            <div className="part-1 xl:w-[40%] w-full xl:px-[1.5rem] py-[1rem]">
               <h1 className=''>contact us</h1>
               <div className="con-main flex flex-col">
                
                {
                  data.map((item, index) => {
                    return (
                      <div key={index} className='flex xl:flex-row flex-col  gap-5 py-10 xl:px-0 xl:items-center px-[1rem]'>
                        <div className="con-icon">
                          {item.icon}
                        </div>
                        <div className="con-text">
                          <h4>{item.name}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
               </div>
               <div className="icon-main">
              {
                icon.map((item,index)=>{
                  return(
                    <div key={index} className='icon'>
                      {item.icon}
                    </div>
                  )
                })
              }
               </div>
            </div>
            <div className="part-2 xl:w-[70%]   w-full  bg-red-500"> 
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455431.64306754834!2d75.851179!3d26.9016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30f70f74c63%3A0x3659e47432ae54e1!2sGulab%20Ji%20Chai%20Wale!5e0!3m2!1sen!2sus!4v1731918581054!5m2!1sen!2sus"
   className='h-full w-full'
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>


          </Container>
        </div>
     </div>
  )
}
