// Requred imports
import React from 'react';
// import { Link } from 'react-router-dom';

// Import Styles
import '../css/baseStyle.css';
import '../css/contentStyle.css';
import '../css/topNavigationStyle.css';
import '../css/iconStyle.css';

// Import Images
import geometric from '../Images/main_bg.jpg'
import py_icon from '../Images/Python_icon_300_gold.png'
import java_icon from '../Images/java_300_gold.png'
import c_icon from '../Images/C_logo_300_gold.png'
import js_icon from '../Images/JS_300_gold.png'
import numpy_icon from '../Images/numpy_icon_gold.png'
import latex_icon from '../Images/LaTeX_logo_white.png'
import react_logo from '../Images/react_logo.png'
import pytorch_logo from '../Images/pytorch_white.png'
import git_logo from '../Images/git_logo_white.png'
import postgresql_logo from '../Images/postgresql_white.png'
import github_logo from '../Images/GitHub_gold.png'
import linkedin_logo from '../Images/linkedin_gold2.png'

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
                <div className='Content'>
                    <div className='Content-block'>
                        <p className='Content-title'> 
                            ABOUT ME
                        </p>
                        <p> 
                            Name: Luke Kim <br/>
                            Language: English, Korean <br/>
                            Email: lkdh97@gmail.com <br/>
                        </p>
                        <p className='Content-title'> 
                            LINKS <br/>
                        </p>
                        <a href='https://github.com/LKhyeon/' target="_blank"
                            rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={github_logo} 
                                alt = 'GitHub language icon'
                            />
                        </a>
                        <a href='https://www.linkedin.com/in/luke-kim-51973417b/' target="_blank"
                            rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={linkedin_logo} 
                                alt = 'Linked language icon'
                            />
                        </a>
                    </div>
                    <div className="Content-block">
                        <p className='Content-title'> 
                            QUICK OVERVIEW <br/>
                            <br/>
                        </p>
                        <p className='Content-subtitle'> {/*href='./Resume#resume_skills'>*/} 
                            PROGRAMMING LANGUAGES <br/>
                            <br/>
                        </p>
                        <a href='https://www.python.org/' target="_blank"
                            rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={py_icon} 
                                alt = 'python language icon'
                            />
                        </a>
                        <a href='https://www.java.com/en/' target='_black'
                            rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={java_icon} 
                                alt = 'java language icon'
                            />
                        </a>
                        <a href='https://en.wikipedia.org/wiki/C_(programming_language)' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={c_icon} 
                                alt = 'C language icon'
                            />
                        </a> 
                        <a href='https://en.wikipedia.org/wiki/JavaScript' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='language-icon' 
                                src={js_icon} 
                                alt = 'JS language icon'
                            />
                        </a> 
                    </div>
                    <div className="Content-block">
                        <p className='Content-subtitle'> {/*href='./Resume#resume_skills'>*/} 
                            PROGRAMMING SKILLS<br/>
                            <br/>
                        </p>
                        <a href='https://numpy.org/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={numpy_icon} 
                                alt = 'Numpy icon'
                            />
                        </a>
                        <a href='https://pytorch.org/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={pytorch_logo} 
                                alt = 'Pytorch icon'
                            />
                        </a>
                        <a href='https://www.postgresql.org/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={postgresql_logo} 
                                alt = 'PostgreSQL icon'
                            />
                        </a>
                        <a href='https://reactjs.org/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={react_logo} 
                                alt = 'React icon'
                            />
                        </a>
                        <a href='https://www.latex-project.org/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={latex_icon} 
                                alt = 'LaTeX icon'
                            />
                        </a>
                        <a href='https://git-scm.com/' 
                            target='_black' rel="noopener noreferrer">
                            <img 
                                className='package-icon' 
                                src={git_logo} 
                                alt = 'Git icon'
                            />
                        </a>
                        {/* <ul>
                            <li>
                                Machine Learning <br/>
                                (Tensorflow, PyTorch)
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;
