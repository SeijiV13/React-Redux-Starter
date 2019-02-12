import React, {PropTypes} from 'react';
import {NavLink, IndexLink} from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';
import { ToastContainer } from "react-toastr";


class Header extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            container: ''
        }
    }

    componentDidUpdate(prevProps){
      if(prevProps.loading != this.props.loading){
          if(this.props.loading.type == 'success'){
            this.state.container.success(this.props.loading.message, `Course Saved`, {
                closeButton: true,
              });
          }
          if(this.props.loading.type == 'error'){
            this.state.container.error(this.props.loading.message, `Error`, {
                closeButton: true,
              }); 
          }
      }
    
    }

    render(){
        return (
            
            <div className="header">
            <nav>
               <ToastContainer
                    ref={ref => this.state.container = ref}
                     className="toast-top-right"
                 />
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                { " | " }
                <NavLink to="/about" activeClassName="active">About</NavLink>
                { " | " }
                <NavLink to="/courses" activeClassName="active">Courses</NavLink>
               <LoadingDots interval={100} dots={20}></LoadingDots>
            </nav>
            </div>
        );
    }
};

function mapStateToProps(state, OwnProps){
    return {
        loading: state.toastr
    }
}

export default connect(mapStateToProps)(Header);

