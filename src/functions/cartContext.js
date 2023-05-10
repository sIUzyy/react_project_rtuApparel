//cartContext to hold all functionality all our addToCart section.

//import createContext and useState from react
import React, { createContext, useState } from 'react'

//import RTUPRODUCTS. RTUPRODUCTS contains the data of our products.
import { RTUPRODUCTS } from '../Users/UserProducts'


//create a function called ShopContext and set it to createContext.
export const ShopContext = createContext(null)

//create a function called getDefaultCart
const getDefaultCart = () => {
    let cart = {} //first initialize empty ojbect named 'cart'.
    for(let i = 1; i <RTUPRODUCTS.length + 1; i++){ //the loop start at 1 because in our RTUPRODUCTS the data there start at 1. And the looping ends at the length of our RTUPRODUCTS,meaning it will stop before reaching the last index of the array and will only iterate over indexes '1'. And '+1' is added to include the last product in the array in the loop
        cart[i] = 0 
    }
    return cart //return a cart which now contains properties for each in RTUPRODUCTS.
}

export const ShopContextProvider = (props) => {

    //create a state for our cartContext and pass down the getDefaultCart() function.
    const [cartItems, setCartItems] = useState(getDefaultCart())

    //addToCart function 
    const addToCart = (itemId) => {
      setCartItems((prev) => {
        const updatedItems = { ...prev };
        if (updatedItems[itemId] < 5) {
          updatedItems[itemId] += 1;
        }
        return updatedItems;
      });
    };
    
    //getTotalCartAmount function wherein you get the total of all items 
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = RTUPRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

     //total amount of specific item
     const getTotalAmountForItem = (itemId) => {
      const itemInfo = RTUPRODUCTS.find((product) => product.id === itemId);
      const quantity = cartItems[itemId];
      return itemInfo.price * quantity;
    }

    //total amount of items + shipping fee
    const getTotalPayment = () => {
      const subtotal = getTotalCartAmount();
      const shippingCost = 30;
      const totalAmount = subtotal + shippingCost;
      return totalAmount;
    };

    //removeFromCart function 
    const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    //delete specific item
    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCartItems = {...prev};
          if (updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId] = 0;
          }
          return updatedCartItems;
        });
      }

    //clear all items in cart
      const clearFromCart = () => {
        setCartItems((prev) => {
          const updatedCartItems = {};
          for (const key in prev) {
            updatedCartItems[key] = 0;
          }
          return updatedCartItems;
        });
      }
      

    //contextValue contains all the functionalities that we created
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalAmountForItem,
        deleteFromCart,
        clearFromCart,
        getTotalPayment
       
    }

//    console.log(cartItems) 

  //pass down the contextValue function that we created, make sure all the routes is inside of shopcontextProvider to use all of the functionality.
  return <ShopContext.Provider value={contextValue}>
                    {props.children}
                </ShopContext.Provider>
}


