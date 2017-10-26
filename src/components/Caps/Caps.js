import React, { Component } from 'react';
import './Caps.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

import GreyHat from './../../assets/GreyHat.jpg';
import CreamHat from './../../assets/CreamHat.jpg';
import NavyGreenHat from './../../assets/NavyGreenHat.jpg';
import CharcoalHoodie from './../../assets/CharcoalHoodie.jpg';
import NavyHoodie from './../../assets/NavyHoodie.jpg';
import CloudGreyTee from './../../assets/CloudGreyTee.jpg';
import SteelBlueTee from './../../assets/SteelBlueTee.jpg';
import MidnightBlackTee from './../../assets/MidnightBlackTee.jpg';
import CardinalTee from './../../assets/CardinalTee.jpg';


class Caps extends Component {

    render() {
        return (
            <div className="Caps_shop_container">
                <Nav />
                <div className="Items_header">
                    <p>Join the tribe, spread your vibe</p>
                </div>
                <div className="All_items_container">
                    <div className="caps_items_container">
                        <div className="indv_cap">
                            <Link className='navLinkShop' to="/cap"> <img src={GreyHat} alt="" /></Link>
                        </div>
                        <div className="indv_cap">
                            <Link className='navLinkShop' to="/cap"> <img src={CreamHat} alt="" /></Link>
                        </div>
                        <div className="indv_green_cap">
                            <Link className='navLinkShop' to="/cap"> <img src={NavyGreenHat} alt="" /></Link>
                        </div>
                    </div>
                        <div className="hoodies_items_container">
                            <div className="indv_cap">
                                <Link className='navLinkShop' to="/hoodie"> <img src={CharcoalHoodie} alt="" /></Link>
                            </div>
                            <div className="indv_cap">
                                <Link className='navLinkShop' to="/cap"> <img src={NavyHoodie} alt="" /></Link>
                            </div>
                        </div>

                        <div className="caps_items_container">
                            <div className="tees_items_container">
                                <div className="indv_cap">
                                    <Link className='navLinkShop' to="/tee"> <img src={MidnightBlackTee} alt="" /></Link>
                                </div>
                                <div className="indv_cap">
                                    <Link className='navLinkShop' to="/cap"> <img src={SteelBlueTee} alt="" /></Link>
                                </div>
                                <div className="indv_cap">
                                    <Link className='navLinkShop' to="/cap"> <img src={CloudGreyTee} alt="" /></Link>
                                </div>
                                <div className="indv_cap">
                                    <Link className='navLinkShop' to="/cap"> <img src={CardinalTee} alt="" /></Link>
                                </div>

                            </div>

                        </div>


                </div>



            </div>
        )

    }
}

export default Caps;