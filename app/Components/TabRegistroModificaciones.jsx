import {
   Col,
   Row,
} from 'react-bootstrap'

const TabRegistroModificaciones = ({
   dataAlumno,
}) => { 

   return ( 
      <>
         {console.log(dataAlumno.REGISTRO)}
         {dataAlumno.REGISTRO?.map((dataMap,index)=>
         <Row>
               <Col>
                     `Usuario: {dataMap.user}`
               </Col>
               <Col>
                     `Fecha: {dataMap.fecha}`
               </Col>
               <Col>
                  {dataMap.cambios?.map((dataMap,index)=>
                  <p>{dataMap}</p>
                  )}
               </Col>
         </Row>
         )}
      </>
   )
}

export default TabRegistroModificaciones
