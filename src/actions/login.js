export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

export function registerUserSuccess() {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
  };
}

export function registerUserFailure() {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    document.cookie = 'id_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(receiveLogout());
  };
}

export function loginUser(creds) {
  const config = {
    mode: 'cors',
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `login=${creds.login}&password=${creds.password}`,
  };

  return (dispatch) => {
    dispatch(requestLogin(creds));
    if (process.env.NODE_ENV === 'development') {
      return fetch('http://localhost:4000/login', config)
        .then((response) =>
          response.json().then((user) => ({ user, response }))
        )
        .then(({ user, response }) => {
          if (!response.ok) {
            dispatch(loginError(user.message));
            return Promise.reject(user);
          }
          localStorage.setItem('id_token', user.id_token);
          dispatch(receiveLogin('mytoken'));
          dispatch(receiveLogin(user));
          return Promise.resolve(user);
        })
        .catch((err) => console.error('Error: ', err));
    } else {
      localStorage.setItem('id_token', 'mytoken');
    }
  };
}

export const registerUser = (userData) => {
  const fetchConfig = {
    mode: 'cors',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
        addUser(
          email: "${userData.email}", 
          password: "${userData.password}", 
          username: "${userData.username}")  {
            id,
            username,
            email
          }
      }`,
    }),
  };
  return (dispatch) => {
    fetch('http://localhost:4000/graphql', fetchConfig)
      .then((response) =>
        response.json().then((responseJson) => ({
          responseJson,
          response,
        }))
      )
      .then(({ responseJson, response }) => {
        if (response.ok) {
          dispatch(registerUserSuccess());
          return Promise.resolve();
        } else {
          dispatch(registerUserFailure('Could not register user'));
          return Promise.reject();
        }
      });
  };
};

