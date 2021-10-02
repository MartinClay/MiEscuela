import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const style = {
   footer: {
      backgroundColor: 'rgb(120,120,120)',
      position: 'fixed',
      bottom: 0,


   }
}
function footer () {
   return (
      <Container style={style.footer} fluid>
         <Row>
            <Col>
               <h5>Escuela Exp. Nº 9 Dr.Horacio De La Mota</h5>
            </Col>
            <Col>
            </Col>
            <Col>
               <h7>Creado por Alejandro Rojas</h7>
            </Col>
         </Row>
      </Container>
   )
}

export default footer
