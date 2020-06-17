// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import images
import logo from './../logo.svg';

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="App">
                <SideMenu/>
                <TopNavigation/>
                <div className = "Content">
                    <div className="Content-block">
                        <p className='Content-title'> 
                            ABOUT THIS PAGE
                        </p>
                        <img src={logo} className="Content-logo" alt="logo" />
                        <p className='Content-subtitle'>
                            This website was created using React
                        </p>
                        <a className='Content-subtitle' 
                            href='https://github.com/LKhyeon/lk-website' 
                            target="_blank"
                            rel="noopener noreferrer"> 
                            SOURCE CODE
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
