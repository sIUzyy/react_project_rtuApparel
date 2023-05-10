//RTU COLLECTION MAPPING
//DISPLAY THE IMAGE OF PRODUCT, NAME, PRICE, AND MANUFACTURE.

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../functions/cartContext'


export const UserRTUCollection = (props) => {
    
    const{id, productName, price, productImage, productManufacture, path} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

  return (


   
        
        <div className=' shadow-2xl rounded-sm w-auto h-auto '>
        <Link to={path}>
               <img src={productImage} alt='' className='w-auto h-auto scale-90 hover:scale-100 ease-in duration-500' />

            <div className='flex justify-between   mx-2 mb-8 mt-5'>
                <h1 className='font-bold text-sm lg:text-sm'>{productName}</h1>
                <h1 className='font-medium text-orange-500 text-sm  lg:text-sm'>₱{price}</h1>
            </div>
              
            <div className='mx-2 text-gray-500 pb-4 mt-5 italic text-sm lg:text-sm'>
                 <h1> {productManufacture}</h1>
                </div>
            </Link>

             <div className='mx-2 mb-2 '>
                <button 
                className='bg-[#0E1C36] p-2 w-full rounded-md text-white italic font-medium text-sm border hover:opacity-80'
                onClick={() => addToCart(id)}
                > 
                <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-6 '>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {cartItemAmount > 0 && <h1 className='text-md -mt-2 font-bold text-red-600'>{cartItemAmount}</h1>}
                </div>
                </button>
               
             </div>       
            </div>
        

  )
}

export default UserRTUCollection