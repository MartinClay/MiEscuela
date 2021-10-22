import {useState}  from "react";

import {Container} from 'react-bootstrap'

import ModalRatificacion from './ModalRatificacion.jsx'
import ModalPdf from './ModalPdf.jsx'
import TableRatificacion from './TableRatificacion.jsx'
import SelectFormRatificacion from './SelectFormRatificacion.jsx'

import useAuth from '../Context/Store/useAuth.jsx'

const Ratificacion = () => { 
   const [grado,setGrado] = useState('Grado')
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [datosAlumno,setDatosAlumno] = useState([])
   const [showModalItems, setShowModalItems] = useState(false)
   const [showModalPdf,setShowModalPdf] = useState(false)
   const [selectedItems, setSelectedItems] = useState([])
   const context = useAuth()

   return ( 
      <Container 
         fluid
         style={{marginTop: 10,marginBottom: 50}}
      >
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
         <SelectFormRatificacion
            nivel={nivel}
            setNivel={setNivel}
            grado={grado}
            setGrado={setGrado}
            division={division}
            setDivision={setDivision}
            setDatosAlumno={setDatosAlumno}
            setShowModalItems={setShowModalItems}
            context={context}
         />
         <TableRatificacion
            setDatosAlumno={setDatosAlumno}
            datosAlumno={datosAlumno}
            setShowModalPdf={setShowModalPdf}
         />
      </Container>
   )
}
export default Ratificacion
