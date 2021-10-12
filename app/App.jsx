import {hot} from 'react-hot-loader/root'
import React from 'react'
import AppRouter from './routes/AppRouter.jsx'
import AuthProvider from './Context/Store/AuthProvider.jsx'
function App () {

   return (
      <AuthProvider>
         <AppRouter/>
      </AuthProvider>
   )
}

export default hot(App) 

