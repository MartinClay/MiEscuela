import {
   Container,
   Row,
   Col
} from 'react-bootstrap'

const style = {
   footer: {
      backgroundColor: 'rgb(120,120,120)',
      position: 'fixed',
      bottom: 0,
   }
}
function footer () {
   return (
      <Container 
         style={style.footer} 
         fluid
      >
         <Row>
            <Col>
               <h5>Escuela E.P.A. Nº 9 "Dr. Horacio de la Mota"</h5>
            </Col>
            <Col>
            </Col>
            <Col 
               className='d-inline-flex'
            >
            </Col>
         </Row>
      </Container>
   )
}

export default footer
