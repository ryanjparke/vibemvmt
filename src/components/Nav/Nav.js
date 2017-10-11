import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Connect } from 'react-redux';
// import VibeMvmtLogo from './../../VibeMvmtLogo.jpg';

import './Nav.css';

import ShoppingBasket from 'react-icons/lib/md/shopping-basket';

function Nav() {
    return (
        <div className="Nav_container">

            <div className="Logo_container" >
                {/* <img src={VibeMvmtLogo} alt="" /> */}
                <h3>logo</h3>
            </div>

            <div id="Nav_linksContainer">
                <ul className="navbar_links">
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>MOVEMENTS</li>
                </ul>


            </div>
            <button className="login_button">Login / Register</button>

            <div id="Checkout__Container">
                <ShoppingBasket id="Nav__ShoppingBasket" />

            </div>


        </div>


    )

}

export default Nav;
