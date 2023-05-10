//MAIN IMAGE

import React from 'react'
// import Patch from '../assets/mpatch.png'
import Patch from '../assets/webp-img/mpatch.webp'

export const MainPatch = () => {
  return (
    <div>
        <img className='h-full rounded-2xl w-full object-cover object-center' src={Patch} alt='' />
    </div>
  )
}
