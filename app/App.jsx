import React, {useState} from 'react'
import Home from './Pages/Home.jsx'
import LogIn from './Pages/LogIn.jsx'
import {BrowserRouter ,Route, Switch} from 'react-router-dom'
function App () {
   const [token, setToken] = useState()

   if (!token) {
      return <LogIn setToken={setToken} />
   }
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path='/LogIn'>
                  <LogIn/>
               </Route>
               <Route path='/Home'>
                  <Home/>
               </Route>
            </Switch>
         </BrowserRouter>
      </>
   )
}

export default App 

