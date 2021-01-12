import React, { Component } from 'react'
import axios from 'axios';

import '../../../globalContactForm.scss'

export default class HireForm extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            designation: '',
            company: '',
            emailValid: true,
            nameValid: true,
            phoneValid: true,
            designationValid: true,
            companyValid: true,
            formOK: true,
            formDataSent: false,
            emailSuccess: false,
            buttonText: 'Submit'
        };

        this.initialState = this.state;
    }

    sentMailOnClose = () => {
        this.setState(this.initialState);
    }

    fieldChangeHandler = async ({ target }) => {

        const { name, value } = target;

        await this.setState({
            [name] : value
        });

        switch(name){
            case 'name':
                if(value !== ''){
                    await this.setState({ nameValid: true});
                }
                else {
                    await this.setState({ nameValid: false});
                }
                break;
            case 'designation':
                if(value !== ''){
                    await this.setState({ designationValid: true});
                }
                else {
                    await this.setState({ designationValid: false});
                }
                break;
            case 'company':
                if(value !== ''){
                    await this.setState({ companyValid: true});
                }
                else {
                    await this.setState({ companyValid: false});
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

        if(this.state.emailValid && this.state.phoneValid)
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
        if(this.state.designation === '')
            await this.setState({ designationValid : false , formOK: false });
        if(this.state.company === '')
            await this.setState({ companyValid : false , formOK: false });
        
        if(this.state.formOK) {

            await this.setState({ buttonText : 'Submitting...' });

            const API_PATH = 'https://tyutee.com/hire-mail/';

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
                        designation: '',
                        company: '',
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
                console.log(error);
                this.setState({
                    formDataSent: true,
                    emailSuccess: false,
                    FormModalTitle: 'Sorry about this...',
                    FormModalBody: 'We are encountering server issues at this time. Please try again or come back to us later.'
                });
            })
        }
        else {
            alert("Please make sure all required fields are filled.");
        }
    }

    render() {
        return (
            <>
            {this.state.formDataSent ? 
                <div className="thank_you">
                    <h2 className="boldText">{this.state.emailSuccess ? "Thank you for applying!": "Sorry!"}</h2>
                    <p>{this.state.emailSuccess ? 'Our team will get back to you soon.' : "We're having server issues at this time. Please try again later."}</p>
                </div>:
                <div className="contact-form-container">
                    <form onSubmit={this.submitHandler} className="form-elements">
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <input type="text" className={!this.state.nameValid ? 'is-invalid form-control': ''} name="name" placeholder="Name*" onChange={this.fieldChangeHandler} value={this.state.name}/>
                                {!this.state.nameValid? <span className="span-invalid">This field is mandatory.</span>: ''}
                            </div>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <input type="text" className={!this.state.designationValid ? 'is-invalid form-control': ''} name="designation" placeholder="Designation*" onChange={this.fieldChangeHandler} value={this.state.designation}/>
                                {!this.state.designationValid? <span className="span-invalid">This field is mandatory.</span>: ''}
                            </div>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <input type="text" className={!this.state.companyValid ? 'is-invalid form-control': ''} name="company" placeholder="Company Name*" onChange={this.fieldChangeHandler} value={this.state.company}/>
                                {!this.state.companyValid? <span className="span-invalid">This field is mandatory.</span>: ''}
                            </div>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <input className={!this.state.emailValid ? 'is-invalid form-control' : ''} type="email" name="email" placeholder="Business Email*" onChange={this.fieldChangeHandler} value={this.state.email}/>
                                {!this.state.emailValid? <span className="span-invalid">Please enter a valid email address</span>: ''}
                            </div>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <input className={!this.state.phoneValid ? 'is-invalid form-control' : 'form-control'} type="text" name="phone" placeholder="Phone Number*" onChange={this.fieldChangeHandler} value={this.state.phone}/>
                                {!this.state.phoneValid? <span className="span-invalid">Please enter a valid phone number</span>: ''}
                            </div>
                            <button className="theme-btn" disabled={this.state.submitDisabled}>{this.state.buttonText}</button>
                    </form>
                </div>
            }
            </>
        )
    }
}
