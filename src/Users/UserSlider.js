//SLIDESHOW COMPONENT

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SlideOne from "../components/slideshow-1";
import SlideTwo from "../components/slideshow-2";
import SlideThree from "../components/slideshow-3";
import SlideFour from "../components/slideshow-4";
import SlideFive from "../components/slideshow-5";

// import required modules
import { Pagination } from "swiper";

export default function SliderComponent() {
  return (
    <div className="max-w-7xl mx-auto">
    
          <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              <SwiperSlide>
                 <SlideOne/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideTwo/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideThree/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideFour/>
              </SwiperSlide>

              <SwiperSlide>
                  <SlideFive/>
              </SwiperSlide>
          </Swiper>
    
      </div>
  );
}