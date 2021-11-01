import {
   Modal,
   Button,
   Table,
   Col,
   Row,
} from 'react-bootstrap'

import {
   handleShow,
   handleClickAccept,
} from './Logic/modalupdateLogic.js'

import useAuth from '../Context/Store/useAuth.jsx'

import {updateAlumnoUrl} from '../Helpers/Urls'

const ModalUpdate = ({
   showModalUpdate,
   updatedData,
   setShowModalUpdate,
   dataAlumno,
}) => { 

const context = useAuth()

      return ( 
         <Modal
            show={showModalUpdate}
            onHide={() => handleShow(setShowModalUpdate)}
         >
         <Modal.Header>
            <h6>Datos a actualizar</h6>
         </Modal.Header>  
            <Modal.Body>
               <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>#</th> 
                        <th>Encabezado:</th>
                        <th>Dato anterior:</th>
                        <th>Dato nuevo:</th>
                     </tr>
                  </thead>
                  <tbody>
               {Object.keys(updatedData).map((dataMap,index)=>
               <tr
                  key={index}
               >
                     <th>{index}</th>
                     <th>{dataMap}</th>
                     <th>{dataAlumno[dataMap]}</th>
                     <th>{Object.values(updatedData)[index]}</th>
                  </tr> 
               )}
                  </tbody>
               </Table>
            </Modal.Body> 
            <Modal.Footer>
               <Row
                  className='mt-2'
               >
                  <Col>
                     <Button 
                        variant='outline-primary'
                        onClick={() => handleClickAccept(updatedData,context.stateUser.token,updateAlumnoUrl)}
                     >
                        Aceptar
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        variant='outline-primary'
                        onClick={() => handleShow(setShowModalUpdate)}
                     >
                        Cancelar
                     </Button> 
                  </Col>               

               </Row>
            </Modal.Footer>
         </Modal>
      )
}

export default ModalUpdate

