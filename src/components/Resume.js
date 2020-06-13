// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';

class ExtraPage extends React.Component {
    render() {
        return(
            <div className="App">
                <SideMenu/>
                <div className='Content'>
                    <header className="Content-header">
                        <p> Add Contents </p>
                    </header>
                </div>
                <TopNavigation/>
            </div>
        );
    }
}

export default ExtraPage;