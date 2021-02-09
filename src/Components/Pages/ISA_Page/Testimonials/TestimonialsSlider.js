import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'
import {FaQuoteLeft, FaQuoteRight, FaArrowRight} from 'react-icons/fa'

import './Testimonials.scss'

import Harshit from './person1.jpeg'
import Abhishek from './person2.jpeg'

function TestimonialsSlider() {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return (
      <div className="Testimonials">
          <h2>What folks say about us</h2>
          <Carousel interval={3000}>
            {/* <Carousel.Item>
                <div className="testimonial-Slide">
                    <div className="slideText">
                        <FaQuoteLeft className="quoteLeft"/>
                        <p>The Course content covers the basics very well. I got great mentorship under mentors available here. When I joined tyutee I didn’t have an in depth understanding about many of the concepts but now I proudly can tell that I am quite conversant with the topics. The support and assistance that I have received through tyutee has been exemplary.</p>
                        <FaQuoteRight className="quoteRight"/>
                    </div>
                    <div className="slideBio">
                        <img alt="" src={Harshit}/>
                        <span>Harshit Kumawat</span>
                    </div>
                </div>
            {/* <Carousel.Caption>
                Some buddy
            </Carousel.Caption> */}
            {/* </Carousel.Item> */}
            {/* <Carousel.Item>
                <div className="testimonial-Slide">
                        <div className="slideText">
                            <FaQuoteLeft className="quoteLeft"/>
                            <p> The tutors at tyutee helped me become well versed with the current trends in the industry and prepared me for my interviews which helped me crack a good job. I got a great opportunity to network with my peers and learn from them. They also helped me gain an understanding about various job opportunities in the Industry. I feel more confident than ever before and would recommend tyutee to everyone.</p>
                            <FaQuoteRight className="quoteRight"/>
                        </div>
                        <div className="slideBio">
                            <img alt="" src={Abhishek}/>
                            <span>Abhishek Chakraborty</span>
                        </div>
                </div>
            </Carousel.Item> */}
            <Carousel.Item>
                <div className="testimonial-Slide">
                    <FaQuoteLeft className="backgroundQuoteLeft"/>
                    <div className="slideText">
                        {/* <FaQuoteLeft className="quoteLeft"/> */}
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                frameborder='0'
                                allowFullScreen
                                title='video'
                                height='100%'
                                width='100%'
                                style={{padding: '0 1.5rem'}}
                        />
                        {/* <FaQuoteRight className="quoteRight"/> */}
                    </div>
                    <div className="slideBio">
                        <img alt="" src={Abhishek}/>
                        <span>Abhishek Chakraborty</span>
                    </div>
                    <FaQuoteRight className="backgroundQuoteRight"/>
                </div>
            </Carousel.Item>
        </Carousel>
        <Link to="/testimonials">
            <span className="readMore">
                Read more testimonials <FaArrowRight/>
            </span></Link>
      </div>
    );
}

export default TestimonialsSlider
