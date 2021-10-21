import {useState,useEffect} from 'react'

import {Container,Row,Col,Button,Form,Table} from 'react-bootstrap'

import {getMatricula} from '../Hooks/getFetch.js'

import useAuth from '../Context/Store/useAuth.jsx'

import {FaUserEdit} from 'react-icons/fa'

import {Grado,Nivel,Division} from '../Helpers/HardCodeData.js'

import {ageCalculate,splitDate,ageCalculate3006} from './dateHandler.js'

const handleLastName = (event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2) => {
   let newArray = []
   if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.APELLIDO.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => dataFilter.APELLIDO.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }

}

const handleFirstName = (event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2) => {
   let newArray = []
    if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.NOMBRE.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => dataFilter.NOMBRE.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }

}

const handleNivelChange =(event,setNivel) => {
   setNivel(event.nativeEvent.target.value)
}

const handleGradoChange =(event,setGrado) => {
   setGrado(event.nativeEvent.target.value)
}

const handleDivisionChange =(event,setDivision) => {
   setDivision(event.nativeEvent.target.value)
}

const handleEdad = (event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2) => {
   let newArray = []
    if(event.target.value.length >= 1 && isFiltredStage1 === true){
       console.log('asdf')
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => ageCalculate(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }

}

const handleEdad3006 = (event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2) => {
   let newArray = []
    if(event.target.value.length >= 1 && isFiltredStage1 === true){
       console.log('asdf')
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }

}

const handleEdit = (data) => {
   console.log(data)
}

const handleClickApplyFilter = (nivel,grado,division,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1) => {
   let newArray = []     
   switch(true){
      case nivel !== 'Nivel' && grado === 'Grado' && division === 'Division':
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel)
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)  
         break
      case nivel !== 'Nivel' && grado !== 'Grado' && division === 'Division':
         console.log(grado)
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel && dataFilter.GRADO === parseInt(grado))
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)
         break
      case nivel !== 'Nivel' && grado !== 'Grado' && division !== 'Division':
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel && dataFilter.GRADO === parseInt(grado) && dataFilter.DIVISION === division)
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)
         break
   }
}

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


   useEffect(()=> {
      console.log('getMatricula')
      getMatricula(context.stateUser.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])
   return ( 
      <Container>
         <Form>
         <Row className='m-2 border border-primary p-1 pt-3 pb-3'>
         <Col>
         <Form.Select aria-label='Nivel' onChange={(event) => handleNivelChange(event,setNivel)}>
         <option>Nivel</option>
                     {Nivel.map((dataMap)=>
                     <option value={dataMap} key={dataMap}>{dataMap} </option>
                        )}
         </Form.Select>
         </Col>
         <Col>
         <Form.Select aria-label='Grado' onChange={(event) => handleGradoChange(event,setGrado)}>
                        <option>Grado</option>
                        {Grado.map((dataMap)=>
                     <option value={dataMap} key={dataMap}>{dataMap}</option>
                        )}
         </Form.Select>
         </Col>
         <Col>
         <Form.Select aria-label='Division' onChange={(event) => handleDivisionChange(event,setDivision)}>
                        <option>Division</option>
                        {Division.map((dataMap)=>
                        <option value={dataMap} key={dataMap}>{dataMap}</option>
                           )}
         </Form.Select>       
         </Col>
                        <Row className='mt-2'>
                        <Col md={{span:1,offset:11}}>
                           <Button variant='outline-primary'size='sm' onClick={()=> handleClickApplyFilter(nivel,grado,division,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1)}>Aplicar</Button>
                        </Col>
                        </Row>
         </Row>
            <Form.Group>
               <Row className='m-2 p-1 border border-primary pb-3'>
                  <Col>
                     <Form.Label>
                        Filtrar por Apellido
                     </Form.Label>
                     <Form.Control type='text' placeholder='Ingrese Apellido' onChange={(event) => handleLastName(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)}/>
                  </Col>
                  <Col>
               <Form.Label>
                  Filtrar por Nombre
               </Form.Label>
                  <Form.Control type='text' placeholder='Ingrese Nombre' onChange={(event) => handleFirstName(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)}/>
                  </Col>
                  <Col>
                     <Form.Label>
                        Filtrar por Edad (Real)
                     </Form.Label>
                     <Form.Control type='text' placeholder='Seleccione Edad' onChange={(event) => handleEdad(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)}/>
                  </Col>
                  <Col>
                     <Form.Label>
                        Filtrar por Edad (al 30/06)
                     </Form.Label>
                     <Form.Control type='text' placeholder='Seleccione Edad' onChange={(event) => handleEdad3006(event,datosAlumno,setIsFiltredStage1,setFiltredDatosAlumnoStage1,isFiltredStage1,filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage2,setIsFiltredStage2)}/>
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
                                       <th><Button onClick={()=> handleEdit(dataMap.N_DNI_ALUMNO)}><FaUserEdit/></Button></th>
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
                                       <th><Button onClick={()=> handleEdit(dataMap.N_DNI_ALUMNO)}><FaUserEdit/></Button></th>
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
