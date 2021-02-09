import React from 'react'
import Logo from './Logo/Logo'
import { FaTimes, FaBars, FaChevronDown } from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './header.scss'

class CommonHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            displayDropDownNav: false,
            displayCourseMenu: false
        }
        this.showNav = this.showNav.bind(this);
        this.hideNav = this.hideNav.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
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

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside = async (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            await this.setState({
                displayCourseMenu: false
            })
        }
    }

    toggleCourseMenu = () => {
        this.setState(prevState => ({
                displayCourseMenu: !prevState.displayCourseMenu
        }));
    }

    render(){

        let navMenuClass = 'NavMenuList DropDownInActive ISA';
        if(this.state.displayDropDownNav){
            navMenuClass = 'NavMenuList DropDownActive ISA';
        }

        let CoursesMenuClass = 'CoursesMenuItem';
        let CoursesDropDownClass = 'CoursesDropDown';
        if(this.state.displayCourseMenu){
            CoursesMenuClass += ' MenuItemSelected';
            CoursesDropDownClass += ' visible';
        }
            return (
                <nav className="NavContainer">
                    <Link to="/"><Logo /></Link>
                    <ul className={navMenuClass}>
                        <li className="closeMenu" onClick={this.hideNav}><FaTimes/></li>
                        <li ref={this.setWrapperRef} className={CoursesMenuClass} onClick={this.toggleCourseMenu}>
                            <button className="noStyleBtn">Courses <FaChevronDown/></button>
                            <ul className={CoursesDropDownClass}>
                                <Link to='/courses/python-django-developer'><li>Python-Django Developer</li></Link>
                                <Link to='/courses/ui-ux-design'><li>UI/UX Design</li></Link>
                            </ul>                          
                        </li>
                        <Link className="navlink" to='/hire-from-us'><li>Hire From Us</li></Link>
                        <Link className="navlink" to='/fees-and-isa'><li>Fees & ISA</li></Link>
                        <Link className="navlink" to='/faq'><li>FAQ</li></Link>
                        <li><a href="https://login.tyutee.com" target="_blank" rel="noreferrer" className="login-btn themeLink">Login</a></li>
                    </ul>
                    <div className="menuIcon" onClick={this.showNav}><FaBars/></div>
                </nav>
        )
    }
}

export default CommonHeader
