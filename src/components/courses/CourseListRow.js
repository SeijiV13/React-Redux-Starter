import React, {PropTypes} from 'react';
import {NavLink, IndexLink} from 'react-router-dom';

const CourseListRow = ({course, onClick}) => {
        return (
           <tr>
               <td></td>
               <td><a href={course.watchHref} target="_blank">Watch</a></td>
               <td><NavLink to={'/course/' + course.id}>{course.title}</NavLink></td>
               <td>{course.authorId}</td>
               <td>{course.category}</td>
               <td>{course.length}</td>
               <td><button className="btn btn-danger" onClick={() => onClick(course)}>Remove</button></td>
           </tr>
        );
    
}



export default (CourseListRow);