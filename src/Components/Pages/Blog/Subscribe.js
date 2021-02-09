import React, {useState} from 'react'
import {GiCheckMark, GiCrossMark} from 'react-icons/gi'
import axios from 'axios'

import './Blog.scss'

function Subscribe() {

    const [email, setEmail] = useState(null);
    const [emailValid, setEmailValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [buttonText, setButtonText] = useState("Notify Me");

    const fieldChangeHandler = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setEmail(value);

        const email_regX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                
        if(email_regX.test(value)){
            setEmailValid(true)
        }
        else {
            setEmailValid(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(emailValid && email !== null) {

            setButtonText("Subscribing...");

            const API_PATH = 'https://tyutee.com/blog-mail/index.php';

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: {email: email}
            })
            .then(result => {

                if(result.data.sent){
                    setSubmitted(true);
                    setSubscribed(true);
                }
                else {
                    setSubmitted(true);
                }
            })
            .catch(error => {
                setSubmitted(true);
            })
        }
        else {
            alert("Please enter your email.");
        }
    }

    return (
        <>
            <div className={submitted ? "hide" : "subscribe"}>
                <span>Get updates from us regularly</span>
                <form action="" className="subscribe__input">
                    <input type="email" name="email" placeholder="Your Email" value={email} onChange={fieldChangeHandler}/>
                    <button type="submit" className="theme-btn subscribe__btn" onClick={submitHandler}>{buttonText}</button>
                </form>
            </div>
            <div className={submitted ? "thanks__for__subscribing" : "hide"}>
                {
                    subscribed ? 
                    <>
                        <GiCheckMark/>
                        <span>Thanks for subscribing!</span>
                    </> :
                    <>
                        <GiCrossMark style={{color: '#df1f31', fontSize: '2rem'}}/>
                        <span>Could not subscribe at this time. <br/> Please try again later.</span>
                    </>
                }
                
            </div>
        </>
    )
}

export default Subscribe
