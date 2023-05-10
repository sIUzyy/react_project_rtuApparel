//UNIFORM CATEGORY
import React from 'react'
import { Link } from 'react-router-dom'
import MenWomenShirt from '../components/women-men'

export const UserCategoryUniform = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='mx-5'>
            <div className='my-5'>
              <h1 className='font-bold text-5xl text-orange-500 mb-2'>Uniform</h1>
              <p className='text-gray-500 text-md text-justify italic'>Experience the perfect combination of comfort and professionalism with RTU Apparel's top-quality uniform collection</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <Link to='PEShirt'>
            <div className='border-2 hover:border-orange-500'>
              <MenWomenShirt/>
              <div className='mt-10 flex justify-between italic mx-2'>
                <h1 className='font-bold'>P.E T-Shirt</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
                <div className='mx-2 italic text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>



            </div>


        </div>


    
    </div>
  )
}

export default UserCategoryUniform