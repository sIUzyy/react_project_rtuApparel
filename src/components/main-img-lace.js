//MAIN IMAGE

import React from 'react'
// import Lace from '../assets/mlace.png'
import Lace from '../assets/webp-img/mlace.webp'

export const MainLace = () => {
  return (
    <div>
        <img className='h-full rounded-2xl w-full object-cover object-center' src={Lace} alt='' />
    </div>
  )
}
