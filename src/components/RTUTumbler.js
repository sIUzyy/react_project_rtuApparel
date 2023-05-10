import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import tumblerimg from '../assets/RTUTumblr.png'
import tumblermock from '../assets/RTUTumbler.png'

export const RTUTumbler = () => {
  return (

    <div className='max-w-7xl mx-auto md:w-96 md:mr-5'>
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
               <img src={tumblerimg} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={tumblermock} alt='' />
              </SwiperSlide>


          </Swiper>
    </div>
  )
}

export default RTUTumbler