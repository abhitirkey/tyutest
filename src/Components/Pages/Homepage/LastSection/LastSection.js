import React from 'react'
import './LastSection.scss'
import LastSectionPNG from './LastSection.png'

// The bottom-most section on the homepage displaying the image with the color gradient running from top to bottom

function LastSection() {
    return (
        <div className="LastSection">
            <img src={LastSectionPNG} alt="TyuteeAcademy"/>
        </div>
    )
}

export default LastSection
