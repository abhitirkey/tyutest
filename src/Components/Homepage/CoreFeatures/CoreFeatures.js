import React from 'react'
import './CoreFeatures.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FeaturesArray from './FeaturesArray'

function CoreFeatures() {
    return (
       <div className="section-content core-features">
           <h2 className="section-title"><strong>Core Features</strong></h2>
                <Container>
                    <Row className="featureRow">
                     
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[0].imageSRC} alt={FeaturesArray[0].title}/>
                            <span className="boldText">{FeaturesArray[0].title}</span>
                        </Col>
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[1].imageSRC} alt={FeaturesArray[1].title}/>
                            <span className="boldText">{FeaturesArray[1].title}</span>
                        </Col>
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[2].imageSRC} alt={FeaturesArray[2].title}/>
                            <span className="boldText">{FeaturesArray[2].title}</span>
                        </Col>

                    </Row>
                    <Row>
                     
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[3].imageSRC} alt={FeaturesArray[3].title}/>
                            <span className="boldText">{FeaturesArray[3].title}</span>
                        </Col>
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[4].imageSRC} alt={FeaturesArray[4].title}/>
                            <span className="boldText">{FeaturesArray[4].title}</span>
                        </Col>
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}}>
                            <img src={FeaturesArray[5].imageSRC} alt={FeaturesArray[5].title}/>
                            <span className="boldText">{FeaturesArray[5].title}</span>
                        </Col>

                    </Row>
                    <Row>
                     
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}} md={{ span: 4, offset: 2}}>
                            <img src={FeaturesArray[6].imageSRC} alt={FeaturesArray[6].title}/>
                            <span className="boldText">{FeaturesArray[6].title}</span>
                        </Col>
                        <Col className="featureCol" xs={{span: 12}} sm={{span: 12}} md={{span: 4}} md={{ span: 4}}>
                            <img src={FeaturesArray[7].imageSRC} alt={FeaturesArray[7].title}/>
                            <span className="boldText">{FeaturesArray[7].title}</span>
                        </Col>

                    </Row>
                </Container>
       </div>
    )
}

export default CoreFeatures
