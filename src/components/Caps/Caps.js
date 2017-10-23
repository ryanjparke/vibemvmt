import React, { Component } from 'react';
import './Caps.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

import GreyHat from './../../assets/GreyHat.jpg';
import CreamHat from './../../assets/CreamHat.jpg';
import NavyGreenHat from './../../assets/NavyGreenHat.jpg';


class Caps extends Component {

    render() {
        return (
            <div className="Caps_shop_container">
                <Nav />
                <div className="Caps_header">
                    <h2>Join the tribe, spread your vibe</h2>
                </div>
                <div className="Caps_items_container">
                    <div className="indv_cap">
                    <img src={GreyHat} alt="" />
                    </div>
                    <div className="indv_cap">
                    <img src={CreamHat} alt="" />
                    </div>
                    <div className="indv_green_cap">
                    <img src={NavyGreenHat} alt="" />
                    </div>
                    
                </div>
                

            </div>
        )

    }
}

export default Caps;