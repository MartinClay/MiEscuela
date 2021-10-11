import React  from "react";
import {Alert} from 'react-bootstrap'

function AlertBootstrap (text) {
   console.log(text)
      return ( 
         <Alert variant='danger' show={true}>
            <p>{text}</p>
         </Alert>
                )
}
export default AlertBootstrap


