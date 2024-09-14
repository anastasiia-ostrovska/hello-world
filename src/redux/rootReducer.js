import { combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogsPage: dialogsReducer,
});

export default rootReducer;
