import { combineReducers } from 'redux';

import posts from './posts';
import charts from './charts';

export default combineReducers({
  posts,
  charts
});