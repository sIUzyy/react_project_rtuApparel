//contact-us footer pages


import React,{useState, useEffect} from 'react'

import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Link } from 'react-router-dom'


//db is from our firebase extract.
import { db } from '../Database/firebase'

//install firebase to access addDoc and collection from firestore.
import { addDoc, collection } from 'firebase/firestore'

//install formik to access useFormik functionality
import { useFormik } from 'formik'

//install schema and yup to access this functionality
import { schemaObject } from '../functions/schema'


export const Contact = () => {

    //create a function userCollectionRef to hold the data in our contact-us collection.
    const userCollectionRef = collection(db, "contact-us")

   
    //submitData is to get the values from our formik function then add that data to our contact-us collection.
    const submitData = (e) =>{
        e.preventDefault()

        addDoc(userCollectionRef, {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            subject: values.subject,
            message: values.message, 

        }).then (() =>{
            resetForm({
                values: values.initialValues
            })
        })
    
    }
  
    //formik hook return form values, state value, etc.
    const {values, errors, touched, handleChange, resetForm ,handleBlur, handleSubmit} = useFormik({

        // this is gonna be our state
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: '',
            subject: "",
            message: "",
                 
        },

        //Our form is gonna use the schemaObject and validate the form.
        validationSchema: schemaObject,
  
    })

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
    <div className='max-w-7xl mx-auto '>
        
        <div className="mx-5 my-5">

        {isBreakpointSmall
            ?
            <Link to='/'>  <AiOutlineArrowLeft className='' size={35}/></Link>
            :
            ''
            }

            <h1 className='font-bold text-5xl mt-5 text-orange-500'>Get in touch</h1>
            <p className='text-gray-500 text-justify text-md mt-2 mb-10'>Have a question or need help with an order? Our friendly customer support team is available to assist you. 
            Contact us between 8 a.m. and 8 p.m., and we will respond as quickly as possible!</p>

            {/* form-section */}
              <form onSubmit={handleSubmit}>
                <div className='w-full '>

                <div className='md:flex  '>
                <div className='mb-4 md:mr-36'>
                <label className='block font-bold text-sm mb-1'>First Name</label>
                
                <input 
                value={values.firstName} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="firstName"
                type="text"  
                className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96'
                />
                {errors.firstName && touched.firstName && <p className='input-error'>{errors.firstName}</p>}
                </div>

                <div className='mb-4 '>
                <label className='block font-bold text-sm mb-1'>Last Name</label>
                
                <input 
                value={values.lastName} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="lastName"
                type="text" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96' 
                />
                {errors.lastName && touched.lastName && <p className='input-error'>{errors.lastName}</p>}
                
                </div>
                </div>

                <div className=' md:flex '>
                <div className='mb-4 md:mr-36'>
                <label className='block font-bold text-sm mb-1'>Email</label>
                
                <input 
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="email"
                type="email" className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96' 
                />
                {errors.email && touched.email && <p className='input-error'>{errors.email}</p>}
                
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Phone</label>
                
                <input 
                value={values.phoneNumber} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="phoneNumber"
                type="number" 
                className='border-2 border-black w-full h-9 p-3 md:w-72 lg:w-96 '    
                />
                {errors.phoneNumber && touched.phoneNumber && <p className='input-error'>{errors.phoneNumber}</p>}
                
                </div>
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Subject</label>
                
                <input
                value={values.subject} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="subject"
                type="text" className='border-2 border-black w-full h-9 p-3'    
                />
                {errors.subject && touched.subject && <p className='input-error'>{errors.subject}</p>}
                </div>

                <div className='mb-4'>
                <label className='block font-bold text-sm mb-1'>Message</label>
                
                <textarea
                value={values.message} 
                onChange={handleChange} 
                onBlur={handleBlur}
                id="message"
                className='border-2 border-black w-full p-3 resize-none md:h-32 '      
                />
                {errors.message && touched.message && <p className='input-error'>{errors.message}</p>}
                </div>

             <div className='lg:flex justify-end'>

                <button
                type='submit' 
                onClick={submitData} 
                className='w-full mb-4 bg-indigo-600 py-2 rounded-md text-white hover:bg-orange-500 lg:w-32'
                >Submit
                </button>
                    

                                     </div> 
                              </div>
                         </form>
                     {/* form-section end*/}
             </div>
       </div>
  )
}


export default Contact