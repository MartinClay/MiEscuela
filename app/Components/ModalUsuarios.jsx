import {useState,useEffect} from 'react'
import {Modal,Container,Row,Col,Table,CloseButton,Button} from 'react-bootstrap'
import {getFetchUsuarios} from '../Hooks/getFetch.js'
import {FaUserEdit} from 'react-icons/fa'
import useAuth from '../Context/Store/useAuth.jsx'

function handleEdit(value){
   console.log(value)
}

function handleAddUser(setAddUserModal,setUsuariosModal){
  setUsuariosModal(false)
  setAddUserModal(true) 
}

const ModalUsuarios = ({usuariosModal,setUsuariosModal,addUserModal,setAddUserModal}) => { 

   const context = useAuth()
   const handleClose = () => setUsuariosModal(false)
   const [dataUsuarios,setDataUsuarios] = useState([])

   useEffect(()=> {
      getFetchUsuarios(context.stateUser.token).then((data) =>
         setDataUsuarios(data.data)
      )
   },[])

   return ( 

      <Modal show={usuariosModal} onHide={handleClose}>
         <Modal.Header closeButton>
            <h3>Usuarios en Mi Escuela</h3>
         </Modal.Header>
         <Modal.Body>
            <Col className='d-flex justify-content-center'>
               <Table bordered striped hover size="sm">
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Role</th>
                     </tr>
                  </thead>
                  <tbody>
                     {dataUsuarios.map(
                        (data) =>
                           <tr key={data.usuario}>
                              <th><Button onClick={()=> handleEdit(data.usuario)}><FaUserEdit/></Button></th>
                              <th>{data.usuario}</th>
                              <th>{data.role}</th>
                           </tr>
                     )}   
                  </tbody>
               </Table>
            </Col>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={()=> handleAddUser(setAddUserModal,setUsuariosModal)}>Nuevo Usuario</Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalUsuarios
