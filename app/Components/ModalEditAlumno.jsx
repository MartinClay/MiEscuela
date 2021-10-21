import {Modal} from 'react-bootstrap'
const ModalEditAlumno = ({alumnoEditModal,setAlumnoEditModal}) => { 
   const handleShow = () => {
      setAlumnoEditModal(false)
   }
   return ( 
      <Modal show={alumnoEditModal} onHide={handleShow}>
         <Modal.Header>
            <h3>Modal Edit Alumno</h3>
         </Modal.Header>
      </Modal>
   )
}

export default ModalEditAlumno
