//FORGET PASSWORD PAGE

import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {useAuth} from '../functions/authContext'

const UserForgetPassword = () => {

    const [email, setEmail] = useState('')    
    const [successMessage, setSuccessMessage] = useState('')
    const [error, setError] = useState('')
    const { forgotPassword } = useAuth()
    
    const handleForgot = async (e) =>{
        e.preventDefault()
        setSuccessMessage('')
        setError('')

       forgotPassword(email)
       .then(response => {
            console.log(response)
            setSuccessMessage('Email sent successfully! Please check your inbox.')

       })

       .catch((error) => {
        console.log(error.message)
        setError(error.message)
    
    })

    }

  return (
    <div className='max-w-7xl mx-auto'>
    
   <div className='m-5'>
    <h1 className='text-4xl font-bold text-orange-500'>Forget Password</h1>
        <p className='text-gray-500 text-justify italic'>To reset your password in RTU Apparel, click the "FORGET PASSWORD" button and follow the prompts to create a new password for your account.</p>
        <div className='bg-gray-100 w-full h-72 mt-10 mb-32 rounded-md lg:w-c lg:mx-auto '>
            
            <div className='flex items-center pt-5 pb-5'>
                <div className=''>
                    <Link to='/'><AiOutlineArrowLeft className='ml-5' color='orange' size={25}/></Link>
                </div>

                <div className=''>
                <p className='text-gray-500 text-center mx-5 italic '>To reset your password for RTU Apparel, please enter your email address.</p>
                </div>
               
            </div>
            {/* <p className='text-gray-500 text-center pt-2 mx-5 italic '>To reset your password for RTU Apparel, please enter your email address.</p> */}

                <div className='flex justify-center '>
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-black bg-gray-100 mt-5 w-96 p-3 hover:border-orange-500' 
                    type='text' 
                    placeholder='Email' 
                    required/>
                </div>
               

                <div className='flex justify-center mb-3'>
                    <button 
                    onClick={handleForgot}
                    className='bg-indigo-600 mt-5 w-96 p-3 rounded-md text-white font-normal hover:opacity-90'>
                    FORGET PASSWORD
                    </button>
                    
                </div>

                {error && <p className='text-center text-red-500 font-semibold italic text-md'>{error}</p>}
                {successMessage && <p className='text-center text-green-500 font-semibold italic text-md'>{successMessage}</p>}
                

        </div>
   </div>
    
    </div>
  )
}

export default UserForgetPassword

