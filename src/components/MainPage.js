// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';

// Import Images
import logo from './../logo.svg';

// Import other pages
import SideMenu from './SideMenu';

class MainPage extends React.Component {

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <SideMenu/>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
        );
    }
}

export default MainPage;
