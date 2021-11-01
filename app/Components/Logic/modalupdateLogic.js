import {postFetchUpdateAlumno} from '../../Hooks/postFetch'

export const handleShow = (setShowModalUpdate) => {
   setShowModalUpdate(false)
}

export const handleClickAccept = (updatedData,token,apiUrl) => {
   postFetchUpdateAlumno(token,updatedData,apiUrl)
}
