import React from 'react'

import ISApng from './WhatIsISA.png'

function WhatIsISA() {
    return (
        <div className="WhatIsISA">
            <img src={ISApng} alt="What is ISA?"/>
            <div className="text">
                <h4 className="boldText">What is ISA?</h4>
                <p>With tyutee's income share agreement (ISA) a student can enroll and complete the course by paying absolutely nothing and get placed in a top notch company, but agrees to pay back fees once they get placed. This way students can learn effectively without pressure of down payment in the starting.</p>
            </div>
        </div>
    )
}

export default WhatIsISA
