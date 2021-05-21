import { combineReducers } from 'redux';

import posts from './posts';
import charts from './charts';
import login from './login';

export default combineReducers({
  posts,
  charts,
  login
});