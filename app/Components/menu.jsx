import React from 'react'
import {Navbar,Nav,NavDropdown,Container,Row,Col} from 'react-bootstrap'
import useAuth from '../Context/Store/useAuth.jsx'
import {logoutUser} from '../Context/Actions/autentication.action.js'

import RatificacionInscripcion from '../Pages/RatificacionInscripcion.jsx'

import {Link} from 'react-router-dom'
function menu () {

   const context = useAuth()
   return (
      <Navbar bg='dark' variant='dark'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link >Inicio</Nav.Link>
               <Nav.Link >Matricula</Nav.Link>
               <NavDropdown title='Generar'>
                  <NavDropdown.Item as={Link} to='/RatificacionInscripcion'>Ratificacion de Inscripcion</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Nav className = 'justify-content-end'>
               <Nav.Link  onClick={() => logoutUser(context.dispatch)}>Salir</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default menu
