// Import core modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../css/sideMenuStyle.css';

// Import Images
import logo from '../Images/temp.png';
import close_nav from '../Images/close_nav_temp.png';
import open_nav from '../Images/hamburger_icon_white.png';

class SideMenu extends React.Component{

    state = {
        navClass: "navigation"
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
        let link_about;
        let link_projects;
        let link_extra;

        // Set variables depending on whether or not the navigation is open.
        if (this.state.navClass === "navigation") {
            close_btn = <img 
                src = {close_nav}
                className = "close-button"
                alt =  "A button to close the navigation."
                onClick = {this.close} />;
            icon = <Link to={'./main'}>
                        <input
                            type='image'
                            src={logo}
                            alt={'Home'} 
                        />
                    </Link>;
            link_about = <Link to={'./about'}> About Me </Link>;
            link_projects = <Link to={'./projects'}> Projects </Link>;
            link_extra = <Link to={'./extra'}> Extra </Link>;
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
                {link_about}
                {link_projects}
                {link_extra}
            </div>
        );
    }
}

export default SideMenu;