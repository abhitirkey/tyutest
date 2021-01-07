import React, { Component } from 'react'
import './Banner.scss'

import { useParams } from "react-router-dom";

import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'

import banner_gif from './banner.gif'
import SentMailPNG from './SentMail.png'

import {FaRupeeSign} from 'react-icons/fa'

class Banner extends Component {

    constructor(){
        super();
        this.state = {
            showModal: false,
            buttonText: 'Submit',
            name: '',
            nameValid: true,
            email: '',
            emailValid: true,
            phone: '',
            phoneValid: true,
            category: '',
            categoryValid: true,
            course: '',
            courseValid: true,
            why: '',
            whyValid: true,
            formDataSent: false,
            emailSuccess: false,
            ModalMessage: 'Please wait, submitting your information...',
            formOK: true,
            ModalSentShow: false 
        };
        this.initialState = this.state;
    }

    componentDidMount = () => {
        const pathname = window.location.pathname;
        if(pathname === '/isa/enrollment-form'){
            this.setState({ showModal: true });
        }
    }

    handleClose = async () => {
        // On closing the form modal
        await this.setState({ showModal: false});
    }

    handleCloseSent= async () => {
        await this.setState(this.initialState);
    }

    openModal = async () => {
        await this.setState({ showModal: true });
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
            case 'category':
                await this.setState({categoryValid: true});
                break;
            case 'course':
                await this.setState({courseValid: true});
                break;
            case 'why':
                if(value === ''){
                    await this.setState({
                        whyValid: false
                    })
                }
                else {
                    await this.setState({
                        whyValid: true
                    })
                }        
                break;
            default:
                // Do nothing
        }

        if(this.state.nameValid && this.state.emailValid && this.state.phoneValid && this.state.categoryValid && this.state.courseValid && this.state.batchValid && this.state.whyValid)
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
        if(this.state.category === '')
            await this.setState({ categoryValid : false , formOK: false });
        if(this.state.course === '')
            await this.setState({ courseValid : false , formOK: false });
        if(this.state.why === '')
            await this.setState({ whyValid : false , formOK: false });
        
