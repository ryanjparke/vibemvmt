import React, { Component } from 'react';
import './Movements.css';
import Nav from '../Nav/Nav.js';

import GroundZero from './../../assets/Ground-Zero.mp4';


class Movements extends Component {
    
    render() {
        return( 
            <div className="Movements_contianer">
                <Nav />
                <div className="Video_container" >
                {/* <h1 className="sample">Hello There!</h1> */}
                    <video loop autoPlay>
                        <source src={GroundZero} type="video/mp4" />
                    </video>
                        

                </div>




            </div>
        )
    }
}

export default Movements;