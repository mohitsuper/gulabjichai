import React from 'react'
import Container from './container'

export default function AboutHero() {
  return (
    <div className='xl:px-[15rem] px-[2rem] xl:flex-row flex-col flex jusfiy-center items-center pt-[3rem]'>
        <Container sty={" about-con py-2 px-4 xl:w-[60%] w-full"} overlaySty={'xl:w-[60%] w-full '} rou={3}>
            <h1>
            74 Year Old Chai Store
            </h1>
            <p>There is such magic in the hands of Gulab ji, who lives in the pink city, that whoever tastes the tea made by his hands, definitely comes to Jaipur again. Before independence, in 1946, Gulab Singh set up a tea cart and after that took a small shop, the Gulab of that time have now become Gulab ji. Born in a prosperous family, the life of Gulab ji is very simple.</p>
            <img src="https://gulabjichaiwale-com.translate.goog/wp-content/uploads/2023/01/Asset-13-1024x957.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt="" />
        </Container>
        <div className=' xl:w-full z-2 relative py-[5rem]'>
          <img src="https://gulabjichaiwale-com.translate.goog/wp-content/uploads/2023/01/Asset-2-1-879x1024.png?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" alt="nnn"  className='xl:w-[100%] w-[150px] '/>
        </div>
    </div>
  )
}
