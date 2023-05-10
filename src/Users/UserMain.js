//THIS FILE WILL SHOW, IF USER LOGIN THEIR ACCOUNT
//THIS PAGE CONTAIN SLIDERCOMPONENT(SLIDESHOW)
//THIS PAGE CONTAIN RTU CATEGORIES
//THIS PAGE CONTAIN RTU COLLECTION

import UserCategory from '../components/user-img-cate';
import UserLace from '../components/user-img-lace'
import UserPatch from '../components/user-img-patch';
import UserUniform from '../components/user-img-uniform';
import UserPants from '../components/user-img-pants';
import UserJersey from '../components/user-img-jersey';
import UserRTUCollection from './UserRTUCollection';

import React from 'react'
import { Link } from 'react-router-dom';
import SliderComponent from '../Users/UserSlider';
import { RTUPRODUCTS } from './UserProducts';

const UserMain = () => {



  return (
    <div className='max-w-7xl mx-auto mb-52 '>

    <div className='mx-5 my-10'>

      <SliderComponent/>  
   
    <div className='my-10 '>
        <h1 className='tracking-widest font-fontMain text-2xl text-orange-500 '>Shop Our Categories</h1>
        <p className='text-gray-500 text-sm text-justify md:text-base'>Welcome to RTU Apparel, your one-stop-shop for all your clothing needs. Browse our extensive collection of high-quality items organized into convenient categories, 
            including Uniforms, Pants, Jerseys, ID Laces, Patches, and Accessories. Find the perfect apparel to suit your needs and show off your RTU pride.</p>
    </div>


      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8'>

       
        <Link to='uniform'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl  lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            UNIFORM
        </div>
        <UserUniform/>
        </div>
        </Link>

        <Link to='pants'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PANTS
        </div>
        <UserPants/>
        </div>
        </Link>

        <Link to='jersey'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48 '>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            JERSEY
        </div>
        <UserJersey/>
        </div>
        </Link>

        <Link to='IDlace'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ID LACE
        </div>
        <UserLace/>
        </div>
        </Link>

        <Link to='patch'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            PATCH
        </div>
        <UserPatch/>
        </div>
        </Link>

        <Link to='accessory'>
        <div className='pt-1 scale-100 hover:scale-105 ease-in duration-500 bg-[#F7F9F9] shadow-2xl h-auto w-auto rounded-2xl lg:w-48  lg:gap-11'>
        <div className='text-center font-bold text-lg mt-5 text-black'>
            ACCESSORIES
        </div>
        <UserCategory/>
        </div>
        </Link>
     
      </div>  


 
     </div>


     <div className='mx-5 md:mb-10 '>
            <h1 className='tracking-widest font-fontMain text-2xl text-orange-500'>RTU Collection</h1>
            <p className='text-gray-500 text-sm text-justify md:text-base'>Stay stylish and show your school pride with the RTUCollection section of RTU apparel, 
            featuring a variety of trendy and high-quality clothing items adorned with the university's iconic logo.</p>
        </div>
    
    <div className='mx-5 mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5'>
     {RTUPRODUCTS.map((product) => (
        <UserRTUCollection data={product}/>
     ))}
     </div>
 
    </div>
  )
}

export default UserMain

