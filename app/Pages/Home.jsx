import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'

function Home () {
   return (
      <Container fluid>
         <Row>
            <Header/>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
   )

}

export default Home
