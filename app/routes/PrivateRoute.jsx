import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import useAuth from '../Auth/useAuth.jsx'

export default function PrivateRoute (props) {

   const {token} = useAuth()

      if(!token) return <Redirect to='/LogIn' />

   return (
      <Route {...props}/>
   )
}
