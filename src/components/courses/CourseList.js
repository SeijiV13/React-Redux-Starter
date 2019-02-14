import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';


const CoursesList = ({courses, onClick}) => {
        return (
           <table className="table table-striped">
              <thead>
                  <tr>
                      <th>&nbsp;</th>
                      <th></th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Category</th>
                      <th>Length</th>
                      <th>Remove</th>
                  </tr>
              </thead>
              <tbody>
                  {courses.map(course =>{
                      return <CourseListRow onClick={(passCourse) => onClick(passCourse)} key={course.id} course={course}/>
                  })}
              </tbody>
           </table>
        );
    
}



export default (CoursesList);