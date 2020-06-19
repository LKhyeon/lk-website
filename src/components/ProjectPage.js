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
                        <p className='Content-subtitle' id='OCR'>
                            <br/>
                            Optical Character Recognition
                        </p>
                        <p> 
                            Personal project developed using python, Tensorflow, and OpenCV. <br/>
                            Using number of image processing techniques with OpenCV, <br/>
                            the input image is converted to an inverted binary image. <br/>
                            Various features from this binary image are extracted so that <br/>
                            neural networks could use them to make predictions on what the <br/>
                            characters (in the input) are supposed to be. <br/>
                            <br/>
                            Unfortunately, this first version of OCR does not have a good performance. <br/>
                            It manages to achieve 75% of accuracy if test input image contains fonts that <br/>
                            are similar to the ones in the training data, but the accuracy drops to 30% if <br/>
                            the fonts are totally different. <br/>
                            <br/>
                            I plan to come back to this project as the initial version was created <br/>
                            using very limited amount of training data and limited amount of knowledge <br/>
                            on machine learning. Now that I am more proficient in machine learning and <br/>
                            now that there are large amount of data required for OCR online, I believe <br/>
                            I can create an OCR that will out-perform my original version by a large margin. <br/>
                        </p>
                        <p className='Content-subtitle' id='PetLabs'>
                            <br/>
                            PetLabs
                        </p>
                        <p> 
                            An webgame simple webgame inspired by “Cookie-clicker” and “Tamagotchi”. <br/>
                            It was developed with a team of 3 people using Agile development process. <br/>
                            The front end is created mainly using React and NodeJS and the backend is created <br/>
                            mainly using mongoDB and Express.JS. <br/>
                            <br/>
                            Since this is a webgame, we implemented account system where a user could create <br/>
                            and login. To do this properly, we implemented cookies to differentiate each users <br/>
                            from each other. Also, because there are multiple users, there needed to be admins <br/>
                            who could monitor the activities of the users and fix any problems users could face. <br/>
                            Therefore, we create separate interfaces: one for the user and another for the admin. <br/>
                            MongoDB was used to store user-specific data and data required to operate the game. <br/>
                            <br/>
                            This simple webgame was deployed onto Heroku.<br/>
                            <a href='https://evening-beyond-09613.herokuapp.com/login/' 
                                target="_blank" rel="noopener noreferrer">
                                https://evening-beyond-09613.herokuapp.com/login 
                            </a>
                        </p>
                        <p className='Content-subtitle' id='CourseEvalApp'>
                            <br/>
                            Course Evaluation App
                        </p>
                        <p> 
                            An android app project developed with a team of 6 people using Agile development process. <br/>
                            AndroidStudio was used to develop both the user interface and the database.<br/>
                            Within the team, I was part of the front-end development. I was charged with <br/>
                            creating an interface and creating objects that could connect the front-end <br/>
                            and the back-end. As for the back-end, we fetched course data from official website <br/>
                            from University of Toronto and created instances of course objects for each one of <br/>
                            the courses. While we created an app for the android, we did not deploy the app. <br/> 
                        </p>
                        <p className='Content-subtitle' id='Hands4MentalHealth'>
                            <br/>
                            Hands for Mental Health
                        </p>
                        <p> 
                            HCI/UXD project developed with a team of 5 people. Background research, interviews, <br/>
                            surveys, and monitoring were used to identify our target population’s needs.  To correctly <br/>
                            meet target population’s needs, we tested different versions of our model with the help of 
                            volunteers. <br/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;
