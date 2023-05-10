//THIS NAVBAR WILL SHOW WHEN THE USER LOGIN TO THEIR ACCOUNT.

import React from 'react'
import { Link } from 'react-router-dom'
import RTULogo from './rtu-logo'

import UserDropdown from './UserDropdown'


export const Test = () => {

  return ( 
    <div className='max-w-7xl mx-auto'>
       
       <div className='flex md:mx-0 md:flex justify-between items-center p-5'>

        <div className='flex items-center lg:ml-2  '>
        
        <Link to='/'> {<RTULogo/>} </Link>
        <Link to='/' className='ml-1 font-black text-orange-500 text-lg lg:ml-3'>RTU Apparel</Link>

        </div>

        <div>

        <UserDropdown/>
        </div>
      
        

      
       </div>
    </div>
  )
}

export default Test