//RTU HANDKERCHIEF PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import HandkerChiefBlueCart from '../components/HandkerChiefBlue'
import HandkerChiefWhiteCart from '../components/HandkerChiefWhite';

export const UserHandkerchiefCart = () => {

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
          {imageSlide === 0 && <HandkerChiefBlueCart/>}
          {imageSlide === 1 && <HandkerChiefWhiteCart/>}
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU HANDKERCHIEF</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>COLORS:</h1>
          <button onClick={handlePEFront} className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>BLUE</button>
          <button onClick={handlePEPackage}  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>WHITE</button>
         
        </div>

        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU handkerchief is a versatile accessory designed for Rizal Technological University students, faculty, and alumni. 
        It features the RTU logo and colors to represent school pride and identity.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Soft and absorbent cotton material for superior comfort and performance.</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality embroidery of the RTU logo on one corner of the handkerchief for a stylish and recognizable look.</li>
        <li>Durable cotton material provides superior absorbency and is gentle on the skin.</li>
        <li>Convenient size and lightweight design make it easy to carry in a pocket or bag.</li>
        <li>Easy to clean and maintain - machine washable for repeated use.</li>
        <li>Perfect for representing RTU pride on campus or at events.</li>
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

export default UserHandkerchiefCart
