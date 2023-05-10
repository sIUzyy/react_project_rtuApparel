//WOMEN SECTION --NAVBAR

import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'

import {  AiOutlineHome,
          AiOutlineMan, 

  } from 'react-icons/ai'

import {  FiShoppingBag } from 'react-icons/fi'

import MenWomenShirt from '../components/women-men'
import MenWomenPants from '../components/men-women'

export const NavWomen = () => {
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

        
          <h1 className='text-5xl font-bold'>Women</h1>
          <p className='text-justify text-md text-gray-500'>
          Discover the perfect blend of style and comfort with our exclusive collection
          of women's apparel at RTU, designed to make you look and feel your best.
          </p>   

          <div className={`${isBreakpointSmall ? 'hidden' : 'mt-5 flex justify-evenly '}`}>

          <Link to='/'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <AiOutlineHome className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          <Link to='/women/men'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <AiOutlineMan className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          <Link to='/women/accessories'>
          <div className={`${isBreakpointSmall ? 'hidden' : 'border shadow-2xl shadow-orange-600 rounded-lg p-2'} `}>
          <FiShoppingBag className='  hover:text-orange-600' size={25}/>
          </div>
          </Link>

          </div>

      <div className='grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-5'>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <MenWomenShirt/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base'>P.E T-shirt</h1>
            <h1 className='text-sm text-orange-500 md:text-base'>₱100</h1>
        </div>

        <h1 className='mx-2 text-gray-500 italic text-sm mt-5 pb-5'>Mandaluyong City, Metro Manila Philippines.</h1>

        </div>
        </Link>

        <Link to='signin'>
        <div className='h-auto w-auto shadow-2xl shadow-indigo-300 rounded-lg '>
        <div>
        <MenWomenPants/>
        </div>

        <div className='flex justify-between mx-2 mt-5 pb-2 font-normal text-gray-500 italic'>
            <h1 className='text-sm md:text-base' >P.E Pants</h1>
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

export default NavWomen