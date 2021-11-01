import {
   useState,
   useRef,
   useEffect,
} from 'react'

import {Modal} from 'react-bootstrap'

import {
   handleGetDataAlumno,
   handleShow,

} from './Logic/modaledituserLogic.js'

import {
   Col,
   Tabs,
   Tab,
} from 'react-bootstrap'

import {createISODate} from './Logic/dateHandler'

import useAuth from '../Context/Store/useAuth.jsx'

import TabDatosGenerales from './TabDatosGenerales.jsx'
import TabDatosContacto from './TabDatosContacto.jsx'
import TabDatosSalud from './TabDatosSalud.jsx'
import TabObservaciones from './TabObservaciones.jsx'
import TabRegistroModificaciones from './TabRegistroModificaciones.jsx'

const ModalEditAlumno = ({
   alumnoEditModal,
   setAlumnoEditModal,
   selectedAlumnoForEdit,
}) => { 

   const context =  useAuth()
   const [dataAlumno,setDataAlumno] = useState({})
   const [switchEdit,setSwitchEdit] = useState(true)
   const [fechaNacimiento,setFechaNacimiento] = useState()
   const modalEditRef = useRef([])

   useEffect (()=> {
      dataAlumno.FECHA_NACIMIENTO !== undefined ? 
         setFechaNacimiento(createISODate(dataAlumno.FECHA_NACIMIENTO))
         :
         null
   },[dataAlumno])

   return ( 
      <Modal 
         fullscreen={true}
         show={alumnoEditModal} 
         onHide={()=> handleShow(setAlumnoEditModal,setDataAlumno)}
         onShow={()=> handleGetDataAlumno(
            context,
            selectedAlumnoForEdit,
            setDataAlumno,
         )}
      >
         <Modal.Header 
            closeButton
         >
            <Col
               className='d-flex justify-content-center'
            >
               <h4>
                  {dataAlumno.NOMBRE} {dataAlumno.APELLIDO}
               </h4>      
            </Col>
         </Modal.Header>
         <Modal.Body>
            <Tabs>
               <Tab
                  eventKey='Datos Generales'
                  title='Datos Generales'
               >
                  <TabDatosGenerales
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                  />
               </Tab>
               <Tab
                  eventKey='Datos de Contacto'
                  title='Datos de Contacto'
               >
                  <TabDatosContacto
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                  />
               </Tab>
               <Tab
                  eventKey='Datos de Salud'
                  title='Datos de Salud'
               >
                  <TabDatosSalud 
                     dataAlumno={dataAlumno}
                     switchEdit={switchEdit}
                     setSwitchEdit={setSwitchEdit}
                     modalEditRef={modalEditRef}
                     fechaNacimiento={fechaNacimiento}
                  />
               </Tab>
               <Tab
                  eventKey='Observaciones'
                  title='Observaciones'
               >
                  <TabObservaciones
                     dataAlumno={dataAlumno}
                  />
               </Tab>
               <Tab
                  eventKey='Registro modificaciones'
                  title='Registro modificaciones'
               >
                  <TabRegistroModificaciones
                     dataAlumno={dataAlumno}
                  />
               </Tab>
            </Tabs>
         </Modal.Body>
      </Modal>
   )
}

export default ModalEditAlumno
