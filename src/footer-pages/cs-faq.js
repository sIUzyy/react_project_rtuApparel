//frequently asked questions footer-page

import React,{useState,useEffect} from 'react'

//install react-router-dom to access Link functionality.
import { Link } from 'react-router-dom'

import { AiOutlineArrowLeft } from 'react-icons/ai'

//importing FAQ0-accordion components
import FAQ from '../components/faq-accordion' 
 
export const Asked = () => {

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
    
    <div className='max-w-7xl mx-auto  '>
        <div className='mx-5 my-10 '> 

            {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='mb-5' size={35}/></Link>
            :
            ''
            }

            <h1 className='text-5xl font-bold'>Frequently Asked Questions!</h1>
            <p className='mt-2 text-gray-500 italic mb-10 font-bold md:text-sm md:w-96 lg:text-base lg:w-cc '>Can't find the answer you're looking for? Reach out to our <Link to='contact-us' className='text-orange-500'>customer support </Link>team.</p>
            <FAQ/>  {/* FAQ component */}
   </div>
</div>

  )
}

export default Asked