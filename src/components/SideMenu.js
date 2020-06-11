// Import core modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../css/sideMenuStyle.css';

// Import Images
import logo from '../Images/temp.png';

function SideMenu(props) {
    return(
        <div className="sidemenu">
            <Link to={'./MainPage'}>
                <input
                    type='image'
                    src={logo}
                    alt={'Home'} 
                />
            </Link>
            <Link to={'./aboutPage'}> About Me </Link>
            <Link to={'./projectPage'}> Projects </Link>
            <Link to={'./extraInfoPage'}> Extra </Link>
        </div>
    );
}

export default SideMenu;