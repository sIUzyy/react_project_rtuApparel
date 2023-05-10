import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './authContext'

export const ProtectedRoutes = ({children}) => {

  const { currentUser } = useAuth()
    
  return !currentUser ? children : <Navigate to='/RTUApparel' replace />
}

export default ProtectedRoutes