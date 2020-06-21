// No lodash-es. So not being used as of moment.
// import BaseReactComponent from './BaseReactComponent';
import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

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
      <HashRouter hashType={"noslash"}>
          <Switch>
              <Route path="/" component={RedirectComponent} />
              <Route path="/#main" component={MainPage} />
              <Route path="/#about" component={AboutPage} />
              <Route path="/#resume" component={Resume} />
              <Route path="/#projects" component={ProjectPage} />
              <Route path="/#extra" component={ExtraPage} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
