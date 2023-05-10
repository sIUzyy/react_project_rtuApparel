import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import accMug from '../assets/MugAcc.png'
import accMugMockup from '../assets/MugAccMockup.png'

export const MugCBET = () => {
  return (

    <div className='max-w-7xl mx-auto md:w-96 md:mr-5'>
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
            <div>
              <SwiperSlide>
               <img src={accMug} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={accMugMockup} alt='' />
              </SwiperSlide>
              </div>



          </Swiper>
    </div>
  )
}

export default MugCBET