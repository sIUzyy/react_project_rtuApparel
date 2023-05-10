// authContext for our Sign in / Sign up / forget & reset Password system.


//import createContext, useContext, useEffect, useState from react.
import {createContext,
        useContext,
        useEffect,
        useState,
        } from "react";    

//import the auth from firebase for our authentication.
import { auth } from '../Database/firebase'


//createUserWithEmailAndPassword: Creates a new user account in Firebase Authentication with the specified email address and password.
//signInWithEmailAndPassword: Signs in an existing user with the specified email address and password.
//onAuthStateChanged: Registers a listener that is called whenever the user authentication state changes (e.g. when a user signs in or signs out).
//signOut: Signs out the currently authenticated user.
//GoogleAuthProvider: An object that provides the Google Sign-In authentication mechanism.
//signInWithPopup: Signs in a user using a popup window for authentication with a specified authentication provider.
//sendPasswordResetEmail: Sends a password reset email to the given email address, which allows the user to reset their password.
//confirmPasswordReset: Confirms a password reset with the given verification code and new password.
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         GoogleAuthProvider,
         signInWithPopup,
         sendPasswordResetEmail,
         confirmPasswordReset,
} from "firebase/auth";

// currentUser: A property that holds the current user object. This property is initially set to null.
// signUp: A function that returns a promise to create a new user account with the specified email and password.
// signIn: A function that returns a promise to sign in an existing user with the specified email and password.
// logOut: A function that returns a promise to sign out the currently authenticated user.
// googleSignIn: A function that returns a promise to sign in a user using Google Sign-In.
// forgotPassword: A function that returns a promise to send a password reset email to the given email address.
// resetPassword: A function that returns a promise to confirm a password reset with the given verification code and new password.
const AuthContext = createContext({
    currentUser: null,
    signUp: () => Promise,
    signIn: () => Promise,
    logOut: () => Promise,
    googleSignIn: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise
    
})


//create a useAuth function.
export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {

    //create a useState for our user.
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return() => {
            unsubscribe()
        }
    }, [])

    //signUp functionality, create new account using email.
    const signUp = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn functionality, login with the email and password that you created.
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signIn with google 
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    //logOut functionality, signOut the currentUser.
    const logOut = () => {
        return signOut(auth)
    }

    //forgotPassword functionality, and will send an email to your provided email address.
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/signin'
        })

    }

    //resetPassword function, create new password for your account.
    const resetPassword = (oobCode, newPassword) => {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }


    //this function contain the functionality that we created.
    const value = {
        currentUser,
        signUp, 
        signIn,
        logOut,
        googleSignIn,
        forgotPassword,
        resetPassword,
    }

    //pass down the value function that we created, make sure all routes is in inside of authcontextprovider.
    return <AuthContext.Provider value={value}> 
                 {children}
            </AuthContext.Provider>
}
