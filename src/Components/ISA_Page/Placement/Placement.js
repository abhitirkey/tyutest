import React from 'react'
import './Placement.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import placement_gif from './Placement.png'

import {FaRupeeSign} from 'react-icons/fa'

function Placement() {
    return (
        <div className="section-content placement">
            <Container>
                <Row>
                    <Col className="placementCol image" sm={{span: 12}} xs={{ span: 12}} md={{ span: 6}}>
                        <img src={placement_gif} alt="placementGIF"/>
                    </Col>
                    <Col className="placementCol" sm={{span: 12}} xs={{ span: 12}} md={{ span: 6}}>
                        <h2>Pay <strong><FaRupeeSign/>0</strong> till you get placed</h2>
                        <div className="bullet-list">
                            <div className="bullet-point">
                                <div className="box"></div>
                                <span>Zero upfront fees</span>
                            </div>
                            <div className="bullet-point">
                                <div className="box"></div>
                                <span>Pay only after you get a job of 5+ LPA</span>
                            </div>
                            <div className="bullet-point">
                                <div className="box"></div>
                                <span>Hands on Learning with Industry Capstone Projects making you Industry ready.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Placement
