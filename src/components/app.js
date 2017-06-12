import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import SignupContainer from '../containers/signupContainer';
import RisePress from './riseconf_2017';


// Top level router app
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <div>
        <Switch>
          <Route exact path="/" component={SignupContainer} />
          <Route path="/press/riseconf_2017" component={RisePress} />
          <Route path="/press" component={RisePress} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
