import React, { Component } from 'react';
import './Checkout.css';
import StripeCheckout from 'react-stripe-checkout';
// import stripe from'./stripeKey';
import axios from 'axios';


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
                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                        <p>item</p>
                    </div>
                    </div>
                    <StripeCheckout className="pay_button"
                        token={this.onToken}
                        stripeKey={ process.env.REACT_APP_PUBLISHABLE_KEY }
                        amount={1000}
                        />


                </div>
        )
    }
}

export default Checkout;