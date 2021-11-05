import {SET_CURRENT_USER} from '../Actions/autentication.action'
import isEmpty from '../Validations/isEmpty'
import jwt_decode from 'jwt-decode'

export default function(
   state , 
   action 
){
   let userName = jwt_decode(action.payload)
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                token: action.payload,
                user: userName.usuario.usuario 
            }
        default: 
            return state;
    }
}
