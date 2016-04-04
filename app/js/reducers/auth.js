'use strict';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/auth";

const initState = {
  login: false,
  current: null,
};

export default function auth(state=initState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        login: true,
        current: action.index,
      };
    case LOGOUT_SUCCESS:
      return {
        login: false,
        current: null,
      };
    default:
      return state;
  }
}
