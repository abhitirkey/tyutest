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

function App() {
    return (
        <BrowserRouter>
        <div className="AppContainer">
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route path='/isa' exact component={ISA_Page}/>
                <Route path='/contact-us' exact component={ContactUs}/>
                <Route path='/terms-of-use' exact component={TermsOfUse}/>
                <Route path='/privacy-policy' exact component={PrivacyPolicy}/>
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;
