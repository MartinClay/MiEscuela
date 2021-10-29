import {
   Button,
   Row,
   Col,
   FormControl,
   Form,
} from 'react-bootstrap'

import {
   handleChangeCalendar,
   handleUpdateData,
   handleSwitchEdit,
} from './Logic/modaledituserLogic.js' 

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
} from '../Helpers/HardCodeData'

import DatePicker,{registerLocale,setDefaultLocale} from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

import es from 'date-fns/locale/es'

const TabDatosGenerales = ({
   dataAlumno,
   switchEdit,
   modalEditRef,
   fechaNacimiento,
   setSwitchEdit
}) => { 

   registerLocale('es',es)

   return ( 
      <> 
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
                  as={DatePicker}
                  selected={fechaNacimiento}
                  locale='es'
                  onChange={(value) => handleChangeCalendar(value,setFechaNacimiento)}
                  dateFormat='dd/MM/yyyy'
                  readOnly={switchEdit}
               />
            </Col>
            <Col
               className='mt-2'
            >
               <h6>Nº Legajo:</h6>
               <FormControl
                  defaultValue={dataAlumno.NRO_LEGAJO}
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
                  defaultValue={dataAlumno.CUIL}
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
                  ref={(element) => modalEditRef.current[5] = element}
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
                  ref={(element) => modalEditRef.current[6] = element}
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
                  defaultValue={dataAlumno.DENOMINACION}
                  aria-label='DENOMINACION'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[7] = element}
               /> 
            </Col>
         </Row>
         <Row
            className='mt-2'
         >
            <Col>
               <h6>Lugar de nacimiento:</h6>
               <FormControl
                  defaultValue={dataAlumno.LUGAR_NACIMIENTO}
                  aria-label='LUGAR_NACIMIENTO'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[8] = element}
               /> 
            </Col>
            <Col>
               <h6>Provincia de nacimiento:</h6>
               <FormControl
                  defaultValue={dataAlumno.PROVINCIA_NACIMIENTO}
                  aria-label='PROVINCIA_NACIMIENTO'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[9] = element}
               /> 
            </Col>
            <Col>
               <h6>Nacionalidad:</h6>
               <FormControl
                  defaultValue={dataAlumno.NACIONALIDAD}
                  aria-label='DENOMINACION'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[10] = element}
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
                  ref={(element) => modalEditRef.current[11] = element}
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
                  defaultValue={dataAlumno.FECHA_NACIMIENTO ? 
                        ageCalculate(splitDate(dataAlumno.FECHA_NACIMIENTO,3))
                        :
                        dataAlumno.FECHA_NACIMIENTO
                  }
                  aria-label='Edad (Real)'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[12] = element}
               /> 
            </Col>
            <Col>
               <h6>Edadal 30/06:</h6>
               <FormControl
                  defaultValue={dataAlumno.FECHA_NACIMIENTO ? 
                        ageCalculate3006(splitDate(dataAlumno.FECHA_NACIMIENTO,3))
                        :
                        dataAlumno.FECHA_NACIMIENTO
                  }
                  aria-label='Edad al 30/06'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[13] = element}
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

export default TabDatosGenerales
