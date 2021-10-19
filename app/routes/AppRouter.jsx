import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import Home from '../Pages/Home.jsx'
import LogIn from '../Pages/LogIn.jsx'
import RatificacionInscripcion from '../Pages/RatificacionInscripcion.jsx'
import AdminPannel from '../Pages/AdminPannel.jsx'
import Forbidden from '../Pages/Forbidden.jsx'
import Matricula from '../Pages/MatriculaPage.jsx'

import useAuth from '../Context/Store/useAuth.jsx'

import {AdminRoute} from './PrivateRoute.jsx'

const AppRouter = () => {

   const {stateUser} = useAuth()
   
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/'
               render={() => 
                     stateUser.isAuthenticated ? <Home/> : <Redirect to='/LogIn'/>
                  }
            />
            <Route path='/Home' 
               render={() => 
                     stateUser.isAuthenticated ? <Home/> : <Redirect to='/LogIn'/>
            } />
            <Route path='/LogIn' 
               render={() => 
                     !stateUser.isAuthenticated ? <LogIn/> : <Redirect to='/'/>
               } 
            />
            <Route path='/RatificacionInscripcion'
               render={() =>
                     stateUser.isAuthenticated ? <RatificacionInscripcion/> : <Redirect to='/LogIn'/>
               }
            />
            <Route path='/Matricula'
               render={()=>
                     stateUser.isAuthenticated ? <Matricula/> : <Redirect to='/LogIn'/>
               }
            />
            <AdminRoute path='/AdminPannel' component={AdminPannel}/>
            <Route path='/Forbidden' component={Forbidden}/>
         </Switch>
      </BrowserRouter>
   )
}

export default AppRouter
