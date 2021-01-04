import React, {useLayoutEffect} from 'react'
import './ContactUs.scss'

import Header from '../Header/Header'
import ContactForm from './ContactForm'
import Map from './Map'

function ContactUs() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="contactUs">
            <Header/>
            <div className="section-content contactUsContent">
                <div className="intro">
                    <h2>Get In Touch</h2>
                    <p>We Love A Good Chat About All Things Product, UX/UI, Innovation And Career.</p>
                    <p></p>
                    <p>Fill Out The Enquiry Form, Email, Come Round For A Coffee,<br/> Or Just Stalk Us On Social Media. Let's Talk!</p>
                </div>
                <div class="form-map-container">
                    <ContactForm/>
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
