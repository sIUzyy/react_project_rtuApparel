//FAQ OF MAIN

import React from 'react'
import { Link } from 'react-router-dom'

export const Faq = () => {
  return (
    
    <div className='flex flex-col mx-auto my-3 max-w-7xl md:flex-row lg:my-5'>
        <div className='mx-5 lg:flex flex-col justify-center'>
            <h1 className='font-black text-5xl md:text-4xl  lg:text-5xl lg:w-cc lg:-mb-4'>Frequently asked questions</h1>
            <p className='mt-5 text-gray-500 font-bold md:text-sm md:w-96 lg:text-base lg:w-cc lg:-mb-2'>Can't find the answer you're looking for?</p>
            <p className='-mt-2 text-gray-500 font-bold md:text-sm md:mt-0 lg:text-base'>Reach out to our <Link to='contact-us' className="text-orange-500">customer support </Link>team.</p>
        </div>
        
        <div className='mx-5 md:pl-6'>
            <div className='mb-4 '>
            <h1 className='font-bold text-2xl mb-2'>What is RTU Apparel?</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base lg:text-lg'>RTU Apparel is an e-commerce website that specializes in providing high-quality RTU uniforms and merchandise exclusively to the students of Boni and Pasig branches.</p>
            </div>

            <div className='mb-4'>
            <h1 className='font-bold text-2xl mb-2'>What products does RTU Apparel offer?</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base lg:text-lg'>RTU Apparel offers a wide range of RTU uniforms, merchandise, and IDs, all specifically designed for the students of Boni and Pasig branches.</p>
            </div>

            <div className='mb-4'>
            <h1 className='font-bold text-2xl mb-2'>Is RTU Apparel only available to students of Boni and Pasig branches?</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base lg:text-lg'>Yes, RTU Apparel is exclusively available to the students of Boni and Pasig branches.</p>
            </div>

            <div className='mb-4'>
            <h1 className='font-bold text-2xl mb-2'>How can I place an order on RTU Apparel?</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base lg:text-lg'>You can easily place an order on RTU Apparel through our online platform. Simply browse our selection, add your desired items to your cart, and proceed to checkout.</p>
            </div>
           
            <div className='mb-4'>
            <h1 className='font-bold text-2xl mb-2'>What are the payment options available on RTU Apparel?</h1>
            <p className='text-justify text-gray-500 text-sm md:text-base lg:text-lg'>RTU Apparel offers secure and convenient payment options such as Gcash, and Cash on Delivery. Our website is equipped with SSL encryption to ensure the safety and security of your personal and financial information.</p>
            
            </div>
        </div>
    </div>
  )
}

export default Faq