        if(this.state.formOK) {

            await this.setState({ buttonText : 'Submitting form...' });

            const API_PATH = 'https://tyutee.com/enrollment-mail/';

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
                        formDataSent: true,
                        showModal: false,
                        ModalSentShow: true,
                        emailSuccess: true
                    });
                }
                else {
                    this.setState({
                        formDataSent: true,
                        showModal: false,
                        ModalSentShow: true,
                        emailSuccess: false
                    })
                }
            })
            .catch(error => {
                console.log("Error in submitting enrollment form: ", error);
                
                this.setState({
                    formDataSent: true,
                    showModal: false,
                    ModalSentShow: true,
                    emailSuccess: false
                });
            });
        }
        else {
            alert("Please make sure all required fields are filled.");
        }
    }
 
    render(){
        console.log(this.state.ModalSentShow);

        let ModalStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#797979'
        };

        return (
            <div className="banner">
                <Container>
                    <Row>
                        <Col className="bannerCol text" sm={{span: 12, order:2}} xs={{ span: 12, order:2}} md={{ span: 6, order: 1}}>
                            <div style={{flex: 3}}></div>
                            <h2 className="titleDesktop">Do you want to get</h2>
                            <h2 className="titleDesktop">Upskilled?</h2>
                            <h2 className="titleMobile">Do you want to get Upskilled?</h2>
                            <span className="pay">Pay <strong><FaRupeeSign/>0</strong> till you get placed</span>
                            <div className="flex-spacer"></div>
                            <span className="boldText">We at tyutee help you reshape and catapult your career.</span>
                            <button className="theme-btn" onClick={this.openModal}>Enroll Now</button>
                        </Col>
                        <Col className="bannerCol image" sm={{span: 12, order:1}} xs={{ span: 12, order: 1}} md={{ span: 6, order: 1}}>
                            <img src={banner_gif} alt="BannerGIF"/>
                        </Col>
                    </Row>
                </Container>
                <div className="marquee"><span>Python Django developer batch starts 18<span class="supertext">th</span> Jan, '21 - Apply Now!</span></div>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header style={{color: '#797979', borderBottom: '0 none'}}closeButton>
                    {/* <span>Fill in all the details carefully</span> */}
                </Modal.Header>
                <Modal.Body style={ModalStyle}>
                            <h2><strong>Enrollment Form</strong></h2>
                            <span style={{marginBottom: '2rem'}}>Fill in all the details carefully</span>
                            <form onSubmit={this.submitHandler} className="form-elements">
                            
                            <div className="field__div">
                                <input type="text" className={!this.state.nameValid ? 'is-invalid form-control': 'form-control'} name="name" placeholder="Name*" onChange={this.fieldChangeHandler} value={this.state.name}/>
                                {!this.state.nameValid? <span className="span-invalid">This field is mandatory.</span>: ''}
                            </div>
                            <div className="field__div">
                                <input className={!this.state.emailValid ? 'is-invalid form-control' : 'form-control'} type="email" name="email" placeholder="Email*" onChange={this.fieldChangeHandler} value={this.state.email}/>
                                {!this.state.emailValid? <span className="span-invalid">Please enter a valid email address</span>: ''}
                            </div>
                            <div className="field__div">
                                <input className={!this.state.phoneValid ? 'is-invalid form-control' : 'form-control'} type="text" name="phone" placeholder="Phone Number*" onChange={this.fieldChangeHandler} value={this.state.phone}/>
                                {!this.state.phoneValid? <span className="span-invalid">Please enter a valid phone number</span>: ''}
                            </div>
                            <div className="field__div">
                                <select name="category" style={{paddingRight: '1rem'}} className={!this.state.categoryValid ? 'is-invalid form-control': 'form-control'}  value={this.state.level} onChange={this.fieldChangeHandler}>
                                    <option value="" disabled selected>Category*</option>
                                    <option value={2}>Pre-final year</option>
                                    <option value={1}>Final year</option>
                                    <option value={3}>Fresher</option>
                                    <option value={4}>Professional</option>
                                </select>
                                {!this.state.categoryValid ? <span className="span-invalid">This field is mandatory</span>: ''}
                            </div>
                            <div className="field__div">
                                <select name="course" className={!this.state.courseValid ? 'is-invalid form-control': 'form-control'} value={this.state.course} onChange={this.fieldChangeHandler}>
                                    <option value="" disabled selected>Course*</option>    
                                    <option value={0}>Python-Django Developer</option>
                                    <option value={1}>Ui/UX Design</option>
                                </select>
                                {!this.state.courseValid ? <span className="span-invalid">This field is mandatory</span>: ''}
                            </div>
                            <div className="field__div">
                                <textarea name="why" className={!this.state.whyValid ? 'is-invalid form-control': 'form-control'}  value={this.state.why} placeholder="Why do you want to join this course*" rows="7" onChange={this.fieldChangeHandler}></textarea>
                                {!this.state.whyValid ? <span className="span-invalid">This field is mandatory</span>: ''}
                            </div>
                            <div className="field_div">
                               <button style={{width: '100%', padding: '0.5rem'}} className="theme-btn">{this.state.buttonText}</button>
                            </div>
                        </form>
                </Modal.Body>
            </Modal>
            <Modal show={this.state.ModalSentShow} onHide={this.handleCloseSent}>
                <Modal.Body style={ModalStyle}>
                        {!this.state.emailSuccess ? 
                            <>                        
                                <img style={{width: '20%'}} src={SentMailPNG} alt="SentMailPNG" />
                                <h2>Sorry about this...</h2>
                                <span>Our server is experiencing problems. Please come back in a while...</span>
                            </> : 
                            <>
                                <img style={{width: '20%'}} src={SentMailPNG} alt="SentMailPNG" />
                                <h2>Thank you for enrolling!</h2>
                                <span>We will get back to you shortly.</span>
                            </>}
                </Modal.Body>
                <Modal.Footer>
                <button className="theme-hollow-btn grayed" onClick={this.handleCloseSent}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
    
}

export default Banner