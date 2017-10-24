import React, { Component } from 'react';
import './Cap.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../ducks/users';
import Nav from './../../Nav/Nav';
import GreyHat from './../../../assets/GreyHat.jpg';


class Cap extends Component {
    render() {
        return (
            <div className="Grey_detail_container">
                <Nav />
                <div className="Grey_capContainer">
                    <img src={GreyHat} alt="" />
                </div>
                <div className="Grey_capDesc">
                    <h3>Grey cap</h3>
                    <h4> $20.00</h4>
                    <button className="addToCart" onClick={()=>{this.props.addToCart()} }>Add to cart</button>
                    {/* <div className="addToCart" onClick={() => this.addToCart(product)}>Add to cart</div> */}

                    </div>
            </div>
        )
    }
}

export default Cap;

