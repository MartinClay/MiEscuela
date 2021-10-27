import {
   useState,
   useRef,
} from 'react'

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
   FormSelect,
   Form,
   Button,
} from 'react-bootstrap'

import {
   ageCalculate,
   ageCalculate3006,
   splitDate
} from './Logic/dateHandler'

import {
   Nivel,
   Grado,
   Division,
   Sexo,
   Vacunas,
} from '../Helpers/HardCodeData'

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

const handleSwitchEdit = (
   setSwitchEdit
) => {
   setSwitchEdit(false)
}

const handleUpdateData = (modalEditRef) => {
   console.log(modalEditRef)
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
   const [switchEdit,setSwitchEdit] = useState(true)
   const modalEditRef = useRef([])

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
                  <Row>
                     <Col
                        className='mt-2'
                     >
                        <h6>Nº DNI:</h6>
                        <FormControl
                           defaultValue={dataAlumno.N_DNI_ALUMNO}
                           aria-label='N_DNI_ALUMNO'
                           readOnly={switchEdit}
                           ref={(element) => modalEditRef.current[0] = element}
                        /> 
                     </Col>
                     <Col
                        className='mt-2'
                     >
                        <h6>Fecha Nacimiento:</h6>
                        <FormControl
                           placeholder={dataAlumno.FECHA_NACIMIENTO}
                           aria-label='FECHA_NACIMIENTO'
                           readOnly={switchEdit}
                           ref={(element) => modalEditRef.current[1] = element}

                        /> 
                     </Col>
                     <Col
                        className='mt-2'
                     >
                        <h6>Nº Legajo:</h6>
                        <FormControl
                           placeholder={dataAlumno.NRO_LEGAJO}
                           aria-label='NRO LEGAJO'
                           readOnly={switchEdit}
                           ref={(element) => modalEditRef.current[2] = element}

                        /> 
                     </Col>
                     <Col
                        className='mt-2'
                     >
                        <h6>CUIL:</h6>
                        <FormControl
                           placeholder={dataAlumno.CUIL}
                           aria-label='CUIL'
                           readOnly={switchEdit}
                           ref={(element) => modalEditRef.current[3] = element}
                        /> 
                     </Col>
                  </Row>
                  <Row
                     className='mt-2'
                  >

                     <Col>
                        <h6>Nivel:</h6>
                        <Form.Select
                           placeholder={dataAlumno?.NIVEL}
                           aria-label="NIVEL"
                           disabled={switchEdit}
                           ref={(element) => modalEditRef.current[4] = element}
                        >
                           <option 
                              value={dataAlumno.NIVEL}
                           >
                              {dataAlumno.NIVEL}
                           </option>
                           {Nivel.map((dataMap)=> 
                              dataMap !== dataAlumno.NIVEL ? 
                                 <option 
                                    key={dataMap} 
                                    value={dataMap}
                                 >
                                    {dataMap}
                                 </option>
                                 :
                              null
                           )}
                        </Form.Select>
                     </Col>
                     <Col>
                        <h6>Grado:</h6>
                        <Form.Select
                           placeholder={dataAlumno?.GRADO}
                           aria-label="GRADO"
                           disabled={switchEdit}
                        >
                           <option 
                              value={dataAlumno.GRADO}
                           >
                              {dataAlumno.GRADO}
                           </option>
                           {Grado.map((dataMap)=> 
                              dataMap !== dataAlumno.GRADO ? 
                                 <option 
                                    key={dataMap} 
                                    value={dataMap}
                                 >
                                    {dataMap}
                                 </option>
                                 :
                              null
                           )}
                        </Form.Select>
                     </Col>
                     <Col>
                        <h6>Division:</h6>
                        <Form.Select
                           placeholder={dataAlumno?.DIVISION}
                           aria-label="DIVISION"
                           disabled={switchEdit}
                        >
                           <option 
                              value={dataAlumno.DIVISION}
                           >
                              {dataAlumno.DIVISION}
                           </option>
                           {Division.map((dataMap)=> 
                              dataMap !== dataAlumno.DIVISION ? 
                                 <option 
                                    key={dataMap} 
                                    value={dataMap}
                                 >
                                    {dataMap}
                                 </option>
                                 :
                              null
                           )}
                        </Form.Select>
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
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <h6>Lugar de nacimiento:</h6>
                        <FormControl
                           placeholder={dataAlumno.LUGAR_NACIMIENTO}
                           aria-label='LUGAR_NACIMIENTO'
                           readOnly={switchEdit}
                        /> 
                     </Col>
                     <Col>
                        <h6>Provincia de nacimiento:</h6>
                        <FormControl
                           placeholder={dataAlumno.PROVINCIA_NACIMIENTO}
                           aria-label='PROVINCIA_NACIMIENTO'
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
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <h6>Sexo:</h6>
                        <Form.Select
                           placeholder={dataAlumno?.SEXO}
                           aria-label="SEXO"
                           disabled={switchEdit}
                        >
                           <option 
                              value={dataAlumno.SEXO}
                           >
                              {dataAlumno.SEXO}
                           </option>
                           {Sexo.map((dataMap)=> 
                              dataMap !== dataAlumno.SEXO ? 
                                 <option 
                                    key={dataMap} 
                                    value={dataMap}
                                 >
                                    {dataMap}
                                 </option>
                                 :
                              null
                           )}
                        </Form.Select>
                     </Col>
                     <Col>
                        <h6>Edad (Real):</h6>
                        <FormControl
                           placeholder={dataAlumno.FECHA_NACIMIENTO ? 
                                 ageCalculate(splitDate(dataAlumno.FECHA_NACIMIENTO,3))
                                 :
                                 dataAlumno.FECHA_NACIMIENTO
                           }
                           aria-label='Edad (Real)'
                           readOnly={switchEdit}
                        /> 
                     </Col>
                     <Col>
                        <h6>Edadal 30/06:</h6>
                        <FormControl
                           placeholder={dataAlumno.FECHA_NACIMIENTO ? 
                                 ageCalculate3006(splitDate(dataAlumno.FECHA_NACIMIENTO,3))
                                 :
                                 dataAlumno.FECHA_NACIMIENTO
                           }
                           aria-label='Edad al 30/06'
                           readOnly={switchEdit}
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
                              onClick={() => handleUpdateData(modalEditRef)}
                           >Actualizar</Button>
                        }
                     </Col>
                  </Row>
               </Tab>
               <Tab
                  eventKey='Datos de Contacto'
                  title='Datos de Contacto'
               >
                  <Row
                     className='mt-2'
                  >
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
                  <Row
                     className='mt-2'
                  >
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
                  <Row
                     className='mt-2'
                  >
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
                     <Col>
                        <h6>Provincia:</h6>
                        <FormControl
                           placeholder={dataAlumno.PROVINCIA}
                           aria-label='PROVINCIA'
                           readOnly={switchEdit}
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
                              onClick={() => handleUpdateData(modalEditRef)}
                           >Actualizar</Button>
                        }
                     </Col>
                  </Row>
               </Tab>
               <Tab
                  eventKey='Datos de Salud'
                  title='Datos de Salud'
               >
                  <Row>
                     <Col 
                     >
                        <Row
                           className='mt-2'
                        >
                           <Col>
                              <h6>Vacunas al dia:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.VACUNAS_AL_DIA}
                                 aria-label="VACUNAS_AL_DIA"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.VACUNAS_AL_DIA}
                                 >
                                    {dataAlumno.VACUNAS_AL_DIA}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.VACUNAS_AL_DIA ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                           <Col>
                              <h6>Certificado de Salud:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.CERT_SALUD}
                                 aria-label="CERT_SALUD"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.CERT_SALUD}
                                 >
                                    {dataAlumno.CERT_SALUD}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.CERT_SALUD ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                           <Col>
                              <h6>Certificado buco dental:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.CERT_BUCO_DENTAL}
                                 aria-label="CERT_BUCO_DENTAL"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.CERT_BUCO_DENTAL}
                                 >
                                    {dataAlumno.CERT_BUCO_DENTAL}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.CERT_BUCO_DENTAL ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                        </Row>
                        <Row
                           className='mt-2'
                        >
                           <Col>
                              <h6>Antivariolica:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.ANTIVARIOLICA}
                                 aria-label="ANTIVARIOLICA"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.ANTIVARIOLICA}
                                 >
                                    {dataAlumno.ANTIVARIOLICA}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.ANTIVARIOLICA ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                           <Col>
                              <h6>BCG:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.BCG}
                                 aria-label="BCG"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.BCG}
                                 >
                                    {dataAlumno.BCG}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.BCG ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>

                           </Col>
                           <Col>
                              <h6>Triple:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.TRIPLE}
                                 aria-label="TRIPLE"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.TRIPLE}
                                 >
                                    {dataAlumno.TRIPLE}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.TRIPLE ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                        </Row>
                        <Row
                           className='mt-2'
                        >

                           <Col>
                              <h6>Doble:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.DOBLE}
                                 aria-label="DOBLE"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.DOBLE}
                                 >
                                    {dataAlumno.DOBLE}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.DOBLE ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                           <Col>
                              <h6>Sabin:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.SABIN}
                                 aria-label="SABIN"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.SABIN}
                                 >
                                    {dataAlumno.SABIN}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.SABIN ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>

                           </Col>
                           <Col>
                              <h6>Anti sarampion:</h6>
                              <Form.Select
                                 placeholder={dataAlumno?.ANTI_SARAMPION}
                                 aria-label="ANTI_SARAMPION"
                                 disabled={switchEdit}
                              >
                                 <option 
                                    value={dataAlumno.ANTI_SARAMPION}
                                 >
                                    {dataAlumno.ANTI_SARAMPION}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.ANTI_SARAMPION ? 
                                       <option 
                                          key={dataMap} 
                                          value={dataMap}
                                       >
                                          {dataMap}
                                       </option>
                                       :
                                    null
                                 )}
                              </Form.Select>
                           </Col>
                           <Row>
                              <Col
                              >
                                 <h6>Otras:</h6>
                                 {
                                    dataAlumno.OTRAS ? 
                                       dataAlumno.OTRAS.map((dataMap)=> 
                                       <FormControl
                                          className='mt-2'
                                          placeholder={dataAlumno.dataMap}
                                          aria-label='OTRAS'
                                          readOnly={switchEdit}
                                       />
                                       )
                                       :
                                       null
                                 }
                              </Col>
                           </Row>
                        </Row>
                     </Col>
                     <Col
                        className='mt-2 border'
                     >
                        <h6>Registro historico de salud:</h6>       
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
                              onClick={() => handleUpdateData(modalEditRef)}
                           >Actualizar</Button>
                        }
                     </Col>
                     <Col
                        className='mt-2 d-flex justify-content-end'
                     >
                        <Button
                           variant='outline-primary'
                           size='sm'
                        >Añadir Registro</Button>
                     </Col>
                  </Row>
               </Tab>
               <Tab
                  eventKey='Observaciones'
                  title='Observaciones'
               >
                  <Row>
                     <Col
                        className='mt-2 d-flex justify-content-center'
                     >
                        <Button
                           variant='outline-primary'
                           size='sm'
                        >Añadir Observacion</Button> 
                     </Col> 
                  </Row>
                  <Row>
                     <Col
                        className='mt-2 border'
                     >
                        {dataAlumno.OBSERVACIONES?.map((dataMap) => 
                        <p>{dataMap}</p>
                        )} 
                     </Col>

                  </Row>
               </Tab>
               <Tab
                  eventKey='Registro modificaciones'
                  title='Registro modificaciones'
               >
                  <Col
                     className='mt-2 border'
                  >
                     {dataAlumno.REGISTRO?.map((dataMap) => 
                     <p>{dataMap}</p>
                     )}
                  </Col>
               </Tab>
            </Tabs>
         </Modal.Body>
      </Modal>
   )
}

export default ModalEditAlumno
