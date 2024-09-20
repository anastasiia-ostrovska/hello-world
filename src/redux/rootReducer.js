import { combineReducers } from 'redux';
import authReducer from '@/redux/reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
});

export default rootReducer;
