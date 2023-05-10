//RTU MUG PRODUCTS WITH DESCRIPTION

import React, { useState } from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import MugCEAT from '../components/MugCEAT';
import MugCBET from '../components/MugCBET';



export const UserMugCart = () => {

  const [imageSlide, setImageSlide] = useState(0)

  const handleCEAT = () =>{
    setImageSlide(0)
  }

  const handleCBET = () => {
    setImageSlide(1)
  }
  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
      {imageSlide === 0 && <MugCEAT/>}
      {imageSlide === 1 && <MugCBET/>}
       <div>
        
        <h1 className='font-bold text-2xl mt-5'>RTU MUG</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>
        <div className='flex items-center'>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>VARIATIONS:</h1>
          <button onClick={handleCEAT} className='border p-1 w-32 mr-2 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>CEAT</button>
          <button onClick={handleCBET}  className='border p-1 w-32 text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>CBET</button>
         
        </div>

        <div className='flex items-center flex-wrap mt-5 '>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>SIZES:</h1>
          <button  className='border p-1 w-32 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>20 OUNCE</button>
          <button  className='border p-1 w-32 text-sm mr-2 font-semibold hover:border-orange-500 italic focus:border-orange-500'>30 OUNCE</button>
         
         
        </div>

      
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>The RTU Mug by RTU Apparel is a high-quality mug designed to keep your favorite beverages hot or cold for hours. 
        Made with premium materials and features, the RTU Mug is an excellent investment for anyone who loves to enjoy their drinks in style and comfort.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from high-quality 18/8 stainless steel that is durable and resistant to rust and corrosion</li>
        <li>Features double-wall vacuum insulation that keeps your beverages hot or cold for hours</li>
        <li>Comes with a clear, shatter-proof lid made from BPA-free plastic that is spill-resistant and easy to clean</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Available in 14 oz and 20 oz sizes to fit your desired capacity</li>
        <li>The exterior of the mug is powder-coated for a smooth and stylish finish that also provides a good grip</li>
        <li>Has a sweat-free design that prevents condensation on the outside, so your hands stay dry</li>
        </ul>


       </div>
    </div>
    </div>
  )
}

export default UserMugCart

