
import * as types from '../actions/actionTypes'
export default function authorsReducer(state = [], action){
   switch(action.type){
       case types.LOAD_AUTHORS_SUCCESS:
       return action.authors
       default: 
       return state;
   }

}