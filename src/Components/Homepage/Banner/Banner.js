import React, { Component } from 'react'
import './Banner.scss'

import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import Frame1 from './Learn.png'
import Frame2 from './Upskill.png'
import Frame3 from './Network.png'

export class HomeBanner extends Component {
    render() {
        return (
            <div className="homepage-banner">
                <Container>
                    <Row>
                        <Col className="bannerCol text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 5, order: 1}} lg={{ span: 5, order: 1}}>
                            <div className="flex-spacer-mobile"></div>
                            <div className="flex-spacer"></div>
                            <h2 className="changing">Changing the way students</h2>
                            <div class="textSlideContainer">
                                <div className="textSlider">
                                    <h2 className="learn">Learn</h2>
                                    <h2 className="upskill">Upskill</h2>
                                    <h2 className="network">Network</h2>
                                    <h2 className="learn2">Learn</h2>
                                </div>
                            </div>
                            <div className="flex-spacer"></div>
                            <span className="boldText reforming-education-network">Reforming. Education. Network.</span>
                            <Link to='/contact-us' target="_blank"><button className="theme-btn">Request a Demo</button></Link>                            
                        </Col>
                        <Col className="bannerCol image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 7, order: 1}} lg={{ span: 7, order: 1}}>
                            {/* <div className="imageSlider"> */}
                                <img class="slide1" src={Frame1} alt="Learn"/>
                                <img class="slide2" src={Frame2} alt="Upskill"/>
                                <img class="slide3" src={Frame3} alt="Network"/>
                                <img class="slide4" src={Frame1} alt="Learn"/>
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeBanner
