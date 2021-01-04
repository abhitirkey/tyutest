import React from 'react'
import Logo from './Logo/Logo'
import { FaTimes, FaBars } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './header.scss'

class HomePageHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            displayDropDownNav: false
        }
        this.showNav = this.showNav.bind(this);
        this.hideNav = this.hideNav.bind(this);
    }

    showNav = () => {
        this.setState({
            displayDropDownNav: true
        })
    }

    hideNav = () => {
        this.setState({
            displayDropDownNav: false
        })
    }

    render(){

        let navMenuClass = 'NavMenuList DropDownInActive';
        if(this.state.displayDropDownNav){
            navMenuClass = 'NavMenuList DropDownActive';
        }
            return (
                <nav className="NavContainer">
                    <Link to="/"><Logo /></Link>
                    <ul className={navMenuClass}>
                        
                        <li className="closeMenu" onClick={this.hideNav}><FaTimes/></li>
                        <li><a href="https://login.tyutee.com" target="_blank" rel="noreferrer" className="theme-hollow-btn grayed grayLink">Login</a></li>
                        <Link className="navlink" target="_blank" to='/contact-us'><li><button className="theme-hollow-btn grayed">Request a Demo</button></li></Link>
                        <Link className="navlink" target="_blank" to='/isa'><li><button className="theme-btn">Get Upskilled</button></li></Link>
                    </ul>
                    <div className="menuIcon" onClick={this.showNav}><FaBars/></div>
                </nav>
        )
    }
}

export default HomePageHeader
