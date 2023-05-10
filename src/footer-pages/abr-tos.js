//term of service footer page

import React, {useState, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Term = () => {

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

  return(
    
    <div className='max-w-7xl mx-auto'>
        <div className='mx-5 my-5'>

           {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='mb-5' size={35}/></Link>
            :
            ''
            }
            <h1 className='font-bold text-5xl'>Terms of Service</h1>
            <p className='text-gray-500 text-md'>Welcome to <span className='text-orange-500 font-bold'>RTU Apparel!</span> Please read the following terms of service carefully before using our website.</p>

            <div className='mt-4'>
            <h1 className='font-bold text-lg'>Agreement to Terms</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>By using our website, you agree to these terms of service and any additional terms and conditions that may apply to specific sections of the website. If you do not agree with these terms of service, do not use our website.</p>

            <h1 className='font-bold text-lg'>Use of Website</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>You may only use our website for lawful purposes and in accordance with these terms of service. You must not use our website for any illegal or unauthorized purpose or to engage in any activity that violates the rights of others.</p>

            <h1 className='font-bold text-lg'>Intellectual Property Rights</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>All content on our website, including but not limited to text, graphics, images, logos, and software, is the property of RTU Apparel or its affiliates and is protected by Philippines law and international copyright, trademark, and other intellectual property laws.</p>

            <h1 className='font-bold text-lg'>Privacy Policy</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>We take your privacy seriously. Please review our Privacy Policy, which explains how we collect, use, and disclose personal information.</p>

            <h1 className='font-bold text-lg'>Payment and Shipping</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>We accept various forms of payment, including Gcash & Cash on Delivery. Shipping times and costs will be calculated at checkout and may vary depending on your location and the shipping method you select.</p>

            <h1 className='font-bold text-lg'>Returns and Refunds</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>We accept returns within 15 days of purchase for most items. Please refer to our Returns Policy for more information.</p>

            <h1 className='font-bold text-lg'>Limitation of Liability</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>In no event shall RTU Apparel or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our website or the products sold on our website.</p>

            <h1 className='font-bold text-lg'>Governing Law</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>These terms of service shall be governed by and construed in accordance with the laws of the Philippines.</p>

            <h1 className='font-bold text-lg'>Changes to Terms of Service</h1>
            <p className='text-sm text-gray-500 text-justify mb-4'>We may update these terms of service from time to time. Your continued use of our website following any such changes indicates your acceptance of the new terms of service.</p>

            </div>
        </div>
    </div>
  )
}

export default Term