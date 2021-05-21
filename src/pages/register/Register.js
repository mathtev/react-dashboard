import React from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/login';

const Register = ({registerUser, isFetching, errorMessage}) => {
  const userData = {
    username: 'wlodek',
    password: '123334',
    email: 'colpepsi@wp.com'
  }
  return (
    <div>
      <button onClick={() => registerUser(userData)}>register</button>
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