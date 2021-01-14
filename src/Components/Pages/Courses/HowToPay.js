import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HowToPayPNG from './Images/Python/HowToPay.png'

import {FaRupeeSign} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function HowToPay() {
    return (
        <div className="section-content pinkBackground HowToPay">
            <h2 className="boldText center">How To Pay</h2>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img src={HowToPayPNG} alt="How to Pay" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <p style={{fontSize: '1.5em'}}>Pay <strong><span className="RupeeSign"><FaRupeeSign/></span> 0</strong> till you get placed</p>
                        <p>Pay only after you get placed with a minimum CTC of 5 lac LPA via ISA module.</p>
                        <Link to="/fees-and-isa"><button className="theme-btn">Learn More about ISA</button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowToPay
