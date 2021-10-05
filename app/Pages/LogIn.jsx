import React from 'react'
import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'
import {Container, Row} from 'react-bootstrap'
import LogInForm from '../Components/loginform.jsx'

function LogIn() {
   return (
      <Container fluid>
         <Row>
            <Header/>
         </Row>
         <Row>
            <LogInForm/>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
   )
}

export default LogIn
