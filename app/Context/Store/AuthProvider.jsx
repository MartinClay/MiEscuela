import React , {useReducer}from 'react'
import authReducer from '../Reducers/autentication.reducer'
import {setCurrentUser,logoutUser} from '../Actions/autentication.action'
import {createContext} from 'react'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export const baseUrl = window.location.hostname

window.addEventListener('beforeunload' ,(ev) => {
   logoutUser()
})


const initialState = {
      isAuthenticated : false,
      user:{}
   }

const AuthProvider = (props) => {
   if(localStorage.jwt) {
      initialState.isAuthenticated = true
      initialState.user = jwt_decode(localStorage.jwt)
   }

   const [stateUser,dispatch] = useReducer(authReducer,initialState)

   if(localStorage.jwt && stateUser.isAuthenticated === false) {
      const userToken = localStorage.jwt ? localStorage.jwt : ""
      dispatch(setCurrentUser(jwt_decode(userToken)))
   }

   
   return (
      <AuthContext.Provider 
         value={{
         stateUser,
         dispatch
         }}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthProvider
