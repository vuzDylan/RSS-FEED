'use strict';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function loginSuccess(index) {
  return {
    type: LOGIN_SUCCESS,
    index,
  };
}

function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function login(user) {
  return (dispatch, getState) => {
    const users = getState().user;
    const uIndex = users.map(u => u.username).indexOf(user.username);
    if (uIndex !== -1) {
      if (users[uIndex].password === user.password) {
        dispatch(loginSuccess(uIndex));
        sessionStorage.removeItem('current');
        sessionStorage.setItem('current', JSON.stringify(user));
        localStorage.removeItem('users');
        localStorage.setItem('users', JSON.stringify(getState().user));
        return;
      }
    }
    dispatch(loginFail('Username or password incorrect'));
  }
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem('current');
    dispatch(logoutSuccess());
  }
}

export function checkLogin() {
  return dispatch => {
    const user = sessionStorage.getItem('current');
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }
}
