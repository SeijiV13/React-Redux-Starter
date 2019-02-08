import React, {PropTypes} from 'react';
import {NavLink, IndexLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            { " | " }
            <NavLink to="/about" activeClassName="active">About</NavLink>
            { " | " }
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
        </nav>
    );
};

export default Header;