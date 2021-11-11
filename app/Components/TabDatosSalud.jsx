import {
   Button,
   Row,
   Col,
   Form,
} from 'react-bootstrap'

import {
   handleUpdateData,
   handleSwitchEdit,
} from './Logic/modaleditalumnoLogic.js' 


const TabDatosSalud = ({
   dataAlumno,
   setSwitchEdit,
   switchEdit,
   modalEditRef,
   fechaNacimiento,
   updatedData,
   setShowModalUpdate,
   setUpdatedData,
}) => { 


   return ( 
      <>
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
                        ref={(element) => modalEditRef.current[34] = element}
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
                        ref={(element) => modalEditRef.current[32] = element}
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
                        ref={(element) => modalEditRef.current[33] = element}
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
                        ref={(element) => modalEditRef.current[35] = element}
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
                        ref={(element) => modalEditRef.current[36] = element}
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
                        ref={(element) => modalEditRef.current[37] = element}
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
                        ref={(element) => modalEditRef.current[38] = element}
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
                        ref={(element) => modalEditRef.current[39] = element}
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
                        ref={(element) => modalEditRef.current[40] = element}
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
                  <Row
                     className='mt-2'
                  >
                     <Col>
                        <h6>Examen visual:</h6>
                        <Form.Select
                           placeholder={dataAlumno?.EXAMEN_VISUAL}
                           aria-label="EXAMEN_VISUAL"
                           disabled={switchEdit}
                           ref={(element) => modalEditRef.current[31] = element}
                        >
                           <option 
                              value={dataAlumno.EXAMEN_VISUAL}
                           >
                              {dataAlumno.EXAMEN_VISUAL}
                           </option>
                           {Vacunas.map((dataMap)=> 
                              dataMap !== dataAlumno.EXAMEN_VISUAL ? 
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
                  <Row>
                     <Row>
                        <Col
                           md={4}
                           className='mt-2'
                        >
                           <h6>Otras:</h6>
                        </Col>
                        <Row>
                           <Col>
                              <Form.Select
                                 placeholder={dataAlumno?.OTRAS_1}
                                 aria-label="OTRAS_1"
                                 disabled={switchEdit}
                                 ref={(element) => modalEditRef.current[41] = element}
                              >
                                 <option 
                                    value={dataAlumno?.OTRAS_1}
                                 >
                                    {dataAlumno?.OTRAS_1}
                                 </option>
                                 {Vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno?.OTRAS_1 ? 
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
                              <Form.Select
                                 placeholder={dataAlumno?.OTRAS_2}
                                 aria-label="OTRAS_2"
                                 disabled={switchEdit}
                                 ref={(element) => modalEditRef.current[42] = element}
                              >
                                 <option 
                                    value={dataAlumno?.OTRAS_2}
                                 >
                                    {dataAlumno.OTRAS_2}
                                 </option>
                                 {vacunas.map((dataMap)=> 
                                    dataMap !== dataAlumno.OTRAS_2 ? 
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
                     </Row> 
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
                     onClick={() => handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData)}
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
      </>
   )
}

export default TabDatosSalud
