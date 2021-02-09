import React, {useLayoutEffect} from 'react'

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
