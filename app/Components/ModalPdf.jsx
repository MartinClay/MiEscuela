import React from 'react'

import {Col,Row,Modal} from 'react-bootstrap'

import Pdf from './MyPdf.jsx'

const ModalPdf = ({selectedItems,datosAlumno,showModalPdf,setShowModalPdf}) => {

   const handleClose = () => setShowModalPdf(false)

   return (
      <Modal show={showModalPdf} fullscreen={true} onHide={handleClose}>
         <Modal.Body>
            <Pdf
               selectedItems={selectedItems}
               datosAlumno={datosAlumno}
            />
         </Modal.Body>
      </Modal>
   )
}
export default ModalPdf
