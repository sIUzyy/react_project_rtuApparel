//MAIN IMAGE

import React from 'react'
// import Cap from '../assets/mcap.png'
import Cap from '../assets/webp-img/mcap.webp'


export const MainCap = () => {
  return (
    <div>
        <img className='h-full rounded-2xl w-full object-cover object-center' src={Cap} alt='' />
    </div>
  )
}

export default MainCap