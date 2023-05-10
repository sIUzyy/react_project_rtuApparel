import React from 'react'

//import functions from react-router-dom
import { BrowserRouter as Router, 
         Routes, 
         Route, 
} from 'react-router-dom'

//RTU Apparel main pages.
import Landing from '../MainPages/landing'
import Main from '../MainPages/Main'
import Items from '../MainPages/Items'
import Faq from '../MainPages/faq'
import Centre from '../footer-pages/cs-help-centre'
import Contact from '../footer-pages/cs-contact-us'

//RTU Apparel footer pages.
import Asked from '../footer-pages/cs-faq'
import About from '../footer-pages/abr-about-us'
import Team from '../footer-pages/abr-team'
import Term from '../footer-pages/abr-tos'

//RTU Apparel main navbar.
import NavMen from '../Navigation/NavMen'
import NavWomen from '../Navigation/NavWomen'
import NavAcs from '../Navigation/NavAcs'

//RTU Apparel Sign-in / Sign-up pages.
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

//RTU Apparel Forget / Reset password pages.
import UserForgetPassword from '../Users/UserForgetPassword'
import UserResetPassword from '../Users/UserResetPassword'

//RTU Apparel main page for user
import UserMain from '../Users/UserMain'

//RTU Apparel user pages
import UserAccount from '../Users/UserAccount'
import UserSettings from '../Users/UserSettings'
import UserPurchase from '../Users/UserPurchase'

//RTU Apparel user categories. 
import UserCategoryUniform from '../Users/UserCategoryUniform'
import UserCategoryPants from '../Users/UserCategoryPants'
import UserCategoryJersey from '../Users/UserCategoryJersey'
import UserCategoryLace from '../Users/UserCategoryLace'
import UserCategoryPatch from '../Users/UserCategoryPatch'
import UserCategoryAccessories from '../Users/UserCategoryAccs'

//RTU Apparel categories carts.
import UserUniformCart from '../Users/UserUniformCart'
import UserPantsCart from '../Users/UserPantsCart'
import UserJerseyCart from '../Users/UserJerseyCart'
import UserIDLaceCart from '../Users/UserIDLaceCart'
import UserPatchCart from '../Users/UserPatchCart'
import UserToteCart from '../Users/UserToteCart'
import UserCapCart from '../Users/UserCapCart'
import UserHandkerchiefCart from '../Users/UserHandkerchiefCart'
import UserTumblerCart from '../Users/UserTumblerCart'
import UserMugCart from '../Users/UserMugCart'
import UserCartMapping from '../Users/UserCartMapping'
import UserCheckOutMapping from '../Users/UserCheckOutMapping'


//Routes for navigation and footer pages.
import Nav from '../Navigation/Nav'
import NavUser from '../Navigation/NavUser'
import Footer from '../Navigation/Footer'

//Routes error page.
import Error from '../MainPages/Error'

//import useAuth from authContext 
import { useAuth } from '../functions/authContext'
import { auth } from '../Database/firebase'

//UserProtected components used to protect the user routes.
//ProtectedRoutes components used to protect login/signup routes from user.
import UserProtected from '../functions/UserProtected'
import ProtectedRoutes from '../functions/ProtectedRoutes'


