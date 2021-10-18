import {Route,Redirect} from 'react-router-dom'

import useAuth from '../Context/Store/useAuth.jsx'

import {DecodeToken} from '../Components/tokenhandler.js'

import AdminPannel from '../Pages/AdminPannel.jsx'
import Forbidden from '../Pages/Forbidden.jsx'

export function AdminRoute (props) {

   const {stateUser} = useAuth()

   switch(true){
      case (stateUser.isAuthenticated === false):
         return <Redirect to='/LogIn'/>
         break
      case (stateUser.isAuthenticated === true):
         if(DecodeToken(1).usuario.role === 'admin'){
         return(
            <Route {...props}/>
         )         
         }else{
            return (
               <Redirect to='/Forbidden'/>
            )
         }
         }
   }
