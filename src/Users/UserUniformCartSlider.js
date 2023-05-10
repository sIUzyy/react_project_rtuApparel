//SLIDESHOW COMPONENT
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PEFront from "../components/PEFrontShirtSlider";
import PEBack from "../components/PEBackShirtSlider";
import PEPackage from "../components/PEPackageSlider";

// import required modules
import { Pagination } from "swiper";

export default function UserUniformCartSlider() {
  return (
    <div className="max-w-7xl mx-auto md:w-96 md:mr-5">
    
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
                 <PEFront/>
              </SwiperSlide>

              <SwiperSlide>
                  <PEBack/>
              </SwiperSlide>

              <SwiperSlide>
                  <PEPackage/>
              </SwiperSlide>

          </Swiper>
    
      </div>
  );
}