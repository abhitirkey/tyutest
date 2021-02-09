import React, {useLayoutEffect} from 'react'
import './BecomeAMentor.scss';

import MentorContactForm from './MentorContactForm/MentorContactForm'

import BeAMentorPNG from './BeAMentor.png'

function BecomeAMentor() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
        <div className="page-top-section">
            <h2 className="boldText center">Become A Mentor</h2>
            <p style={{padding: '0 20%'}} className="center">Get an opportunity to give back to your local community and help new developers in launching their careers, prepare for jobs and help them grow.</p>
        </div>
        <div className="section-content mentor-form-container">
            <div className="mentor-image-container">
                <img src={BeAMentorPNG} alt="Be A Mentor"/>
            </div>
            <MentorContactForm/>
        </div>
        </>
    )
}

export default BecomeAMentor
