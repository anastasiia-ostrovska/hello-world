import { configureStore } from '@reduxjs/toolkit';
import baseAPI from '@/store/base-API';
import rootReducer from '@/store/root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
