import React, {useLayoutEffect} from 'react'
import './Careers.scss'
import CareerList from './CareerList.json'

import {FaMapMarkerAlt} from 'react-icons/fa'

function Careers() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <div className="page-top-section">
                <h2 style={{marginBottom: '3rem'}} className="boldText center">We are hiring!</h2>
                <div className="careers-grid">
                    {CareerList.map((job, index) => {
                        let experience = job.experience === 'X' ? "College/University graduate" : "Experience required: <strong>"+job.experience+" years</strong>";

                        return (
                            <div className="job-card">
                                <h5 className="boldText">{job.position}</h5>
                                <p className="boldText"><FaMapMarkerAlt/> {job.location}</p>
                                <p dangerouslySetInnerHTML={{ __html: experience }}/>
                            </div>
                        );
                    })}
                </div>
                <p style={{padding: '2rem 15% 0 15%'}} className="boldText center lightGrayText">"Interested to be a part of a revolutionary team who are laser focussed on
changing the way every student networks and learn?"</p>
                <p className="boldText center lightGrayText">Contact us at <a href="mailto:career@tyutee.com" className="pinkText themeLink">career@tyutee.com</a>. We would be delighted to hear from you.</p>
            </div>
        </>
    )
}

export default Careers
