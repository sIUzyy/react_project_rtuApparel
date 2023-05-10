//ACCESSORIES SECTION --NAVBAR

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {  AiOutlineHome,
          AiOutlineMan,
          AiOutlineWoman, 

} from 'react-icons/ai'

import AccountancyCollection from '../components/collection-img-acc'
import ArkiCollection from '../components/collection-img-arki'
import CapCollection from '../components/collection-img-cap'
import EngCollection from '../components/collection-img-eng'
import HandkCollection from '../components/collection-img-handk'
import ToteCollection from '../components/collection-img-tote'
import TumblerCollection from '../components/collection-img-tumbler'
import PatchCollection from '../components/collection-img-patch'
import LaceCollection from '../components/collection-img-lace'


export const NavAcs = () => {
  
  const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)
  useEffect(() => {

    const handleSmall = () => {
      if (window.innerWidth <= 640) {
        setIsBreakPointSmall(false);
      } else {
        setIsBreakPointSmall(true);
      }
    };
    handleSmall();
    window.addEventListener('resize', handleSmall);
    return () => {
      window.removeEventListener('resize', handleSmall);
    };
  }, []);

  return (
    <div className='max-w-7xl mx-auto mb-52'>
      <div className='mx-5 my-5'>
       
          <h1 className='text-5xl font-bold'>Accessories</h1>
          <p className='text-justify text-md text-gray-500'>
          Get ready to accessorize in style with our selection of must-have accessories at RTU, 
          featuing trendy ID laces, chic caps, stylish mugs, practical handkerchiefs, spacious totes,
          durable umbrellas, and handy tumblers to keep you looking and feeling your best.
          </p>   

          
          <div className={`${isBreakpointSmall ? 'hidden' : 'mt-5 flex justify-evenly '}`}>

          <Link to='/'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <AiOutlineHome className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          <Link to='/accessories/men'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <AiOutlineMan className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          <Link to='/accessories/women'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <AiOutlineWoman className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          </div>

      <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-5'>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <AccountancyCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 italic font-normal text-gray-500 '>
            <h1 className='text-sm md:text-base' >Accountancy Mug</h1>
            <h1 className='text-sm text-orange-500 md:text-base '>₱100</h1>
        </div>

          <h1 className='mx-2 text-gray-500 text-sm italic mt-5 pb-5 '>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <ArkiCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Architecture Mug</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <EngCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Engineering Mug</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <CapCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Cap</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <HandkCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Handkerchief</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <ToteCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Tote bag</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>
        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <TumblerCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >Tumbler</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <PatchCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >University patch</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <LaceCollection/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >ID lace</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>


        </div>
  
      </div>
    </div>
  )
}

export default NavAcs

