import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { logoutUser } from '../actions/login';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

import '../styles/theme.scss';
import Layout from './Layout/Layout.js';

const PrivateRoute = ({ logout, component, ...rest }) => {
  if (!Login.isAuthenticated(localStorage.getItem('id_token'))) {
    logout();
    return <Redirect to="/login" />;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
};

const App = (props) => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
          <PrivateRoute
            path="/app"
            logout={props.logoutUser}
            component={Layout}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
