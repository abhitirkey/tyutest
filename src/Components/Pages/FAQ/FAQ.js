import React, {useContext} from 'react'
import Header from '../../Header/Header';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

import faqArray from './faq.json'

import './FAQ.scss'

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
        <Card.Header class={eventKey === 1 ? 'card-header first-card-header': 'card-header'} onClick={decoratedOnClick}>
            <span><strong>{children}</strong></span> 
            <button style={{float: 'right'}}
                type="button" className="accordionCaret">
                {isCurrentEventKey ? <FaChevronUp/> : <FaChevronDown/>}
            </button>
        </Card.Header>
      
    );
  }

function FAQ() {
    return (
        <>
          <Header/>
          <div className="FAQ__PageContainer">
            <div className="FAQ__Header">
                    <h2><strong>Frequently Asked Questions</strong></h2>
                    <div className="FAQ__button_list">
                        <button className="FAQ_button">ISA</button>
                        <button className="FAQ_button">General</button>
                        <button className="FAQ_button">Application</button>
                        <button className="FAQ_button">Placement</button>
                    </div>
            </div>
            <div className="FAQ__Body">
                <h3 style={{marginBottom: '1.5rem'}}><strong>Income Share Agreement</strong></h3>
                <div className="FAQ__accordion">
                <Accordion>
                    {
                        faqArray.map((item, index) => {

                            console.log("Index: ", index);
                            return (
                                <Card>
                                    <ContextAwareToggle eventKey={index+1}>
                                        {item.question}
                                    </ContextAwareToggle>
                                    {/* <Accordion.Toggle  as={Button} variant="link" eventKey={index+1}>
                                        v
                                    </Accordion.Toggle> */}
                                    <Accordion.Collapse eventKey={index+1}>
                                        <Card.Body dangerouslySetInnerHTML={{__html: item.answer}}></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            );
                        })
                    }
                    
                    </Accordion>
                </div>
            </div>
          </div>
        </>
    )
}

export default FAQ
