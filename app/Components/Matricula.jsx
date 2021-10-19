import {useState,useEffect} from 'react'
import {Container,Row,Col,Button,Form,Table} from 'react-bootstrap'

import {getMatricula} from '../Hooks/getFetch.js'

import useAuth from '../Context/Store/useAuth.jsx'

import {FaUserEdit} from 'react-icons/fa'

const handleLastName = (event,setLastName,lastName,filtredDatosAlumno,setFiltredDatosAlumno,datosAlumno) => {
   if(event.target.value.length > 3){
      setLastName(event.target.value)
      setFiltredDatosAlumno(datosAlumno.filter((dataFilter) => dataFilter.APELLIDO.indexOf(lastName.toUpperCase()) === -1))
      console.log(filtredDatosAlumno)
   }
   
}

const handleEdit = (data) => {
   console.log(data)
}

const Matricula = () => { 

const [lastName,setLastName] = useState('')
const [datosAlumno,setDatosAlumno] = useState([])
const [isFiltred,setIsFiltred] = useState(false)
const [filtredDatosAlumno,setFiltredDatosAlumno] = useState([])
const context  =  useAuth()

   useEffect(()=> {
      getMatricula(context.stateUser.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])
   return ( 
      <Container fluid>
         <Form>
            <Form.Group>
               <Form.Label>
                  Filtrar por Apellido
               </Form.Label>
               <Form.Control type='text' placeholder='Ingrese Apellido' onChange={(event) => handleLastName(event,setLastName,lastName,filtredDatosAlumno,setFiltredDatosAlumno,datosAlumno)}/>
            </Form.Group>
         </Form>
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
                           (dataMap) =>
                              <tr key={dataMap.N_DNI_ALUMNO}>
                                 <th><Button onClick={()=> handleEdit(dataMap.N_DNI_ALUMNO)}><FaUserEdit/></Button></th>
                                 <th>{dataMap.NOMBRE}</th>
                                 <th>{dataMap.APELLIDO}</th>
                                 <th>{dataMap.N_DNI_ALUMNO}</th>
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
