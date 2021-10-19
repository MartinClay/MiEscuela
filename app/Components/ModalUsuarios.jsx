import {useState,useEffect} from 'react'
import {Modal,Container,Row,Col,Table,CloseButton,Button} from 'react-bootstrap'
import {getFetchUsuarios} from '../Hooks/getFetch.js'
import {FaUserEdit} from 'react-icons/fa'
import useAuth from '../Context/Store/useAuth.jsx'


function handleEdit(value,userEditModal,setUserEditModal,setUsuariosModal,setSelectedUser){
   setUsuariosModal(false) 
   setUserEditModal(true)
   setSelectedUser(value)
}

function handleAddUser(setAddUserModal,setUsuariosModal){
  setUsuariosModal(false)
  setAddUserModal(true) 
}

function upDateUsers(token,setDataUsuarios){
      getFetchUsuarios(token).then((data) =>
         setDataUsuarios(data.data)
      )
}


const ModalUsuarios = ({usuariosModal,setUsuariosModal,addUserModal,setAddUserModal,userEditModal,setUserEditModal,setSelectedUser}) => { 

   const context = useAuth()
   const handleClose = () => setUsuariosModal(false)
   const [dataUsuarios,setDataUsuarios] = useState([])

   return ( 

      <Modal show={usuariosModal} onHide={handleClose} onShow={()=> upDateUsers(context.stateUser.token,setDataUsuarios)}>
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
                        (dataMap) =>
                           <tr key={dataMap.usuario}>
                              <th><Button onClick={()=> handleEdit(dataMap.usuario,userEditModal,setUserEditModal,setUsuariosModal,setSelectedUser)}><FaUserEdit/></Button></th>
                              <th>{dataMap.usuario}</th>
                              <th>{dataMap.role}</th>
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
