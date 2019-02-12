import * as types from '../actions/actionTypes';
import initialState from "./initialState";



export default function toastrReducer(state = initialState.toastr, action){
    if(action.type == types.BEGIN_TOASTR){
        return action.object;
    }

 
    
    return state;
}