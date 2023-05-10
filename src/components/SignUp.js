// SIGN-UP COMPONENT

import React,
      {useState,
       useRef,
       useEffect,     
    } 
from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../functions/authContext'
import { useToast } from '@chakra-ui/react'

import {AiOutlineEye,
        AiOutlineEyeInvisible,
        AiOutlineArrowLeft
} from 'react-icons/ai'

const SignUp = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()
    
    const {signUp} = useAuth()
    const mounted = useRef(false)

    const PasswordShow = () =>{
        setShowPassword(prevState => !prevState)
    }

    useEffect(() => {
        mounted.current = true
        return() => {
            mounted.current = false
        }
    }, [])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')

        if(!email || !password){
            toast({
                description: "Credentials not valid",
                status: 'error',
                duration: 5000,
                isClosable: true

            })
        }  
        setIsSubmitting(true)      
        signUp(email, password)
        .then((response) => {
            console.log(response)
            navigate('/RTUApparel')
        })
        .catch((error) => {
            console.log(error.message) 
            setError(error.message)
    })
        .finally(() => mounted.current && setIsSubmitting(false))
    }

    const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)
    useEffect(() => {
  
      const handleSmall = () => {
        if (window.innerWidth <= 640) {
          setIsBreakPointSmall(true);
        } else {
          setIsBreakPointSmall(false);
        }
      };
      handleSmall();
      window.addEventListener('resize', handleSmall);
      return () => {
        window.removeEventListener('resize', handleSmall);
      };
    }, []);

  return (
 
    <div className='max-w-7xl mx-auto mb-52'>

            <div className='m-5'>
            {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='' size={35}/></Link>
            :
            ''
            }
            </div>

        <div className='mx-5 my-10 mb-20  md:flex items-center  '>
            <div className=' md:w-72 md:mr-10 lg:w-cc lg:ml-10'>

            <h1 className='font-fontMain tracking-widest text-center text-5xl text-orange-500 md:text-4xl md:text-left lg:text-5xl '>RTU Apparel</h1>
            <p className='text-gray-500 mt-4 text-center text-md italic md:not-italic md:text-sm md:text-justify md:mt-2 lg:text-2xl'>To receive updates on RTU apparel and exclusive promotions, 
            sign up with your email today.
            </p>
            </div>

            <div className='h-auto w-96 mx-auto shadow-2xl rounded-md mt-5 bg-slate-100 lg:mr-20'>
                <div className='mx-5 pt-5'>
                 
                 <form onSubmit={handleSubmit} >

                    <div className='mb-5'>
                    <input 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type='email' 
                     className='block border-2 border-gray-300 w-full rounded-md h-14 pl-5 outline-none hover:border-orange-500' 
                     placeholder='Email'
                     />
                    
                    </div>

                    <div className='flex mb-5'>
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    className='block  border-2 border-gray-300 w-full rounded-md h-14 pl-5 outline-none hover:border-orange-500' 
                    placeholder='Password'     
                    />
                    <div className='' onClick={PasswordShow}>
                    {showPassword ? <AiOutlineEye size={20}  className='-ml-10 mt-4'/> : <AiOutlineEyeInvisible size={20}  className='-ml-10 mt-4'/>}
                   </div>
                    
                    </div>
                    
                    <button 
                    isLoading={isSubmitting}
                    className='w-full bg-orange-500 mt-2 p-3 mb-4 font-normal text-white rounded-lg hover:opacity-80'>
                    Sign Up
                    </button>
                    {error && <p className='-mt-2 text-center text-red-500 font-semibold italic text-md'>{error}</p>}

                </form>

                    <div className='mt-3 italic'>
                        <p className='text-sm text-center'>RTU Apparel's <Link to='term-of-service' target="_blank" className='text-orange-500'>terms of service</Link> and <Link to='term-of-service' target="_blank"  className='text-orange-500'>privacy policy</Link> must be agreed to when signing up.</p>
                    </div>           

                        <div className='border-t-2 border-gray-300 text-center pt-5 pb-10 mt-5 text-gray-500 text-sm italic '>
                           
                            <h1>Do you already have an account? <Link to='signin' className='text-orange-500 underline hover:text-indigo-600'>Sign in</Link></h1> 
                           
                        </div>

                     </div>
                </div>
            </div>
        </div>
      
  )
}

export default SignUp
