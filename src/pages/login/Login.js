import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, Button, FormGroup, Input, Row, Col, Form } from 'reactstrap';
import styled from './Login.module.scss';
import Widget from '../../components/Widget/Widget';
import { loginUser, logoutUser } from '../../actions/login';


const Login = ({
  loginUser,
  isAuthenticated,
  isFetching,
  errorMessage,
  location
}) => {
  const [login, setLogin] = useState('user');
  const [password, setPassword] = useState('password');

  const changeLogin = (event) => {
    setLogin(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const doLogin = (e) => {
      loginUser({
        login: login,
        password: password,
      }
    );
    e.preventDefault();
  };

  const { from } = location.state || {
    from: { pathname: '/app' },
  };

  if (isAuthenticated) {
    // cant access login page while logged in
    return <Redirect to={from} />;
  }

  return (
    <div className={styled.root}>
      <Row>
        <Col
          xs={{ size: 10, offset: 1 }}
          sm={{ size: 6, offset: 3 }}
          lg={{ size: 4, offset: 4 }}
        >
          <p className="text-center">React Dashboard</p>
          <Widget className={styled.widget}>
            <h4 className="mt-0">Login to your Web App</h4>
            <p className="fs-sm text-muted">
              User your username and password to sign in
              <br />
              Don&#39;t have an account? Sign up now!
            </p>
            <Form className="mt" onSubmit={doLogin}>
              {errorMessage && (
                <Alert size="sm" color="danger">
                  {errorMessage}
                </Alert>
              )}
              <FormGroup className="form-group">
                <Input
                  className="no-border"
                  value={login}
                  onChange={changeLogin}
                  type="text"
                  required
                  name="username"
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="no-border"
                  value={password}
                  onChange={changePassword}
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <div className="d-flex justify-content-between align-items-center">
                <a href="/" className="fs-sm">
                  Trouble with account?
                </a>{' '}
                {/* eslint-disable-line */}
                <div>
                  <Link to="/register" >
                    Create an account
                  </Link>
                  <Button color="success" size="sm" type="submit">
                    {isFetching ? 'Loading...' : 'Login'}
                  </Button>
                </div>
              </div>
            </Form>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.login.isFetching,
    isAuthenticated: state.login.isAuthenticated,
    errorMessage: state.login.errorMessage,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => {
    dispatch(loginUser(creds));
  },
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
