//RTU PATCH PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PatchBB from '../components/PatchBB';
import PatchBW from '../components/PatchBW';
import PatchWB from '../components/PatchWB';
import PatchWBL from '../components/PatchWBL';

// import required modules
import { Pagination } from "swiper";

export const UserPatchCart = () => {

  const [imageSlide, setImageSlide] = useState(0)
 
  const handleBlacknBlue = () =>{
    setImageSlide(0)
  }

  const handleBluenWhite = () => {
    setImageSlide(1)
  }

  const handleWhitenBlack = () => {
    setImageSlide(2)
  }

  const handleWhitenBlue = () => {
    setImageSlide(3)
  }

  
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >
              {imageSlide === 0 && <SwiperSlide><PatchBB/></SwiperSlide>}
              {imageSlide === 1 && <SwiperSlide><PatchBW/></SwiperSlide>}
              {imageSlide === 2 && <SwiperSlide><PatchWB/></SwiperSlide>}
              {imageSlide === 3 && <SwiperSlide><PatchWBL/></SwiperSlide>}

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU PATCH</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center flex-wrap'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>

         <div className='p-1'>
          <button onClick={handleBlacknBlue} className='border p-1 w-32 mr-2 text-sm mb-1 font-semibold hover:border-orange-500 italic focus:border-orange-500'>BLACK & BLUE</button>
          <button onClick={handleBluenWhite}  className='border p-1 w-32 text-sm font-semibold mr-1 hover:border-orange-500 italic focus:border-orange-500'>BLUE & WHITE</button>
          <button onClick={handleWhitenBlack} className='border p-1 w-32 mr-2 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>WHITE & BLACK</button>
          <button onClick={handleWhitenBlue}  className='border p-1 w-32 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>WHITE & BLUE</button>
          </div>
      
        </div>

      
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU patch is an embroidered patch that is specially designed to be affixed onto RTU Uniforms. 
        The patch features the RTU logo, adding a touch of personalization and professionalism to the uniform. </p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality embroidery thread for durability and longevity</li>
        <li>Twill fabric backing for added strength and structure</li>
        <li>Heat-seal adhesive backing for easy application</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Vibrant and bold colors to match the RTU branding</li>
        <li>High-quality stitching for a professional finish</li>
        <li>Easy to apply using a heat-seal adhesive backing</li>
        <li>Can be used on a variety of RTU Apparel such as jackets, hats, and backpacks</li>
        <li>Adds a personalized touch to RTU Apparel, making it stand out from the crowd</li>
        </ul>

        <div className='border-b pb-2'>
        <h1 className='text-lg font-semibold text-indigo-600'>CARE INSTRUCTIONS:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4 '>
        <li>Machine washable for easy cleaning</li>
        <li>Tumble dry low or hang dry to avoid shrinking or damaging the fabric</li>
        <li>Do not bleach or iron the print to ensure it lasts for a long time</li>
        </ul>
        </div>

       </div>
    </div>
    </div>
  )
}

export default UserPatchCart



