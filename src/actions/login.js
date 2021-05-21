export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

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

export function logoutUser() {
  return dispatch => {
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
  
  return dispatch => {
    dispatch(requestLogin(creds));
    if(process.env.NODE_ENV === "development") {
    return fetch('http://localhost:4000/login', config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          dispatch(loginError(user.message));
          return Promise.reject(user);
        }
        localStorage.setItem('id_token', user.id_token);
        dispatch(receiveLogin(user));
        return Promise.resolve(user);
      })
      .catch(err => console.error('Error: ', err));
    } else {
      localStorage.setItem('id_token', 'mytoken');
      dispatch(receiveLogin('mytoken'))
    }
  };
}