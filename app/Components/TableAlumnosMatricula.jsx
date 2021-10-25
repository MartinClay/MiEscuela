import {
   Row,
   Col,
   Table,
   Button
} from 'react-bootstrap'

import {
   ageCalculate3006,
   splitDate
} from './Logic/dateHandler'

import {
   handleEdit,
} from './Logic/matriculaLogic'

import {FaUserEdit} from 'react-icons/fa'


const TableAlumnosMatricula = ({
   isFiltredStage2,
   filtredDatosAlumnoStage1,
   filtredDatosAlumnoStage2,
   setAlumnoEditModal,
   setSelectedAlumnoForEdit
}) => { 

   return ( 
      <>
         <Row 
            className='m-2 p-1 border border-primary'
         >
            <Col 
               className='d-flex justify-content-center'
            >
               Cantidad de registros:
            </Col>
            <Col 
               className='d-flex justify-content-center'
            >
               {
                  !isFiltredStage2 ? 
                     filtredDatosAlumnoStage1.length 
                     :
                     filtredDatosAlumnoStage2.length
               }
            </Col>
         </Row>
         <Row 
            style={{marginTop:10}}
         >
            <Col>
               <Table 
                  bordered 
                  striped 
                  hover 
                  size="sm"
               >
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
                     {
                        !isFiltredStage2 ? 
                           filtredDatosAlumnoStage1.map(
                              (dataMap) =>
                                 <tr 
                                    key={dataMap._id}
                                 >
                                    <th>
                                       <Button 
                                          onClick={()=> handleEdit(
                                             dataMap.N_DNI_ALUMNO,
                                             setAlumnoEditModal,
                                             setSelectedAlumnoForEdit
                                          )}
                                       >
                                          <FaUserEdit/>
                                       </Button>
                                    </th>
                                    <th>{dataMap.NOMBRE}</th>
                                    <th>{dataMap.APELLIDO}</th>
                                    <th>{dataMap.N_DNI_ALUMNO}</th>
                                    <th>{dataMap.NIVEL}</th>
                                    <th>{dataMap.GRADO}</th>
                                    <th>{dataMap.DIVISION}</th>
                                    <th>{
                                          ageCalculate3006(
                                             splitDate(
                                                dataMap.FECHA_NACIMIENTO,
                                                3
                                             ))}
                                    </th>
                                 </tr>
                           ):
                           filtredDatosAlumnoStage2.map(
                              (dataMap) =>
                                 <tr 
                                    key={dataMap._id}
                                 >
                                    <th>
                                       <Button 
                                          onClick={()=> handleEdit(
                                             dataMap.N_DNI_ALUMNO,
                                             setAlumnoEditModal,
                                             setSelectedAlumnoForEdit
                                          )}
                                       >
                                          <FaUserEdit/>
                                       </Button>
                                    </th>
                                    <th>{dataMap.NOMBRE}</th>
                                    <th>{dataMap.APELLIDO}</th>
                                    <th>{dataMap.N_DNI_ALUMNO}</th>
                                    <th>{dataMap.NIVEL}</th>
                                    <th>{dataMap.GRADO}</th>
                                    <th>{dataMap.DIVISION}</th>
                                    <th>{
                                       ageCalculate3006(
                                          splitDate(
                                             dataMap.FECHA_NACIMIENTO,
                                             3
                                       ))}
                                    </th>
                                 </tr>
                           )}   
                  </tbody>
               </Table>
            </Col>
         </Row>
      </>
   )
}

export default TableAlumnosMatricula

