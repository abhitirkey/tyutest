import React, {Component} from 'react'
import Header from '../../Header/Header'

import CourseFeatures from './CourseFeatures'
import CourseCurriculum from './CourseCurriculum'
import HowToPay from './HowToPay'
import EnrollmentForm from '../../Modals/EnrollmentForm/EnrollmentForm'

import './Courses.scss'

import Logo from './Images/Python/Logos/python-logo.png'

class Courses extends Component {

    constructor() {
        super();
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

    render () {
        return (
            <>
                 <Header />
                 <div className="page-top-section courseHeader">
                     <div className="col1">
                         <img className="course_logo" src={Logo} alt="Python Django Logo"/>
                     </div>
                     <div className="col2">
                         <h2 className="pinkText boldText">Python - Django Developer</h2>
                         <p style={{textAlign: 'justify'}}>This program covers new considerations, and core competencies required for any Python technical professional for
     industry job ready. This program places a greater emphasis on technology, frameworks and business knowledge, and make students ready for their desired job with a higher salary.</p>
                         <ul><li>No prerequisitive knowledge required.</li></ul>
                         <p className="boldText">
                             <span className="courseDuration"><span className="pinkText">Course Duration: </span>150 hours </span> <span className="pinkText"> Mode: </span> Online
                         </p>
                         <div style={{width: '10rem'}}>
                             <button style={{width: '100%', height: '3rem', fontSize: '1.2rem'}} className="theme-btn boldText" onClick={this.showEnrollmentForm}>Enroll Now</button>
                             <p style={{fontSize: '0.8rem', marginTop: '5px'}} className="center">New Batch Starts Jan 18</p>    
                         </div>
                     </div>
                 </div>
                 <CourseFeatures/>
                 <CourseCurriculum/>
                 <HowToPay/>
                 <div className="CourseEnrollNow">
                    <h3 className="boldText">Become a Python - Django Developer Now!</h3>
                    <button className="theme-btn" onClick={this.showEnrollmentForm}>Enroll Now</button>
                 </div>
                 <EnrollmentForm showEnrollmentForm={this.state.showEnrollmentForm} hideForm={this.hideEnrollmentForm}/>
            </>
         )
    }
}

export default Courses
