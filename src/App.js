import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

import router from './router';


class App extends Component {
  render() {
    return (
      <div >
        {/* <Nav /> */}
        <Home />
        {/* { router } */}
      </div>
    );
  }
}

export default App;
