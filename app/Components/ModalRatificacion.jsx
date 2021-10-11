import React, {useState,useRef} from 'react'
import {Modal, InputGroup,Button} from 'react-bootstrap'

import {datosRatificacion} from '../Helpers/HardCodeData.js'

function handleClickModal (ratificacionesRef,setShow,setSelectedItems,selectedItems) {
   console.log(ratificacionesRef)
   ratificacionesRef.map((item,index)=>{
      if(item.current.checked === true){
        setSelectedItems([...selectedItems,item.current]) 
      }
   }
   ) 
}
const ModalRatificacion = ({show,setShow}) => { 

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)
   const [selectedItems, setSelectedItems] = useState([])
   const ratificacionesRef = useRef([])

   return ( 
      <Modal show={show} onHide={handleClose}>
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
            <Button variant='primary' onClick={()=> handleClickModal(ratificacionesRef,setShow,setSelectedItems,selectedItems)}>Aceptar</Button>
         </Modal.Footer>
            </Modal>
                  )
                  }
                  export default ModalRatificacion
