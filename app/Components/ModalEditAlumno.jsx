import {useState} from 'react'
import {Modal} from 'react-bootstrap'
import {getMatriculaSingle} from '../Hooks/getFetch'

import {
   Tabs,
   Tab,
   Row,
   Col,
   Image,
   Container,
   FormControl,
} from 'react-bootstrap'

import useAuth from '../Context/Store/useAuth.jsx'

const handleGetDataAlumno = (
   context,
   selectedAlumnoForEdit,
   setDataAlumno
) => {
   getMatriculaSingle(
      context.stateUser.token,
      selectedAlumnoForEdit
   ).then((res)=>{
      console.log(res.data)
      setDataAlumno(res.data)
   }
   )
}

const ModalEditAlumno = ({
   alumnoEditModal,
   setAlumnoEditModal,
   selectedAlumnoForEdit,
}) => { 

   const handleShow = () => {
      setAlumnoEditModal(false)
      setDataAlumno({})
   }

   const context =  useAuth()
   const [dataAlumno,setDataAlumno] = useState({})
   const [switchEdit,setSwitchEdti] = useState(true)

   return ( 
      <Modal 
         fullscreen={true}
         show={alumnoEditModal} 
         onHide={handleShow}
         onShow={()=> handleGetDataAlumno(
            context,
            selectedAlumnoForEdit,
            setDataAlumno,
         )}
      >
         <Modal.Header 
            closeButton
         >
            <h4>Datos de {dataAlumno.NOMBRE} {dataAlumno.APELLIDO}</h4>
         </Modal.Header>
         <Modal.Body>
            <Tabs>
               <Tab
                  eventKey='Datos Generales'
                  title='Datos Generales'
               > 
                  <Container>                 
                     <Col 
                        md={4}
                     >
                        <Image 
                           style={{height:100,backgroundColor:'lightgray'}}
                        />
                     </Col>
                     <Row>
                        <Col>
                           <h6>Nº DNI:</h6>
                           <FormControl
                              placeholder={dataAlumno.N_DNI_ALUMNO}
                              aria-label='N_DNI_ALUMNO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Fecha Nacimiento:</h6>
                           <FormControl
                              placeholder={dataAlumno.FECHA_NACIMIENTO}
                              aria-label='FECHA_NACIMIENTO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Nº Legajo:</h6>
                           <FormControl
                              placeholder={dataAlumno.NRO_LEGAJO}
                              aria-label='NRO LEGAJO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     <Col>
                           <h6>CUIL:</h6>
                           <FormControl
                              placeholder={dataAlumno.CUIL}
                              aria-label='CUIL'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
                     <Row
                        className='mt-2'
                     >

                        <Col>
                           <h6>Nivel:</h6>
                           <FormControl
                              placeholder={dataAlumno.NIVEL}
                              aria-label='NIVEL'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Grado:</h6>
                           <FormControl
                              placeholder={dataAlumno.GRADO}
                              aria-label='GRADO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Division:</h6>
                           <FormControl
                              placeholder={dataAlumno.DIVISION}
                              aria-label='DIVISION'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Denominacion:</h6>
                           <FormControl
                              placeholder={dataAlumno.DENOMINACION}
                              aria-label='DENOMINACION'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <h6>Lugar de nacimiento:</h6>
                           <FormControl
                              placeholder={dataAlumno.LUGAR_NACIMIENTO}
                              aria-label='LUGAR_NACIMIENTO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Nacionalidad:</h6>
                           <FormControl
                              placeholder={dataAlumno.NACIONALIDAD}
                              aria-label='DENOMINACION'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
                     <Row>
                         <Col>
                           <h6>Sexo:</h6>
                           <FormControl
                              placeholder={dataAlumno.NACIONALIDAD}
                              aria-label='DENOMINACION'
                              readOnly={switchEdit}
                           /> 
                        </Col>  
                     </Row>
                  </Container>
               </Tab>
               <Tab
                  eventKey='Datos de Contacto'
                  title='Datos de Contacto'
               >
                     <Row>
                        <Col>
                           <h6>Apellido Tutor:</h6>
                           <FormControl
                              placeholder={dataAlumno.APELLIDO_TUTOR}
                              aria-label='APELLIDO_TUTOR'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Nombre Tutor:</h6>
                           <FormControl
                              placeholder={dataAlumno.NOMBRE_TUTOR}
                              aria-label='NOMBRE_TUTOR'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Relacion:</h6>
                           <FormControl
                              placeholder={dataAlumno.RELACION_TUTOR}
                              aria-label='RELACION_TUTOR'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     <Col>
                           <h6>DNI Tutor:</h6>
                           <FormControl
                              placeholder={dataAlumno.DNI_TUTOR}
                              aria-label='DNI_TUTOR'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <h6>Tel Fijo:</h6>
                           <FormControl
                              placeholder={dataAlumno.TEL_FIJO}
                              aria-label='TEL_FIJO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                        <Col>
                           <h6>Tel Celular:</h6>
                           <FormControl
                              placeholder={dataAlumno.TEL_CELULAR}
                              aria-label='TEL_CELULAR'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
                        <Row>
                        <Col>
                           <h6>Barrio:</h6>
                           <FormControl
                              placeholder={dataAlumno.BARRIO}
                              aria-label='BARRIO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     <Col>
                           <h6>Calle:</h6>
                           <FormControl
                              placeholder={dataAlumno.CALLE}
                              aria-label='CALLE'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     <Col>
                           <h6>NRO:</h6>
                           <FormControl
                              placeholder={dataAlumno.NRO}
                              aria-label='NRO'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     <Col>
                           <h6>Localidad:</h6>
                           <FormControl
                              placeholder={dataAlumno.LOCALIDAD}
                              aria-label='LOCALIDAD'
                              readOnly={switchEdit}
                           /> 
                        </Col>
                     </Row>
               </Tab>
            </Tabs>
         </Modal.Body>
      </Modal>
   )
}

export default ModalEditAlumno
