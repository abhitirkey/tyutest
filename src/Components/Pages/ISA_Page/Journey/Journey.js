import React from 'react'
import './Journey.scss'

import Step from './Step/Step'
import StepsArray from './StepsArray'

// This component is for the Journey section

class Journey extends React.Component {

    constructor(){
        super();
        this.state = {
            highlightedImage: 0
        }
        this.updateHighlightedImage = this.updateHighlightedImage.bind(this);
    }

    componentDidMount = () => {
        this.interval = setInterval(this.updateHighlightedImage, 2000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    updateHighlightedImage = () => {
        if(this.state.highlightedImage === 7){
            this.setState({
                highlightedImage: 0
            });
        }
        else{
            this.setState(prevState => {
                return {
                    highlightedImage: prevState.highlightedImage + 1
                }
            })
        }
    }

    render(){
        return (
                <div className="section-content section-journey">
                    <h2 className="journey-header"><strong>Your Journey with us</strong></h2>
                    <div className="journey-grid">
                        {
                            StepsArray.map((item, index) => {
                                let image = item.image;
                                let highlight = false;
                                if(index===this.state.highlightedImage){
                                    image = item.highlightedImage;
                                    highlight = true;
                                }

                                return (
                                    <Step icon={image} title={item.title} highlight={highlight}/>
                                )
                            })
                        }
                    </div>
                    <div className="dotted-line-container desktop">
                        <div className="dotted-box one"></div>
                        <div className="dotted-box two"></div>
                        <div className="dotted-box three"></div>
                    </div>
                    <div className="dotted-line-container mobile">
                        <div className="dotted-box one"></div>
                        <div className="dotted-box two"></div>
                        <div className="dotted-box three"></div>
                        <div className="dotted-box four"></div>
                        <div className="dotted-box five"></div>
                        <div className="dotted-box six"></div>
                        <div className="dotted-box seven"></div>
                        <div className="dotted-box eight"></div>
                        <div className="dotted-box nine"></div>
                    </div>
                    <div className="dotted-line-container mobile-small">
                        <div className="dotted-box one"></div>
                    </div>      
                </div>
        )
    }
    
}

export default Journey
