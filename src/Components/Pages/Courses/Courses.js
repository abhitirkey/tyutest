import React, {useLayoutEffect} from 'react'
import Header from '../../Header/Header'

import CourseHeader from './CourseHeader'
import CourseFeatures from './CourseFeatures'
import CourseCurriculum from './CourseCurriculum'
import HowToPay from './HowToPay'
import CourseEnrollNow from './CourseEnrollNow'

import './Courses.scss'

function Courses() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    let pathname = window.location.pathname;

    return (
        <>
            <Header />
            <CourseHeader />
            {
                pathname === '/courses/python-django-developer' ? 
                    <>
                        <CourseFeatures/>
                        <CourseCurriculum/>
                        <HowToPay/>
                        <CourseEnrollNow />
                    </> : null
            }
        </>
    );

}

export default Courses
