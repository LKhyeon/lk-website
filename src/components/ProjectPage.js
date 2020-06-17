// Requred imports
import React from 'react';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import images
import github_icon from '../Images/GitHub.png'

// Import other pages
import SideMenu from './SideMenu';
import TopNavigation from './TopNavigation';


class ProjectPage extends React.Component {
    render() {
        return(
            <div className="App">
                <SideMenu/>
                <TopNavigation/>
                <div className='Content'>
                    <div className="Content-block">
                        <p className='Content-title'> 
                            GitHub Link
                        </p>
                        <a href='https://github.com/LKhyeon/' target="_blank"
                            rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={github_icon} 
                                alt = 'Github icon'
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;
