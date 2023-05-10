// SIGN-IN COMPONENT

import React, {
       useEffect, 
       useState, 
       useRef 
} from 'react'

import { Link,  
         useNavigate, 
        } from 'react-router-dom'
import { useAuth } from '../functions/authContext'

import {FcGoogle} from 'react-icons/fc'

import {AiOutlineEye,
        AiOutlineEyeInvisible,
        AiOutlineArrowLeft
} from 'react-icons/ai'
import { db } from '../Database/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import signin from './signin.css'


const SignIn = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [setIsSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn, googleSignIn} = useAuth()
    const mounted = useRef(false)

    const userCollectionRef = collection(db, "users-info" )
   

    //show password icon function
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

        if (!email || !password) {
            setError(error.message)
          }
        
          setIsSubmitting(true)
        
          signIn(email, password)
            .then(async (response) => {
              // console.log(response)
        
              // Check if a document with this email already exists
              const existingUserQuery = query(userCollectionRef, where('email', '==', email))
              const existingUserDocs = await getDocs(existingUserQuery)
        
              if (existingUserDocs.size > 0) {
                console.log('User already exists')
                navigate('/RTUApparel')
              } else {
                // Add a new document to the collection
                addDoc(userCollectionRef, {
                  email: email,
                  password: password,
                }).then((response) => {
                  // console.log(response)
                  navigate('/RTUApparel')
                })
              }
            })
            .catch((error) => {
              console.log(error.message)
              setError(error.message)
            })
            .finally(() => mounted.current && setIsSubmitting(false))
        }
     
        const handleGoogle = async (e) => {
            e.preventDefault();
          
            try {
              const result = await googleSignIn();
              // console.log(result)
              const { user } = result;

              const existingUserQuery = query(userCollectionRef,where('googleId', '==', user.uid))
              const existingUserDocs = await getDocs(existingUserQuery)

              if(existingUserDocs.size > 0){
                console.log('already exist')
                navigate('/RTUApparel')
              }else{
                await addDoc(userCollectionRef, {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    googleId: user.uid,
                  });
                  navigate("/RTUApparel");
              }
        
            } catch (error) {
              console.log(error.message);
            }
          };
        

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

            <h1 className='tracking-widest text-center font-fontMain text-5xl text-orange-500  md:text-4xl md:text-left lg:text-5xl '>RTU APPAREL</h1>
            <p className='text-gray-500 mt-4 text-center text-md italic md:not-italic md:text-sm md:text-left md:mt-2 lg:text-2xl'>To access your RTU Apparel account, 
                please enter your login credentials.
            </p>
            </div>

            <div className='main-class h-auto w-96 mx-auto shadow-2xl rounded-md mt-5 bg-slate-100 lg:mr-20'>
                <div className='mx-5 pt-5'>

                <form onSubmit={handleSubmit} >

                    <div> 
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='text' 
                    className='block mb-4 border-2 border-gray-300 w-full rounded-md h-14 pl-5 outline-none hover:border-orange-500' 
                    placeholder='Email'/>
                    </div>

                    <div className='flex'>                    
                    <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    className='block mb-2 border-2 border-gray-300 w-full rounded-md h-14 pl-5 outline-none hover:border-orange-500' 
                    placeholder='Password'/>
                  
                   <div className='' onClick={PasswordShow}>
                    {showPassword ? <AiOutlineEye size={20}  className='-ml-10 mt-4'/> : <AiOutlineEyeInvisible size={20}  className='-ml-10 mt-4'/>}
                   </div>
                    </div>

                    
                
                    <button 
                    // isLoading={isSubmitting}
                    className='w-full bg-orange-500 mt-6 p-3 mb-4 font-normal text-white rounded-lg hover:opacity-80'
                    // onClick={submitData}
                    >
                    Sign In
                    </button>

                    {error && <p className='-mt-2 text-center text-red-500 font-semibold italic text-md'>{error}</p>}


                </form>
           
            <div className='text-center pb-5 border-b-2 border-gray-300'>
                  <Link to='forget-password' className=' text-indigo-600 text-sm font-medium  hover:underline'>Forget password?</Link>
                  
                  </div>

                  <div className='mt-5'>
                 
                    <button  
                    onClick={handleGoogle}
                    className='flex items-center font-bold justify-center p-3 rounded-md border-2 border-gray-300 w-full hover:opacity-80'> 
                    {<FcGoogle size={25} className='mr-2'/>} 
                    Google 
                    </button>
                    
                        </div>

                        <div className='text-center pb-10 mt-5'>

                            <h1 className='text-gray-500 text-sm'>New to RTU APPAREL? <Link className='text-orange-500 underline italic hover:text-indigo-600' to='signup'>Sign Up</Link></h1>
                          
                        </div>

                     </div>
                </div>
            </div>
        </div>
      
  )
}

export default SignIn

