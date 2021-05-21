import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

import '../styles/theme.scss';
import Layout from './Layout/Layout.js';


const App = (props) => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/app" component={Layout} />
        </Switch>
      </HashRouter>
    </div>
  );
}


export default App;
