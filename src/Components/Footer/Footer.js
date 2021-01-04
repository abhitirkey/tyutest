import React from 'react'
import './Footer.scss'
import logo from './tyutee-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-row">
                <div className="footer-col left">
                    <img alt="" src={logo}/>
                    <p className="footer-about">The next Gen SaaS based peer to peer student learning, networking and upskilling platform. Why go through the hassle of visiting various different websites or platforms for various needs? Now find Notes Sharing, Knowledge Base, Networking, Upskilling and Alumni Connect along with a web of ancillary modules such as Workshops, Internships, Jobs, Career Counselling, Education Loans etc. under one single ecosystem.
                    </p>
                    <p className="footer-about">With tyutee let's Change the way every Student Networks and Learns on the Go.</p>
                </div>
                <div className="space-div"></div>
                <div className="footer-col right">
                    <div className="links-cluster">
                        <Link to='/about'>About us</Link>
                        <Link to='/be-a-mentor'>Become a mentor</Link>
                        <Link to="/income">Income Share Agreement</Link>
                        <Link to="/contact-us">Contact Us</Link>
                        <Link to="/careers">Careers</Link>
                    </div>
                </div>
            </div>
            <div className="footer-row bottom">
                <div className="footer-col left">
                    <p><FaFacebookF className="social-icon"/><FaInstagram className="social-icon"/><FaLinkedinIn className="social-icon"/></p>
                    <span>© 2021. Shramista Tech Private Limited
    | All rights reserved</span>
                </div>
                <div className="space-div"></div>
                <div className="footer-col right">
                        <Link to="/income">Blog</Link> | 
                        <Link to="/privacy-policy"> Privacy Policy</Link> | 
                        <Link to="/terms-of-use"> Terms of Use</Link> 
                </div>
                   
            </div>
        </div>
    )
}

export default Footer
