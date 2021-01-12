import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer/Footer'

import Homepage from './Components/Homepage/Homepage'
import ISA_Page from './Components/ISA_Page/ISA_Page'
import ContactUs from './Components/ContactUs/ContactUs'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './Components/TermsOfUse/TermsOfUse'

import FeesAndISA from './Components/Pages/FeesAndISA/FeesAndISA'
import FAQ from './Components/Pages/FAQ/FAQ'
import BecomeAMentor from './Components/Pages/BecomeAMentor/BecomeAMentor'
import Careers from './Components/Pages/Careers/Careers'
import Courses from './Components/Pages/Courses/Courses'
import HireFromUs from './Components/Pages/HireFromUs/HireFromUs'


import ComingSoon from './Components/Pages/ComingSoon/ComingSoon'

function App() {
    return (
        <BrowserRouter>
        <div className="AppContainer">
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route key="isa" path='/isa' exact component={ISA_Page}/>
                <Route key="enrollment-form" path='/isa/enrollment-form' exact component={ISA_Page}/>
                <Route path='/contact-us' exact component={ContactUs}/>
                <Route path='/terms-of-use' exact component={TermsOfUse}/>
                <Route path='/privacy-policy' exact component={PrivacyPolicy}/>
                <Route path='/fees-and-isa' exact component={FeesAndISA}/>
                <Route path='/faq' exact component={FAQ}/>               
                <Route path='/become-a-mentor' exact component={BecomeAMentor}/>               
                <Route path='/careers' exact component={Careers}/>               
                <Route path='/courses' exact component={Courses}/>               
                <Route path='/hire-from-us' exact component={HireFromUs}/>               
                <Route path="/coming-soon" exact component={ComingSoon}/>
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;
