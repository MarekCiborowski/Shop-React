import React, { Component } from 'react';

import './App.css';

import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation';
class App extends Component {

  state ={
    cartProducts:[],
    orders:[]
  }
  render() {
    return (
      <React.Fragment>
      <Navigation></Navigation>
      <BrowserRouter>
      <App></App>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
