import React from 'react'

import { FaRupeeSign } from 'react-icons/fa'

import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'

function HowISAWorks() {
    return (
        <div style={{marginBottom: '2rem'}}>
            <h4 style={{textAlign: 'center', margin: '5rem 0'}} className="boldText">How ISA works?</h4>
            <div className="isa_how_section">
                <div className="isa_how_col">
                    <img src={image1} alt="Pay Zero"/>
                    <div className="how_text">
                        <span className="boldText">Pay <FaRupeeSign/> 0 till you get paid</span>
                        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p> */}
                    </div>
                </div>
                <div className="isa_how_col">
                    <img src={image2} alt="Pay 15%"/>
                    <div className="how_text">
                        <span className="boldText">Pay 15% of monthly gross salary after you get an offer</span>
                        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p> */}
                    </div>
                </div>
                <div className="isa_how_col">
                    <img src={image3} alt="Pay Zero"/>
                    <div className="how_text">
                        <span className="boldText">We have minimum market cap in the industry</span>
                        {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowISAWorks
