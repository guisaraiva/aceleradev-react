import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import content from './content/reducer';
import app from './app/reducer';

export default combineReducers({
  auth,
  user,
  content,
  app,
});

