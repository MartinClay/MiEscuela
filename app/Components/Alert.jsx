import {Alert} from 'react-bootstrap'

function AlertBootstrap ({textAlert,handleShowAlert}) {
      return ( 
         <Alert variant='danger' show={handleShowAlert}>
            <p>{textAlert}</p>
         </Alert>
                )
}
export default AlertBootstrap


