import {Container,Row} from 'react-bootstrap'
import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'
import Matricula from '../Components/Matricula.jsx'

function MatriculaPage () {
   return (
      <Container className='d-flex-column' fluid>
         <Row>
            <Header/>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <Matricula/>            
         </Row>
      </Container>
   )

}

export default MatriculaPage
