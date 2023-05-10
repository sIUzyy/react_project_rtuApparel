import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../functions/cartContext'

const UserCheckOut = (props) => {
    const{  id, productName, productVariation, productSize} = props.data   
    const { cartItems } = useContext(ShopContext)


  const [selectedVariation, setSelectedVariation] = useState(localStorage.getItem(`selectedVariation_${id}`) || '');
  const [selectedSize, setSelectedSize] = useState(localStorage.getItem(`selectedSize_${id}`) || '');

  const handleVariation = (e) => {
    const selectedVariation = e.target.value;
    localStorage.setItem(`selectedVariation_${id}`, selectedVariation);
    setSelectedVariation(selectedVariation);
  };

  const handleSize = (e) => {
    const selectedSize = e.target.value;
    localStorage.setItem(`selectedSize_${id}`, selectedSize);
    setSelectedSize(selectedSize);
  };
  
   
  return (
    <div className='max-w-7xl mx-auto'>
  
                    {/* PRODUCT DETAILS START */}

                  <div className='flex items-center mt-7'>
                  <div>
                    <h1 className='text-sm uppercase  font-semibold text-[#748386]'>SELECT VARIATIONS:</h1>
                  </div>

                  <select 
                    className=' ml-2 text-sm font-bold uppercase text-black outli ' 
                    value={selectedVariation} 
                    onChange={handleVariation}
                    >

                  <option className='font-bold ' disabled >VARIATIONS  </option>
                    {productVariation.map((variationOption) => (

                    <option 
                    className='font-bold'
                    key={variationOption} 
                    value={variationOption}
                    >
                    {variationOption}
                    </option>
                    ))}
                    </select>

     
                    </div>
                    
                    <div className='flex items-center'>

                      <div>
                        <h1 className='text-sm uppercase mb-5 font-semibold text-[#748386] mt-2'>SELECT SIZE:</h1>
                      </div>

                    <select 
                    className='mb-5 ml-2 text-sm font-bold uppercase text-black outline-none mt-2 ' 
                    value={selectedSize} 
                    onChange={handleSize}>

                    <option className='font-bold ' disabled> SIZES </option>
                    {productSize.map((sizeOption) => (

                    <option 
                    className='font-bold'
                    key={sizeOption} 
                    value={sizeOption}>
                    {sizeOption}
                     </option>
          
                     ))}
                    </select> 
                  </div>
                   
                   <div className='border-b-2 '>
                    <h1  className='text-sm uppercase font-semibold text-[#748386]'>Product: <span className='text-sm text-red-500 font-bold ml-5'>{productName}</span></h1>
                    <h1 className='text-sm uppercase font-semibold text-[#748386]'>Variations: <span className='text-sm text-red-500 font-bold ml-1 '>{selectedVariation}</span></h1>
                    <h1 className='text-sm uppercase font-semibold text-[#748386]'>Size: <span className='text-sm text-red-500 font-bold ml-14 '>{selectedSize}</span></h1>
                    <h1 className='text-sm uppercase font-semibold text-[#748386] mb-2'>Quantity: <span className='text-sm text-red-500 font-bold ml-4'>{cartItems[id]}</span></h1>
                    </div>

                    {/* PRODUCT DETAILS END */}
                    
          

    </div>
  )
}

export default UserCheckOut

