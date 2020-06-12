// No lodash-es. So not being used as of moment.
// import BaseReactComponent from './BaseReactComponent';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import other pages
import RedirectComponent from './components/Redirect'
import MainPage from './components/MainPage';

class App extends React.Component{
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/" exact component={RedirectComponent} />
              <Route path="/main" exact component={MainPage} />
          </Switch>
      </Router>
    );
  }
}

export default App;
