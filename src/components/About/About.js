import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav/Nav.js';
import Founder from './../../assets/Founder.jpg';
import CFO from './../../assets/CFO.jpg';


class About extends Component {

    render() {
        return (
            <div className="About_container">
                <Nav />
                <div className="Story_header">
                    <p>Our Story</p>
                </div>
                <div className="Story_container">
                    <p>Vibe MVMT was founded upon four basic principles: Fun, Health, Happiness and Safety.  These four principles were instilled into the companies founders Ryan Parke, Deborah Parke and Kevin Edmondson by Troy Parke.  Troy, a father of four, fought courageously against Multiple Myeloma Cancer and inspired many through his positive attitude, or vibe, toward his unfortunate situation.  Despite his fight, Troy was consumed by this cancer in November 2014 and has left a positive vibe that is spreading quickly throughout the world.</p>
                    <p>In honor of his example, Vibe MVMT creates a method by which other courageous fathers, brothers, mothers and many other fighters can receive help and support through donations and service.</p>
                    <p>Vibe MVMT has set the goal to donate one million dollars toward Multiple Myeloma cancer research, fathers, and individuals battling cancer around the world. Fifty percent of profit and donations are given to Vibe MVMT’s research and nonprofit partners that are working tirelessly to find a cure.</p>
                    <p>To date, we have donated over 1,000 dollars toward families in which fathers are battling Multiple Myeloma.  We seek to expand and support more individuals and families.  Unite with us in our mission to spread Fun, Health, Happiness and Safety by joining the Vibe Tribe.</p>
                </div>
                <div className="Tribe_header">
                    <p>Our Tribe</p>
                </div>
                <div className="Tribe_container">
                    <div className="Tribe_member">
                    <img src={Founder} alt="" />
                    </div>
                    <div className="Tribe_member">
                    <img src={Founder} alt="" />
                    </div>
                    <div className="Tribe_member">
                    <img src={CFO} alt="" />
                    </div>
                </div>
            </div>

        )
    }

}

export default About;



