import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import SignupContainer from '../containers/signupContainer';
import RisePress from './riseconf_2017';

// Fallback is just a blank page at the moment
const FallBack = (props) => {
  return <div />;
};

// Top level router app
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={SignupContainer} />
          <Route path="/press" component={RisePress} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
