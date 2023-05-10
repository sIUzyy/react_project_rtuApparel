//USER ACCOUNT PAGE
import React from 'react'
import { useAuth } from '../functions/authContext'
import { useNavigate } from 'react-router-dom'


export const UserAccount = () => {
    const { currentUser, logOut } = useAuth()
    const navigate = useNavigate()

    const handleLogOut = async () =>{

      try{
        logOut()
        navigate('/')
      }catch(error){
        console.log(error.message)

      }

    }
  return (

    <div className='max-w-7xl mx-auto'>
        <div className='m-5'>
        <h1 className='font-bold text-5xl mb-2' >My Account</h1>
        <p className='text-gray-500 italic'>Ensure the safety and security of your account by managing and taking protective measures.</p>

          <div className='bg-gradient-to-r from-yellow-200 via-orange-400 to-blue-700 rounded-md w-full h-40 mt-5 md:h-52 lg:h-60'>
            <div className='flex  justify-end '>
          <img className='w-24 mx-10 my-7 md:w-32 lg:w-36 md:my-9 lg:my-12 lg:mx-14 ' src='https://upload.wikimedia.org/wikipedia/commons/5/57/RTU_Seal.png' alt='' />
          </div>
        </div>

        <img className='-mt-16 ml-5 w-32 h-32 rounded-full md:w-40 md:h-40' src={currentUser?.photoURL || "https://pcgacademia.pl/wp-content/themes/pcgacademia-child/images/png/avatar-placeholder.png"} alt='' width="100" height="100"  />

        <div className='mt-5 font-bold italic'>
          <h1>{currentUser && currentUser.displayName}</h1>
          <h1>{currentUser && currentUser.email}</h1>
        </div>

        <div className='mt-10'>
            <button 
                onClick={handleLogOut}
                className='text-sm text-gray-500 py-2 w-32 rounded-md border-2' 
                 type='submit'>Log Out</button>
                </div>

    </div>

    </div>
   
  )
}

export default UserAccount
