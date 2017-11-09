import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

// import ShoppingBasket from 'react-icons/lib/md/shopping-basket';

class Footer extends Component {
    render(){
        return(
        <div className="Footer_container">

                    <div className="Left_footer">
                        <p>Give back</p>
                        <div className="left_toe">
                            <p>Know someone in need?</p>
                            <p>Let us contact you!</p>
                        </div>
                        <div className="giveback_inputContainer">
                        <form classname="giveback_input">
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <label>
                                Email:
                                    <input type="text" email="email" />
                                    </label>
                                <input type="submit" value="Submit" />
                            </form>
                            </div>
                        
                    </div>
                    <div className="Center_footer">
                        <p>OUR MISSION</p>
                        <p>_____________________</p>
                        <div className="mission_container">
                            <p>Vibe mvmt is dedicated to improving the lives of families affected by the financial and emotional struggles of cancer. Through sales and generous donations, we support families in which the major income source is battling cancer.  Thanks to our awesome supporters and customers, Vibe Mvmt has provided service and funds to multiple families since June 1, 2016</p>
                        </div>

                    </div>
                    <div className="Right_footer">
                        <div className="right_toe">
                            <p>Vibe with us</p>
                            <div className="social_container">
                            <a href="https://www.instagram.com/vibemvmt/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/VibeMvmt/?ref=bookmarks">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href="">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Footer;