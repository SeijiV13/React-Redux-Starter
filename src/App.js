import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App container-fluid">
           <Routes store={this.props.store}></Routes>
         </div>
      </div>
    );
  }
}

export default App;
