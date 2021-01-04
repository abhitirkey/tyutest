import React from 'react'
import './Courses.scss'

import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import PythonLogo from './python-logo.png'
import UXLogo from './ui-ux-logo.png'

function Courses() {
    return (
        <div className="section-content courses">
            <h2 className="courses-header">Courses We Offer</h2>
            <Container>
                <Row>
                    <Col className="courseCol" sm={{span:12}} md={{span: 6}}>
                        <img src={PythonLogo} alt="Python" />
                        <span>Python-Django Development</span>
                        <Link to="/contact-us"><button className="theme-hollow-btn boldText">Become a Developer Now</button></Link>    
                    </Col>
                    <Col className="courseCol" sm={{span:12}} md={{span: 6}}>
                        <img src={UXLogo} alt="UI/UX"/>
                        <span>UI/UX Design</span>
                        <Link to="/contact-us"><button className="theme-hollow-btn boldText">Become a Designer Now</button></Link>    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Courses
