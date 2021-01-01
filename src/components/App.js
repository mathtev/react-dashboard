import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import '../styles/theme.scss';
import Layout from './Layout/Layout.js';


const App = (props) => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/app" component={Layout} />
        </Switch>
      </HashRouter>
    </div>
  );
}


export default App;
