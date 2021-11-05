import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (updatedData,token,apiUrl,id,dataRegistro) => {
   postFetchUpdateAlumno(token,updatedData,apiUrl,id,dataRegistro)
}

export const createDataRegistro = (dataAlumno,updatedData,usuario) => {
   console.log(dataAlumno) 
   console.log(updatedData)
   console.log(usuario)
   let dataRegistro = {}
   
   Object.keys(dataAlumno).map((dataMap,index)=>{
      
   })
}
