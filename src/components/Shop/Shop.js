import React, { Component } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import ShopCaps from './../../assets/ShopCaps.jpg';
import HoodieModel from './../../assets/HoodieModel.jpg';
import ShopTees from './../../assets/ShopTees.jpg';


class Shop extends Component {

    render() {
        return (
            <div className="Shop_contianer">
                <Nav />
                <div className="quote_header" >
                    <h4>Buy a product, help a family</h4>
                    
                </div>
                <div className="Products_header_nav" >
                    <ul className="products_links">
                    <Link className='navLink' to="/caps"><li>CAPS</li></Link>
                    <li> | </li>
                    <Link className='navLink' to="/checkout"><li>HOODIES</li></Link>
                    <li> | </li>
                    <Link className='navLink' to="/checkout"><li>TEES</li></Link>
                    <li> | </li>
                    <Link className='navLink' to="/checkout"><li>Halloween Edition</li></Link>
                    </ul>
                    </div>
                <div className="Shop_Caps_container">
                    <img src={ShopCaps} alt="" />
                    <Link className ='navLinkShop' to="/caps"><div className="Shop_Caps_text">Shop Caps</div></Link>
                    </div>
                <div className="Shop_Hoodies_container">
                    <img src={HoodieModel} alt="" />
                    <Link className='navLinkShop' to="/checkout"><div className="Shop_Hoodies_text">Shop Hoodies</div></Link>
                    </div>
                <div className="Shop_Tees_container">
                    <img src={ShopTees} alt="" />
                    <Link className='navLinkShop' to="/checkout"><div className="Shop_Tees_text">Shop Tees</div></Link>
                    </div>

                <div className="Shop_footer">
                <h3>50% of all profit given</h3>
                    </div>
                
            </div>
        )
    }
}

export default Shop;