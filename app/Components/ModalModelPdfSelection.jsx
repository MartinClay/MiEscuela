import {
   Modal,
   Form,
   Button,
} from 'react-bootstrap'

import {ModelPdf} from '../Helpers/HardCodeData.js'

import {
   handleChangeModel,
   handleAcceptModel,
} from './Logic/ratificacionLogic'

const ModalModelPdfSelecion = ({
   showModalPdfSelection,
   setShowModalPdfSelection,
   modelo,
   setModelo,
   showModalItemsToPrint,
   setShowModalItemsToPrint,
}) => {

   const handleClose = () => setShowModalPdfSelection(false)

   return (
      <Modal 
         show={showModalPdfSelection} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         <h6>Seleccione modelo de PDF</h6>
         </Modal.Header>
         <Modal.Body>
            <Form.Select 
                  aria-label='Modelo' 
                  onChange={(event) => handleChangeModel(
                     event,
                     setModelo
                  )} 
               >
                  <option>Modelo</option>
                  {ModelPdf.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )}
               </Form.Select>
         </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='outline-primary'
               size='sm'
               onClick={() => {handleAcceptModel(setShowModalPdfSelection,setShowModalItemsToPrint)}}
            >
            Aceptar
         </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ModalModelPdfSelecion
