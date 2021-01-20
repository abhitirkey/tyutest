import React, {Component} from 'react'
import './Catapult.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import catapult_img from './Catapult.png'

import EnrollmentForm from '../../../Modals/EnrollmentForm/EnrollmentForm'

// This is for the section that displays "Catapult your career with tyutee now..."

class Catapult extends Component {
    constructor() {
        super();

        // State variable to regulate when the enrollment form needs to be displayed
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
    
    render() {
        return (
            <>
            <div className="catapult">
                <Container>
                    <Row>
                        <Col className="col text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 8, order: 1}}>
    
                            <h2>Catapult your career with tyutee now!</h2>
                            <span className="boldText">Get your career into warp speed</span>
                            <button className="theme-btn" onClick={this.showEnrollmentForm}>Begin your Journey</button>
                        </Col>
                        <Col className="col image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 4, order: 1}}>
                            <img src={catapult_img} alt="Catapult"/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <EnrollmentForm showEnrollmentForm={this.state.showEnrollmentForm} hideForm={this.hideEnrollmentForm}/>
            </>
        )
    }
}

export default Catapult