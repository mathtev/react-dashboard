import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Col, Form, FormGroup, Input, Row, Alert, Button } from 'reactstrap';
import { registerUser } from '../../actions/login';
import Widget from '../../components/Widget/Widget';

const Register = ({registerUser, isFetching, errorMessage}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const doRegister = (e) => {
    registerUser({
        username,
        password,
        email
      }
    );
    e.preventDefault();
  };

  return (
    <div>
      <Row>
        <Col>
          <Widget>
            <h4 className="mt-0">Register</h4>
            <Form className="mt" onSubmit={doRegister}>
              {errorMessage && (
                <Alert size="sm" color="danger">
                  {errorMessage}
                </Alert>
              )}
              <FormGroup className="form-group">
                <Input
                  className="no-border"
                  value={username}
                  onChange={changeUsername}
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
              <FormGroup>
                <Input
                  className="no-border"
                  value={email}
                  onChange={changeEmail}
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                />
              </FormGroup>
              <div className="d-flex justify-content-between align-items-center">
                {/* eslint-disable-line */}
                <div>
                  <Button color="success" size="sm" type="submit">
                    {isFetching ? 'Loading...' : 'Register'}
                  </Button>
                </div>
              </div>
            </Form>
          </Widget>
        </Col>
      </Row>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    isFetching: state.login.isFetching,
    errorMessage: state.login.errorMessage,
  };
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => {
    dispatch(registerUser(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);