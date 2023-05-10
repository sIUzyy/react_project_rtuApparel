import React from 'react'
import { AiOutlineNotification } from 'react-icons/ai'

const Notice = () => {
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='my-10 mx-5'>
        <AiOutlineNotification className='mx-auto' size={30}/>

        <h1 className='text-2xl mt-5 text-center font-fontMain tracking-widest'>
        We apologize for the inconvenience, but the system is currently unavailable. </h1>

        <h1 className='font-fontMain tracking-widest mt-1 text-center text-lg text-orange-500'>
        Thank you for participating in the testing of RTU apparel, and rest assured that all the data collected will be securely deleted.
        </h1>

        <h1 className='text-sm mt-10 font-fontMain tracking-widest text-center'>
        If you have any questions, please feel free to reach out to us via email at <span className='text-indigo-600'>rtustore@gmail.com</span>. We are happy to assist you in any way we can.
        </h1>

      </div>

    </div>
  )
}

export default Notice