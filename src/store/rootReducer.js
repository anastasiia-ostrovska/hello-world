import { combineReducers } from '@reduxjs/toolkit';
import baseApi from '@/services/baseApi';
import themeReducer from '@/modules/Theme/store/themeSlice';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';
import dialogsReducer from './reducers/dialogsReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  users: usersReducer,
  [postsReducer.name]: postsReducer.reducer,
  [dialogsReducer.name]: dialogsReducer.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
