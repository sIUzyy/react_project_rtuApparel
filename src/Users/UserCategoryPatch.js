//JERSEY CATEGORY
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryPatchOne from '../components/catPatch-1'
import CategoryPatchTwo from '../components/catPatch-2'
import CategoryPatchThree from '../components/catPatch-3'
import PatchCollection from '../components/collection-img-patch'

export const UserCategoryPatch = () => {
  return (
    <div className='max-w-7xl mx-auto'>

        <div className='mx-5'>
            <div className='my-5'>
              <h1 className='font-bold text-5xl text-orange-500 mb-2'>Patch</h1>
              <p className='text-gray-500 text-md text-justify italic'>Make a statement and customize your RTU Apparel with our unique patch collection, 
              perfect for adding a personal touch to your favorite clothes and accessories.</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <Link to='Patch'>
            <div className='border-2 hover:border-orange-500'>
              <PatchCollection/>
              <div className='mt-10 italic flex justify-between mx-2'>
                <h1 className='font-bold'>RTU Patch</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>

                <h1 className='mx-2 italic'>White and Black</h1>

                <div className='mx-2 italic text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Patch'>
            <div className='border-2 hover:border-orange-500'>
              <CategoryPatchOne/>
              <div className='mt-10 italic flex justify-between mx-2'>
                <h1 className='font-bold'>RTU Patch</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
              <h1 className='mx-2 italic'>Blue and White</h1>

                <div className='mx-2 italic text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Patch'>
            <div className='border-2 hover:border-orange-500'>
              <CategoryPatchTwo/>
              <div className='mt-10 italic flex justify-between mx-2'>
                <h1 className='font-bold'>RTU Patch</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
              <h1 className='mx-2 italic'>Black and Blue</h1>
                <div className='mx-2 italic text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Patch'>
            <div className='border-2 hover:border-orange-500'>
              <CategoryPatchThree/>
              <div className='mt-10 italic flex justify-between mx-2'>
                <h1 className='font-bold'>RTU Patch</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
              <h1 className='mx-2 italic'>White and Blue</h1>
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

export default UserCategoryPatch