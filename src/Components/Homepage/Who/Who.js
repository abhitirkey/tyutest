import React from 'react'
import './Who.scss'

import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CoursesGIF from './Courses.gif'
import JobGIF from './Job.gif'
import MentorGIF from './Mentors.gif'

function Who() {
    return (
        <div className="who">
            <h2><strong>Who is "<span>tyutee</span>" for?</strong></h2>
            <h4>Students looking to navigate through their learning curve.</h4>
            <Container>
                <Row className="firstRow">
                    <Col className="WhoCol" xs={{span:12}} sm={{span:12}} md={{span:6}}>
                        <img src={MentorGIF} alt="Mentor"/>
                    </Col>
                    <Col className="WhoCol" xs ={{span:12}}sm={{span:12}} md={{span:6}}>
                        <span>Find your classmate and tutor</span>
                        <a href="https://login.tyutee.com" target="_blank" rel="noreferrer" className="theme-hollow-btn grayed grayLink">Click Here</a>
                    </Col>
                </Row>
                <Row className="secondRow">
                    <Col className="WhoCol" xs={{span:12, order:2}} sm={{span:12, order:2}} md={{span:6, order: 1}} lg={{span:6, order: 1}}>
                        <span style={{marginTop: '5vw'}}>Find your upskilling course</span>
                        <Link to="/isa" target="_blank"><button className="theme-hollow-btn">Click Here</button></Link>
                    </Col>
                    <Col className="WhoCol" xs={{span:12, order:1}} sm={{span:12, order: 1}} md={{span:6, order: 2}} lg={{span:6, order: 2}}>
                        <img src={CoursesGIF} alt="Courses"/>
                    </Col>
                </Row>
                <Row className="thirdRow">
                    <Col className="WhoCol" xs={{span:12}} sm={{span:12}} md={{span:6}}>
                        <img className="lastImage" src={JobGIF} alt="Job"/>
                    </Col>
                    <Col className="WhoCol" xs={{span:12}} sm={{span:12}} md={{span:6}}>
                        <span>Find your internship and job</span>
                        <a href="https://login.tyutee.com" target="_blank" rel="noreferrer" className="theme-hollow-btn grayed grayLink">Click Here</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Who
