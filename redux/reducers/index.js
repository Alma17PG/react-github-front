import { combineReducers } from 'redux';

import user from './user';
import repository from './repository';

export default combineReducers({
  user,
  repository,
});
