import {Modal} from 'react-bootstrap'

import InformeRatificacionPrimariaPdf from './InformeRatificacionPrimariaPdf.jsx'
import InformeRatificacionSecundariaPDf from './InformeRatificacionSecundariaPdf.jsx'

const ModalPdf = ({
   selectedItems,
   showModalPdf,
   setShowModalPdf,
   filtredDatosAlumnoStage1,
   setIsRender,
   modelo,
}) => {

   const handleClose = () => setShowModalPdf(false)

   return (
      <Modal 
         show={showModalPdf} 
         fullscreen={true} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         </Modal.Header>
         <Modal.Body>
            {modelo === 'PRIMARIO' ? 
               <InformeRatificacionPrimariaPdf
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setIsRender={setIsRender}
               />
               :
               <InformeRatificacionSecundariaPDf
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setIsRender={setIsRender}
               />
            }
               
         </Modal.Body>
      </Modal>
   )
}
export default ModalPdf
