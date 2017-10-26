import React, { Component } from 'react';
import './Checkout.css';
import StripeCheckout from 'react-stripe-checkout';
// import stripe from'./stripeKey';
import axios from 'axios';
import { connect } from 'react-redux';


import Nav from './../Nav/Nav'

class Checkout extends Component {
    render() {
        console.log(this.props.cart)
        // const {price, productdescription, productname} = this.props.cart
        return (
            <div className="Checkout_container" >
                <Nav />
                <div className="Inner_bag_container">
                    <div className="Bag_header" >
                        <p>Shopping Bag</p>

                    </div>
                    <div className="Purchasing_header" >
                        <h4>Product(s)</h4>
                        <h4>Price</h4>
                        <h4>Description</h4>
                        <h4>Total(s)</h4>
                    </div>
                    <div className="Purchasing_container" >
                        {this.props.cart.map((item, i) => {
                            return <div className="indv_purchase" key = {i} >
                            <p className="product_purchase">{item.productname}</p>
                            <p className="price_purchase">{item.price}</p>
                            <p className="desc_purchase">{item.productdescription}</p>
                            
                                    </div>

                        })}
                    </div>
                    </div>
                    <div className="Checkout_btn_container">
                    <StripeCheckout className="pay_button"
                        token={this.onToken}
                        stripeKey={ process.env.REACT_APP_PUBLISHABLE_KEY }
                        amount={1000}
                        />

                        </div>


                </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        cart: state.cart
    })
}

export default connect(mapStateToProps)(Checkout);