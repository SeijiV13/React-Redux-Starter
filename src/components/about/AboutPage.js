import React from 'react';
import Title from '../common/Title';

class AboutPage extends React.Component{
    render(){
        let title ="About";
        return (
            <div>
                <Title title={title}></Title>
                <div className="container">
                <p>this applications uses React, Redux, React Router and a variety of helpful other libraries</p>
                </div>
            </div>
        )
    }
}

export default AboutPage;