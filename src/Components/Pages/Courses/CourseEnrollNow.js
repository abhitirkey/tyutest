import React, {Component} from 'react'
import EnrollmentForm from '../../Modals/EnrollmentForm/EnrollmentForm'

class CourseEnrollNow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEnrollmentForm : false
        };
    }

    showEnrollmentForm = async () => {
        await this.setState({
            showEnrollmentForm: true
        })
    }

    hideEnrollmentForm = async () => {
        await this.setState({
            showEnrollmentForm: false
        });
    }

    render () {
        return (
            <>
                <div className="CourseEnrollNow">
                <h3 className="boldText">Become a Python - Django Developer Now!</h3>
                <button className="theme-btn" onClick={this.showEnrollmentForm}>Enroll Now</button>
                </div>
                <EnrollmentForm showEnrollmentForm={this.state.showEnrollmentForm} hideForm={this.hideEnrollmentForm}/>
            </>
        );       
    }
}

export default CourseEnrollNow
