import React from 'react'
import {createContext} from 'react'
import {useState} from 'react'

export const AuthContext = createContext()

export default function AuthProvider ({children}) {

   const [token,setToken] = useState(null)

   const contextValue = {
      token , setToken
   }
   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   )
}
