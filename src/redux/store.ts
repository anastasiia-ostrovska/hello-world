import { configureStore } from '@reduxjs/toolkit';
import baseAPI from '@/redux/base-API';
import rootReducer from '@/redux/root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
