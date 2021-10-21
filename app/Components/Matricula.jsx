import ModalEditAlumno from './ModalEditAlumno.jsx'
import SelectFormStage1 from './SelectFormStage1.jsx'

import {useState,useEffect,useRef} from 'react'

import {Container,Row,Col,Button,Form,Table} from 'react-bootstrap'

import {getMatricula} from '../Hooks/getFetch.js'

import useAuth from '../Context/Store/useAuth.jsx'

import {FaUserEdit} from 'react-icons/fa'

import {ageCalculate,splitDate} from './dateHandler.js'

import {handleNivelChange,handleGradoChange,handleDivisionChange,handleLastName,handleFirstName,handleEdad,handleEdad3006,handleClickApplyFilter,handleClickLimpiarFiltros} from './Logic/matriculaLogic.js'

const Matricula = () => { 

   const [datosAlumno,setDatosAlumno] = useState([])
   const [isFiltredStage1,setIsFiltredStage1] = useState(false)
   const [isFiltredStage2,setIsFiltredStage2] = useState(false)
   const [filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage1] = useState([])
   const [filtredDatosAlumnoStage2,setFiltredDatosAlumnoStage2] = useState([])
   const context  =  useAuth()
   const [grado,setGrado] = useState('Grado')
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [alumnoEditModal,setAlumnoEditModal] = useState(false)
   const matriculaRef = useRef([]) 

   useEffect(()=> {
      getMatricula(context.stateUser.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])

   return ( 
      <Container>
         <ModalEditAlumno
            alumnoEditModal={alumnoEditModal}
            setAlumnoEditModal={setAlumnoEditModal}
         />
         <SelectFormStage1
            setGrado={setGrado}                     
            grado={grado}
            setDivision={setDivision}
            division={division}
            setNivel={setNivel}
            nivel={nivel}
            matriculaRef={matriculaRef}
            datosAlumno={datosAlumno}
            setIsFiltredStage1={setIsFiltredStage1}
            setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
            setIsFiltredStage2={setIsFiltredStage2}
            setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
         />
         <Form>
            <Form.Group>
               <Row className='m-2 p-1 border border-primary pb-3'>
                  <Col>
                     <Form.Label>
                        Filtrar por Apellido
                     </Form.Label>
                     <Form.Control type='text' placeholder='Ingrese Apellido' onChange={(event) => handleLastName(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)} ref={(element) => matriculaRef.current[3] = element}/>
                  </Col>
                  <Col>
               <Form.Label>
                  Filtrar por Nombre
               </Form.Label>
                     <Form.Control type='text' placeholder='Ingrese Nombre' onChange={(event) => handleFirstName(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)} ref={(element) => matriculaRef.current[4] = element}/>
                  </Col>
                  <Col>
                     <Form.Label>
                        Filtrar por Edad (Real)
                     </Form.Label>
                     <Form.Control type='text' placeholder='Seleccione Edad' onChange={(event) => handleEdad(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)} ref={(element) => matriculaRef.current[5] = element}/>
                  </Col>
                  <Col>
                     <Form.Label>
                        Filtrar por Edad (al 30/06)
                     </Form.Label>
                     <Form.Control type='text' placeholder='Seleccione Edad' onChange={(event) => handleEdad3006(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)} ref={(element) => matriculaRef.current[6] = element}/>
                  </Col>
               </Row>
            </Form.Group>
         </Form>
         <Row className='m-2 p-1 border border-primary'>
            <Col className='d-flex justify-content-center'>
                  Cantidad de registros:
            </Col>
            <Col className='d-flex justify-content-center'>
               {!isFiltredStage2 ? filtredDatosAlumnoStage1.length : filtredDatosAlumnoStage2.length}
            </Col>
         </Row>
                  <Row style={{marginTop:10}}>
                     <Col>
                        <Table bordered striped hover size="sm">
                           <thead>
                              <tr>
                                 <th>#</th>
                                 <th>Nombre</th>
                                 <th>Apellido</th>
                                 <th>DNI</th>
                                 <th>Nivel</th>
                                 <th>Grado</th>
                                 <th>Division</th>
                                 <th>Edad</th>
                              </tr>
                           </thead>
                           <tbody>
                              {!isFiltredStage2 ? 
                                 filtredDatosAlumnoStage1.map(
                                 (dataMap) =>
                                    <tr key={dataMap._id}>
                                       <th><Button onClick={()=> handleEdit(dataMap.N_DNI_ALUMNO,setAlumnoEditModal)}><FaUserEdit/></Button></th>
                                       <th>{dataMap.NOMBRE}</th>
                                       <th>{dataMap.APELLIDO}</th>
                                       <th>{dataMap.N_DNI_ALUMNO}</th>
                                       <th>{dataMap.NIVEL}</th>
                                       <th>{dataMap.GRADO}</th>
                                       <th>{dataMap.DIVISION}</th>
                                       <th>{ageCalculate(splitDate(dataMap.FECHA_NACIMIENTO,3))}</th>
                                    </tr>
                                 ):
                                 filtredDatosAlumnoStage2.map(
                                 (dataMap) =>
                                    <tr key={dataMap._id}>
                                       <th><Button onClick={()=> handleEdit(dataMap.N_DNI_ALUMNO,setAlumnoEditModal)}><FaUserEdit/></Button></th>
                                       <th>{dataMap.NOMBRE}</th>
                                       <th>{dataMap.APELLIDO}</th>
                                       <th>{dataMap.N_DNI_ALUMNO}</th>
                                       <th>{dataMap.NIVEL}</th>
                                       <th>{dataMap.GRADO}</th>
                                       <th>{dataMap.DIVISION}</th>
                                       <th>{ageCalculate(splitDate(dataMap.FECHA_NACIMIENTO,3))}</th>
                                    </tr>
                              )}   
                           </tbody>
                        </Table>
                     </Col>
                  </Row>
         </Container>
                  )
                  }
                  export default Matricula
