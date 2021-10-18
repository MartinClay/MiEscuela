import {useState} from 'react'
import {Row,Col,Container,Button} from 'react-bootstrap'

import ModalUsuarios from './ModalUsuarios.jsx'
import ModalAddUser from './ModalAddUser.jsx'
const AdminOptions = () => { 

   const [usuariosModal, setUsuariosModal] = useState(false)
   const [addUserModal,setAddUserModal] = useState(false)

   return ( 
      <Container>
         <ModalUsuarios 
            usuariosModal={usuariosModal}
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal} 
            setAddUserModal={setAddUserModal}
         />
         <ModalAddUser
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal}
            setAddUserModal={setAddUserModal}
         />
         <Row>
            <Col className='mt-1'>
               <Button variant='primary' onClick={() => setUsuariosModal(true) }>Usuarios</Button>
            </Col>
         </Row>
      </Container>
   )
}

export default AdminOptions
