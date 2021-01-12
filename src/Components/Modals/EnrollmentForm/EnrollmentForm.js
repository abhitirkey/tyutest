import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';
import SentMailPNG from './SentMail.png';
import MailErrorPNG from './MailError.png';
import axios from 'axios';

export class EnrollmentForm extends Component {

    constructor(props){
        super(props);
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

    componentDidUpdate = async (prevProps) => {
        // if(prevProps.showFormModal !== this.props.showFormModal){
        //     await this.setState({ showModal : true });
        // }

        // if(this.props.showEnrollmentForm){
        //     await this.setState({ showModal: true });
        // }
    }

    componentDidMount = async () => {
        if(this.props.showEnrollmentForm){
            await this.setState({ showModal: true });
        }
    }

    handleClose = async () => {
        // On closing the form modal
        await this.setState( {showModal: false} );
        this.props.formDisplayHandler(false);
    }

    handleCloseSent= async () => {
        await this.setState(this.initialState);
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
            this.setState({ formOK: true });
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
                                    <img style={{width: '20%'}} src={MailErrorPNG} alt="Mail Error" />
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
            </>
        )
    }
}

export default EnrollmentForm
