import React from 'react'
import '../style/Menulist.scss'
import Container from '../compontes/container'
export default function Menulist() {
  return (
    <div className='menu-main  bg-[url("./asstes/images/Pattern-1.jpg")] bg-cover bg-[center center] h-full w-full '>
        <div className="menulist flex h-full w-full xl:flex-row flex-col ">
            <img src="https://gulabjichaiwale-com.translate.goog/wp-content/uploads/2023/02/gulabji-chai-wale-menu-727x1024.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt="" />
            <img src="https://gulabjichaiwale.com/wp-content/uploads/2023/02/gulabji-chai-wale-jaipur-menu-727x1024.png" alt="" />
        </div>
       <div className="ghali h-[15rem] w-full bg-[#e3e3e2e0] relative ">
       <img className='chaiman-img' src="https://gulabjichaiwale-com.translate.goog/wp-content/uploads/2023/01/stock-vector-chai-wala-indian-text-translation-tea-seller-illustration-2017258379-transformed__1_-removebg-preview.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt="" />

       <div className="chaiman">
         <Container sty={"chaiman-con px-[0rem] py-[0rem]  xl:w-[30%] w-[25rem] absolute rounded-[1.2rem] overflow-hidden xl:top-[20%] top-[100%]  xl:left-[35%] left-[10%]"}  bottom={-10}   rou={-1} overlaySty={"rounded-[1.2rem] xl:left-[540px] left-[7%] w-[25rem] xl:w-[50rem] "}>
            <div className="back-over bg-[url('./asstes/images/Asset-12.png')] ">
              <div className="overlay">
                  <div className="text">
                    <p>#gulabjichaiwala</p>
                    <img src="./asstes/images/insta-logo-img.png" alt="" />
                  </div>
                  <div className="img">
                  <svg aria-hidden="true" class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>                
                  </div>
              </div>
            </div>
         </Container>
      </div>
       </div>

    </div>
  )
}
