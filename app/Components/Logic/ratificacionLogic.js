import { postFetchRatificacion } from "../../Hooks/postFetch"

import { ratificacionUrl } from "../../Helpers/Urls"

export const handleClickNivel = (item,setNivel) => {
   setNivel(item)
}

export const handleClickGrado = (item,setGrado) => {
   setGrado(item)
}

export const handleClickDivision = (item,setDivision) => {
   setDivision(item)
} 

export const updateLista = (data,setDatosAlumno) => {
   setDatosAlumno([...datosAlumno,data])
}

export const generarInforme = (setDatosAlumno,setShowModalItems,nivel,division,grado,context) => {
   if(nivel !== 'Nivel' && division !== 'Division' && grado !== 'Grado'){
      postFetchRatificacion(context.stateUser.token,nivel,grado,division,ratificacionUrl).then((data)=> {
         setDatosAlumno(data.data)
      })
   }else {
      alert('La seleccion de Nivel,Grado y Division son obligatorias')
   }
   setShowModalItems(true)
}

export const handleDelete = (dni,setDatosAlumno,datosAlumno) => {
   const dataAlumnosSinFiltrar = datosAlumno
   let filtrado = []
   for (var i = 0; i < dataAlumnosSinFiltrar.length; i++){
      if(dataAlumnosSinFiltrar[i].N_DNI_ALUMNO !== dni){
         filtrado = [...filtrado,dataAlumnosSinFiltrar[i]]
      }
   }
   setDatosAlumno(filtrado)
}

export const handleClickImprimir = (setShowModalPdf) => {
   setShowModalPdf(true)
}


