import React, { Component } from 'react';
import Router from './Router'
import './App.css';
import Navigation from './Navigation';

class App extends Component {

  state ={
    cartProducts:[],
    orders:[]
  }
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Router/>
      </React.Fragment>
    );
  }
}

export default App;
