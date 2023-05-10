import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import handkerChiefWhite from '../assets/HandkerchiefWhite.png'
import handkerChiefWhiteMockup from '../assets/HandkerchiefWhiteMockup.png'

export const HandkerChiefWhiteCart = () => {
  return (

    <div className='max-w-7xl mx-auto md:w-96 md:mr-5'>
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
               <img src={handkerChiefWhite} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={handkerChiefWhiteMockup} alt='' />
              </SwiperSlide>


          </Swiper>
    </div>
  )
}

export default HandkerChiefWhiteCart