import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination } from "swiper";
import EngineeringMug from '../assets/MugEngineering.png'
import EngineeringMockup from '../assets/MugEngineeringMockup.png'

import ArkiMug from '../assets/MugArki.png'
import ArkiMockup from '../assets/MugArkiMockup.png'

export const MugCEAT = () => {
  return (

    <div className='max-w-7xl mx-auto md:w-96 md:mr-5'>
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
            <div>
              <SwiperSlide>
               <img src={EngineeringMug} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={EngineeringMockup} alt='' />
              </SwiperSlide>
              </div>

              <div>
              <SwiperSlide>
               <img src={ArkiMug} alt='' /> 
              </SwiperSlide>
            

              <SwiperSlide>
                  <img src={ArkiMockup} alt='' />
              </SwiperSlide>
              </div>


          </Swiper>
    </div>
  )
}

export default MugCEAT