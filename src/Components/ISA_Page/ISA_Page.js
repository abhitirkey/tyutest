import React, {useLayoutEffect} from 'react'
import './ISA_Page.scss'

import Header from '../Header/Header'
import Banner from './Banner/Banner'
import Journey from './Journey/Journey'
import Academy from './Academy/Academy'
import Courses from './Courses/Courses'
import Mentoring from './Mentoring/Mentoring'
import Companies from './Companies/Companies'
import Placement from './Placement/Placement'
import Testimonials from './Testimonials/Testimonials'
import Enroll from './Enroll/Enroll'
import Catapult from './Catapult/Catapult'

function ISA_Page() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="PageContainer">
            <Header/>
            <div className="AllSections">
                <Banner/>
                <Journey/>
                <Academy/>
                <Courses/>
                <Mentoring/>
                <Companies/>
                <Placement/>
                <Testimonials/>
                <Enroll/>
                <Catapult/>  
            </div>
        </div>    
    )
}

export default ISA_Page
