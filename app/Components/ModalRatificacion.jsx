import React, {useState,useRef} from 'react'
import {Modal, InputGroup,Button} from 'react-bootstrap'

import {datosRatificacion} from '../Helpers/HardCodeData.js'

const handleClickModal = (ratificacionesRef,setSelectedItems,setShowModalItems) => {
   let selected = []
   for(var i = 0 ; i < ratificacionesRef.current.length ; i++){
      if (ratificacionesRef.current[i].children[0].checked === true){
         selected = [...selected,ratificacionesRef.current[i].children[1].textContent]
         setSelectedItems(selected)
      }
   }
   setShowModalItems(false)
}
const ModalRatificacion = ({showModalItems,setShowModalItems,selectedItems,setSelectedItems}) => { 

   const handleClose = () => setShowModalItems(false)
   const handleShow = () => setShowModalItems(true)
   const ratificacionesRef = useRef([])

   return ( 
      <Modal show={showModalItems} onHide={handleClose}>
         <Modal.Header>
            <Modal.Title>Seleccionar que datos desea imprimir</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {datosRatificacion.map((dato,index) => 
            <div className='form-check' key={dato} ref={(element) => {ratificacionesRef.current[index] = element}}>
               <input className='form-check-input' type='checkbox' value='' defaultChecked />
                  <label className='form-check-label' htmlFor='flexCheckChecked'>
                     {dato}
                  </label>
               </div>
                  )}
               </Modal.Body>
         <Modal.Footer>
            <Button variant='primary' onClick={()=> handleClickModal(ratificacionesRef,setSelectedItems,setShowModalItems)}>Aceptar</Button>
         </Modal.Footer>
            </Modal>
                  )
                  }
                  export default ModalRatificacion
