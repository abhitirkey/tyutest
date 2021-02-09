import React, { useState } from 'react'
import './Courses.scss'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import PythonLogo from './python-logo.png'
import UXLogo from './ui-ux-logo.png'

// Component to display the "Courses We Offer" section
// Bootstrap Grid was used

import EnrollmentForm from '../../../Modals/EnrollmentForm/EnrollmentForm'

function Courses() {

    const [showModal, setShowModal] = useState(false);
    const [modalCourse, setModalCourse] = useState('python');

    const hideEnrollmentForm = () => {
        setShowModal(false);
    }

    const Set_Course_And_Show_Form = (course) => {
        setModalCourse(course);
        setShowModal(true);
    }

    return (
        <div className="section-content courses">
            <h2 className="courses-header">Courses We Offer</h2>
            <Container>
                <Row>
                    <Col className="courseCol" sm={{span:12}} md={{span: 6}}>
                        <img src={PythonLogo} alt="Python" />
                        <span>Python-Django Developer</span>
                        <button className="theme-hollow-btn boldText" onClick={() => Set_Course_And_Show_Form('python')}>Become a Developer Now</button>    
                    </Col>
                    <Col className="courseCol" sm={{span:12}} md={{span: 6}}>
                        <img src={UXLogo} alt="UI/UX"/>
                        <span>UI/UX Design</span>
                        <button className="theme-hollow-btn boldText" onClick={() => Set_Course_And_Show_Form('ui/ux')}>Become a Designer Now</button>
                    </Col>
                </Row>
            </Container>
            <EnrollmentForm showEnrollmentForm={showModal} hideForm={hideEnrollmentForm} course={modalCourse}/>
        </div>
    )
}

export default Courses
