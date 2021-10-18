import axios from 'axios'
import {baseUrl} from '../Context/Store/AuthProvider.jsx'
import {usuariosUrl} from '../Helpers/Urls'



export const getFetchUsuarios = async (token) => {

   const config = {
      headers: {                    
         "Accept": "application/json",                    
         "Content-Type": "application/json",
         "Authorization": token                
      }           

   } 

   const url= `http://${baseUrl}:3000${usuariosUrl}` 
   const dataRes = await axios.get(url,config)
   return dataRes
}

