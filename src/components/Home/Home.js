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

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }
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
                    <h1>Collections</h1>
                </div>

                <div className="Collections_container">
                    <Link className='navLink' to="/shop"><div className="Indv_hoodie_container">
                    <img src={ShopCaps} alt="" />
                    </div></Link>
                    <div className="Indv_hoodie_container">
                    <img src={HoodieModel} alt="" />
                    </div>
                    <div className="Indv_hoodie_container">
                    <img src={ShopTees} alt="" />
                    </div>
                </div>
                <div className="Footer_container">
                
                <div className="Left_footer">
                    <h4>Left</h4>
                    </div>
                <div className="Center_footer">
                    <h3>OUR MISSION</h3>
                    <p>Vibe mvmt is dedicated to improving the lives of families affected by the financial and emotional struggles of cancer.</p>

                </div>
                <div className="Right_footer">
                    <h4>Vibe with us</h4>
                    </div>
            
                </div>
                



            </div>
        )
    }
}

export default Home;
