// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import images
import lol from '../Images/ha.png'

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';

class ExtraPage extends React.Component {
    render() {
        return(
            <div className="App">
                <SideMenu/>
                <TopNavigation/>
                <div className = "Content">
                    <div className="Content-block">
                        <img src={lol} className="Content-logo" alt="logo" />
                        <p className='Content-subtitle'>
                            There is nothing in this page right now ...
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExtraPage;
