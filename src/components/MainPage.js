// Requred imports
import React from 'react';
// import { Link } from 'react-router-dom';

// Import Styles
import '../css/baseStyle.css';
import '../css/topNavigationStyle.css';

// Import Images
import logo from './../logo.svg';
import geometric from '../Images/main_bg.jpg'

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';

class MainPage extends React.Component {

    render() {
        return (
            <div className="App">
                <SideMenu/>
                <TopNavigation/>
                <img className ='bg-img' src = {geometric} alt="background" />
                {/* Anything that overlays over the background falls here.*/}
                <div className = "Content">
                    <header className="Content-header">
                    <img src={logo} className="Content-logo" alt="logo" />
                    <p>
                        This website is being worked on right now ...
                    </p>
                    <a
                        className="Content-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default MainPage;
