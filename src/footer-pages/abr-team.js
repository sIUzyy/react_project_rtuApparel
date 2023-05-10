//RTU Apparel team footer page.

import React, {useState, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

//import Designer,Dev,Docu,Manager components. These components contains the image of the team.
import Designer from '../components/team-designer'
import Dev from '../components/team-dev'
import Docu from '../components/team-docu'
import Manager from '../components/team-project-m'

export const Team = () => {

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
    
    <div className="mx-auto max-w-7xl">
      <div className='m-5'>

       {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='' size={35}/></Link>
            :
            ''
            }
            </div>

        <div className='mx-5 my-10 lg:flex '>

          <div className=' '>
          <h1 className='font-bold text-5xl text-center lg:w-64 lg:mr-56 text-orange-500 '>OUR TEAM</h1>
      
          <p className='text-gray-500 text-justify mt-2 text-md lg:mr-5 lg:ml-2'>Our dedicated team is constantly pushing the boundaries in apparel design, resulting in the development of the RTU brand. 
            Their passion for creating stylish and practical clothing is evident in each piece of the RTU apparel line.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-10  lg:my-0 '>

            <div className='md:mr-5'>
            <div className='md:w-72  md:mx-auto'>
            <Manager/>
            </div>
            <h1 className='font-bold text-xl mt-4'>Rinaldo Lim</h1>
            <h2 className='text-gray-500 font-bold -mt-2 mb-2'>Project Manager</h2>
            <p className='text-justify text-gray-500 text-md mb-10'>The Project Manager of RTU Apparel, brings a wealth of experience and expertise to the team. 
              With his leadership and attention to detail, 
              Rinaldo ensures that every project is delivered on time and to the highest standards.</p>
            </div>

            <div className='md:ml-5'>

            <div className='md:w-72 md:mx-auto '>
            <Designer />
            </div>
            <h1 className='font-bold text-xl mt-4'>Jhon Carlo Barotilla</h1>
            <h2 className='text-gray-500 font-bold -mt-2 mb-2'>Designer</h2>
            <p className='text-justify text-gray-500 text-md mb-10'>The Designer at RTU Apparel, brings creativity and style to the table. 
              His unique designs and attention to detail have established him as one of the top designers in the industry.
            </p>
            </div>

            <div className='md:mr-5'>

            <div className='md:w-72 md:mx-auto'> 
            <Dev/>
            </div>
            <h1 className='font-bold text-xl mt-4'>Justin Peligro</h1>
            <h2 className='text-gray-500 font-bold -mt-2 mb-2'>Developer / System Analyst</h2>
            <p className='text-justify text-gray-500 text-md mb-10'>is an experienced programmer and system analyst for RTU Apparel. With a strong background in computer systems and programming, he is well equipped to develop, analyze, and maintain complex software systems for the apparel industry. He has a deep understanding of the latest technologies and programming languages,
               and is committed to delivering innovative solutions that meet the needs of the business and its customers.
            </p>
            </div>

            <div className='md:ml-5'>

            <div className='md:w-72 md:mx-auto '>
            <Docu/>
            </div>
            <h1 className='font-bold text-xl mt-4'>Christian Sombe</h1>
            <h2 className='text-gray-500 font-bold -mt-2 mb-2'>Documenter</h2>
            <p className='text-justify text-gray-500 text-md mb-10'>The Documenter at RTU Apparel, plays a crucial role in maintaining organized records and communication within the team. With his exceptional attention to detail and communication skills, 
              Christian ensures that all aspects of the projects are properly documented and easily accessible.
            </p>
            </div>
           
           

            </div>
        </div>
    </div>
  )
}

export default Team