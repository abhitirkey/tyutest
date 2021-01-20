import React from 'react'
import './Step.scss'

const Step = (props) => {

    let iconClass = 'icon';
    let stepClass = 'journey-step';

    if(props.highlight){
        iconClass = 'icon highlightedIcon';
    }

    return (
         <div className={stepClass}>
            <div className="icon-container">
                <div className={iconClass}>
                    <img src={props.icon}/>
                </div>
            </div>
            <div className="vline"></div>
            <div className="dot"></div>
            <span className="title">{props.title}</span>
        </div>
    )
}

export default Step
