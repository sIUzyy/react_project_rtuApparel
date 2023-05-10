//NAVBAR WHEN USER DOESN'T LOGIN THEIR ACCOUNT

import React from 'react'
import { Link } from 'react-router-dom'
import RTULogo from '../components/rtu-logo'


export const Nav = () => {

  return ( 
 
    <div className='max-w-7xl mx-auto'>
       
       <div className='hidden md:mx-0 md:flex justify-between items-center p-5'>

        <div className='flex items-center lg:ml-2  '>
        
        <Link to='/'> {<RTULogo/>} </Link>
        <Link to='/' className='ml-1 font-fontMain tracking-widest text-orange-500 text-lg lg:ml-3'>RTU Apparel</Link>

        </div>


  
        <div className='hidden font-bold text-lg md:flex '>
        <Link className='pr-2 text-base font-semibold hover:text-orange-500 md:mx-5 lg:mx-8 uppercase' to='men'>Men</Link>
        <Link className='pr-2 text-base font-semibold hover:text-orange-500 md:mx-5 lg:mr-8 uppercase' to='women'>Women</Link>
        <Link className=' text-base font-semibold hover:text-orange-500 md:mx-5 lg:mr-8 uppercase' to='accessories'>Accessories</Link>
        </div>

        <div className='hidden md:flex items-center'>
            <Link to='signin' className='py-2 text-center text-base font-medium rounded-md  w-20 lg:mr-2 hover:text-indigo-600'>Sign in</Link>
            <Link to='signup' className='py-2 text-center text-base font-semibold rounded-md bg-[#3D3A4B] w-20 text-white lg:mr-8 hover:opacity-80'>Sign up</Link>
  

         </div>
       </div>
    </div>
    
  )
}

export default Nav