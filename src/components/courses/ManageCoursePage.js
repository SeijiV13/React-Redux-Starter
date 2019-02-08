import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this);
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    render(){
        const {authors} = this.props;
        return(
            <div>

                <h1>Manage Course</h1>
                <CourseForm 
                onChange={this.updateCourseState}
                allAuthors={authors}
                course={this.state.course}
                onSave={this.saveCourse}
                errors={this.state.errors}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }
    return {
      course: course,
      authors: state.authors.map(author => {
          return {
              value: author.id,
              text: author.firstName + ' ' + author.lastName
          }
      })
    };
}


function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);