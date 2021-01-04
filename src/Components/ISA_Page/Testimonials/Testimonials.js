import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

import Harshit from './person1.jpeg'
import Abhishek from './person2.jpeg'

import './Testimonials.scss'

function Testimonials() {
    return (
        <div className="section-content testimonials">
            <h2>What folks say about us</h2>
            <div className="card-container">
                    <div className="testimonial-Card">
                        <div className="testimonial-text-container">
                            <div>   
                                <FaQuoteLeft className="quote left"/>
                                <p>The Course content covers the basics very well. I got great mentorship under mentors available here. When I joined tyutee I didn’t have an in depth understanding about many of the concepts but now I proudly can tell that I am quite conversant with the topics. The support and assistance that I have received through tyutee has been exemplary.</p>
                                <div className="quote right"><FaQuoteRight /></div>
                            </div>    
                        </div>
                        <hr/>
                        <div className="testimonial-User">
                        
                            <img alt="" src={Harshit}/>
                            <span>Harshit Kumawat</span>
                        </div>
                    </div>
                    <div className="testimonial-Card">
                        <div className="testimonial-text-container">
                            <div> 
                                <FaQuoteLeft className="quote left"/>
                                <p>The tutors at tyutee helped me become well versed with the current trends in the industry and prepared me for my interviews which helped me crack a good job. I got a great opportunity to network with my peers and learn from them. They also helped me gain an understanding about various job opportunities in the Industry. I feel more confident than ever before and would recommend tyutee to everyone.</p>
                                <div className="quote right"><FaQuoteRight /></div>
                            </div>
                        </div>
                        <hr/>
                        <div className="testimonial-User">
                            <img alt="" src={Abhishek}/>
                            <span>Abhishek Chakraborty</span>
                        </div>
                    </div>
                    {/* <div className="testimonial-Card">
                        <FaQuoteLeft className="quote left"/>
                        <p>Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut laoreet
                            dolore magna aliquam erat
                            volutpat. 
                        </p>
                        <FaQuoteRight className="quote right"/>
                        <hr/>
                        <div className="testimonial-User">
                            <img alt="" src={profilePic}/>
                            <span>A Tirkey, Web Developer</span>
                        </div>
                    </div> */}
                      
            </div>
        </div>
    )
}

export default Testimonials
