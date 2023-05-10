import React from 'react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//RTU TUMBLER PRODUCTS WITH DESCRIPTION

import RTUTumbler from '../components/RTUTumbler';

export const UserTumblerCart = () => {

  
  return (
    <div className='max-w-7xl mx-auto '>
    <div className='mx-5 md:flex lg:flex lg:items-center'>
    <div className='md:w-96 md:mr-5'>
    <RTUTumbler/>
    </div>
       <div>
      
        
        <h1 className='font-bold text-2xl mt-5'>RTU TUMBLER</h1>
        <h1 className='font-medium -mt-2 mb-3 text-orange-500 text-xl border-b pb-2'>₱ 100</h1>

        <div className='border-b pb-2'>

        <div className='flex items-center flex-wrap mt-5 '>
          <h1 className='mr-5 text-lg text-indigo-600 font-semibold'>SIZES:</h1>
          <button  className='border p-1 w-32 mr-2  text-sm font-semibold hover:border-orange-500 italic focus:border-orange-500'>20 OUNCE</button>
          <button  className='border p-1 w-32 text-sm mr-2 font-semibold hover:border-orange-500 italic focus:border-orange-500'>30 OUNCE</button>
          
         
        </div>

       
        </div>

        <h1 className='text-lg mt-4 font-semibold text-indigo-600 '>DESCRIPTION:</h1>
        <p className='text-justify text-sm text-gray-500 italic mb-4'>RTU Tumbler by RTU Apparel is a durable and high-quality tumbler designed to keep your beverages at their desired temperature for extended periods. 
        Made with top-notch materials and features.</p>

        <h1 className='text-lg font-semibold text-indigo-600'>MATERIAL:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Made from premium quality 18/8 stainless steel that is durable and resistant to rust and corrosion</li>
        <li>eatures double-wall vacuum insulation that keeps your beverages hot or cold for hours</li>
        <li>Comes with a clear lid made from BPA-free plastic that is spill-resistant and easy to clean</li>
        </ul>

        <h1 className='text-lg font-semibold text-indigo-600' >FEATURES:</h1>
        <ul className='list-disc mx-5 text-sm text-gray-500 italic text-justify mb-4'>
        <li>Available in 20 oz and 30 oz sizes to fit your desired capacity</li>
        <li>The exterior of the tumbler is powder-coated for a smooth and stylish finish that also provides a good grip</li>
        <li>Has a sweat-free design that prevents condensation on the outside, so your hands stay dry</li>
        <li>RTU Apparel logo embroidery on the front and back pockets, giving the pants a stylish touch</li>
        <li>Fits most cup holders and is easy to carry around</li>
        <li>Ideal for use at home, in the office, or on the go</li>
        </ul>

       </div>
    </div>
    </div>
  )
}

export default UserTumblerCart

