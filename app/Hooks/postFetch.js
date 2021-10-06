import axios from 'axios'

export const postFetch = async (usuario,password) => {
   const url='http://localhost:3000/Api/LogIn'
   const dataPost = {usuario:usuario,password:password}
   try{
   const resData = await axios.post(url,dataPost)
   return resData
   }
   catch(err) {
         return(err.response)
      }
}
