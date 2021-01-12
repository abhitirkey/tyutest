import React, {useLayoutEffect} from 'react'
import Header from '../../Header/Header'

import WhyUsPNG1 from './WhyUs1.png'
import WhyUsPNG2 from './WhyUs2.png'
import WhyUsPNG3 from './WhyUs3.png'
import ContactFramePNG from './Frame.png'
import './HireFromUs.scss'
import HireForm from './HireForm/HireForm'

function HireFromUs() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <Header/>
            <div className="page-top-section HireFromUs">
                <h2 className="boldText center">Hire From Us</h2>
                <p className="headerText center">Do you seek resource ready employees?<br/>Want to avoid huge training costs?<br/>Come partner with tyutee and let us deal with your overhead upskilling cost.<br/>We provide you industry ready candidates at Zero cost.</p>
                <hr style={{border: "1px solid #797979", margin: '0 35vw 2rem 35vw'}}/>
                <h4 style={{marginBottom: '2rem'}} className="boldText center">Why Us?</h4>
                <div className="WhyUs_Section">
                    <div className="WhyBox">
                        <img src={WhyUsPNG1} alt="Pre-Assessed Candidates"/>
                        <span style={{display: 'block'}} className="boldText center">Pre-Assessed Candidates</span>
                        {/* <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod utt </p> */}
                    </div>
                    <div className="WhyBox">
                        <img src={WhyUsPNG2} alt="Pre-Assessed Candidates"/>
                        <span style={{display: 'block'}} className="boldText center">Highly Skilled</span>
                        {/* <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod utt </p> */}
                    </div>
                    <div className="WhyBox">
                        <img src={WhyUsPNG3} alt="Pre-Assessed Candidates"/>
                        <span style={{display: 'block'}} className="boldText center">Zero Hiring Charge</span>
                        {/* <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod utt </p> */}
                    </div>

                </div>
            </div>
            <div className="section-content HireFormSection">
                <div className="hireFormImageContainer">
                    <img src={ContactFramePNG} alt="ContactFrame" />
                </div>
               <HireForm/>
               <div className='flex-spacer'></div>
            </div>
        </>
    )
}

export default HireFromUs
