import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider.jsx'
import {
   usuariosUrl,
   matriculaUrlSingle,
   matriculaUrlActivo
} from '../Helpers/Urls'

export const getFetchUsuarios = async (token) => {

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000${usuariosUrl}` 
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
}

export const getFetchUsuarioSingle = async (
   token,
   usuario
) => {

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000${usuariosUrl}/${usuario}` 
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
}

export const getMatricula = async (token) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000${matriculaUrlActivo}` 
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
}

export const getMatriculaSingle = async (token,DNI) => {
   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           
   } 
   const url= `http://${baseUrl}:3000/${matriculaUrlSingle}/${DNI}` 
   const dataRes = await axios.get(
      url,
      config
   )
   return dataRes
}
