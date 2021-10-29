import {
   Button,
   Row,
   Col,
   FormControl,
} from 'react-bootstrap'

import {
   handleUpdateData,
   handleSwitchEdit,
} from './Logic/modaledituserLogic.js' 

const TabDatosContacto = ({
   dataAlumno,
   switchEdit,
   setSwitchEdit,
   modalEditRef
}) => { 
   return ( 
      <>
         <Row
            className='mt-2'
         >
            <Col>
               <h6>Apellido Tutor:</h6>
               <FormControl
                  defaultValue={dataAlumno.APELLIDO_TUTOR}
                  aria-label='APELLIDO_TUTOR'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[14] = element}
               /> 
            </Col>
            <Col>
               <h6>Nombre Tutor:</h6>
               <FormControl
                  defaultValue={dataAlumno.NOMBRE_TUTOR}
                  aria-label='NOMBRE_TUTOR'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[15] = element}
               /> 
            </Col>
            <Col>
               <h6>Relacion:</h6>
               <FormControl
                  defaultValue={dataAlumno.RELACION_TUTOR}
                  aria-label='RELACION_TUTOR'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[16] = element}
               /> 
            </Col>
            <Col>
               <h6>DNI Tutor:</h6>
               <FormControl
                  defaultValue={dataAlumno.DNI_TUTOR}
                  aria-label='DNI_TUTOR'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[17] = element}
               /> 
            </Col>
         </Row>
         <Row
            className='mt-2'
         >
            <Col>
               <h6>Tel Fijo:</h6>
               <FormControl
                  defaultValue={dataAlumno.TEL_FIJO}
                  aria-label='TEL_FIJO'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[18] = element}
               /> 
            </Col>
            <Col>
               <h6>Tel Celular:</h6>
               <FormControl
                  defaultValue={dataAlumno.TEL_CELULAR}
                  aria-label='TEL_CELULAR'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[19] = element}
               /> 
            </Col>
         </Row>
         <Row
            className='mt-2'
         >
            <Col>
               <h6>Barrio:</h6>
               <FormControl
                  defaultValue={dataAlumno.BARRIO}
                  aria-label='BARRIO'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[20] = element}
               /> 
            </Col>
            <Col>
               <h6>Calle:</h6>
               <FormControl
                  defaultValue={dataAlumno.CALLE}
                  aria-label='CALLE'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[21] = element}
               /> 
            </Col>
            <Col>
               <h6>NRO:</h6>
               <FormControl
                  defaultValue={dataAlumno.NRO}
                  aria-label='NRO'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[22] = element}
               /> 
            </Col>
            <Col>
               <h6>Localidad:</h6>
               <FormControl
                  defaultValue={dataAlumno.LOCALIDAD}
                  aria-label='LOCALIDAD'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[23] = element}
               /> 
            </Col>
            <Col>
               <h6>Provincia:</h6>
               <FormControl
                  defaultValue={dataAlumno.PROVINCIA}
                  aria-label='PROVINCIA'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[24] = element}
               /> 
            </Col>
         </Row>
         <Row>
            <Col
               className='mt-2 d-flex justify-content-end' 
            >
               {switchEdit ?
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleSwitchEdit(setSwitchEdit)}
                  >Editar</Button>
                  :
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno)}
                  >Actualizar</Button>
               }
            </Col>
         </Row>
      </>
   )
}

export default TabDatosContacto