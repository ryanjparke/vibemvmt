import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Connect } from 'react-redux';
import VibeMvmtLogo from './../../assets/VibeMvmtLogo.png';

import './Nav.css';

import ShoppingBasket from 'react-icons/lib/md/shopping-basket';

function Nav() {
    return (
        <div className="Nav_container">

            <div className="Logo_container" >
            <Link className='navLink' to="/">
                <img src={VibeMvmtLogo} alt="" />
                </Link>
            </div>

            <div id="Nav_linksContainer">
                <ul className="navbar_links">
                <Link className='navLink' to="/shop"><li>SHOP</li></Link>
                <Link className='navLink' to="/about"><li>ABOUT</li></Link>
                <Link className='navLink' to="/movements"><li>MOVEMENTS</li></Link>
                </ul>


            </div>
            <div className="Login_container" >
            <a className="Login_button"href={process.env.REACT_APP_LOGIN }><h5>Login / Register</h5></a>
            </div>

            <div id="Checkout__Container">
            <Link className='navLink' to="/checkout"><ShoppingBasket id="Nav__ShoppingBasket" /></Link>

            </div>


        </div>

    )

}

export default Nav;
