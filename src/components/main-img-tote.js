//MAIN IMAGE

import React from 'react'
// import Tote from '../assets/mtote.png'
import Tote from '../assets/webp-img/mtote.webp'

export const MainTote = () => {
  return (
    <div>
        <img className='h-full rounded-2xl w-full object-cover object-center' src={Tote} alt='' />
    </div>
  )
}
