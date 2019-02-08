import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CoursesList from './CourseList';
class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title : ""}
        };

    }
     
    courseRow(course, index){
        return  <div key={index}>{course.title}</div>
    }

    redirectTpAddCoursePage(){
        history.push('/course')
    }

    render(){
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectTpAddCoursePage}/>
                <CoursesList courses={courses}/>
            </div>
        );
    }
}



function mapStateToProps(state, ownProps){
    return {
      courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);