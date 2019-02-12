import React from 'react';
import {Link} from 'react-router-dom';
import Title from '../common/Title';


class HomePage extends React.Component{
    render(){
        let title="Pluralsight Administration"
        return (
            <div className="jumbotron">
               <Title title={title}></Title>
               <p>React, Redux and React ROuter in Es6</p>
               <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        
        )
    }
}

export default HomePage;