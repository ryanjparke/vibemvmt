import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop.js';
import About from './components/About/About';
import Movements from './components/Movements/Movements.js';
import Checkout from './components/Checkout/Checkout';


import router from './router';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div >

        <Route component = { Home } exact path = '/' />
        <Route component = { Shop } exact path = '/shop' />
        <Route component = { About } exact path = '/about' />
        <Route component = { Movements } exact path = '/movements' />
        <Route component = { Checkout } exact path = '/checkout' />
        {/* <Route component = { Home } exact path = '/' /> */}
        {/* <Route component = { Home } exact path = '/' /> */}









        {/* <Nav /> */}
        {/* <Home /> */}
        {/* <Shop /> */}
        {/* <About /> */}
        {/* <Movements /> */}
        {/* <Checkout /> */}
        {/* { router } */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
