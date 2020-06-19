// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import images
import logo from './../logo.svg';
import bg from '../Images/main_bg2.jpg'

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
                            This website was created using React <br/>
                            and was designed by me
                        </p>
                        <a className='Content-subtitle' 
                            href='https://github.com/LKhyeon/lk-website' 
                            target="_blank"
                            rel="noopener noreferrer"> 
                            SOURCE CODE <br/>
                            <br/>
                            <br/>
                        </a>
                        <img src={bg} className="logo-icon" alt="Attributing to the designer" />
                        <a className='Content-subtitle'
                            href="http://www.freepik.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <br/>
                            Link to the image on the HOME page 
                            (designed by pikisuperstar)<br/>
                            <br/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;
