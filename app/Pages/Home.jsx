import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'

const Home = () => {
   return (
      <Container 
         fluid
      >
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
