import React from 'react'
import './Footer.scss'
import logo from './tyutee-logo.png'
// import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import FacebookIcon from './facebook.png'
import InstagramIcon from './instagram.png'
import LinkedInIcon from './linkedin.png'

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
                        <a href='/coming-soon' target="_blank" rel="noreferrer">About us</a>
                        <a href='/coming-soon' target="_blank" rel="noreferrer">Become a mentor</a>
                        <a href="/coming-soon" target="_blank" rel="noreferrer">Income Share Agreement</a>
                        <a href="/contact-us" target="_blank" rel="noreferrer">Contact Us</a>
                        <a href="/coming-soon" target="_blank" rel="noreferrer">Careers</a>
                    </div>
                </div>
            </div>
            <div className="footer-row bottom">
                <div className="footer-col left">
                    <p>
                        <img src={FacebookIcon} alt="facebook" width='100%'/>
                        <a href="https://www.instagram.com/insta.tyutee" target="_blank" rel="noreferrer"><img src={InstagramIcon} alt="instagram"/></a>
                        <a href="https://in.linkedin.com/company/tyutee" target="_blank" rel="noreferrer"><img style={{borderRadius: '5px'}} src={LinkedInIcon} alt="linkedin"/></a>
                    </p>
                    <span>© 2021. Shramista Tech Private Limited
    | All rights reserved</span>
                </div>
                <div className="space-div"></div>
                <div className="footer-col right">
                        <a href="/coming-soon" target="_blank" rel="noreferrer">Blog</a> | 
                        <a href="/privacy-policy" target="_blank" rel="noreferrer"> Privacy Policy</a> | 
                        <a href="/terms-of-use" target="_blank" rel="noreferrer"> Terms of Use</a> 
                </div>
                   
            </div>
        </div>
    )
}

export default Footer
