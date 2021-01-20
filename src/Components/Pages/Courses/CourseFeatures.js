import React from 'react'

import CoursesData from './CoursesData'

function CourseFeatures() {
    let FeaturesArray = CoursesData[0].Features;
    return (
        <div className="courseFeaturesSection">
            <h2 style={{marginBottom: '2rem'}} className="boldText center">Course Features</h2>
            <div className="courseFeaturesGrid">
                {
                    FeaturesArray.map((item, index) => {
                        return (
                            <div className="courseFeature">
                                <div>
                                    <img className="courseFeatureIcon" src={item.icon} alt={item.title}/>
                                </div>
                                <span>{item.title}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CourseFeatures
