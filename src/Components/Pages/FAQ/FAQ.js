import React, {useContext, useLayoutEffect} from 'react'

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

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
          <div className="page-top-section FAQ__PageContainer">
            <div className="FAQ__Header">
                    <h2><strong>Frequently Asked Questions</strong></h2>
                    <div className="FAQ__button_list">
                        <span className="FAQ_button">ISA</span>
                        <span className="FAQ_button">General</span>
                        <span className="FAQ_button">Application</span>
                        <span className="FAQ_button">Placement</span>
                    </div>
            </div>
            <div className="FAQ__Body">
                <h3 style={{marginBottom: '1.5rem'}}><strong>Income Share Agreement</strong></h3>
                <div className="FAQ__accordion">
                <Accordion>
                    {
                        faqArray.map((item, index) => {

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
