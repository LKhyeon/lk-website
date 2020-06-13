// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/topNavigationStyle.css';

// Import images
import py_icon from '../Images/Python_icon_300_gold.png'

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="App">
                <SideMenu/>
                <TopNavigation/>
                <div className='Content'>
                    <header className="Content-block">
                        <p> SKILLS </p>
                        <img src={py_icon} />
                        <img src={py_icon} />
                    </header>
                </div>
            </div>
        );
    }
}

export default AboutPage;
