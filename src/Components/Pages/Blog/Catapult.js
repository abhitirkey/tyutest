import React, {Component} from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import EnrollmentForm from '../../Modals/EnrollmentForm/EnrollmentForm'

import './Blog.scss'

// This is for the section that displays "Catapult your career with tyutee now..."

class Catapult extends Component {
    constructor() {
        super();

        // State variable to regulate when the enrollment form needs to be displayed
        this.state = {
            showEnrollmentForm : false,
            background: ''
        };
    }

    componentDidMount = async () => {
        const pathname = window.location.pathname;
        if(pathname.startsWith('/blog')){
            await this.setState({
                background: 'beigeBackground'
            })
        }
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
            <div className="blog__catapult">
                <Container>
                    <Row>
                        <Col className="">
                            <h2>Catapult your career with tyutee now!</h2>
                            <span className="boldText">Get your career into warp speed</span>
                            <button className="theme-btn" onClick={this.showEnrollmentForm}>Begin your Journey</button>
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