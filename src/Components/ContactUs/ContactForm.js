import React from 'react'

function ContactForm() {
    return (
        <div className="contact-form-container">
            <form className="form-elements">
                    <input type="text" name="name" placeholder="Name*"/>
                    <input type="text" name="email" placeholder="Email*"/>
                    <input type="text" name="number" placeholder="Phone Number*"/>
                    <input type="text" name="subject" placeholder="Subject*"/>
                    <textarea name="message" placeholder="Message*" rows="7"/>
                    <button className="theme-btn">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
