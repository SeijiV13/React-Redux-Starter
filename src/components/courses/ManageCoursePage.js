import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as toasrtActions from '../../actions/toastrActions';
import CourseForm from './CourseForm';
import Title from '../common/Title';
class ManageCoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false,
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect()).catch(error=>{
            this.setState({saving: false});
            this.props.actions.beginToastr({message: error, type: 'error'});
            this.props.actions.createCourseError();
        });

    }

    redirect(){
        this.setState({saving: false});
        this.context.router.history.push('/courses'); 
    }

    render(){
        const {authors} = this.props;
        const title = "Manage Course";
        return(
            <div>
        
                <Title title={title}></Title>
                <CourseForm 
                onChange={this.updateCourseState}
                allAuthors={authors}
                course={this.state.course}
                onSave={(event)=>{this.saveCourse(event)}}
                errors={this.state.errors}
                saving={this.state.saving}
                />
            </div>
        );
    }
}

// ManageCoursePage.propTypes ={
//     course: PropTypes.object.isRequired,
//     authors: PropTypes.array.isRequired,
//     action: PropTypes.object.isRequired
// }

ManageCoursePage.contextTypes = {
    router : PropTypes.object
}


function getCourseById(courses, id){
    const course = courses.filter(course => course.id == id);
    if(course) return course[0];
    return null;
}
function mapStateToProps(state, ownProps){
    const courseId = ownProps.match.params.id; //from the path `/course/:id`
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }
    if(courseId && state.courses.length > 0){
      course = getCourseById(state.courses, courseId)
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
        actions: bindActionCreators(Object.assign({}, courseActions, toasrtActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);