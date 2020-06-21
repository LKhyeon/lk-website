// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import images
import logo from '../Images/LKIM_LOGO.png'

// Import other pages

class ExtraPage extends React.Component {
    render() {
        return(
            <div className="App">
                <div className = "Content">
                    <div className="Content-block">
                        <p className='Content-title'> 
                            EXTRA INFORMATION
                        </p>
                        <img src={logo} className="logo-icon" alt="logo" />
                        <p className='Content-subtitle'>
                            There is nothing on this page right now ...
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExtraPage;
