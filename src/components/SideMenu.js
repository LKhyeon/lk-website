// Import core modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../css/sideMenuStyle.css';
import '../css/iconStyle.css';

// Import Images
import logo from '../Images/LKIM_LOGO.png';
import close_nav from '../Images/close_nav_temp.png';
import open_nav from '../Images/hamburger_icon_white.png';

class SideMenu extends React.Component{

    state = {
        navClass: "closed-nav"
    }
    
    close = () => {
        this.setState({navClass: "closed-nav"})
    } 

    open = () => {
        this.setState({navClass: "navigation"})
    } 

    render() {
        // Variables required for the navigation.
        let open_btn
        let close_btn;
        let icon;
        let link_home;
        let link_about;
        let link_resume;
        let link_projects;
        let link_extra;

        // Set variables depending on whether or not the navigation is open.
        if (this.state.navClass === "navigation") {
            close_btn = <img 
                src = {close_nav}
                className = "close-button"
                alt =  "A button to close the navigation."
                onClick = {this.close} />;
            icon = <img src={logo} className='logo-side' alt='Main Logo'/>
            link_home = <Link to='./main'> HOME </Link>;
            link_about = <Link to='./about'> ABOUT </Link>;
            link_resume = <Link to='./resume'> RESUME </Link>;
            link_projects = <Link to='./projects'> PROJECTS </Link>;
            link_extra = <Link to='./extra'> EXTRA </Link>;
        } else {
            open_btn = <img 
                src = {open_nav}
                className = "open-button"
                alt =  "A button to open the navigation."
                onClick = {this.open} />;
        }
        return(
            <div className="navigation">
                {open_btn}
                {close_btn}
                {icon}
                {link_home}
                {link_resume}
                {link_projects}
                {link_extra}
                {link_about}
            </div>
        );
    }
}

export default SideMenu;