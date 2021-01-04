import React from 'react'
import './Journey.scss'
import {GoChecklist} from 'react-icons/go'

import Step from './Step/Step'
import StepsArray from './StepsArray'

class Journey extends React.Component {

    constructor(){
        super();
        this.state = {
            highlightedImage: 0
        }
        this.updateHighlightedImage = this.updateHighlightedImage.bind(this);
    }

    componentDidMount = () => {
        this.interval = setInterval(this.updateHighlightedImage, 3000);
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
        console.log(this.state.highlightedImage);
        return (
                <div className="section-content section-journey">
                    <h2>Your Journey with us</h2>
                    <div className="journey-grid">
                        {
                            StepsArray.map((item, index) => {
                                let image = item.image;
                                let highlight = false;
                                let stepClass = 'step';
                                if(index===this.state.highlightedImage){
                                    image = item.highlightedImage;
                                    highlight = true;
                                }

                                if(index > 3)
                                    stepClass += '-'+index;
                                return (
                                    <Step icon={image} title={item.title} highlight={highlight}/>
                                )
                            })
                        }
                        <div className="dotted-line-container">
                            <div className="dotted-box one"></div>
                            <div className="dotted-box two"></div>
                            <div className="dotted-box three"></div>
                        </div>
                    </div>
                     
                </div>
        )
    }
    
}

export default Journey
