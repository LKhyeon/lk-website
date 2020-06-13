// No lodash-es. So not being used as of moment.
// import BaseReactComponent from './BaseReactComponent';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import other pages
import RedirectComponent from './components/Redirect';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import Resume from './components/Resume';
import ProjectPage from './components/ProjectPage';
import ExtraPage from './components/ExtraPage';

class App extends React.Component{
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/" exact component={RedirectComponent} />
              <Route path="/main" exact component={MainPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/projects" exact component={ProjectPage} />
              <Route path="/extra" exact component={ExtraPage} />
          </Switch>
      </Router>
    );
  }
}

export default App;
