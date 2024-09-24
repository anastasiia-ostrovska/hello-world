import { combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  auth: authReducer,
});

export default rootReducer;
