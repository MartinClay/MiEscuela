import {getMatriculaSingle} from '../../Hooks/getFetch'

export const handleGetDataAlumno = (
   context,
   selectedAlumnoForEdit,
   setDataAlumno
) => {
   getMatriculaSingle(
      context.stateUser.token,
      selectedAlumnoForEdit
   ).then((res)=>{
      setDataAlumno(res.data)
   }
   )
}

export const handleSwitchEdit = (
   setSwitchEdit
) => {
   setSwitchEdit(false)
}

export const handleUpdateData = (modalEditRef,fechaNacimiento,dataAlumno) => {
   let newDataAlumno = {}
   let updatedData = {}
   for(let i = 0 ; i < Object.keys(dataAlumno).length - 2 ; i ++){
      modalEditRef.current[i] !== undefined ? 
         newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : modalEditRef.current[i].value}
         :
         newDataAlumno = {...newDataAlumno , [Object.keys(dataAlumno)[i]] : Object.values(dataAlumno)[i] 
         }
   }
   for (let i = 0 ; i < Object.keys(dataAlumno).length - 2 ; i ++){
      Object.values(dataAlumno)[i].toString() !== Object.values(newDataAlumno)[i] ?
         updatedData = {...updatedData , [Object.keys(dataAlumno)[i]]: Object.values(newDataAlumno)[i]} 
         :
         null
   }
   console.log(updatedData)
}

export const handleChangeCalendar = (value,setFechaNacimiento) => {
   setFechaNacimiento(value)
}

export const handleShow = (setAlumnoEditModal,setDataAlumno) => {
   setAlumnoEditModal(false)
   setDataAlumno({})
}
