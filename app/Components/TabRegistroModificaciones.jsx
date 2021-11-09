import {
   Row,
   Table,
} from 'react-bootstrap'

const TabRegistroModificaciones = ({
   dataAlumno,
}) => { 

dataAlumno?.REGISTRO?.sort((a,b)=>{

            if(a.fecha > b.fecha){
               return -1
            }
            if (a.fecha < b.fecha){
               return 1
            }
            return 0
         })

   return ( 
      <
      >
         <Table
            striped
            bordered
            hover
         >
            <thead>
               <tr>
                  <th>
                     #
                  </th>
                  <th>
                     Usuario:
                  </th>
                  <th>
                     Fecha:
                  </th>
                  <th>
                     Cambios realizados:
                  </th>
               </tr>
            </thead>
            <tbody>
               {dataAlumno.REGISTRO?.map((dataMap,index)=>
               <tr
                  key={index}
               >
                  <td>
                     {index}
                  </td>
                  <td>
                     {dataMap?.user}
                  </td>
                  <td>
                     {dataMap?.fecha}
                  </td>
                  <td>
                     {dataMap?.cambios?.map((dataMap,index)=>
                     <Row
                        key={index}
                     >
                        {dataMap}    
                     </Row>
                     )}
                  </td>
               </tr>
               )}
            </tbody>
         </Table>
      </>
   )
}

export default TabRegistroModificaciones
