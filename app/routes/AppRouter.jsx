import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from '../Pages/Home.jsx'
import LogIn from '../Pages/LogIn.jsx'
import NotFoundPage from '../Pages/NotFoundPage.jsx'

import PrivateRoute from '../routes/PrivateRoute.jsx'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/LogIn' component={LogIn}/>
            <Route path='*' component={NotFoundPage}/>
         </Switch>
      </BrowserRouter>
   )
}

export default AppRouter
