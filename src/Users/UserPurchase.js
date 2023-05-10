//WILL IMPLEMENT SOON

import React from 'react'
import {BsTruck} from 'react-icons/bs'

export const UserPurchase = () => {
  return (
    <div className='max-w-7xl mx-auto'>
    <div className='mx-5'>
      <h1 className='text-5xl mt-5 font-bold text-orange-500'>RTU Apparel Purchase</h1>

      <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2'>
      <div className='bg-gray-100 rounded-md w-full p-1 h-41  pb-3'>
      <div className='flex'>
      <div className='bg-black w-28 h-28 ml-2 mt-3'></div>

      <div className='mx-2 mt-2 italic'>
        <h1 className=''>P.E Uniform</h1>
        <h1>Quantity:</h1>
        <h1>Order Total:</h1>
      </div>
      </div>

      <div className='mx-2 mt-2 flex items-center justify-between  '>
     
     <div className='flex items-center'>      
     <BsTruck className='mr-2 text-green-500 '/>
      <h1 className='text-green-500 font-md '>Parcel has been delivered</h1>
    </div>
      <button className='border bg-orange-500 rounded-md text-white p-1 w-28'>Buy Again</button>
      </div>
      </div>



      <div className='bg-gray-100 rounded-md w-full p-1 h-41 pb-3'>
      <div className='flex'>
      <div className='bg-black w-28 h-28 ml-2 mt-3'></div>

      <div className='mx-2 mt-2 italic'>
        <h1 className=''>P.E Uniform</h1>
        <h1>Quantity:</h1>
        <h1>Order Total:</h1>
      </div>
      </div>

      <div className='mx-2 mt-2 flex items-center justify-between  '>
     
     <div className='flex items-center'>      
     <BsTruck className='mr-2 text-green-500 '/>
      <h1 className='text-green-500 font-md '>Parcel has been delivered</h1>
    </div>


      
      <button className='border bg-orange-500 rounded-md text-white p-1 w-28'>Buy Again</button>

      </div>

      </div>
      </div>
    </div>
    </div>
  )
}

export default UserPurchase