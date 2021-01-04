import React from 'react'
import './Companies.scss'

import CompanyLogos from './Companies.png';

function Companies() {
    return (
        <div className="companies">
            <img src={CompanyLogos} alt="Company Logos"/>
        </div>
    )
}

export default Companies
