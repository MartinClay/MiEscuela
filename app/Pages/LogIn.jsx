import React from 'react'
import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'
import {Container, Row, Col} from 'react-bootstrap'
import LogInForm from '../Components/loginform.jsx'

function LogIn({setToken}) {
   return (
      <Container fluid>
         <Row>
            <Header/>
         </Row>
         <Row>
            <LogInForm setToken={setToken}/>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
   )
}

export default LogIn
