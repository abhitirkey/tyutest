import React from 'react'
import Logo from './Logo/Logo'
import { FaTimes, FaBars } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './header.scss'

class Header extends React.Component {
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
                        <Link className="navlink" to='/courses'><li>Courses</li></Link>
                        <Link className="navlink" to='/hire'><li>Hire From Us</li></Link>
                        <Link className="navlink" to='/isa'><li>Fees & ISA</li></Link>
                        <Link className="navlink" to='/faq'><li>FAQ</li></Link>
                        <li><a href="https://login.tyutee.com" target="_blank" rel="noreferrer" className="login-btn themeLink">Login</a></li>
                    </ul>
                    <div className="menuIcon" onClick={this.showNav}><FaBars/></div>
                </nav>
        )
    }
}

export default Header
