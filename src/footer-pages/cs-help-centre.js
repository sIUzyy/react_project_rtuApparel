//help-centre footer-page

import React, {useState, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

//install react-router-dom to access Link functionality.
import { Link } from 'react-router-dom'

export const Centre = () => {

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

    <div className='max-w-7xl mx-auto'>

        <div className='m-5'>
        
            {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='' size={35}/></Link>
            :
            ''
            }

        </div>
        <div className='my-8 mx-5 lg:flex items-center lg:my-32 '>

            <div className='lg:mr-64 lg:w-cc'>
            <h1 className='font-bold text-4xl'>Welcome to <span className='text-orange-500 '>RTU Apparel</span> Help Center!</h1>
            <p className='text-gray-500 text-md mt-2'> If you cannot find what you are looking for, feel free to contact us through our website's 
            <Link to='contact-us' className='font-bold text-orange-500 hover:text-indigo-500'> contact </Link>     
            page.</p>
           
            </div>

            <div className='mt-5'>
            <h1 className='font-bold text-xl '>How do I create an account?</h1>
            <p className='mb-4 text-justify  text-gray-500 text-sm'>To create an account, click on the "Sign Up" button in the top right corner of our website.
                Fill in your email address, password, and other required information, then click "Sign Up."
            </p>

            <h1 className='font-bold text-xl '>How do I place an order?</h1>
            <p className='mb-4 text-justify   text-gray-500 text-sm'>To place an order, simply browse through our products and add items 
                to your cart by clicking the "Add to Cart" button. When you're ready
                to checkout, click on the "Cart" button in the top right corner of the Page and then
                click "Proceed to Checkout." Enter your shipping and payment information, then click "Place Order."
            </p>

            <h1 className='font-bold text-xl '>What payment method are accepted?</h1>
            <p className='mb-4 text-justify  text-gray-500 text-sm'>We accept Gcash and Cash on Delivery as forms of payment.</p>

            <h1 className='font-bold text-xl'>How do I track my order?</h1>
            <p className='mb-4 text-justify  text-gray-500 text-sm'>Once your order has been shipped, you will receive an email with a tracking number.
                You can use this tracking number to check the status of your order on the shipping carrier's website.
            </p>

            <h1 className='font-bold text-xl '>How do I return an item?</h1>
            <p className='mb-4 text-justify text-gray-500 text-sm'>If you are not satisfied with your purchase, you may return it within 15 days of the original purchase date.
                To initiate a return, please contact us throught the "Contact Us" page on our website.
            </p>

            <h1 className='font-bold text-xl '>How do I cancel an order?</h1>
            <p className='mb-4 text-justify  text-gray-500 text-sm'>To cancel an order, please contact us through the "Contact Us" page on our website as soon as possible.
                If the order has already been shipped, It cannot be cancelled.
            </p>
        
            <h2 className='text-black font-bold text-justify text-base'>We hope this <span className='text-orange-500'>Help Center</span> has been useful in resolving any questions or 
                concerns you may have. Thank you for choosing <span className='text-orange-500'>RTU Apparel!</span>
            </h2>

            </div>
        </div>
    </div>
  )
}

export default Centre