import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/store/root-reducer';
import baseAPI from '@/redux/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
