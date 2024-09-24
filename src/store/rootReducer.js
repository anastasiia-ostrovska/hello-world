import { combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
});

export default rootReducer;
