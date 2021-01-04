import React, { Component } from 'react'
import './BannerTwo.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import macIcon from './mac.png'
import Frame1 from './UI1.jpg'
import Frame2 from './UI2.jpg'
import Frame3 from './UI3.jpg'

export class BannerTwo extends Component {
    render() {
        return (
            <div className="banner-two">
                <Container>
                    <Row>
                        <Col className="imageStack" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 7, order: 1}}>
                                <div className="macImageSlider">
                                    <img class="slide1" src={Frame1} alt="Learn"/>
                                    <img class="slide2" src={Frame2} alt="Upskill"/>
                                    <img class="slide3" src={Frame3} alt="Network"/>
                                    <img class="slide4" src={Frame1} alt="Learn"/>
                                </div>
                                <img className="macPNG" src={macIcon} alt="Macbook"/>
                        </Col>
                        <Col className="banner2textCol" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 5, order: 2}}>
                            <p>
                                <span>The next Gen SaaS-based</span>
                                <span>peer to peer student learning,</span>
                                <span>networking and upskilling platform.</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BannerTwo
