import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './Components/app-global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import CommonHeaderRoutes from './Routes/CommonHeaderRoutes' // Make a component including all pages having a common header/navbar

import HomePageHeader from './Components/Header/HomePageHeader'

import Homepage from './Components/Pages/Homepage/Homepage'

import Footer from './Components/Footer/Footer'

function App() {

    return (
        // Here we include the main components into the app and define their routes. Each of these components represents a different page.
        <BrowserRouter>
        <div className="AppContainer">
            <Switch>
                <Route path='/' exact>
                    <HomePageHeader/>
                    <Homepage/>
                </Route>
                <Route exact component={CommonHeaderRoutes}/>
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;
