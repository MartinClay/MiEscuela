import {
   Row,
   Col,
   Table,
   CloseButton,
} from 'react-bootstrap'

import {
   handleDelete,
   conditionalButtonReder,
} from './Logic/ratificacionLogic'

const TableRatificacion = ({
   setFiltredDatosAlumnoStage1,
   filtredDatosAlumnoStage1,
   selectedItems,
   setShowModalPdfSelection,
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
                     filtredDatosAlumnoStage1.length 
               }
            </Col>
         </Row>

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
                     {filtredDatosAlumnoStage1.map(
                        (data) =>
                           <tr 
                              key={data.N_DNI_ALUMNO}
                           >
                              <th>
                                 <CloseButton 
                                    onClick={()=> handleDelete(
                                       data.N_DNI_ALUMNO,
                                       setFiltredDatosAlumnoStage1,
                                       filtredDatosAlumnoStage1
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
         <Col 
            className='d-flex justify-content-end m-2'
         >
            {conditionalButtonReder(selectedItems,filtredDatosAlumnoStage1,setShowModalPdfSelection)}
         </Col>
      </>
   )
}

export default TableRatificacion

