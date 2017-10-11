import React, { Component } from 'react';
import './Shop.css';
import Nav from '../Nav/Nav.js';


class Shop extends Component {
    
    render() {
        return( 
            <div className="Shop_contianer">
                <Nav />
                <div className=" " >
                    <h2>Check out our cool stuff</h2>
                </div>




            </div>
        )
    }
}

export default Shop;