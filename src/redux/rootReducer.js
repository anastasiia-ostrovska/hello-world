import { combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
});

export default rootReducer;
