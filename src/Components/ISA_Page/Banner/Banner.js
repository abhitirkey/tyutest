import React from 'react'
import './Banner.scss'

import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import banner_gif from './banner.gif'

import {FaRupeeSign} from 'react-icons/fa'

function Banner() {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col className="bannerCol text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 6, order: 1}}>
                        <div style={{flex: 3}}></div>
                        <h2 className="titleDesktop">Do you want to get</h2>
                        <h2 className="titleDesktop">Upskilled?</h2>
                        <h2 className="titleMobile">Do you want to get Upskilled?</h2>
                        <span className="pay">Pay <strong><FaRupeeSign/>0</strong> till you get placed</span>
                        <div className="flex-spacer"></div>
                        <span className="boldText">We at tyutee help you reshape and catapult your career.</span>
                        <Link to="/contact-us"><button className="theme-btn">Enroll Now</button></Link>
                    </Col>
                    <Col className="bannerCol image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 6, order: 1}}>
                        <img src={banner_gif} alt="BannerGIF"/>
                    </Col>
                </Row>
            </Container>
            <div className="marquee"><span>Python Django developer batch starts 18<span class="supertext">th</span> Jan, '21 - Apply Now!</span></div>
        </div>
    )
}

export default Banner