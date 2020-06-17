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
                <TopNavigation/>
                <div className='Content'>
                    <header className="Content-block">
                        <p className='Content-title'> 
                            EDUCATION 
                        </p>
                        <p> 
                            Honours Bachelors of Science at University of Toronto
                            (with distinction)  <br/>
                            Computer Science 
                            (focus in Artificial Intelligence)
                        </p>
                        <p className='Content-title' id='resume_skills'> 
                            <br/>
                            SKILLS 
                        </p>
                        <p> 
                            Python, Java, C, JavaScript, Object Oriented Programming, <br/>
                            Web development (HTML, CSS), React, database (SQL) <br/> 
                            Machine Learning (PyTorch), Numpy, Agile
                        </p>
                        <p className='Content-title'> 
                            <br/>
                            WORK EXPERIENCE
                        </p>
                        <p className='Content-subtitle'>
                            NOV 2018 - CURRENT
                        </p>
                        <p> 
                            Math and computer science tutor at a private academy 
                        </p>
                        <p className='Content-subtitle'>
                            JAN 2020 - APR 2020
                        </p>
                        <p>
                            Teaching Assistance at University of Toronto for CSC148 <br/>
                            (Introduction to Computer Science) 
                        </p>
                        <p className='Content-title'> 
                            <br/>
                            AWARDS
                        </p>
                        <p> 
                            (NOV 2016) The Chancellor's Scholarships
                        </p>
                        <a className='Content-title' href='./projects' > 
                            <br/>
                            PROJECTS 
                        </a>
                        <p> (Click for more details) </p>
                        <p className='Content-subtitle'>
                            Optical Character Recognition
                        </p>
                        <p> 
                            Personal project developed using python. <br/>
                            Number of image processing and machine learning techniques <br/>
                            were used to convert characters on an image to a text file. 
                        </p>
                        <p className='Content-subtitle'>
                            PetLabs
                        </p>
                        <p> 
                            An webgame simple webgame inspired by “Cookie-clicker” and “Tamagotchi”. <br/>
                            It was developed with a team of 3 people using Agile development process. <br/>
                            MongoDB was used to store the user data, and admins have access to these database. <br/>
                            Implemented using Javascript, React, NodeJS, yarn, and Express.js.
                        </p>
                        <p className='Content-subtitle'>
                            Course Evaluation App
                        </p>
                        <p> 
                            An android app project developed with a team of 6 people using Agile development process. <br/>
                            AndroidStudio was used to develop both the user interface and the database.
                        </p>
                        <p className='Content-subtitle'>
                            Hands for Mental Health
                        </p>
                        <p> 
                            HCI/UXD project developed with a team of 5 people.<br/>
                            Background research, interviews, surveys, and monitoring were used to identify our target population’s needs. <br/>
                            To correctly meet target population’s needs, we tested different versions of our model with the help of volunteers.
                        </p>
                    </header>
                </div>
            </div>
        );
    }
}

export default ExtraPage;