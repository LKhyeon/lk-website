// No lodash-es. So not being used as of moment.
// import BaseReactComponent from './BaseReactComponent';
import React from 'react';

// Import Styles
import './App.css';

// Import Images
import logo from './logo.svg';

// Import other pages
import SideMenu from './components/SideMenu';

class App extends React.Component{

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

export default App;
