import { combineReducers } from 'redux'
import alerts from './alerts';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  alerts,
  auth,
  user,
})

export default rootReducer;
