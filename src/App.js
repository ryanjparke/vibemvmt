import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';

import router from './router';


class App extends Component {
  render() {
    return (
      <div >
        <Nav />
        {/* <Home /> */}
        {/* <Shop !!/> */}
        {/* <About /> */}
        {/* <Movements !! */}
        {/* <Checkout /> */}
        {/* { router } */}
      </div>
    );
  }
}

export default App;
