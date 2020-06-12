// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';

// Import other pages
import SideMenu from './SideMenu';

class ProjectPage extends React.Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                <SideMenu/>
                </header>
            </div>
        );
    }
}

export default ProjectPage;
