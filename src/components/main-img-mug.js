//MAIN IMAGE

import React from 'react'
// import MugOne from '../assets/mmug.png'
import MugOne from '../assets/webp-img/mmug.webp'

export const MainMugone = () => {
  return (
    <div>
        <img className='h-full rounded-2xl w-full object-cover object-center' src={MugOne} alt='' />
    </div>
  )
}
