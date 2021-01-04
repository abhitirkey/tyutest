import React, {useLayoutEffect} from 'react'

import Header from '../../Header/Header'

function ComingSoon() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
             <Header/>
             <div className="section-content coming_soon">
                <div className="intro" style={{padding: '5rem 0 1rem 0'}}>
                    <h2 style={{fontWeight: 'bolder'}}>Coming soon</h2>
                </div>
                <div className="textBody">
                    <h3>This is currently underway.</h3>
                </div>
            </div>
        </div>
        
    )
}

export default ComingSoon
