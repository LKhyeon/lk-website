// Requred imports
import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import '../css/topNavigationStyle.css';

// Import Images

class topNavigation extends React.Component {

    render() {
        return (
            <div className = 'tn-container'>
                <div className = 'top-nav'>
                    <Link to={'./main'}> Home </Link>
                    <Link to={'./about'}> About </Link>
                    <Link to={'./resume'}> Resume </Link>
                    <Link to={'./projects'}> Projects </Link>
                    <Link to={'./extra'}> Extra </Link>
                </div>
            </div>
        );
    }
}

export default topNavigation;
