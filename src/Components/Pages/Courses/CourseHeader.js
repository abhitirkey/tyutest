import React, { Component } from 'react'

import EnrollmentForm from '../../Modals/EnrollmentForm/EnrollmentForm'

import CoursesData from './CoursesData'

class CourseHeader extends Component {

    constructor(props) {
        super(props);
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

        let pathname = window.location.pathname;
        let JSX_to_render = null;

        if(pathname === '/courses/python-django-developer'){

            JSX_to_render = <>
            <div className="page-top-section courseHeader">
                <div className="col1">
                    <img className="course_logo" src={CoursesData[0].logo} alt="Python Django Logo"/>
                </div>
                <div className="col2">
                    <h2 className="pinkText boldText">{ CoursesData[0].title }</h2>
                    <p style={{textAlign: 'justify'}}>{CoursesData[0].description}</p>
                    <ul>
                    {
                        CoursesData[0].prerequisites !== null ?
                        CoursesData[0].prerequisites.map((item, index) => {
                            return (
                                <li>{item}</li>
                            );
                        }) : <li>No prerequisitive knowledge required.</li>
                    }
                    </ul>
                    <p style={{marginBottom: '1.5rem'}} className="boldText">
                        <span className="courseDuration"><span className="pinkText">Course Duration: </span>{ CoursesData[0].Duration } </span> <span className="pinkText"> Mode: </span> { CoursesData[0].Mode }
                    </p>
                    <div style={{width: '10rem'}}>
                        <button style={{width: '100%', height: '3rem', fontSize: '1.2rem'}} className="theme-btn boldText" onClick={this.showEnrollmentForm}>Enroll Now</button>
                        <p style={{fontSize: '0.8rem', marginTop: '5px'}} className="center">New Batch Starts { CoursesData[0].Start }</p>    
                    </div>
                </div>
            </div>
            <EnrollmentForm showEnrollmentForm={this.state.showEnrollmentForm} hideForm={this.hideEnrollmentForm}/>
         </>;

        }
        else if (pathname === '/courses/ui-ux-design'){

            JSX_to_render = <>
                        <div className="page-top-section courseHeader">
                            <div className="col1">
                                <img className="course_logo" src={CoursesData[1].logo} alt="UI/UX Logo"/>
                            </div>
                            <div className="col2">
                                <h2 className="pinkText boldText">{CoursesData[1].title}</h2>
                                <p style={{textAlign: 'justify'}}><strong>{CoursesData[1].description}</strong></p>
                            </div>
                        </div>
                    </>;
        }
        return <>{JSX_to_render}</>;
    }
}

export default CourseHeader;