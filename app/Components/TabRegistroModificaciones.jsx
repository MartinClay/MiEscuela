import {
   Col,
} from 'react-bootstrap'

const TabRegistroModificaciones = ({
   dataAlumno,
}) => { 

   return ( 
      <>
         <Col
                     className='mt-2 border'
                  >
                     {dataAlumno.REGISTRO?.map((dataMap) => 
                     <p
                        key={dataMap === "" ? Math.random() : dataMap}
                     >{dataMap}</p>
                     )}
                  </Col>
      </>
   )
}

export default TabRegistroModificaciones
