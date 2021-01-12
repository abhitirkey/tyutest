import React, {useLayoutEffect} from 'react'
import Header from  '../../Header/Header'

import WhatIsISA from './WhatIsISA'
import HowISAWorks from './HowISAWorks'
import FeesCalculator from './FeesCalculator'

import './FeesAndISA.scss'

function FeesAndISA() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Header/>
            <div className="page-top-section ISA">
                <h2 style={{marginBottom: '5rem'}} className="page-title-center">Income Share Agreement</h2>
                <WhatIsISA/>
                <HowISAWorks/>
                <FeesCalculator/>
            </div>
        </>
    )
}

export default FeesAndISA
