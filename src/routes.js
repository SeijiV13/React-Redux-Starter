import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/courses/CoursesPage';
import {Provider} from 'react-redux';
import ManageCoursePage from './components/courses/ManageCoursePage';


const Root = ({store}) => (
    <Provider store={store}> 
    <Router>
        <div className="App container-fluid">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route exact path="/course" component={ManageCoursePage}></Route>
          <Route path="/course/:id" component={ManageCoursePage}></Route>
          <Route path="/courses" component={CoursesPage}></Route>
        </Switch>
        </div>
    </Router>
    </Provider>
)

export default Root;