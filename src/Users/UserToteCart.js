//RTU TOTEBAG PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ToteCat from '../components/ToteCat';
import ToteMT from '../components/ToteMT';
import ToteMoon from '../components/ToteMoon';
import ToteOceanic from '../components/ToteOceanic';

export const UserToteCart = () => {

  const [imageSlide, setImageSlide] = useState(0)
 
  const handleWhisker = () =>{
    setImageSlide(0)
  }

  const handleLuna = () => {
    setImageSlide(1)
  }

  const handleSummit = () => {
    setImageSlide(2)
  }

  const handleOceanic = () => {
    setImageSlide(3)
  }

  
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>

          <div className='md:mt-5 md:w-1080 md:mr-5 lg:w-c'>
            {imageSlide === 0 && <ToteCat/>}
            {imageSlide === 1 && <ToteMoon/>}
            {imageSlide === 2 && <ToteMT/>}
            {imageSlide === 3 && <ToteOceanic/>}
       </div>
       <div>
        <h1 className='font-bold text-2xl mt-5'>RTU TOTE BAG</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center flex-wrap'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>

         <div className='p-1'>
          <button onClick={handleWhisker} className='border p-1 w-32 mr-2 text-sm mb-1 font-semibold hover:border-orange-500 italic focus:border-orange-500'>WHISKER TOTE</button>
          <button onClick={handleLuna}  className='border p-1 w-32 text-sm font-semibold mr-1 hover:border-orange-500 italic focus:border-orange-500'>LUNAR CARRYALL</button>
          <button onClick={handleSummit} className='border p-1 w-32 mr-2 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>SUMMIT SATCHEL</button>
          <button onClick={handleOceanic}  className='border p-1 w-32 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>OCEANIC TOTE</button>
          </div>
      
        </div>


        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>Choose the  Whisker Tote variation for a cute and playful touch, or go for the Lunar Carryall variation for a celestial and mystical vibe. 
        The Summit Satchel variation is perfect for those who love the great outdoors, while the Oceanic Tote variation is ideal for those who love to be near the water. </p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>100% durable cotton canvas</li>
        <li>Heavy-duty stitching for long-lasting durability</li>
        <li>Double-stitched reinforced handles for comfortable carrying</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Spacious interior for carrying textbooks, notebooks, laptops, and more</li>
        <li>Interior pocket for storing smaller items such as phone, wallet, and keys</li>
        <li>Versatile design that can be used for everyday use, grocery shopping, and traveling</li>
        <li>Eco-friendly alternative to single-use plastic bags</li>
        <li>Convenient and stylish addition to your RTU Apparel collection</li>
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

export default UserToteCart



