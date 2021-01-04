import React from 'react'
import './Catapult.scss'

import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import catapult_img from './Catapult.png'

function Catapult () {
    return (
        <div className="catapult">
            <Container>
                <Row>
                    <Col className="col text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 8, order: 1}}>

                        <h2>Catapult your career with tyutee now!</h2>
                        <span className="boldText">Get your career into warp speed</span>
                        <Link to="/contact-us"><button className="theme-btn">Begin your Journey</button></Link>
                    </Col>
                    <Col className="col image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 4, order: 1}}>
                        <img src={catapult_img} alt="Catapult"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Catapult