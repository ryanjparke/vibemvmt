import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Connect } from 'react-redux';
import VibeMvmtLogo from './../../assets/VibeMvmtLogo.png';

import './Nav.css';

// import ShoppingBasket from 'react-icons/lib/md/shopping-basket';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideVisible: false,
            // iconVisible: true

        }
        this.openSlide = this.openSlide.bind(this);
    }

    openSlide() {
        this.setState({
            slideVisible: !this.state.slideVisible,
            // iconVisible: !this.state.iconVisible
        })
    }


    render() {
    return (
        
        <div className="Nav_container">

            <div className="Logo_container" >
            <Link className='navLink' to="/">
                <img src={VibeMvmtLogo} alt="" />
                </Link>
            </div> 

            <div id="Nav_linksContainer">
                <ul className="navbar_links">
                <Link className='navLink' to="/shop"><li>SHOP</li></Link>
                <Link className='navLink' to="/about"><li>ABOUT</li></Link>
                <Link className='navLink' to="/movements"><li>MOVEMENTS</li></Link>
                </ul>


            </div>
            <div className="Login_container" >
            <a className="Login_button"href={process.env.REACT_APP_LOGIN }><h5>Login / Register</h5></a>
            </div>

            <div className={this.state.slideVisible ? 'slide_open' : 'slide'}>
            

            <div className="Basket_container">
            {/* <ShoppingBasket onClick={ this.openSlide } /> */}
            <Link className="checkoutLink"to="/checkout"><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
            </div>


            


        </div>

        </div>

    );

}
}

export default Nav;
