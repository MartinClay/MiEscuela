import {
   useState,
   useEffect,
   useRef
} from 'react'

import ModalEditAlumno from './ModalEditAlumno.jsx'
import SelectFormStage1 from './SelectFormStage1.jsx'
import SelectFormStage2 from './SelectFormStage2.jsx'
import TableAlumnosMatricula from './TableAlumnosMatricula.jsx'

import {Container} from 'react-bootstrap'

import {getMatricula} from '../Hooks/getFetch.js'

import useAuth from '../Context/Store/useAuth.jsx'

const Matricula = () => { 

   const [datosAlumno,setDatosAlumno] = useState([])
   const [isFiltredStage1,setIsFiltredStage1] = useState(false)
   const [isFiltredStage2,setIsFiltredStage2] = useState(false)
   const [filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage1] = useState([])
   const [filtredDatosAlumnoStage2,setFiltredDatosAlumnoStage2] = useState([])
   const [grado,setGrado] = useState('Grado')
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [alumnoEditModal,setAlumnoEditModal] = useState(false)
   const matriculaRef = useRef([]) 
   const context  =  useAuth()

   useEffect(()=> {
      getMatricula(context.stateUser.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])

   return ( 
      <Container>
         <ModalEditAlumno
            alumnoEditModal={alumnoEditModal}
            setAlumnoEditModal={setAlumnoEditModal}
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
         <SelectFormStage2
            datosAlumno={datosAlumno}
            setIsFiltredStage1={setIsFiltredStage1}
            setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
            isFiltredStage1={isFiltredStage1}
            filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
            setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
            filtredDatosAlumnoStage2={filtredDatosAlumnoStage2}
            setIsFiltredStage2={setIsFiltredStage2}
            matriculaRef={matriculaRef}
         />
         <TableAlumnosMatricula
            isFiltredStage2={isFiltredStage2}
            filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
            filtredDatosAlumnoStage2={filtredDatosAlumnoStage2}
         />
      </Container>
   )
}
export default Matricula
