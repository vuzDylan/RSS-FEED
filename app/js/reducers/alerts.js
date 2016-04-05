'use strict';

import { CLOSE_ALERT } from '../actions/alerts';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/auth';
import { ADD_USER_FAIL, ADD_FAVORITE_FAIL } from '../actions/user';

const initState = {
  message: null,
  className: "",
}

export default function alerts(state=initState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {message: action.last, className: "info"};
    case ADD_USER_FAIL:
    case LOGIN_FAIL:
    case ADD_FAVORITE_FAIL:
      return {message: action.error, className: "danger"};
    case CLOSE_ALERT:
      return {message: null, className: ""};
    default:
      return state;
  }
}
