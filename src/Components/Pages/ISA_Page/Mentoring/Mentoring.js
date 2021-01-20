import React from 'react'
import './Mentoring.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import Preetham from './Preetham.jpeg'
import Sohil from './Sohil.jpg'
import Athaulla from './Athaulla.jpg'
import LinkedIn from './linkedin.png'

// This component is for the 1-0-1 Mentoring section

function Mentoring() {
    return (
        <div className="section-content mentoring">
            <h2><strong>1-0-1 Mentoring</strong></h2>
            <span style={{fontSize: '1.5rem', textAlign: 'center'}}>Flexible Curriculum, Personalized Teaching & Industry Focused Learning.</span>
            <Container>
                <Row>
                    <Col className="mentorCol" sm={{span: 12}} xs={{ span: 12}} md={{ span: 4}}>
                        <a href="https://www.linkedin.com/in/preethammendon/" target="_blank" rel="noreferrer"><img src={Preetham} alt="Preetham"/><img className="linkedinPNG" src={LinkedIn} alt="linkedin"/></a>
                        <span><strong>Preetham Mendon</strong></span>
                        {/* In case this needs to be added - <span>Lorem Ipsum</span> */}
                    </Col>
                    <Col className="mentorCol" sm={{span: 12}} xs={{ span: 12}} md={{ span: 4}}>
                        <a href="https://linkedin.com/in/athaulla-ghouse-90587475" target="_blank" rel="noreferrer"><img src={Athaulla} alt="Athaulla"/><img className="linkedinPNG" src={LinkedIn} alt="linkedin"/></a>
                        <span><strong>Athaulla Ghouse</strong></span>
                        {/* <span>Lorem Ipsum</span> */}
                    </Col>
                    <Col className="mentorCol" sm={{span: 12}} xs={{ span: 12}} md={{ span: 4}}>
                        <a href="https://www.linkedin.com/in/sohil-kapadia-81766323/" target="_blank" rel="noreferrer"><img src={Sohil} alt="Sohil"/><img className="linkedinPNG" src={LinkedIn} alt="linkedin"/></a>
                        <span><strong>Sohil Kapadia</strong></span>
                        {/* <span>Lorem Ipsum</span> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mentoring
