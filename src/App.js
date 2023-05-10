import React from 'react';
import AuthContextProvider from './functions/authContext';
import { ShopContextProvider } from './functions/cartContext';

import MainRoutes from './Routers/MainRoutes';

function App() {

  
  return (
    <div className="App">  
 
      <AuthContextProvider> 
           <ShopContextProvider>
              <MainRoutes/>
            </ShopContextProvider>   
      </AuthContextProvider>
  

    </div>
  );
}

export default App;


