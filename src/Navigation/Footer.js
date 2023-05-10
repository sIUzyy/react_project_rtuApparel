//FOOTER

import React from 'react'
import { BsFacebook, 
         BsInstagram, 
         BsTwitter, 
         BsYoutube 
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import JntLogistic from '../components/logistic-jnt'

import GcashPayment from '../components/payment-gcash'
import codPayment from '../assets/payment-cod.png'

export const Footer = () => {


  return (

    <div className='bg-[#0E1C36]  h-full md:h-[606px] lg:h-[567px] xl:h-[535px]'>
    <div className='max-w-7xl mx-auto mt-10'>
        <div className=' mx-8 my-5 flex flex-col md:flex-row md:justify-between'>

        <div className='mt-5 pt-20'>
            <h1 className='font-semibold text-[#F7B32B] text-lg uppercase mb-4 '>Customer Service</h1>

            <Link to='help-centre' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline ' >Help Centre</Link>
            {/* <a href='../Pages/cs-help-centre.tsx' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Help Centre</a> */}

            <Link to='contact-us' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline '  >Contact Us</Link>
            {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Contact Us</a> */}

            <Link to='faq' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline'  >Frequently Asked Questions</Link>
            {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Frequently Asked Questions</a> */}

            </div>

            <div className='mt-5 md:pt-20'>
            <h1 className='font-semibold text-[#F7B32B] text-lg uppercase mb-4'>About RTU Apparel</h1>
           
           <Link to='about-us' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline ' >About Us</Link>
           {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500' >About Us</a> */}
           
           <Link to='team' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline ' >Team</Link>
           {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Team</a> */}

           <Link to='term-of-service' className='block font-medium mb-4 text-sm text-[#EDFBC1] hover:text-[#D5B942] underline ' >Terms of Service</Link>
           {/* <a href='#' className='block mb-4 text-sm text-gray-400 hover:text-orange-500'>Terms of Service</a> */}
           </div> 
     
        <div className='mt-5 md:pt-20'>
            <h1 className='font-semibold text-[#F7B32B] text-lg uppercase mb-4'>Accepted Payments</h1>
          
            <div className='flex items-center -ml-2 md:justify-start'>

               
                <div className='w-12 h-12 mx-2'>
                    {/* <CodPayment/> */}
                    <img src={codPayment} alt='payment' />
                </div>

               
                <div className='w-12 h-12 mx-2'>
                    <GcashPayment/>
                </div>

            
            </div>
            </div>

            <div className='mt-5 md:pt-20'>

            <h1 className='font-semibold text-[#F7B32B] text-lg uppercase mb-4  '>Logistic</h1>
          <div className='grid gap-0 grid-cols-1'>

          <div className='w-14 h-14 '>
                    <JntLogistic/>
            </div>

          </div>

            </div>
        </div>

         <div className='ml-8 flex mb-10 text-white'>
            <div>
            <BsFacebook size={25} className='' />
            </div>

            <div className='icons'>
            <BsInstagram size={25}/>
            </div>

            <div className='icons'>
            <BsTwitter size={25}/>
            </div>

            <div className='icons'>
            <BsYoutube size={25}/>
            </div>
            </div>

            <div className='mx-8 mt-5 pb-20 md:pb-20'>
                <h1 className='mt-4 font-medium text-sm text-orange-600 uppercase'>© 2023 RTU Apparel. All Rights Reserved.</h1>
                
            </div>
      </div>
      </div>
  )
}

export default Footer

