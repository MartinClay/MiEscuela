import {
   Spinner,
   Col,
   Row
} from 'react-bootstrap'

const LoadingSpinner = () => { 

      return ( 
         <Row>
            <Col
               className='d-flex justify-content-center'
            >
               <Spinner
                  className='mt-2'
                  animation='border'
                  variant='primary'
               />   
            </Col>
         </Row>
                )
}

export default LoadingSpinner
