import React from 'react'
import AppRouter from './routes/AppRouter.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
function App () {

   return (
      <>
         <AuthProvider>
             <AppRouter/>
         </AuthProvider>
      </>
   )
}

export default App 

