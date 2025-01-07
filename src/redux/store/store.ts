import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import baseAPI from '../api/base-API';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
