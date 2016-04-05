'use strict';

import { CLOSE_ALERT } from '../actions/alerts';

const initState = null;

export function alerts(state=initState, action) {
  switch(actions.type) {
    case CLOSE_ALERT:
      return null;
    default:
      return state;
  }
}
