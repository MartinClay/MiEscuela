import axios from 'axios'
import {baseUrl} from '../Helpers/Urls'

export const postFetchLogIn = async (usuario,password,apiUrl) => {
   const url= baseUrl + apiUrl
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
   const url= baseUrl + apiUrl
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
