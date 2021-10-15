import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'

import {Container,Col,Row} from 'react-bootstrap'

const AdminPannel = () => {
   return(
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

export default AdminPannel
