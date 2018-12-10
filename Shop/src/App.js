import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar></Navbar>
      <BrowserRouter>
      <App></App>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
