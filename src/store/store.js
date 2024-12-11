import { configureStore } from '@reduxjs/toolkit';
import baseApi from '@/store/baseApi';
import rootReducer from '@/store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
