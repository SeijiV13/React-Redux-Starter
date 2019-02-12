import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            frame: 1
        };
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0){
            text += '.';
            dots--;
        }
        if(this.props.loading){
            return (
                <span interval={this.props.interval} frame={this.props.frame}>{text} &nbsp;</span>
            )
        } else{
            return (
                <div></div>
             )
        }

      
    }
}

LoadingDots.defaultProps = {
    interval: 300, dots: 3
}

function mapStateToProps(state, ownProps){
    return {
        loading: state.ajaxCallsInProgress > 0 ? true : false
    }
}

export default connect(mapStateToProps)(LoadingDots);