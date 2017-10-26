import React, { Component } from 'react';
import './Hoodie.css'
import { Link } from 'react-router-dom';
import { addToCart } from '../../../ducks/reducer';
import Nav from './../../Nav/Nav';
import CharcoalHoodie from './../../../assets/CharcoalHoodie.jpg';
import { connect } from 'react-redux';



class Hoodie extends Component {
    render() {
        console.log(this.props.products)
        const { products } = this.props
        return (
            <div className="Charcoal_detail_container">
                <Nav />
                <div className="Charcoal_hoodieContainer">
                    <img src={CharcoalHoodie} alt="" />
                </div>
                <div className="Charcoal_hoodieDesc">
                    <h3>Charcoal Hoodie</h3>
                    <h4> $40.00</h4>
                    <button className="addToCart" onClick={() => { this.props.addToCart(products[3]) }}>Add to cart</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        products: state.products
    })
}

export default connect(mapStateToProps, { addToCart })(Hoodie);
