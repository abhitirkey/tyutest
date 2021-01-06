import React, { Component } from 'react'
// import Alert from 'react-bootstrap/Alert'
// import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        submitDisabled: false
    }

    fieldChangeHandler = async ({ target }) => {

        const { name, value } = target;

        await this.setState({
            [name] : value
        });
    }

    submitHandler = (e) => {
        const API_PATH = 'https://194.59.164.43/contact-mail/index.php';
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(error => console.log(error));
    }

    render() {

        return (
            <div className="contact-form-container">
                <form onSubmit={this.submitHandler} className="form-elements">
                        <input type="text" name="name" placeholder="Name*" onChange={this.fieldChangeHandler} value={this.state.name}/>
                        <div style={{display:'flex', flexDirection: 'column'}}>
                            {/* {emailSpan} */}
                            <input className={this.emailClass} type="email" name="email" placeholder="Email*" onChange={this.fieldChangeHandler} value={this.state.email}/>
                        </div>
                        <input type="text" name="phone" placeholder="Phone Number" onChange={this.fieldChangeHandler} value={this.state.phone}/>
                        <input type="text" name="subject" placeholder="Subject" onChange={this.fieldChangeHandler} value={this.state.subject}/>
                        <textarea name="message" placeholder="Message*" rows="7" onChange={this.fieldChangeHandler} value={this.state.message}/>
                        {/* <Alert show={this.state.alertShow} variant={this.state.alertType}>
                            <Alert.Heading>How's it going?!</Alert.Heading>
                            <p>{this.state.alertMessage}</p>
                            <hr />
                            <div className="d-flex justify-content-end">
                            {this.state.alertType !== 'success' && <Button onClick={() => this.setState({alertShow: false})}>Close</Button>}
                            </div>
                        </Alert> */}
                        <button className="theme-btn" disabled={this.state.submitDisabled}>Submit</button>
                </form>
            </div>
        );
    }
}
