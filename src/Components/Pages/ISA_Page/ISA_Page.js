import React, {useLayoutEffect} from 'react'

import Banner from './Banner/Banner'
import Journey from './Journey/Journey'
import Academy from './Academy/Academy'
import Courses from './Courses/Courses'
import Mentoring from './Mentoring/Mentoring'
import Companies from './Companies/Companies'
import Placement from './Placement/Placement'
import Testimonials from './Testimonials/Testimonials'
import TestimonialsSlider from './Testimonials/TestimonialsSlider'
import Enroll from './Enroll/Enroll'
import Catapult from './Catapult/Catapult'

function ISA_Page() {

    useLayoutEffect(() => {
        const pathname = window.location.pathname;
        if(pathname !== '/isa/enrollment-form'){
            window.scrollTo(0, 0)
        }
    });

    return (
        <div className="PageContainer">
            <div className="AllSections">
                <Banner/>
                <Journey/>
                <Academy/>
                <Courses/>
                <Mentoring/>
                <Companies/>
                <Placement/>
                <TestimonialsSlider/>
                <Enroll/>
                <Catapult/>  
            </div>
        </div>    
    )
}

export default ISA_Page
