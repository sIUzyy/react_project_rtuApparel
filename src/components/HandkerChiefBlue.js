import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import handkerChiefBlue from '../assets/HandkerchiefBlue.png'
import handkerChiefMockup from '../assets/HandkerchiefBlueMockup.png'

export const HandkerChiefBlueCart = () => {
  return (

    <div className='max-w-7xl mx-auto md:w-96 md:mr-5'>
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
               <img src={handkerChiefBlue} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={handkerChiefMockup} alt='' />
              </SwiperSlide>


          </Swiper>
    </div>
  )
}

export default HandkerChiefBlueCart