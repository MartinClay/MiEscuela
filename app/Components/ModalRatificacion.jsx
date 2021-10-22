import {useRef} from 'react'
import {
   Modal,
   Button,
} from 'react-bootstrap'

import {
   datosRatificacion2
} from '../Helpers/HardCodeData.js'

const handleClickModal = (
   ratificacionesRef,
   setSelectedItems,
   setShowModalItems,
   datosRatificacion2
) => {
   let selected = []
   for(var i = 0 ; i < ratificacionesRef.current.length ; i++){
      if (ratificacionesRef.current[i].children[0].checked === true){
         selected = [...selected,Object.keys(datosRatificacion2)[i]]
         setSelectedItems(selected)
      }else{
         selected = [...selected,'']
         setSelectedItems(selected)
      }
   }
   setShowModalItems(false)
}

const ModalRatificacion = ({
   showModalItems,
   setShowModalItems,
   setSelectedItems
}) => { 

   const handleClose = () => setShowModalItems(false)
   const handleShow = () => setShowModalItems(true)

   const ratificacionesRef = useRef([])
   return ( 
      <Modal 
         show={showModalItems} 
         onHide={handleClose}
      >
         <Modal.Header>
            <Modal.Title>Seleccionar que datos desea imprimir</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {Object.values(datosRatificacion2).map((dato,index) => 

            <div 
               className='form-check' 
               key={dato.label} 
               ref={(element) => {ratificacionesRef.current[index] = element}}
            >
               <input 
                  className='form-check-input' 
                  type='checkbox' 
                  value='' 
                  defaultChecked={dato.isTrue}/
               >
               <label 
                  className='form-check-label' 
                  htmlFor='flexCheckChecked'
               >
                  {dato.label}
               </label>
            </div>
            )}
         </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='primary' 
               onClick={()=> handleClickModal(
                  ratificacionesRef,
                  setSelectedItems,
                  setShowModalItems,
                  datosRatificacion2
               )}
            >
               Aceptar
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ModalRatificacion
