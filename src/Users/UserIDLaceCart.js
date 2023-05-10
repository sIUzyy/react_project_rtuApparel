//RTU ID LACE PRODUCTS WITH DESCRIPTION

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import IDLaceCart from '../components/IDLaceCart';
import ComingSoon from '../components/ComingSoon';

// import required modules
import { Pagination } from "swiper";

export const UserIDLaceCart = () => {

 
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
          >

    <SwiperSlide>
        <IDLaceCart/>  
    </SwiperSlide>

    <SwiperSlide>
        <ComingSoon/>  
    </SwiperSlide>

          </Swiper>
              
          </div>
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU ID LACE</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>
          <button className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>RTU ID LACE</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>CEAT</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>CBET</button>
          <button disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic cursor-not-allowed focus:border-orange-500'>COED</button>
          <button  disabled className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 cursor-not-allowed italic focus:border-orange-500'>CAS</button>
          <button  disabled  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 cursor-not-allowed italic focus:border-orange-500'>IHK</button>
         
        </div>


        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU ID Laces from RTU Apparel are high-quality and durable lanyards designed to hold your identification card securely and stylishly. 
        Each ID lace is specific to a particular department, with options available for CEA, CBET, College of Education, College of Arts and Sciences,
        and the Institute of Human Kinetics.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from high-quality nylon material that is strong and durable</li>
        <li>Lightweight and comfortable to wear around your neck all day</li>
        <li>Comes in a variety of colors, allowing you to choose the perfect one to match your style</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Features a metal lobster claw hook that securely attaches your ID card to the lanyard</li>
        <li>Comes with a safety breakaway feature that snaps apart if the lanyard gets caught or tangled, preventing injury</li>
        <li>Includes a plastic badge holder that keeps your ID card safe from wear and tear, as well as any spills or splashes that may occur throughout the day</li>
        <li>Printed with the RTU logo and the name of your specific department, showing your pride and affiliation with your school and department</li>
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

export default UserIDLaceCart


