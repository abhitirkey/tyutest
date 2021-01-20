import React, { Component } from 'react'
import './Banner.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import EnrollmentForm from '../../../Modals/EnrollmentForm/EnrollmentForm'

import banner_gif from './banner.gif'

import {FaRupeeSign} from 'react-icons/fa'

// This class based Component represents the topmost section on the ISA page (i.e: Do you want to get reskilled section)

class Banner extends Component {

    constructor(){
        super();
        // Define state variable in order to regulate when the Enrollment Form needs to be displayed
        this.state = {
            showEnrollmentForm : false
        };
    }

    showEnrollmentForm = async () => {
        await this.setState({
            showEnrollmentForm: true
        })
    }

    hideEnrollmentForm = async () => {
        await this.setState({
            showEnrollmentForm: false
        });
    }
 
    render(){

        return (
            <div className="banner">
                <Container>
                    <Row>
                        <Col className="bannerCol text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 6, order: 1}}>
                            <div style={{flex: 3}}></div>
                            <h2 className="titleDesktop">Do you want to get</h2>
                            <h2 className="titleDesktop">Reskilled?</h2>
                            <h2 className="titleMobile">Do you want to get Reskilled?</h2>
                            <span className="pay">Pay <strong><FaRupeeSign/>0</strong> till you get placed</span>
                            <div className="flex-spacer"></div>
                            <span className="boldText">We at tyutee help you reshape and catapult your career.</span>
                            <button className="theme-btn" onClick={this.showEnrollmentForm}>Enroll Now</button>
                        </Col>
                        <Col className="bannerCol image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 6, order: 1}}>
                            <img src={banner_gif} alt="BannerGIF"/>
                        </Col>
                    </Row>
                </Container>
                <div className="marquee"><span>Python Django developer batch starts 18<span class="supertext">th</span> Jan, '21 - Apply Now!</span></div>
                <EnrollmentForm showEnrollmentForm={this.state.showEnrollmentForm} hideForm={this.hideEnrollmentForm}/>
            </div>
        )
    }
    
}

export default Banner