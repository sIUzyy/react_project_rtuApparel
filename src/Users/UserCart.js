//RTU APPAREL ITEM CART.
import React, { useState, useEffect, useContext} from 'react'

import { BsTrash } from 'react-icons/bs'
import { ShopContext } from '../functions/cartContext'
import { Link } from 'react-router-dom'


export const UserCart = (props) => {

  const{id, productName, price, productImage} = props.data

  const { cartItems, addToCart, removeFromCart, deleteFromCart, getTotalAmountForItem} = useContext(ShopContext)
  const [selectedVariation, setSelectedVariation] = useState()
 
  const [selectedSize, setSelectedSize] = useState()

  const [isBreakpointsMedium, setIsBreakPointsMedium] = useState(false)
  const [isBreakpointSmall, setIsBreakPointSmall] = useState(false)

  const cartAmount = getTotalAmountForItem(id)

  useEffect(() => {
    const storedVariation = localStorage.getItem('selectedVariation');
    if (storedVariation) {
      setSelectedVariation(storedVariation);
    }
  }, []);


  useEffect(() => {
    const storedSize = localStorage.getItem('selectedSize');
    if (storedSize) {
      setSelectedSize(storedSize);
    }
  }, []);
  
  useEffect(() => {

    const handleMedium = () => {
      if (window.innerWidth <= 768) {
        setIsBreakPointsMedium(true);
      } else {
        setIsBreakPointsMedium(false);
      }
    };
    handleMedium();
    window.addEventListener('resize', handleMedium);
    return () => {
      window.removeEventListener('resize', handleMedium);
    };
  }, []);

  useEffect(() => {

    const handleSmall = () => {
      if (window.innerWidth <= 640) {
        setIsBreakPointSmall(false);
      } else {
        setIsBreakPointSmall(true);
      }
    };
    handleSmall();
    window.addEventListener('resize', handleSmall);
    return () => {
      window.removeEventListener('resize', handleSmall);
    };
  }, []);


  return (
    <div className='max-w-7xl mx-auto'>
      <div className='mx-5 '>
       
        <div className='div-for-medium-large-breakpoints'>
       
            <div className=' md:shadow-md md:flex md:justify-between md:items-center md:mt-5 md:mb-10'>
                <div className={`${isBreakpointsMedium ? 'hidden' : ''} md:w-26 md:mr-0 md:ml-5 `}>
                <img className='w-32' src={productImage} alt='' />
                </div>

      
                <h1 className={`${isBreakpointsMedium ? 'hidden' : 'text-orange-600 font-semibold -ml-5'} `}>₱{price}</h1>

                <div className={`${isBreakpointsMedium? 'hidden' : 'bg-gray-300 p-1 flex xl:-mr-5 '}`}>
                <button onClick={() => removeFromCart(id)} className='w-8 font-black'>-</button> 
                <h1 className='w-8 outline-0 text-center bg-gray-300 text-orange-600 font-semibold'>{cartItems[id]}</h1>
                <button onClick={() => addToCart(id)} className='w-8 font-black'>+</button>
                </div>

  
                <h1 className={`${isBreakpointsMedium ? 'hidden' : 'lg:ml-4'} text-orange-600 font-semibold `}>₱{cartAmount}</h1>

                <div className='mx-10 mb-5 mt-5 lg:mx-16 '>
               
                
                <button onClick={() => deleteFromCart(id)}  className={`${isBreakpointsMedium ? 'hidden' : 'lg:-mr-5'} text-red-600 p-2 `}><BsTrash size={20}/></button>
               
                </div>
            </div>
            </div>

            <div className={`div-for-small-breakpoints ${isBreakpointSmall ? 'hidden' : ' mt-5 mb-10  font-semibold p-2 shadow-2xl text-base uppercase '} `}>
            <div className={`${isBreakpointSmall ? 'hidden' : ''} `}>
            <img src={productImage} alt='' />
                </div>

                <div className='flex '>
                <div>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-4'} `}>Product:</h1> 
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-5'} `}>Unit Price:</h1>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-6 '} `}>Quantity:</h1>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'mb-4'} `}>Total Price:</h1>
                </div>

                <div className='ml-5 '>
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4'} `}>{productName}</h1> 

                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4' } `}>₱{price}</h1>

                <div className={`${isBreakpointSmall? 'hidden' : 'bg-gray-200 mb-5 p-1 flex'}`}>
                <button onClick={() => removeFromCart(id)} className='w-8 font-black'>-</button> 
                <h1 className='w-8 outline-0 text-center bg-gray-200 text-orange-600 font-semibold'>{cartItems[id]}</h1>
                <button onClick={() => addToCart(id)} className='w-8 font-black'>+</button>
                </div>
              
                <h1 className={`${isBreakpointSmall ? 'hidden' : 'text-orange-600 font-semibold mb-4'} `}>₱{cartAmount}</h1>

                </div>
                </div>

                <div className='flex justify-end mt-5 mb-2'>
                  <button onClick={() => deleteFromCart(id)} className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-red-600 p-2 w-32 rounded-md mr-2`}>Delete</button>
                  <Link to='/cart/checkout'><button className={`${isBreakpointSmall ? 'hidden' : ''} text-white bg-black p-2 w-32 rounded-md`}>Check Out</button></Link>
                </div>
            </div>

      </div>
    </div>
  )
}

export default UserCart
