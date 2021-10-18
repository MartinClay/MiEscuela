import {Modal} from 'react-bootstrap'

import useAuth from '../Context/Store/useAuth.jsx'


const ModalAddUser = ({addUserModal,setAddUserModal}) => { 

   const context = useAuth()

   const handleClose = () => setAddUserModal(false)

      return ( 
         <Modal show={addUserModal} onHide={handleClose}>
            <Modal.Header>
            <h1> 
                  Modal add users
            </h1>
            </Modal.Header>
         </Modal>
                )
}

export default ModalAddUser
