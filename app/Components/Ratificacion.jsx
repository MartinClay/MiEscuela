import {useState,useRef,useEffect}  from "react";

import {Container} from 'react-bootstrap'

import ModalSelectItemsToPrint from './ModalSelectItemsToPrint.jsx'
import ModalPdf from './ModalPdf.jsx'
import TableRatificacion from './TableRatificacion.jsx'
import SelectFormStage1 from './SelectFormStage1.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ModalModelPdfSelection from './ModalModelPdfSelection.jsx'

import {getMatricula} from '../Hooks/getFetch.js'

import useAuth from '../Context/Store/useAuth.jsx'

const Ratificacion = () => { 
   const [grado,setGrado] = useState('Grado')
   const [isFiltredStage1,setIsFiltredStage1] = useState(false)
   const [filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage1] = useState([])
   const [isFiltredStage2,setIsFiltredStage2] = useState(false)
   const [filtredDatosAlumnoStage2,setFiltredDatosAlumnoStage2] = useState([])
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [datosAlumno,setDatosAlumno] = useState([])
   const [showModalItemsToPrint, setShowModalItemsToPrint] = useState(false)
   const [showModalPdf,setShowModalPdf] = useState(false)
   const [showModalPdfSelection,setShowModalPdfSelection] = useState(false)
   const [selectedItems, setSelectedItems] = useState([])
   const matriculaRef = useRef([]) 
   const [modelo,setModelo] = useState('')
   const [isRender , setIsRender] = useState(false)
   const context = useAuth()

   useEffect(()=> {
      getMatricula(context.stateUser.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])

   return ( 
      <>
         {datosAlumno.length === 0 ? 
            <LoadingSpinner/>
            :
            <Container 
               style={{marginTop: 10}}
            >
               <ModalSelectItemsToPrint
                  showModalItemsToPrint={showModalItemsToPrint}
                  setShowModalItemsToPrint={setShowModalItemsToPrint}
                  setSelectedItems={setSelectedItems}
                  setShowModalPdf={setShowModalPdf}
                  setIsRender={setIsRender}
                  isRender={isRender}
               />
               <ModalPdf
                  setIsRender={setIsRender}
                  setShowModalPdf={setShowModalPdf}
                  showModalPdf={showModalPdf}
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  modelo={modelo}
               />
               <ModalModelPdfSelection
                  showModalPdfSelection={showModalPdfSelection}
                  setShowModalPdfSelection={setShowModalPdfSelection}
                  showModalItemsToPrint={showModalItemsToPrint}
                  setShowModalItemsToPrint={setShowModalItemsToPrint}
                  modelo={modelo}
                  setModelo={setModelo}
               />
               <SelectFormStage1
                  setGrado={setGrado}                     
                  grado={grado}
                  setDivision={setDivision}
                  division={division}
                  setNivel={setNivel}
                  nivel={nivel}
                  matriculaRef={matriculaRef}
                  datosAlumno={datosAlumno}
                  setIsFiltredStage1={setIsFiltredStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  setIsFiltredStage2={setIsFiltredStage2}
                  setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
               />
               <TableRatificacion
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  selectedItems={selectedItems}
                  setShowModalPdfSelection={setShowModalPdfSelection}
               />
            </Container>
         }

      </>
   )
}
export default Ratificacion
