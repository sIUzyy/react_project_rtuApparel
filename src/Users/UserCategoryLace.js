//ID LACE CATEGORY
import React from 'react'
import { Link } from 'react-router-dom'
import LaceCollection from '../components/collection-img-lace'

export const UserCategoryLace = () => {
  return (
    <div className='max-w-7xl mx-auto'>

        <div className='mx-5'>
            <div className='my-5'>
              <h1 className='font-bold text-5xl text-orange-500 mb-2'>ID Lace</h1>
              <p className='text-gray-500 text-md text-justify italic'>Stay organized and show off your RTU affiliation with our custom ID lace collection, 
              available in a variety of colors and designs to suit your personal style.</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <Link to='IDLace'>
            <div className='border-2 hover:border-orange-500'>
              <LaceCollection/>
              <div className='mt-10 italic flex justify-between mx-2'>
                <h1 className='font-bold'>ID Lace</h1>
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

export default UserCategoryLace