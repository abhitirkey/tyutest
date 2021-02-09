import React, {useLayoutEffect} from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

import './Testimonials.scss'

import TestimonialsArray from './TestimonialsArray'

function Testimonials() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <div className="testimonialsPage">
                <h2 style={{marginBottom: '3rem'}} className="boldText center">What folks say about us!</h2>
                <div className="testimonialsGrid">
                    {TestimonialsArray.map((person) => {

                        return (
                            <div className="testimonialCard">
                                <FaQuoteLeft className="backgroundQuoteLeft"/>
                                <div className="text">
                                    <FaQuoteLeft className="quoteLeft"/>
                                    <p>{person.testimonial}</p>
                                    <FaQuoteRight className="quoteRight"/>
                                </div>
                                <div className="bio">
                                    <img alt="" src={person.image}/>
                                    <span>{person.name}</span>
                                </div>
                                <FaQuoteRight className="backgroundQuoteRight"/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Testimonials
