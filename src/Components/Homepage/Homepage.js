import React, {useLayoutEffect} from 'react'

import HomePageHeader from '../Header/HomePageHeader'
import HomeBanner from './Banner/Banner'
import BannerTwo from './BannerTwo/BannerTwo'
import CoreFeatures from './CoreFeatures/CoreFeatures'
import Who from './Who/Who'
import LastSection from './LastSection/LastSection'

import './Homepage.scss'

function Homepage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="HomePageContainer">
            <HomePageHeader/>
            <div className="AllSections Homepage">
                <HomeBanner/>
                <BannerTwo/>
                <CoreFeatures/>
                <Who/>
                <LastSection/>
            </div>
        </div>
    )
}

export default Homepage
