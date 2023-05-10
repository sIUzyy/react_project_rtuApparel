//RTU JERSEY PRODUCTS WITH DESCRIPTION

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import JerseyFront from '../components/JerseyFront';
import JerseyBack from '../components/JerseyBack';
import JerseyShort from '../components/JerseyShort';
import JerseyPackage from '../components/JerseyPackage';

// import required modules
import { Pagination } from "swiper";

export const UserJerseyCart = () => {


  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >

              <SwiperSlide><JerseyFront/></SwiperSlide> 
              <SwiperSlide><JerseyBack/></SwiperSlide> 
              <SwiperSlide><JerseyShort/></SwiperSlide>
              <SwiperSlide><JerseyPackage/></SwiperSlide>
            

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU BLUE THUNDER</h1>
        <h1 className='font-bold text-gray-500 text-md -mt-2 italic'>JERSEY</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
      
        <div className='flex items-center flex-wrap mt-5 '>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>SIZES:</h1>
          <button  className='border p-1 w-16 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>S</button>
          <button  className='border p-1 w-16 text-sm mr-2 font-semibold hover:border-orange-500 italic focus:border-orange-500'>M</button>
          <button  className='border p-1 w-16 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>L</button>
          <button  className='border p-1 w-16 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>XL</button>
         
        </div>

    
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Blue Thunder Jersey from RTU Apparel is a high-quality and stylish athletic top designed for maximum performance and comfort. 
        Made from premium materials and featuring a range of impressive features, 
        this jersey is ideal for anyone looking to up their game on the field or in the gym.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from high-quality, moisture-wicking fabric that helps keep you dry and comfortable during intense workouts</li>
        <li>Lightweight and breathable, allowing for optimal airflow and ventilation</li>
        <li>Durable and long-lasting, ensuring that your jersey will withstand frequent use and washings</li>
        <li>Features a bold and eye-catching blue and white color scheme that is sure to make you stand out on the field or in the gym</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Designed with an athletic fit that provides a full range of motion and maximum comfort</li>
        <li>Features a V-neck collar and short sleeves for a classic and timeless look</li>
        <li>Includes reinforced seams and hems to ensure that your jersey stays in top condition for longer</li>
        <li>Features a bold RTU logo on the front and back, showcasing your pride in your team and school</li>
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

export default UserJerseyCart



