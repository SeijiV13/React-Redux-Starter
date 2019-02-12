import * as types from './actionTypes';

export function beginToastr(object){
  return {type: types.BEGIN_TOASTR, object}  
}