import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.css';
import './styles/toastr.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Root from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './store/configureStore';
import {BrowserRouter as Router} from 'react-router-dom';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render(
       <Root store={store}/>
     , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
