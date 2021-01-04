import React from 'react'
import './Academy.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import academic from './Academy101.gif'
import {FaRupeeSign} from 'react-icons/fa'
import {ImInfinite} from 'react-icons/im'

function Academy() {
    return (
            <div className="section-content section-academy">
                <h2 className="academy-title">Academy 101</h2>
                <Container className="academy-container">
                    <Row>
                        <Col className="statsGrid" sm={{span: 12, order: 2}} xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>

                                    <div className="statsCol">
                                        <h1><FaRupeeSign className="rupee101"/>0</h1>
                                        <span>Fees till Placement</span>
                                    </div>
                                    <div className="statsCol">
                                        <h1>25</h1>
                                        <span>Batch Size</span>
                                    </div>
                                    <div className="statsCol">
                                        <h1>10+</h1>
                                        <span>Mock Interview Sessions</span>
                                    </div>

                                    <div className="statsCol">
                                        <h1>5+</h1>
                                        <span>Industry Capstone Project</span>
                                    </div>
                                    <div className="statsCol">
                                        <h1><ImInfinite/></h1>
                                        <span>Career Counselling <span className="sessions-text">Sessions</span></span>
                                    </div>
                                    <div className="statsCol">
                                        <h1>200</h1>
                                        <span>Hours of Live Classes</span>
                                    </div>

                                {/* <div className="statsRow"><span style={{marginTop: '25px'}}>* Complementary access to tyutee platform</span></div> */}
                        </Col>
                        <Col sm={{span: 12, order: 1}} xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}><div className="image-container"><img src={academic} alt="academic"/></div></Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="complementary_access"><br/>* Complementary access to tyutee platform</span>
                        </Col>
                    </Row>
                </Container>
                
            </div>
    )
}

export default Academy
