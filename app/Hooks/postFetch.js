import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider.jsx'

export const postFetchLogIn = async (usuario,password,apiUrl) => {
   const url= `http://${baseUrl}:3000${apiUrl}`  
   console.log(url)
   const dataPost = {usuario:usuario,password:password}
   try{
   const resData = await axios.post(url,dataPost)
   return resData
   }
   catch(err) {
         return(err.response)
      }
}

export const postFetchRatificacion = async (nivel,grado,division,apiUrl) => {
   const url= `http://${baseUrl}:3000${apiUrl}`  
   const dataPost = {
      NIVEL:nivel,
      GRADO:grado,
      DIVISION:division,
   }
   try{
      const resData = await axios.post(url,dataPost)
      return resData
   }
   catch(err){
      return(err.response)
   }
}
