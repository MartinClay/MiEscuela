import {SET_CURRENT_USER} from '../Actions/autentication.action'
import isEmpty from '../Validations/isEmpty'
//eslint-disable-next-line
export default function(state , action ){
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                token: action.payload
            }
        default: 
            return state;
    }
}
