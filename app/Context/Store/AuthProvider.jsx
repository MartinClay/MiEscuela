import {useReducer,useEffect}from 'react'
import authReducer from '../Reducers/autentication.reducer'
import {setCurrentUser,logoutUser} from '../Actions/autentication.action'
import {createContext} from 'react'

import {postFetchVerifyToken} from '../../Hooks/postFetch.js'
import {verifyTokenUrl} from '../../Helpers/Urls.js'

export const AuthContext = createContext()

export const baseUrl = window.location.hostname

window.addEventListener('beforeunload' ,(ev) => {
   logoutUser()
})

const initialState = {
   isAuthenticated : false,
   token: ''
}

const AuthProvider = (props) => {

   const [stateUser,dispatch] = useReducer(authReducer,initialState)

   useEffect( ()=>{
      if(stateUser.token === ''){
         return null
      }else{
         postFetchVerifyToken(stateUser.token,verifyTokenUrl).then((res)=>
            {
               if(res.statusText === 'Unauthorized'){
                  dispatch(setCurrentUser(''))
               }
            }
         ).catch(function (error){
            resolve(error)
         })
      }
   },[stateUser])


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
