import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCourses(){
    return function(dispatch){
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

export function createCourseSuccess(courses){
    return {type: types.CREATE_COURSE_SUCCESS, courses}
}


export function updateCourseSuccess(courses){
    return {type: types.UPDATE_COURSE_SUCCESS, courses}
}

export function saveCourse(course){
    return function (dispatch){
        return courseApi.saveCourse().then((course)=>{
            course.id ? dispatch(updateCourseSuccess(course)) :
            dispatch(createCourseSuccess(course))
        })
    }
}