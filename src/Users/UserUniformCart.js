//RTU UNIFORM PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

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

export const UserUniformCart = () => {


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

              {imageSlide === 0 && ( <SwiperSlide><PEFront/></SwiperSlide> )}
              {imageSlide === 0 && ( <SwiperSlide><PEBack/></SwiperSlide> )}

              <div className='md:w-96 md:mr-5'>
              {imageSlide === 1 && ( <SwiperSlide><PEPackage/></SwiperSlide> )}
              </div>

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>P.E TSHIRT</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱100 </h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>
          <button onClick={handlePEFront} className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>T-SHIRT</button>
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
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Shirt is not only stylish and comfortable but also made to last. 
        Its high-quality cotton material, double-needle stitching,
        and seamless collar make it an excellent addition to any wardrobe.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from 100% high-quality cotton, ensuring comfort and breathability</li>
        <li>Pre-shrunk to minimize shrinkage after washing</li>
        <li>Fabric weight of 6 oz/sq. yd., making it lightweight and easy to wear</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Classic fit with a seamless collar for added comfort</li>
        <li>Double-needle stitched for added durability</li>
        <li>Shoulder-to-shoulder taping for added strength and shape retention</li>
        <li>Available in a variety of colors and sizes, catering to all preferences and needs</li>
        <li>RTU logo printed on the front with vibrant, long-lasting colors</li>
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

export default UserUniformCart



