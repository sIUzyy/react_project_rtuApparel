//type={showPassword ? "text" : "password"} = if the showPassword is 'true' show the 'text', if not 'true', show the 'password' type.
//{showPassword ? <AiOutlineEye size={20} className='-ml-8 -mb-1'/> : <AiOutlineEyeInvisible size={20} className='-ml-8 -mb-1'/>} if showPassword is 'true' show AiOutLine Eye, if not 'true' show the AiOutlinEyeInvisible.
//RESET PASSWORD PAGE
import React, {useState, useEffect, useRef} from 'react'
import { Link, 
         useLocation, 
         useNavigate 
        } from 'react-router-dom'

import {AiOutlineArrowLeft,
        AiOutlineEye,
        AiOutlineEyeInvisible
        } from 'react-icons/ai'
    
import { useAuth } from '../functions/authContext'

const useQuery = () =>{
    const location = useLocation()
    return new URLSearchParams(location.search)
}

const UserResetPassword = () => {

    const { resetPassword }  = useAuth()
    const query = useQuery()
    console.log(query.get('mode'))
    console.log(query.get('oobCode'))
    console.log(query.get('continueUrl'))

    const navigate = useNavigate()
   
    const [error, setError] = useState('')
 
    const [newPassword, setNewPassword] = useState('')


    const passwordReset = async (e) => {
        e.preventDefault()
        setError('')

        resetPassword(query.get('oobCode'), newPassword)
        .then(response => 
            console.log(response),
            navigate('/signin')
        )
       
        .catch((error) => {
            console.log(error.message)
            setError(error.message)
        })

    }
     
    //useState for our showPassword
    const [showPassword, setShowPassword] = useState(false) // The reason why we set this state to 'false' because everytime we refresh the page, in default it will show the password and we don't want that.

    //function for showPassword
    const PasswordShow = () =>{
        setShowPassword(prevState => !prevState) //if showPassword is currently 'false', then set it to !prevState to become 'true'.
    }

  return (
    <div className='max-w-7xl mx-auto'>
    
   <div className='m-5'>
    <h1 className='text-4xl font-bold text-orange-500'>Reset Password</h1>
        <p className='text-gray-500 text-justify italic'>To reset your password in RTU Apparel, click the "RESET PASSWORD" button.</p>
        <div className='bg-gray-100 w-full h-80 mt-10 mb-32 lg:w-c lg:mx-auto '>
            
            <div className=' items-center pt-5 pb-5'>
                <div className=''>
                    <Link to='/'><AiOutlineArrowLeft className='ml-5 mb-5' color='orange' size={25}/></Link>
                </div>

                <div className=''>
                <p className='text-gray-500 text-center  mx-5 italic '>Resetting your password for RTU Apparel is a quick and easy process, just make sure to choose a strong and secure password to protect your account.</p>
                </div>
            </div>
            {/* <p className='text-gray-500 text-justify pt-2 mx-5 italic '>Resetting your password for RTU Apparel is a quick and easy process, just make sure to choose a strong and secure password to protect your account.</p> */}
          
                <div className='flex justify-center'>
              
                    <form onSubmit={passwordReset}>
                   
                    <input 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className='border border-black bg-gray-100 mt-5 w-96 p-3 hover:border-orange-500' 
                    type={showPassword ? "text" : "password"} 
                    placeholder='New Password' 
                    required/>
                      
                    <div className='flex justify-center mb-3'>
                    <button 
                    type='submit'
                    className='bg-indigo-600 mt-5 w-96 p-3 rounded-md text-white font-normal hover:opacity-90'>RESET PASSWORD
                    </button>
                    </div>
                    {error && <p className='text-center text-red-500 font-semibold italic text-md'>{error}</p>}
                    </form>
                   
                    <div onClick={PasswordShow} className=''>
                    {showPassword ? 
                    <AiOutlineEye size={20} className='-ml-8 mt-9'/> : 
                    <AiOutlineEyeInvisible size={20} className='-ml-8 mt-9'/>
                    }

        </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default UserResetPassword