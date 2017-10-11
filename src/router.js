import React from 'react';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Movements from './components/Movements/Movements';
import Nav from './components/Nav/Nav';
import Shop from './components/Shop/Shop';

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default (

    <Router>
        <div>
            <Route component={Home} exact path='/' />
            <Route component={Shop} exact path='/shop'/>
            <Route component={About} exact path='/home' />
            <Route component={Movements} exact path='/' />
            <Route component={Login} exact path='/' />
            <Route component={Checkout} exact path='/' />
            <Route component={Cart} exact path='/' />

        </div>
    </Router>

)


