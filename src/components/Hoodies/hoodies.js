import React, { Component } from 'react';
import './Hoodies.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

import CharcoalHoodie from './../../assets/CharcoalHoodie.jpg';
import NavyHoodie from './../../assets/NavyHoodie.jpg';
// import NavyGreenHat from './../../assets/NavyGreenHat.jpg';


class Hoodies extends Component {

    render() {
        return (
            <div className="Hoodies_shop_container">
                <Nav />
                <div className="Hoodies_header">
                    <h2>Join the tribe, spread your vibe</h2>
                </div>
                <div className="Hoodies_items_container">
                    <div className="indv_hoodie">
                        <Link className='navLinkShop' to="/checkout"> <img src={CharcoalHoodie} alt="" /></Link>
                    </div>
                    <div className="indv_hoodie">
                        <Link className='navLinkShop' to="/checkout"> <img src={NavyHoodie} alt="" /></Link>
                    </div>
                    <div className="indv_hoodie">
                        <Link className='navLinkShop' to="/checkout"> <img src={NavyHoodie} alt="" /></Link>
                    </div>

                </div>


            </div>
        )

    }
}

export default Hoodies;

//freaking work you fool