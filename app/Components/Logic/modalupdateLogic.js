import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (updatedData,token,apiUrl,id,dataRegistro) => {
   postFetchUpdateAlumno(token,updatedData,apiUrl,id,dataRegistro)
}

export const createDataRegistro = (dataAlumno,updatedData,usuario) => {
   let dataRegistro = {}
   dataRegistro = {
      user: usuario,
      fecha: new Date().toLocaleString(),
      cambios:[]
   } 
   
   Object.keys(updatedData).map((dataMap,index)=>{
      dataRegistro.cambios.push(`Dato anterior: ${dataAlumno[dataMap]} | Dato nuevo: ${Object.values(updatedData)[index]}`)
   })
   return dataRegistro
}
