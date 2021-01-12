import React from 'react'
import Header from '../../Header/Header'

import './Courses.scss'

import Logo from './Images/Logos/python-logo.png'

function Courses() {
    return (
       <>
            <Header />
            <div className="page-top-section courseHeader">
                <div className="col1">
                    <img src={Logo} alt="Python Django Logo"/>
                </div>
                <div className="col2">
                    
                </div>
            </div>
       </>
    )
}

export default Courses
