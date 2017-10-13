import React, { Component } from 'react';
import './Shop.css';
import Nav from '../Nav/Nav.js';


class Shop extends Component {

    render() {
        return (
            <div className="Shop_contianer">
                <Nav />
                <div className="quote_header" >
                    
                </div>
                <div className="Products_header_nav" >
                    <h4>CAPS</h4>
                    <h4>HOODIES</h4>
                    <h4>TEES</h4>
                    </div>
                <div className="Products_container">


                    </div>
                
            </div>
        )
    }
}

export default Shop;