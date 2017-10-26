import React, { Component } from 'react';
import './Tee.css'
import { Link } from 'react-router-dom';
import { addToCart } from '../../../ducks/reducer';
import Nav from './../../Nav/Nav';
import MidnightBlackTee from './../../../assets/MidnightBlackTee.jpg';
import { connect } from 'react-redux';



class Tee extends Component {
    render() {
        console.log(this.props.products)
        const { products }=this.props
        return (
            <div className="Cloudtee_detail_container">
                <Nav />
                <div className="Cloud_teeContainer">
                    <img src={MidnightBlackTee} alt="" />
                </div>
                <div className="Cloud_teeDesc">
                    <h3>Charcoal Hoodie</h3>
                    <h4> $40.00</h4>
                    <button className="addToCart" onClick={()=>{this.props.addToCart(products[7])} }>Add to cart</button>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({
        products: state.products
    })
}

export default connect(mapStateToProps, { addToCart })(Tee) ;