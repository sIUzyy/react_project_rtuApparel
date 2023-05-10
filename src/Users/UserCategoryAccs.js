//JERSEY CATEGORY
import React from 'react'
import ToteCollection from '../components/collection-img-tote'
import CapCollection from '../components/collection-img-cap'
import HandkCollection from '../components/collection-img-handk'
import EngCollection from '../components/collection-img-eng'
import TumblerCollection from '../components/collection-img-tumbler'
import { Link } from 'react-router-dom'


export const UserCategoryAccessories = () => {
  return (
    <div className='max-w-7xl mx-auto'>

        <div className='mx-5'>
            <div className='my-5'>
              <h1 className='font-bold text-5xl text-orange-500 mb-2'>Accessories</h1>
              <p className='text-gray-500 text-md text-justify italic'>Complete your RTU look with our wide range of accessories, including Caps, Tumbler, and more, 
              designed to add the perfect finishing touch to any outfit.</p>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <Link to='totebag'>
            <div className='border-2 hover:border-orange-500'>
              <ToteCollection/>
              <div className='mt-10 flex justify-between mx-2'>
                <h1 className='font-bold'>Tote Bag</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
      
                <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Cap'>
            <div className='border-2 hover:border-orange-500'>
              <CapCollection/>
              <div className='mt-10 flex justify-between mx-2'>
                <h1 className='font-bold'>Cap</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
             

                <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Handkerchief'>
            <div className='border-2 hover:border-orange-500'>
              <HandkCollection/>
              <div className='mt-10 flex justify-between mx-2'>
                <h1 className='font-bold'>Handkerchief</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
              
                <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Mug'>
            <div className='border-2 hover:border-orange-500'>
              <EngCollection/>
              <div className='mt-10 flex justify-between mx-2'>
                <h1 className='font-bold'>Mug</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
            
                <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>

            <Link to='Tumbler'>
            <div className='border-2 hover:border-orange-500'>
              <TumblerCollection/>
              <div className='mt-10 flex justify-between mx-2'>
                <h1 className='font-bold'>Tumbler</h1>
                <h1 className='text-orange-500 font-medium'>₱100.00</h1>
              </div>
           
                <div className='mx-2 text-gray-500 pb-4 mt-5 lg:text-sm'>
                 <h1> Mandaluyong City, Metro Manila, Philippines.</h1>
                </div>
            </div>
            </Link>
            




            </div>


        </div>


    
    </div>
  )
}

export default UserCategoryAccessories