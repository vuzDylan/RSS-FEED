'use strict';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/auth";

const initState = {
  login: false,
  current: null,
};

function login(state, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
}

function current(state, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return action.index;
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
}

export default function auth(state=initState, action) {
  return {
    login: login(state.login, action),
    current: current(state.current, action),
  }
}
