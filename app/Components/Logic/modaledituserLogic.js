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
   console.log(fechaNacimiento)
   console.log(modalEditRef)
   console.log(dataAlumno)
}

export const handleChangeCalendar = (value,setFechaNacimiento) => {
   setFechaNacimiento(value)
}

export const handleShow = (setAlumnoEditModal,setDataAlumno) => {
   setAlumnoEditModal(false)
   setDataAlumno({})
}
