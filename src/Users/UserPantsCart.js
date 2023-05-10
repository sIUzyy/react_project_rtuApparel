//RTU PANTS PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import PEPantsFront from '../components/PEPantsFront'
import PEPantsBack from '../components/PEPantsBack';
import PEPantsPackage from '../components/PEPantsPackage';

// import required modules
import { Pagination } from "swiper";

export const UserPantsCart = () => {

  const [imageSlide, setImageSlide] = useState(0)

  const handlePEFront = () =>{
    setImageSlide(0)
  }

  const handlePEPackage = () => {
    setImageSlide(1)
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

              {imageSlide === 0 && ( <SwiperSlide><PEPantsFront/></SwiperSlide> )}
              {imageSlide === 0 && ( <SwiperSlide><PEPantsBack/></SwiperSlide> )}

              <div className='md:w-96 md:mr-5'>
              {imageSlide === 1 && ( <SwiperSlide><PEPantsPackage/></SwiperSlide> )}
              </div>

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>P.E PANTS</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>
          <button onClick={handlePEFront} className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>PANTS</button>
          <button onClick={handlePEPackage}  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>PACKAGE</button>
         
        </div>

        <div className='flex items-center flex-wrap mt-5 '>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>SIZES:</h1>
          <button  className='border p-1 w-16 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>S</button>
          <button  className='border p-1 w-16 text-sm mr-2 font-semibold hover:border-orange-500 italic focus:border-orange-500'>M</button>
          <button  className='border p-1 w-16 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>L</button>
          <button  className='border p-1 w-16 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>XL</button>
         
        </div>
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>RTU Apparel's pants are designed with both style and functionality in mind.
         Made with high-quality materials, these pants are durable and comfortable for everyday wear.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality cotton blend fabric that is breathable and comfortable to wear</li>
        <li>Durable and long-lasting materials to ensure that the pants last for a long time</li>
        <li>Stretchable and flexible fabric that allows for ease of movement</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Elastic waistband with a drawstring that allows for a comfortable and secure fit</li>
        <li>Multiple pockets, including front and back pockets, to provide ample storage space for personal items</li>
        <li>Tapered leg design that provides a sleek and modern look</li>
        <li>RTU Apparel logo embroidery on the front and back pockets, giving the pants a stylish touch</li>
        <li>Machine washable for easy care and maintenance</li>
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

export default UserPantsCart

