import { combineReducers } from 'redux'
import alerts from './alerts';
import auth from './auth';
import feed from './feed';
import user from './user';

const rootReducer = combineReducers({
  alerts,
  auth,
  feed,
  user,
})

export default rootReducer;
