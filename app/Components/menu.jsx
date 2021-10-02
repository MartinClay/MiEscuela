import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function menu () {
   return (
      <Navbar bg='dark' variant='dark'>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link >Inicio</Nav.Link>
               <Nav.Link >Matricula</Nav.Link>
               <NavDropdown title='Generar'>
                  <NavDropdown.Item>Ratificacion de Inscripcion</NavDropdown.Item>
               </NavDropdown>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   )
}

export default menu
