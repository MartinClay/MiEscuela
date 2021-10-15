import jwt_decode from 'jwt-decode'

export const DecodeToken = (number) => {
   switch(number){
      case 1:
         return jwt_decode(localStorage.jwt)
   }
}
