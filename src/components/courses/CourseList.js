import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';


const CoursesList = ({courses}) => {
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
                  </tr>
              </thead>
              <tbody>
                  {courses.map(course =>{
                      return <CourseListRow key={course.id} course={course}/>
                  })}
              </tbody>
           </table>
        );
    
}



export default (CoursesList);