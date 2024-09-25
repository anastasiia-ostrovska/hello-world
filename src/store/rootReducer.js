import { combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';
import dialogsReducer from './reducers/dialogsReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  dialogs: dialogsReducer,
  auth: authReducer,
});

export default rootReducer;
