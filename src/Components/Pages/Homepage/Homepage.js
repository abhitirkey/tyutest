import React, {useLayoutEffect} from 'react'

import HomeBanner from './Banner/Banner'
import BannerTwo from './BannerTwo/BannerTwo'
import CoreFeatures from './CoreFeatures/CoreFeatures'
import Who from './Who/Who'
import LastSection from './LastSection/LastSection'

import './Homepage.scss'

// The main homepage component comprising of all the various sections

function Homepage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="AllSections Homepage">
            <HomeBanner/>
            <BannerTwo/>
            <CoreFeatures/>
            <Who/>
            <LastSection/>
        </div>
    )
}

export default Homepage
