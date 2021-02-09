import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CommonHeader from '../Components/Header/CommonHeader'

import ISA_Page from '../Components/Pages/ISA_Page/ISA_Page'
import ContactUs from '../Components/Pages/ContactUs/ContactUs'
import PrivacyPolicy from '../Components/Pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from '../Components/Pages/TermsOfUse/TermsOfUse'

import FeesAndISA from '../Components/Pages/FeesAndISA/FeesAndISA'
import FAQ from '../Components/Pages/FAQ/FAQ'
import BecomeAMentor from '../Components/Pages/BecomeAMentor/BecomeAMentor'
import Careers from '../Components/Pages/Careers/Careers'
import Courses from '../Components/Pages/Courses/Courses'
import HireFromUs from '../Components/Pages/HireFromUs/HireFromUs'
import Blog from '../Components/Pages/Blog/Blog'
import ArticlePage from '../Components/Pages/Blog/ArticlePage'
import Testimonials from '../Components/Pages/Testimonials/Testimonials'

import ComingSoon from '../Components/Pages/ComingSoon/ComingSoon'

// Makes a component including all pages having a common header/navbar

const CommonHeaderRoutes = (props) => (
    <React.Fragment>
        <CommonHeader/>
        <Switch>
            <Route key="isa" path='/isa' exact component={ISA_Page}/>
            <Route key="enrollment-form" path='/isa/enrollment-form' exact component={ISA_Page}/>
            <Route path='/contact-us' exact component={ContactUs}/>
            <Route path='/terms-of-use' exact component={TermsOfUse}/>
            <Route path='/privacy-policy' exact component={PrivacyPolicy}/>
            <Route path='/fees-and-isa' exact component={FeesAndISA}/>
            <Route path='/faq' exact component={FAQ}/>               
            <Route path='/become-a-mentor' exact component={BecomeAMentor}/>               
            <Route path='/careers' exact component={Careers}/>               
            <Route key="python-django-developer" path='/courses/python-django-developer' exact component={Courses}/>               
            <Route key="ui-ux-design" path='/courses/ui-ux-design' exact component={Courses}/>               
            <Route path='/hire-from-us' exact component={HireFromUs}/>
            <Route path="/blog" exact component={Blog}/>            
            <Route path="/blog/article/:id" exact component={ArticlePage}/>               
            <Route path="/testimonials" exact component={Testimonials}/>               
            <Route path="/coming-soon" exact component={ComingSoon}/>
        </Switch>
    </React.Fragment>
);

export default CommonHeaderRoutes
