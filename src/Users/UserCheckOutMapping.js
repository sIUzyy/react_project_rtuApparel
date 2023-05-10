//CHECKOUT PAGE

import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../functions/cartContext';
import UserCheckOut from './UserCheckOut';
import { RTUPRODUCTS } from './UserProducts';
import style from './style.css'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Database/firebase';
import { useFormik } from 'formik';
import { schemaObject } from '../functions/schema';

const UserCheckOutMapping = () => {
    
    const { cartItems, getTotalCartAmount, getTotalPayment} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const TotalPayment = getTotalPayment()
    
    const checkOutCollectionRef = collection(db, "place-order")

        //formik hook return form values, state value, etc.
        const {values, errors, touched, handleChange, resetForm ,handleBlur, handleSubmit} = useFormik({

            // this is gonna be our state
            initialValues: {
                email: "",
                studentNumber: "",
                address: "",
                name: '',
                phoneNumber: "",
                message: "",
                cash: "cash on delivery",
                     
            },
    
            //Our form is gonna use the schemaObject and validate the form.
            validationSchema: schemaObject,
      
        })

    const submitData = (e, id, selectedVariation, selectedSize) => {
        e.preventDefault();
    
        const productsData = RTUPRODUCTS.filter((product) => cartItems[product.id] !== 0).map((product) => ({
          productName: product.productName,
          productVariation: product.id === id ? selectedVariation : localStorage.getItem(`selectedVariation_${product.id}`) || '',
          productSize: product.id === id ? selectedSize : localStorage.getItem(`selectedSize_${product.id}`) || '',
          productPrice: product.price,
          productQuantity: cartItems[product.id],
        }));
    
        addDoc(checkOutCollectionRef, {
          email: values.email,
          studentNumber: values.studentNumber,
          address: values.address,
          name: values.name,
          phoneNumber: values.phoneNumber,
          message: values.message,
          cash: values.cash,
          products: productsData,
        }).then(() => {
          resetForm({
            values: values.initialValues,
          });
          window.location.reload();
        });
      };

  return (
    <div className='max-w-7xl mx-auto'>
    <div className='mx-5'>
        <div className='checkout-header mt-5'>
                <h1 className='uppercase text-orange-500 text-3xl font-bold'>PURCHASE CONFIRMATION</h1>
                <p className='text-gray-500 text-sm text-justify italic'>The RTU Apparel checkout page is where you can review your items,  enter your payment 
                and shipping information to complete your purchase.</p>

        </div>

        <div className='checkout-form mt-5 lg:flex lg:justify-between '>
            <div className=' lg:w-3/5 lg:mr-5 xl:w-3/6'>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Email</label>

                    <input 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='email'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR EMAIL ADDRESS' 
                    type='email' 
                    required
                    />
                    {errors.email && touched.email && <p className='input-error'>{errors.email}</p>}

                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Student Number</label>

                    <input 
                    value={values.studentNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='studentNumber'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR STUDENT NUMBER' 
                    type='number' 
                    required
                    />
                    {errors.studentNumber && touched.studentNumber && <p className='input-error'>{errors.studentNumber}</p>}

                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Delivery Address</label>

                    <textarea 
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='address'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none resize-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR FULL DELIVERY ADDRESS' 
                    required    
                    />
                    {errors.address && touched.address && <p className='input-error'>{errors.address}</p>}

                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Name</label>

                    <input 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='name'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR FULL NAME' 
                    type='email' 
                    required
                    />
                    {errors.name && touched.name && <p className='input-error'>{errors.name}</p>}

                </div>

                <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Phone Number</label>
                    <input 
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='phoneNumber'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR CONTACT NUMBER' 
                    type='number' 
                    required
                    />
                    {errors.phoneNumber && touched.phoneNumber && <p className='input-error'>{errors.phoneNumber}</p>}

                </div>

                <div className='mb-4'>
                    <div className='flex justify-between'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Message</label>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Optional</label>
                    </div>
                    <textarea 
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id='message'
                    className='border border-[#725AC1] w-full p-3 rounded-sm text-sm outline-none resize-none hover:border-orange-600 focus:border-orange-600' 
                    placeholder='ENTER YOUR MESSAGE. (OPTIONAL)' 
                    required
                    />

                </div>

               
            </form>

            <div className='mb-4'>
                    <label className='block text-sm uppercase font-semibold text-[#748386]'>Payment Option:</label>
                    
                    <div className='md:flex'>
                        <button 
                        values={values.cash} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='cash'
                        className='border  bg-blue-900 w-full p-3 mb-3 rounded-sm text-sm outline-none resize-none uppercase font-semibold text-white hover:bg-red-600 focus:bg-red-600 md:mb-0'>
                        Cash on Delivery
                        </button>


                        <button className='border bg-[#22333B] w-full p-3 rounded-sm text-sm outline-none resize-none cursor-not-allowed text-white font-semibold hover:bg-red-600'>GCASH</button>
                    </div>
                </div>
                <p className='text-red-600 text-sm text-justify italic font-semibold'>NOTE: Unfortunately, the GCASH payment method is not currently available at this time.</p>
                </div>

            {/* PAYMENT INFO START */}
            <div className='payment-info  lg:w-2/5 2xl:w-auto 2xl:px-16 2xl:pt-3 '>
            <div className='mt-10 lg:mt-0'>

                {/* PRODUCT DETAILS START */}
            
                <div>
                <h1 className='text-2xl uppercase font-bold text-indigo-600 mb-2 '>Product Details</h1>
                {RTUPRODUCTS.map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return (
                      <UserCheckOut
                        key={product.id}
                        data={product}
                        onSubmit={(e, selectedVariation, selectedSize) =>
                          submitData(e, product.id, selectedVariation, selectedSize)
                        }
                      />
                    );
                  }
                  return null;
                })}
              </div>



                {/* PRODUCT DETAILS END */}

                {/* PAYMENT DETAILS START */}
                <div className='payment-details flex mt-10'>


                {/* PAYMENT TEXT DETAILS START */}
                <div>
                <h1 className=' text-2xl uppercase font-bold text-indigo-600 mb-2'>Payment Details</h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Merchandise Subtotal: </h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Shipping Subtotal: </h1>
                <h1 className='text-sm uppercase font-semibold text-[#748386]'>Total Payment: </h1>
                </div>
                 {/* PAYMENT TEXT DETAILS END */}


                 {/* PAYMENT DATA DETAILS START */}
                <div className='text-sm uppercase font-bold text-red-500 mt-10'>
                <h1 className='merchandise subtotal'>₱{totalAmount}.00 </h1>
                <h1 className='shipping-subtotal'>₱30.00 </h1>
                <h1 className='total-payment'>₱{TotalPayment}.00 </h1>
                </div>
                 {/* PAYMENT DATA DETAILS END */}

                </div>
                {/* PRODUCT DETAILS END */}


            </div>

            <form className='mt-10'>

                <button 
                onClick={submitData} 
                className='uppercase w-full bg-orange-600 text-white p-3 rounded-sm font-semibold hover:opacity-80'
                >
                Place Order
                </button>

            </form>

            </div>
             {/* PAYMENT INFO END */}

           
        </div>
    </div>

</div>
  
  )
}

export default UserCheckOutMapping
