import {
   Row,
   Col,
   Table,
   Button,
   CloseButton
} from 'react-bootstrap'

import {
   handleDelete,
   handleClickImprimir
} from './Logic/ratificacionLogic'

const TableRatificacion = ({
   setDatosAlumno,
   datosAlumno,
   setShowModalPdf
}) => { 
   return ( 
      <> 
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
                     </tr>
                  </thead>
                  <tbody>
                     {datosAlumno.map(
                        (data) =>
                           <tr 
                              key={data.N_DNI_ALUMNO}
                           >
                              <th>
                                 <CloseButton 
                                    onClick={()=> handleDelete(
                                       data.N_DNI_ALUMNO,
                                       setDatosAlumno,
                                       datosAlumno
                                    )}
                                 />
                              </th>
                              <th>{data.NOMBRE}</th>
                              <th>{data.APELLIDO}</th>
                              <th>{data.N_DNI_ALUMNO}</th>
                           </tr>
                     )}   
                  </tbody>
               </Table>
            </Col>
         </Row>
         <Col 
            className='d-flex justify-content-end'
         >
            <Button 
               variant='primary' 
               onClick={()=> handleClickImprimir(setShowModalPdf)}
            >
               Imprimir
            </Button>
         </Col>
      </>
   )
}

export default TableRatificacion

