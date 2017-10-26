import React, { Component } from 'react';
import './Cap.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../ducks/reducer';
import Nav from './../../Nav/Nav';
import GreyHat from './../../../assets/GreyHat.jpg';
import { connect } from 'react-redux';



class Cap extends Component {
    render() {
        console.log(this.props.products)
        const { products }=this.props
        return (
            <div className="Grey_detail_container">
                <Nav />
                <div className="Grey_capContainer">
                    <img src={GreyHat} alt="" />
                </div>
                <div className="Grey_capDesc">
                    <h3>Grey cap</h3>
                    <h4> $20.00</h4>
                    <button className="addToCart" onClick={()=>{this.props.addToCart(products[0])} }>Add to cart</button>
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

export default connect(mapStateToProps, { addToCart })(Cap) ;

