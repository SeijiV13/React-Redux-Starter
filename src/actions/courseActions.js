import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';
import { beginToastr } from './toastrActions';

export function loadCourses(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then((courses)=>{
            dispatch(loadCoursesSuccess(courses))
        }).catch(error => {
          throw(error);
        });
    }
}


export function loadCoursesSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function createCourseSuccess(course){
    return {type: types.CREATE_COURSE_SUCCESS, course}
}

export function createCourseError(){
    return {type: types.CREATE_COURSE_ERROR}
}


export function updateCourseSuccess(course){
    return {type: types.UPDATE_COURSE_SUCCESS, course}
}

export function saveCourse(course){
    return function (dispatch){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then((course)=>{
            (course.id ? dispatch(updateCourseSuccess(course)) :
            dispatch(createCourseSuccess(course)))
            
            // for toaster
            dispatch(beginToastr({message: 'Course is successfully saved', type: 'success'}))
        })
    }
}