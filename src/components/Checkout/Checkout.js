import React, { Component } from 'react';
import './Checkout.css';

import Nav from './../Nav/Nav'

class Checkout extends Component {
    render() {
        return (
            <div className="Checkout_container" >
                <Nav />
                <div className="Inner_bag_container">
                    <div className="Bag_header" >
                        <h3>Shopping Bag</h3>

                    </div>
                    <div className="Purchasing_header" >
                        <h4>Product(s)</h4>
                        <h4>QTY</h4>
                        <h4>Price</h4>
                        <h4>Total(s)</h4>
                    </div>
                    <div className="Purchasing_container" >
                        <p>Item to be purchased</p>
                    </div>
                    <div className="Checkout_container">

                    </div>
                    </div>


                </div>
        )
    }
}

export default Checkout;