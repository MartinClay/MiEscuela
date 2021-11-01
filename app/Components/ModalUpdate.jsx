import {
   Modal,
   Button,
   Table,
} from 'react-bootstrap'

import {
   handleShow
} from './Logic/modalupdateLogic.js'

const ModalUpdate = ({
   showModalUpdate,
   updatedData,
   setShowModalUpdate,
   dataAlumno,
}) => { 
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
               <Button 
                  variant='primary'
               >
               </Button>
            </Modal.Footer>
         </Modal>
                )
}

export default ModalUpdate

