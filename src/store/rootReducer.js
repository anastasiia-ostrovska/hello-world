import { combineReducers } from '@reduxjs/toolkit';
import baseApi from '@/services/baseApi';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';
import dialogsReducer from './reducers/dialogsReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  dialogs: dialogsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
