import {USER_STATE_CHANGE} from '../constants'

const initalState = {
    currentUser: null,
    loaded: false,
   
}

export const auth = (state = initalState,action) => 
{
    switch(action.type) 
    {
        case USER_STATE_CHANGE:
            return{
                ...state,
                currentUser: action.currentUser,
                loaded: action.loaded
            }
        default :
            return state
 

    }

}