const MainRoutes = () => {

    const { currentUser } = useAuth(auth)
  
  return (
    <>
        <Router>
          
                {!currentUser ? <Nav/> : <NavUser/>}
            <Routes>
           
                <Route path='/' element={<Landing/>}/>
                <Route path='main' element={<Main/>}/>
                <Route path='items' element={<Items/>}/>
                <Route path='frequently-asked-questions' element={<Faq/>}/>
                <Route path='help-centre' element={<Centre/>} />
                <Route path='contact-us' element={<Contact/>} />
                <Route path='faq' element={<Asked/>} />

                <Route path='about-us' element={<About/>} />
                <Route path='team' element={<Team/>} />
                <Route path='term-of-service' element={<Term/>} />


                <Route path='faq/contact-us' element={<Contact/>} />
                <Route path='help-centre/contact-us' element={<Contact />} />

                <Route 
                path='men' 
                element={<ProtectedRoutes><NavMen/></ProtectedRoutes>} 
                />

                <Route 
                path='women' 
                element={<ProtectedRoutes><NavWomen/></ProtectedRoutes>} 
                />

                <Route 
                path='accessories' 
                element={<ProtectedRoutes><NavAcs/></ProtectedRoutes>} 
                />

                <Route
                path='/men/women'
                element={<ProtectedRoutes><NavWomen/></ProtectedRoutes>}
                />

                <Route
                path='/men/accessories'
                element={<ProtectedRoutes><NavAcs/></ProtectedRoutes>}
                />

                <Route
                path='/women/men'
                element={<ProtectedRoutes><NavMen/></ProtectedRoutes>}
                />
                
                <Route
                path='/women/accessories'
                element={<ProtectedRoutes><NavAcs/></ProtectedRoutes>}
                />

                <Route
                path='/accessories/men'
                element={<ProtectedRoutes><NavMen/></ProtectedRoutes>}
                />

                <Route
                path='/accessories/women'
                element={<ProtectedRoutes><NavWomen/></ProtectedRoutes>}
                />

                <Route 
                path='signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='signup' 
                element={<ProtectedRoutes><SignUp/></ProtectedRoutes>} 
                />

                <Route path='forget-password' element={<UserForgetPassword/>} />
                <Route path='reset' element={<UserResetPassword/>} />

                <Route 
                path='accessories/signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='men/signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='women/signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='signin/signup/term-of-service' 
                element={<ProtectedRoutes><Term/></ProtectedRoutes>} 
                />

                <Route 
                path='signup/signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='signin/signup/signin' 
                element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} 
                />

                <Route 
                path='signin/signup' 
                element={<ProtectedRoutes><SignUp/></ProtectedRoutes>}
                 />

                <Route 
                path='signup/term-of-service' 
                element={<ProtectedRoutes><Term/></ProtectedRoutes>}
                />

                <Route 
                path='signin/forget-password' 
                element={<ProtectedRoutes><UserForgetPassword/></ProtectedRoutes>} 
                />

                <Route 
                path='RTUApparel' 
                element={<UserProtected><UserMain/></UserProtected>} 
                />

                <Route 
                path='account' 
                element={<UserProtected> <UserAccount/> </UserProtected>}
                />

                <Route 
                path='settings' 
                element={<UserProtected><UserSettings/></UserProtected>} 
                />


                <Route
                path='cart'
                element={<UserProtected><UserCartMapping/></UserProtected>}
                />

                <Route
                path='cart/checkout'
                element={<UserProtected><UserCheckOutMapping/></UserProtected>}
                />

                <Route 
                path='purchase'
                element={<UserProtected><UserPurchase/></UserProtected>} 
                />

                <Route 
                path='RTUApparel/uniform' 
                element={<UserProtected><UserCategoryUniform/></UserProtected>} 
                />
                <Route 
                path='RTUApparel/pants' 
                element={<UserProtected><UserCategoryPants/></UserProtected>} 
                />
                <Route 
                path='RTUApparel/jersey' 
                element={<UserProtected><UserCategoryJersey/></UserProtected>} 
                />
                <Route 
                path='RTUApparel/IDlace' 
                element={<UserProtected><UserCategoryLace/></UserProtected>} 
                />
                <Route 
                path='RTUApparel/patch' 
                element={<UserProtected><UserCategoryPatch/></UserProtected>} 
                />
                <Route 
                path='RTUApparel/accessory' 
                element={<UserProtected><UserCategoryAccessories/></UserProtected>} 
                />

                <Route
                path='RTUApparel/uniform/PEShirt'
                element={<UserProtected><UserUniformCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/pants/PEPants'
                element={<UserProtected><UserPantsCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/jersey/JerseyCart'
                element={<UserProtected><UserJerseyCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/IDlace/IDLace'
                element={<UserProtected><UserIDLaceCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/patch/Patch'
                element={<UserProtected><UserPatchCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/accessory/totebag'
                element={<UserProtected><UserToteCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/accessory/Cap'
                element={<UserProtected><UserCapCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/accessory/Handkerchief'
                element={<UserProtected><UserHandkerchiefCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/accessory/Mug'
                element={<UserProtected><UserMugCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/accessory/Tumbler'
                element={<UserProtected><UserTumblerCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/PEShirt'
                element={<UserProtected><UserUniformCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/IDLace/IDLace'
                element={<UserProtected><UserIDLaceCart/></UserProtected>}
                />  

                <Route
                path='RTUApparel/Patch'
                element={<UserProtected><UserPatchCart/></UserProtected>}
                />  

                <Route
                path='RTUApparel/Tumbler'
                element={<UserProtected><UserTumblerCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/totebag'
                element={<UserProtected><UserToteCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/Cap'
                element={<UserProtected><UserCapCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/Handkerchief'
                element={<UserProtected><UserHandkerchiefCart/></UserProtected>}
                />

                <Route
                path='RTUApparel/Mug'
                element={<UserProtected><UserMugCart/></UserProtected>}
                />

                <Route path='*' element={<Error/>}/>

            </Routes>
                <Footer/>
        </Router>
    </>
  )
}

export default MainRoutes