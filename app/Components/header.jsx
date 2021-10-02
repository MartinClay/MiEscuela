import React  from 'react'
import {useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Lottie from 'lottie-react'
import HeaderAnimation from '../Assets/Header/Header.json'
import WebFont from 'webfontloader'


const style = {

   lottieAnimation : {
   height: 80,
   },
   titleFont : {
      fontFamily: 'Schoolbell',
      fontSize: 50,
      marginTop: 10,
   },
   header:{
   backgroundColor: '#f9f9f9',
   }
}


function Header () {

useEffect (() => {
   WebFont.load({
      google: {
         families:['Schoolbell']
      }
   })
},[])

   return (
      <Container style={style.header} fluid>
         <Row>
            <Col>
            </Col>
            <Col>
               <h1 style={style.titleFont}>
                  Mi Escuela App
               </h1>
            </Col>
            <Col>
               <Lottie 
               animationData={HeaderAnimation}
               style={style.lottieAnimation}
               />
            </Col>
         </Row>
      </Container>

   )
}

export default Header
