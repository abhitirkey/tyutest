import React from 'react'
import './Companies.scss'

import CompanyLogos from './Companies.png';

// Company to display the list of companies and their logos (only a single image is used)

function Companies() {
    return (
        <div className="companies">
            <img src={CompanyLogos} alt="Company Logos"/>
        </div>
    )
}

export default Companies
