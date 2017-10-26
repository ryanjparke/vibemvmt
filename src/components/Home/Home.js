import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ImgOne from '../../assets/ImgOne.jpg';
import ImgTwo from '../../assets/ImgTwo.jpg';
import ImgThree from '../../assets/ImgThree.jpg';
import HoodieModel from '../../assets/HoodieModel.jpg';
import ShopTees from '../../assets/ShopTees.jpg';
import ShopCaps from '../../assets/ShopCaps.jpg';
import {getProducts} from './../../ducks/reducer';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
    }

    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        return (
            <div className="Home_container">
                <Nav />
                <div className="Carousel_container">
                    <Carousel>
                        <Carousel.Item>
                            <img width={1440} height={600} alt="900x500" src={ImgOne} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1440} height={600} alt="900x500" src={ImgTwo} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Write something here</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1440} height={600} alt="900x500" src={ImgThree} />
                            <Carousel.Caption>
                                <h3>Third slide</h3>
                                <p>Write something here</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="Collections_header">
                    <p>Collections</p>
                </div>

                <div className="Collections_container">
                    <Link className='navLink' to="/shop"><div className="Indv_hoodie_container">
                    <img src={ShopCaps} alt="" />
                    </div></Link>
                    <Link className='navLink' to="/shop"><div className="Indv_hoodie_container">
                    <img src={HoodieModel} alt="" />
                    </div></Link>
                    <Link className='navLink' to="/shop"><div className="Indv_hoodie_container">
                    <img src={ShopTees} alt="" />
                    </div></Link>
                </div>
                <div className="Footer_container">
                
                <div className="Left_footer">
                    <p>Left</p>
                    <div className="left_toe">
                    <p>Some text</p>
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
                    </div>
                    </div>
            
                </div>
                



            </div>
        )
    }
}

// export default Home;


export default connect(null, { getProducts })(Home);
