import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

import SentMailPNG from './SentMail.png'

export default class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        emailValid: true,
        nameValid: true,
        phoneValid: true,
        submitDisabled: false,
        formOK: true,
        formModalShow: false,
        FormModalTitle: 'Hang in there...',
        FormModalBody: 'Please wait while we send your message...',
        formDataSent: false,
        emailSuccess: false
    }

    fieldChangeHandler = async ({ target }) => {

        const { name, value } = target;

        await this.setState({
            [name] : value
        });

        switch(name){
            case 'name':
                if(value === ''){
                    await this.setState({ nameValid: false});
                }
                else{
                    await this.setState({ nameValid: true })
                }
                break;
            case 'phone':
                const phone_regX = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
                
                if(phone_regX.test(value)){
                    await this.setState({ phoneValid: true });
                }
                else{
                    await this.setState({ phoneValid: false });
                }
                break;
            case 'email':
                const email_regX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                
                if(email_regX.test(value)){
                    await this.setState({
                        emailValid: true
                    })
                }
                else {
                    await this.setState({
                        emailValid: false
                    })
                   
                }
                break;        
        }

        if(this.state.nameValid && this.state.emailValid && this.state.phoneValid)
            this.setState({ formOK: true});
    }

    submitHandler = async (e) => {
        
        e.preventDefault();

        if(this.state.name === '')
            await this.setState({ nameValid : false , formOK: false });
        if(this.state.email === '')
            await this.setState({ emailValid : false, formOK: false  });
        if(this.state.phone === '')
            await this.setState({ phoneValid : false , formOK: false });
        
        if(this.state.formOK) {

            await this.setState({ formModalShow : true });

            const API_PATH = 'https://tyutee.com/contact-mail/index.php';

            axios({
                method: 'post',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: this.state
            })
            .then(result => {
                console.log(result.data);
                if(result.data.sent){
                    this.setState({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        formDataSent: true,
                        emailSuccess: true,
                        FormModalTitle: 'Thanks for reaching out!',
                        FormModalBody: 'We will get back to you shortly.',
                        formOK: false
                    });
                }
                else {
                    this.setState({
                        formDataSent: true,
                        emailSuccess: false,
                        FormModalTitle: 'Sorry about this...',
                        FormModalBody: 'We are encountering server issues at this time. Please try again or come back to us later.'
                    })
                }
            })
            .catch(error => {
                this.setState({
                    formDataSent: true,
                    emailSuccess: false,
                    FormModalTitle: 'Sorry about this...',
                    FormModalBody: 'We are encountering server issues at this time. Please try again or come back to us later.'
                })
                console.log(error)});
        }
        else {
            alert("Please make sure all required fields are filled.");
        }
    }

    handleClose = () => {
        this.setState({ 
            formModalShow : false,
            FormModalTitle: 'Hang in there...',
            FormModalBody: 'Please wait while we send your message...',
            formDataSent: false 
        });
    }

    render() {
        let ModalStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#797979'
        };

        return (
            <>
            <div className="contact-form-container">
                <form onSubmit={this.submitHandler} className="form-elements">
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            <input type="text" className={!this.state.nameValid ? 'is-invalid form-control': ''} name="name" placeholder="Name*" onChange={this.fieldChangeHandler} value={this.state.name}/>
                            {!this.state.nameValid? <span className="span-invalid">This field is mandatory.</span>: ''}
                        </div>
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            <input className={!this.state.emailValid ? 'is-invalid form-control' : ''} type="email" name="email" placeholder="Email*" onChange={this.fieldChangeHandler} value={this.state.email}/>
                            {!this.state.emailValid? <span className="span-invalid">Please enter a valid email address</span>: ''}
                        </div>
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            <input className={!this.state.phoneValid ? 'is-invalid form-control' : 'form-control'} type="text" name="phone" placeholder="Phone Number*" onChange={this.fieldChangeHandler} value={this.state.phone}/>
                            {!this.state.phoneValid? <span className="span-invalid">Please enter a valid phone number</span>: ''}
                        </div>
                        <input type="text" name="subject" placeholder="Subject" onChange={this.fieldChangeHandler} value={this.state.subject}/>
                        <textarea name="message" placeholder="Message" rows="7" onChange={this.fieldChangeHandler} value={this.state.message}/>
                        <button className="theme-btn" disabled={this.state.submitDisabled}>Submit</button>
                </form>
            </div>
            <Modal show={this.state.formModalShow} onHide={this.handleClose}>
                <Modal.Body style={ModalStyle}>
                        {this.state.emailSuccess? <img style={{width: '20%'}} src={SentMailPNG} alt="SentMailPNG" /> : ''}
                        <h2>{this.state.FormModalTitle}</h2>
                        <span>{this.state.FormModalBody}</span>
                </Modal.Body>
                <Modal.Footer>
                {this.state.formDataSent ? <button className="theme-hollow-btn grayed" onClick={this.handleClose}>
                    Close
                </button>: ''}
                </Modal.Footer>
            </Modal>
             
            </>
        );
    }
}
