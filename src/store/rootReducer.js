import { combineReducers } from '@reduxjs/toolkit';
import baseApi from '@/services/baseApi';
import themeSlice from '@/modules/Theme/store/themeSlice';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';
import dialogsReducer from './reducers/dialogsReducer';

const rootReducer = combineReducers({
  theme: themeSlice,
  users: usersReducer,
  [postsReducer.name]: postsReducer.reducer,
  [dialogsReducer.name]: dialogsReducer.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
