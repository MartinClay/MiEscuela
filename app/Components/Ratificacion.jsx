import React,{useState}  from "react";

import {Container,Col,Row,DropdownButton,Dropdown,ButtonGroup,Button,Table,CloseButton} from 'react-bootstrap'

import {Grado,Nivel,Division} from '../Helpers/HardCodeData.js'
import {ratificacionUrl} from '../Helpers/Urls.js'

import {postFetchRatificacion} from '../Hooks/postFetch.js'

import ModalRatificacion from './ModalRatificacion.jsx'
import ModalPdf from './ModalPdf.jsx'

const Ratificacion = () => { 
   const [grado,setGrado] = useState('Grado')
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [datosAlumno,setDatosAlumno] = useState([])
   const [showModalItems, setShowModalItems] = useState(false)
   const [showModalPdf,setShowModalPdf] = useState(false)
   const [selectedItems, setSelectedItems] = useState([])
   const [arrayForPdf,setArrayForPdf] = useState([])

   function handleClickNivel (item) {
      setNivel(item)
   }

   function handleClickGrado (item) {
      setGrado(item)
   }

   function handleClickDivision (item) {
      setDivision(item)
   } 

   function updateLista(data) {
      setDatosAlumno([...datosAlumno,data])
   }

   function generarInforme () {
      if(nivel !== 'Nivel' && division !== 'Division' && grado !== 'Grado'){
         postFetchRatificacion(nivel,grado,division,ratificacionUrl).then((data)=> {
               setDatosAlumno(data.data)
            })
      }else {
         alert('La seleccion de Nivel,Grado y Division son obligatorias')
      }
      setShowModalItems(true)
   }

   function handleDelete(dni) {
      const dataAlumnosSinFiltrar = datosAlumno
      let filtrado = []
      for (var i = 0; i < dataAlumnosSinFiltrar.length; i++){
         if(dataAlumnosSinFiltrar[i].N_DNI_ALUMNO !== dni){
            filtrado = [...filtrado,dataAlumnosSinFiltrar[i]]
         }
      }
      setDatosAlumno(filtrado)
   }

   function handleClickImprimir () {
      setShowModalPdf(true)
   }

      return ( 
         <Container 
            fluid
            style={{marginTop: 10,marginBottom: 50}}
         >
            <Row> 
               <ModalRatificacion
                  showModalItems={showModalItems}
                  setShowModalItems={setShowModalItems}
                  setSelectedItems={setSelectedItems}
               />
               <ModalPdf
                  setShowModalPdf={setShowModalPdf}
                  showModalPdf={showModalPdf}
                  selectedItems={selectedItems}
                  datosAlumno={datosAlumno}
               />
               <Col className='d-flex justify-content-center'>
                  <DropdownButton 
                     title={nivel}
                     as={ButtonGroup}
                  >    
                     {Nivel.map(
                        (item) =>
                           <Dropdown.Item key={item} onClick={ () => handleClickNivel(item)}>{item}</Dropdown.Item>
                     )}
                  </DropdownButton>
               </Col>
               <Col className='d-flex justify-content-center'>
                  <DropdownButton 
                     title={grado}
                     as={ButtonGroup}
                  >    
                     {Grado.map(
                        (item) =>
                           <Dropdown.Item key={item} onClick={ ()=> handleClickGrado(item)}>{item}</Dropdown.Item>
                     )}
                  </DropdownButton>   
               </Col>
               <Col className='d-flex justify-content-center'>
                   <DropdownButton 
                     title={division}
                     as={ButtonGroup}
                  >    
                     {Division.map(
                        (item) =>
                           <Dropdown.Item key={item} onClick={()=> handleClickDivision(item)}>{item}</Dropdown.Item>
                     )}
                  </DropdownButton>  
               </Col>
               <Col className='d-flex justify-content-center'>
                  <Button onClick={()=> generarInforme()}>Buscar</Button>
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
                        </tr>
                     </thead>
                     <tbody>
                        {datosAlumno.map(
                           (data) =>
                              <tr key={data.N_DNI_ALUMNO}>
                                 <th><CloseButton onClick={()=> handleDelete(data.N_DNI_ALUMNO)}/></th>
                                 <th>{data.NOMBRE}</th>
                                 <th>{data.APELLIDO}</th>
                                 <th>{data.N_DNI_ALUMNO}</th>
                              </tr>
                        )}   
                     </tbody>
                  </Table>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Button variant='primary' onClick={()=> handleClickImprimir()}>Imprimir</Button>
               </Col>
            </Row>
         </Container>
                )
}
export default Ratificacion
