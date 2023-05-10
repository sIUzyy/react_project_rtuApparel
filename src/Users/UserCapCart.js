//RTU CAP PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//These components contains an image.
import CapWhite from '../components/CapWhite'
import CapBlack from '../components/CapBlack'
import CapBlue from '../components/CapBlue'


export const UserCapCart = () => {

  const [imageSlide, setImageSlide] = useState(0)


  const handleWhiteCap = () =>{
    setImageSlide(0)
  }

  const handleBlackCap = () => {
    setImageSlide(1)
  }

  const handleBlueCap = () => {
    setImageSlide(2)
  }

  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>

          <div className='md:mt-5 md:w-1080 md:mr-5 lg:w-c'>
            {imageSlide === 0 && <CapWhite/>}
            {imageSlide === 1 && <CapBlack/>}
            {imageSlide === 2 && <CapBlue/>}
       </div>
       <div>
        <h1 className='font-bold text-2xl mt-5'>RTU CAP</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center flex-wrap'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>COLORS:</h1>

         <div className='p-1'>
          <button onClick={handleWhiteCap} className='border p-1 w-32 mr-2 text-sm mb-1 font-semibold hover:border-orange-500 italic focus:border-orange-500'>WHITE</button>
          <button onClick={handleBlackCap}  className='border p-1 w-32 text-sm font-semibold mr-1 hover:border-orange-500 italic focus:border-orange-500'>BLACK</button>
          <button onClick={handleBlueCap} className='border p-1 w-32 mr-2 text-sm font-semibold  hover:border-orange-500 italic focus:border-orange-500'>BLUE</button>
         
          </div>
      
        </div>

        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Cap is a stylish and comfortable headwear accessory designed for Rizal Technological University students, 
        faculty, and alumni. It features the RTU logo and colors to represent school pride and identity. </p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>100% cotton for the body of the cap</li>
        <li>Adjustable strap with metal buckle for a comfortable and customizable fit</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>High-quality embroidery of the RTU logo on the front of the cap for a stylish and recognizable look.</li>
        <li>Available in multiple colors to match the RTU color scheme.</li>
        <li>Durable 100% cotton material provides comfort and breathability for all-day wear.</li>
        <li>Six-panel construction with embroidered eyelets provides ventilation to keep your head cool.</li>
        <li>Adjustable strap with metal buckle allows for a customizable fit to accommodate different head sizes.</li>
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

export default UserCapCart



