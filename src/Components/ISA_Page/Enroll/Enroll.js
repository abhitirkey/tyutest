import React from 'react'
import './Enroll.scss'

function Enroll() {
    return (
        <div className="enroll">
            <h2><strong>Enroll Now</strong></h2>
            <h4>Planning to join tyutee? Here are the four basic steps to follow:</h4>
            <div className="enroll-card-container">
                    <div className="enroll-Card">
                        <h1 className="card-number">01</h1>
                        <h4><strong>Enrollment Form</strong></h4>
                        <p>Fill up the form with your basic details on our website.</p>
                    </div>
                    <div className="enroll-Card">
                        <h1 className="card-number">02</h1>
                        <h4><strong>Screening Call</strong></h4>
                        <p>Our team will reach out to you to understand what you are looking for and gain an understanding into career requirement.</p>
                    </div>
                    <div className="enroll-Card">
                        <h1 className="card-number">03</h1>
                        <h4><strong>Counseling Round</strong></h4>
                        <p>We will try understanding your career aspiration and charter out a right path for you.</p>
                    </div>
                    <div className="enroll-Card">
                        <h1 className="card-number">04</h1>
                        <h4><strong>Personal Interview</strong></h4>
                        <p>We would like to know you more before onboarding you to tyutee. The Personal Interview would be one of our ways to know you better and help you in building your career in the right direction.</p>
                    </div>
            </div>
        </div>
    )
}

export default Enroll
